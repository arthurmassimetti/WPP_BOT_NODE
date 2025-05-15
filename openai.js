require('dotenv').config();
const axios = require('axios');
const treinamento = require('./Prompt/treinamento.js');

const header = {
   "Content-Type": "application/json",
   "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
};

/**
 * 
 * @param {string} userMessage
 * @param {Array} historico
 */
const getChatGPTResponse = async (userMessage, historico = []) => {
   try {
      const messages = [];

      if (historico.length === 0) {
         messages.push({
            role: "system",
            content: treinamento
         });
      }

      messages.push(...historico);

      messages.push({ role: "user", content: userMessage });

      const response = await axios.post("https://api.openai.com/v1/chat/completions", {
         model: "gpt-4o-mini",
         messages,
         max_tokens: 600,
         temperature: 0.2,
      }, { headers: header });

      return response.data.choices[0]?.message.content;
   } catch (error) {
      console.error("Erro na API:", error.response?.data || error.message);
      return "Erro ao obter resposta da IA.";
   }
};

module.exports = { getChatGPTResponse };
