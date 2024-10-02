# 🚀 Funcionalidades

## 1. Interação via WhatsApp utilizando a biblioteca Venom-bot
O chatbot automatiza a comunicação com os clientes da pizzaria através do WhatsApp, usando a biblioteca **Venom-bot** para gerenciar as sessões de mensagens. A integração permite que o bot receba e envie mensagens em tempo real, interagindo diretamente com os clientes. Isso permite uma experiência de atendimento automatizado, disponível 24/7, sem necessidade de intervenção humana.

O **Venom-bot** garante que o bot seja capaz de:

- Receber pedidos de clientes.
- Responder automaticamente às perguntas.
- Confirmar pedidos e fornecer atualizações.

## 2. Respostas automáticas utilizando a API do OpenAI (ChatGPT)
O coração do chatbot é alimentado pela API do **OpenAI (ChatGPT)**, que processa as mensagens dos clientes e gera respostas automáticas inteligentes. O ChatGPT é capaz de entender o contexto das conversas e responder de maneira humanizada, permitindo um atendimento fluido e natural.

O bot usa a API para:

- Interpretar e entender as intenções do cliente, como pedidos de pizza ou perguntas sobre o cardápio.
- Gerar respostas que ajudam a concluir o pedido, perguntar sobre complementos e confirmar informações.
- Adaptar-se a mudanças de contexto na conversa, garantindo que o fluxo do atendimento continue coerente.

## 3. Simulação de "digitação" para tornar a interação mais natural
Para melhorar a experiência do usuário e simular uma interação mais humana, o chatbot utiliza a funcionalidade de **simulação de digitação**. Isso significa que o bot exibe o status de "digitando" antes de enviar uma resposta, fazendo com que a interação pareça mais semelhante à de uma conversa com um atendente humano.

### Benefícios dessa funcionalidade:
- Cria uma experiência mais natural e confortável para o cliente.
- Evita respostas instantâneas, que poderiam parecer robóticas.
- Proporciona uma pausa controlada, simulando o tempo que um atendente levaria para digitar a resposta.

## 4. Captação de informações sobre os pedidos
O bot coleta todas as informações necessárias para concluir um pedido, garantindo que nenhum dado importante seja esquecido. Durante a interação, o chatbot pergunta e armazena informações como:

- **Pizza escolhida**: O cliente escolhe entre pizzas salgadas e doces, com base no cardápio disponível.
- **Preço da pizza**: O preço é informado ao cliente logo após a escolha do sabor.
- **Endereço de entrega**: O bot coleta o endereço para onde o pedido será enviado.
- **Forma de pagamento**: O cliente pode escolher entre várias formas de pagamento, como dinheiro, cartão ou PIX.

## 5. Geração de uma notinha de pedido para a cozinha
Uma vez que o pedido é finalizado, o chatbot gera automaticamente uma **notinha de resumo** contendo todos os detalhes do pedido (pizza, preço, endereço e forma de pagamento). Essa notinha pode ser exibida em uma interface simples para ser visualizada pela equipe da cozinha, agilizando o processo de preparo e entrega do pedido.

Essa notinha inclui:

- Informações detalhadas do pedido (sabor da pizza, complementos).
- Dados do cliente (endereço de entrega).
- Forma de pagamento escolhida.
- Tempo estimado de entrega.

## 6. Integração com Express.js para fornecer dados dos pedidos em uma interface web
O chatbot utiliza **Express.js** para criar uma API REST simples, que permite que os dados dos pedidos sejam disponibilizados para o frontend (caso seja necessário exibir os pedidos para a equipe da pizzaria). Essa integração facilita a criação de uma interface web onde a equipe pode visualizar os pedidos em tempo real e acompanhar o progresso dos atendimentos.

A API fornecida pelo **Express.js** oferece:

- Endpoints para consultar o pedido mais recente.
- Exibição de uma interface visual que facilita o acompanhamento dos pedidos diretamente no navegador.
- Integração simples com outras ferramentas e sistemas da pizzaria, caso necessário.
