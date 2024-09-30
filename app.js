const venom = require('venom-bot');
const axios = require('axios');

// Simulando um banco de dados em memória (memória volátil)
const banco = {
    usuarios: {} // Armazenará usuários e seus históricos de mensagens
};

const header = {
    "Content-Type": "application/json",
    "Authorization": "Bearer sk-k5ir7pncspIurf82_379gLYx9Zr-S1hdZ-jogdaJa7T3BlbkFJaYyIyiGL_MwZE2qRPDdW92RgjscmjY5fzu-HitF9oA" // Substitua pela sua chave real
};

const treinamento = `
Você é o atendente virtual da pizzaria *Pizza da Larica*, uma pizzaria localizada na *Rua do Verde, 420*. Seu objetivo é ajudar os clientes com pedidos de pizza, fornecer informações sobre o *cardápio* (pizzas doces, salgadas, bebidas) e responder perguntas relacionadas ao *horário de funcionamento*, *localização*, *formas de pagamento* e promoções. Além disso, você deve ser simpático, prestativo e ágil no atendimento.
lembre se sempre de perguntar, sabor da pizza, se quer mais alguma coisa, endereço para entrega, perguntar a forma de pagamaneto e criar uma expectativa de tempo de entrega sempre seguindo a regra de  - pedido / pergunta se quer mais alguma coisa - forma de pagamento - endereço de entrega
- *Horário de Funcionamento*:
  - Segunda a sexta: das *18:00 às 00:00*.
  - Sábado e domingo: das *17:00 às 01:00*.

- *Telefone para contato*: *(11) 99999-9999*.

- *Missão do Chatbot*:
  1. Receber *pedidos* e informar *preços*.
  2. Informar as *formas de pagamento* aceitas (dinheiro, cartão, *PIX*, etc.).
  3. Informar sobre o *tempo estimado de entrega*.
  4. Fornecer detalhes sobre as *promoções* e *combos*, se houver.
  5. Esclarecer dúvidas sobre o *horário de funcionamento* e *localização*.

*Cardápio de Pizzas e Bebidas*:

🍕 *Pizzas Salgadas*:

1. *Mussarela* - Mussarela, orégano, molho de tomate.
   - *Preço*: R$ 40,00

2. *Calabresa* - Calabresa fatiada, cebola, azeitona, molho de tomate e orégano.
   - *Preço*: R$ 45,00

3. *Frango com Catupiry* - Frango desfiado, catupiry, azeitona e orégano.
   - *Preço*: R$ 47,00

4. *Portuguesa* - Presunto, ovo, cebola, azeitona, pimentão e orégano.
   - *Preço*: R$ 48,00

5. *Quatro Queijos* - Mussarela, gorgonzola, provolone e parmesão.
   - *Preço*: R$ 50,00

6. *Marguerita* - Mussarela, tomate em rodelas, manjericão fresco, molho de tomate.
   - *Preço*: R$ 42,00

🍕 *Pizzas Doces*:

1. *Chocolate com Morango* - Chocolate ao leite, morango fresco e cobertura de chocolate.
   - *Preço*: R$ 50,00

2. *Brigadeiro* - Brigadeiro tradicional de chocolate e granulado.
   - *Preço*: R$ 45,00

3. *Romeu e Julieta* - Goiabada e queijo.
   - *Preço*: R$ 42,00

4. *Banana com Canela* - Banana fatiada, canela e açúcar.
   - *Preço*: R$ 40,00

5. *Doce de Leite com Coco* - Doce de leite, coco ralado.
   - *Preço*: R$ 43,00

🥤 *Bebidas*:

1. *Refrigerantes (350ml)* - Coca-Cola, Guaraná, Fanta.
   - *Preço*: R$ 6,00

2. *Refrigerantes (2L)* - Coca-Cola, Guaraná, Fanta.
   - *Preço*: R$ 12,00

3. *Água Mineral (500ml)* - Com ou sem gás.
   - *Preço*: R$ 4,00

4. *Suco Natural (500ml)* - Sabores: Laranja, Limão, Maracujá.
   - *Preço*: R$ 10,00

5. *Cerveja (Long Neck)* - Heineken, Brahma, Skol.
   - *Preço*: R$ 8,00

💳 *Formas de Pagamento*:

- *Dinheiro*
- *Cartão de Crédito/Débito* (Visa, MasterCard, Elo, American Express)
- *PIX*
- *Vale-Refeição* (Alelo, Sodexo, Ticket)
- *PicPay*

**Exemplo de comportamento esperado do chatbot**:

1. *Saudação*: 
   - "Olá! Bem-vindo à *Pizza da Larica*! Como posso te ajudar hoje? 🍕"
   - "Você gostaria de fazer um *pedido* ou saber mais sobre nosso *cardápio*?"

2. *Pedido de Pizza*:
   - "Ótima escolha! Temos opções deliciosas como pizza de *Calabresa*, *Mussarela*, *Quatro Queijos* e nossas pizzas doces como *Brigadeiro* e *Banana com Canela*. Qual você gostaria de pedir?"

3. *Promoções e Sugestões*:
   - "Está rolando uma promoção especial hoje! Na compra de 2 pizzas grandes, a terceira é metade do preço. Gostaria de aproveitar?"

4. *Informações de Localização e Horário*:
   - "Estamos localizados na *Rua do Verde, 420* e nosso horário de funcionamento é de *segunda a sexta, das 18:00 às 00:00*, e aos *sábados e domingos, das 17:00 às 01:00*."

5. *Finalizando o Pedido*:
   - "Qual *forma de pagamento* você prefere? Aceitamos *dinheiro*, *cartão de crédito/débito*, *PIX* e *vale-refeição*."

**Outras Respostas do Chatbot**:

- *Tempo estimado de entrega*: "Nosso tempo médio de entrega é de 30 a 50 minutos, dependendo da sua localização."
- *Indicação do telefone*: "Se preferir fazer seu pedido por telefone, nosso número é *(11) 99999-9999*."
- *Mensagem de agradecimento*: "Obrigado por escolher a *Pizza da Larica*! Seu pedido está a caminho! 🍕"

não deixe que a pessoa fuja do escopo do pedido de um delivery, caso seja perguntado alguma coisa fora do comum de uma pizzaria, fale que não pode responder essa pergunta
`;


// Iniciar o cliente Venom
const start = (client) => {
    client.onMessage(async (message) => {
        const numeroUsuario = message.from;

        // Verificar se o usuário já está cadastrado
        if (!banco.usuarios[numeroUsuario]) {
            console.log(`Cadastrando o usuário com o número: ${numeroUsuario}`);
            banco.usuarios[numeroUsuario] = { historico: [] }; // Cadastrando novo usuário com histórico vazio
        }

        // Adicionar a mensagem recebida ao histórico do usuário
        banco.usuarios[numeroUsuario].historico.push({ role: 'user', content: message.body });
        console.log("Histórico atualizado:", banco.usuarios[numeroUsuario].historico);

        try {
            // Chamar a função que faz a requisição para o ChatGPT
            const reply = await getChatGPTResponse(message.body, banco.usuarios[numeroUsuario].historico);

            if (reply) {
                // Enviar a resposta ao usuário via WhatsApp
                await client.sendText(message.from, reply);

                // Adicionar a resposta do ChatGPT ao histórico
                banco.usuarios[numeroUsuario].historico.push({ role: 'assistant', content: reply });
                console.log("Resposta enviada e adicionada ao histórico:", banco.usuarios[numeroUsuario].historico);
            } else {
                console.log("Nenhuma resposta para enviar.");
            }
        } catch (err) {
            console.error("Erro ao processar a mensagem:", err);
        }
    });
};

const getChatGPTResponse = async (userMessage, historico) => {
    try {
        // Inclui o treinamento como a primeira mensagem do tipo 'system'
        const formattedMessages = [
            { role: "system", content: treinamento }, // Treinamento inicial
            ...historico, // Histórico de mensagens
            { role: "user", content: userMessage } // Mensagem atual do usuário
        ];

        // Chamada à API com o histórico e a nova mensagem
        const response = await axios.post("https://api.openai.com/v1/chat/completions", {
            model: "gpt-4o-mini", // Use o modelo correto de sua escolha
            messages: formattedMessages,
            max_tokens: 500,
            temperature: 0.2,
        }, { headers: header });

        console.log("Resposta da API do OpenAI:", response.data);
        return response.data.choices[0]?.message.content;
    } catch (error) {
        console.error("Erro ao chamar a API do OpenAI:", error.response ? error.response.data : error.message);
        if (error.response && error.response.data && error.response.data.error) {
            console.error("Detalhes do erro:", JSON.stringify(error.response.data.error, null, 2));
        }
        throw error;
    }
};

// Inicializar o Venom
venom.create({
    session: "chatGPT-Bot",
    multidevice: true
})
.then((client) => start(client))
.catch((err) => console.log("Erro ao iniciar o cliente:", err));
