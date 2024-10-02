// Importando o axios
const axios = require('axios');

// Definindo a chave da API da OpenAI (substitua pela sua)
const apiKey = 'SUA_CHAVE_API';

// Função para fazer uma chamada à API do ChatGPT
async function callChatGPT(prompt) {
    try {
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: "gpt-4o-mini", // Ou use "gpt-3.5-turbo" dependendo do modelo desejado
                messages: [{ role: "user", content: prompt }],
            },
            {
                headers: {
                    'Authorization': `Bearer ${apiKey}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        // Exibindo a resposta no terminal
        console.log('Resposta do ChatGPT:', response.data.choices[0].message.content);
    } catch (error) {
        console.error('Erro ao chamar a API do ChatGPT:', error.response ? error.response.data : error.message);
    }
}

// Função principal
function main() {
    const prompt = "qual origem da batata?";
    callChatGPT(prompt);
}

// Chamando a função principal
main();
