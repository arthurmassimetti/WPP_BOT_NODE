# 📋 Descrição do Projeto

O **Chatbot de Pizzaria Pizza da Larica** é um sistema automatizado de atendimento via WhatsApp, desenvolvido para facilitar o processo de recebimento de pedidos de pizza. Este chatbot utiliza a API do OpenAI (ChatGPT) para interpretar as mensagens dos clientes e gerar respostas automáticas, tornando o atendimento mais rápido, preciso e eficiente.

O chatbot interage com o cliente para:

- Coletar informações sobre o pedido (pizzas, bebidas, etc.).
- Registrar o endereço de entrega.
- Perguntar sobre a forma de pagamento.
- Fornecer o tempo estimado de entrega.

A interface principal de interação é via WhatsApp, possibilitada pela biblioteca **Venom-bot**, que automatiza a comunicação entre o cliente e a pizzaria.

## 🚀 Tecnologias Utilizadas

### Node.js
Plataforma utilizada para o desenvolvimento do servidor que gerencia as interações do chatbot. O **Node.js** permite executar JavaScript no lado do servidor, processar as mensagens do WhatsApp e realizar chamadas para a API do OpenAI.

### Venom-bot
Biblioteca para automação de mensagens via WhatsApp. Com o **Venom-bot**, o chatbot pode se conectar a sessões de WhatsApp, enviar e receber mensagens de forma automatizada, simular digitação e gerenciar sessões de conversação com clientes. É a principal ferramenta para possibilitar a comunicação entre o chatbot e os usuários no WhatsApp.

### OpenAI API (ChatGPT)
API do OpenAI, utilizada para gerar as respostas automáticas. A API interpreta as mensagens recebidas dos clientes e responde de forma humanizada e inteligente, simulando um atendente real. O ChatGPT entende o contexto das conversas e gera respostas baseadas nos dados fornecidos pelo cliente (como escolha de pizzas, formas de pagamento e endereço de entrega).

### Dotenv
Biblioteca usada para carregar variáveis de ambiente de um arquivo `.env` para proteger dados sensíveis, como a chave da API do OpenAI. O **dotenv** permite que essas informações sejam usadas de forma segura no código, sem expô-las diretamente.

## 🎯 Objetivo do Projeto

O objetivo principal deste projeto é automatizar o processo de atendimento de pedidos via WhatsApp para uma pizzaria, facilitando o recebimento de pedidos e eliminando a necessidade de intervenção humana direta. Isso torna o processo de atendimento mais eficiente, rápido e minimiza erros de comunicação, garantindo uma experiência mais agradável para os clientes.
