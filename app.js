require('dotenv').config();
const treinamento = require('./Prompt/treinamento.js');
const venom = require('venom-bot');
const axios = require('axios');

const { verificarClientePorMessageFrom, cadastrarCliente } = require('./BackOnPremise/CadastroNumero.js');

const banco = {
    usuarios: {}
};

const buffers = {};

const header = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
};

function start(client) {
    client.onMessage(async (message) => {
        console.log("Mensagem recebida:", message);
        const numeroUsuario = message.from;
        const phoneNumber = numeroUsuario.replace(/@c\.us$/, '');

        if (!banco.usuarios[numeroUsuario]) {
            banco.usuarios[numeroUsuario] = { historico: [] };
        }

        if (!buffers[numeroUsuario]) {
            buffers[numeroUsuario] = { mensagens: [], timeout: null };
        }

        buffers[numeroUsuario].mensagens.push(message.body);

        if (buffers[numeroUsuario].timeout) {
            clearTimeout(buffers[numeroUsuario].timeout);
        }

        buffers[numeroUsuario].timeout = setTimeout(async () => {
            const textoCompleto = buffers[numeroUsuario].mensagens.join(' ').trim().toLowerCase();
            buffers[numeroUsuario].mensagens = [];
            buffers[numeroUsuario].timeout = null;

            const usuarioBanco = banco.usuarios[numeroUsuario];

            if (!usuarioBanco.estado) {
                const clienteExiste = await verificarClientePorMessageFrom(phoneNumber);
                if (!clienteExiste) {
                    banco.usuarios[numeroUsuario] = {
                        estado: 'aguardando_nome',
                        novoCadastro: { message_from: phoneNumber }
                    };

                    await client.sendText(
                        numeroUsuario,
                        `👋 Olá! Antes de fazermos seu pedido, preciso de alguns dados rapidinho.\n\n📛 Qual o seu *nome*?`
                    );
                    return;
                }
            }

            if (usuarioBanco.estado) {
                const resposta = textoCompleto;
                switch (usuarioBanco.estado) {
                    case 'aguardando_nome':
                        usuarioBanco.novoCadastro.nome = resposta;
                        usuarioBanco.estado = 'aguardando_endereco';
                        await client.sendText(numeroUsuario, `🏡 Informe seu *endereço* (sem número). Se quiser pular, digite *pular*.`);
                        return;
                    case 'aguardando_endereco':
                        usuarioBanco.novoCadastro.endereco_casa = resposta === 'pular' ? null : resposta;
                        usuarioBanco.estado = 'aguardando_numero';
                        await client.sendText(numeroUsuario, `🔢 Qual o *número da casa*? Se quiser pular, digite *pular*.`);
                        return;
                    case 'aguardando_numero':
                        usuarioBanco.novoCadastro.numero_casa = resposta === 'pular' ? null : resposta;
                        usuarioBanco.estado = 'aguardando_complemento';
                        await client.sendText(numeroUsuario, `🏷 Tem algum *complemento* (bloco, apto, etc)? Se não, digite *pular*.`);
                        return;
                    case 'aguardando_complemento':
                        usuarioBanco.novoCadastro.complemento = resposta === 'pular' ? null : resposta;
                        usuarioBanco.estado = 'aguardando_telefone';
                        await client.sendText(numeroUsuario, `📱 Quer deixar um *telefone para contato*? Se não quiser, digite *pular*.`);
                        return;
                    case 'aguardando_telefone':
                        usuarioBanco.novoCadastro.numero_telefone = resposta === 'pular' ? null : resposta;
                        usuarioBanco.novoCadastro.message_from = phoneNumber;

                        await cadastrarCliente(usuarioBanco.novoCadastro);
                        await client.sendText(numeroUsuario, `✅ *Cadastro feito com sucesso!*\n\nAgora sim, bora pedir sua pizza 🍕😋`);
                        delete banco.usuarios[numeroUsuario];
                        return;
                }
            }

            banco.usuarios[numeroUsuario].historico.push({ role: 'user', content: textoCompleto });

            if (textoCompleto.includes("cardápio") || textoCompleto.includes("menu")) {
                await client.sendText(numeroUsuario, `📋 Temos essas opções de cardápio:\n\n1⃣ *Pizza Salgada*\n2⃣ *Pizza Doce*\n3⃣ *Bebidas*\n\nDigite o nome da categoria que deseja ver!`);
                return;
            }

            if (textoCompleto.includes("pizza salgada")) {
                await client.sendImage(numeroUsuario, './src/static/img/PizzasSalgadas.png', 'pizza_salgada.png', '🍕 Aqui está o cardápio de *Pizzas Salgadas*! Qual você quer pedir?');
                return;
            }

            if (textoCompleto.includes("pizza doce")) {
                await client.sendImage(numeroUsuario, './src/static/img/PizzasDoces.png', 'pizza_doce.png', '🍫 Aqui está o cardápio de *Pizzas Doces*! Qual você quer experimentar hoje?');
                return;
            }

            if (textoCompleto.includes("bebidas")) {
                await client.sendImage(numeroUsuario, './src/static/img/Bebidas.png', 'bebidas.png', '🥤 Esse é o cardápio de *Bebidas*! Qual vai acompanhar seu pedido?');
                return;
            }

            try {
                const reply = await getChatGPTResponse(textoCompleto, banco.usuarios[numeroUsuario].historico);
                if (reply) {
                    await client.sendText(numeroUsuario, reply);
                    banco.usuarios[numeroUsuario].historico.push({ role: 'assistant', content: reply });
                    console.log("Resposta enviada e adicionada ao histórico:", banco.usuarios[numeroUsuario].historico);
                }
            } catch (err) {
                console.error("Erro ao processar a mensagem:", err);
            }
        }, 4000);
    });
}

const getChatGPTResponse = async (userMessage, historico) => {
    try {
        const formattedMessages = [
            { role: "system", content: treinamento },
            ...historico,
            { role: "user", content: userMessage }
        ];

        const response = await axios.post("https://api.openai.com/v1/chat/completions", {
            model: "gpt-4o-mini",
            messages: formattedMessages,
            max_tokens: 600,
            temperature: 0.2,
        }, { headers: header });

        return response.data.choices[0]?.message.content;
    } catch (error) {
        console.error("Erro ao chamar a API do OpenAI:", error.response ? error.response.data : error.message);
        if (error.response && error.response.data && error.response.data.error) {
            console.error("Detalhes do erro:", JSON.stringify(error.response.data.error, null, 2));
        }
        throw error;
    }
};

venom.create({
    session: "chatGPT-Bot",
    multidevice: true,
    headless: false,
    browserArgs: ['--no-sandbox'],
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
})
.then((client) => start(client))
.catch((err) => console.log("Erro ao iniciar o cliente:", err));


// require('dotenv').config();
// const express = require('express');
// const path = require('path');
// const { getChatGPTResponse } = require('./openai.js');

// const app = express();
// app.use(express.json());
// app.use(express.static(path.join(__dirname, 'public')));

// app.post('/api/message', async (req, res) => {
//    const { message } = req.body;
//    const resposta = await getChatGPTResponse(message);
//    res.json({ resposta });
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`🚀 Servidor rodando em http://localhost:${PORT}`));
