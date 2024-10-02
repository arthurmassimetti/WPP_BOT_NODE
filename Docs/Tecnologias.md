# 🛠 Tecnologias Focadas

## JavaScript
O **JavaScript** é uma das linguagens de programação mais populares do mundo, originalmente criada para ser executada no lado do cliente (navegadores) para criar páginas interativas e dinâmicas. Com o avanço da tecnologia, o JavaScript passou a ser executado também no lado do servidor através de plataformas como o **Node.js**.

No contexto deste projeto, o JavaScript é a linguagem utilizada para desenvolver o chatbot e todo o sistema de automação. Ele permite a manipulação de mensagens, a interação com APIs (como a do OpenAI), e o controle de fluxo do chatbot para gerenciar as interações com os clientes.

### Características chave do JavaScript:
- **Linguagem assíncrona e orientada a eventos**: O JavaScript tem suporte nativo para chamadas assíncronas, o que é essencial para lidar com APIs externas e para processar mensagens de forma eficiente, sem bloquear o servidor.
- **Amplamente utilizado para automação**: No contexto de bots e automação de mensagens, o JavaScript fornece diversas ferramentas e bibliotecas que facilitam a criação de sistemas inteligentes e interativos.

## Node.js
O **Node.js** é um ambiente de execução de JavaScript do lado do servidor, construído sobre o mecanismo V8 do Google Chrome. Ele permite que desenvolvedores utilizem JavaScript para construir aplicativos escaláveis e de alto desempenho no lado do servidor.

### Por que o Node.js foi escolhido neste projeto?
- **Desempenho eficiente**: O Node.js é conhecido por sua eficiência em lidar com operações de entrada e saída (I/O) devido à sua arquitetura single-threaded, orientada a eventos. Isso significa que o Node.js pode processar várias requisições simultaneamente sem bloquear o fluxo, ideal para um chatbot que precisa lidar com múltiplas interações em tempo real.
- **Módulos poderosos**: A vasta quantidade de pacotes e módulos disponíveis no npm (Node Package Manager) facilita o desenvolvimento de funcionalidades avançadas. No caso deste projeto, o Node.js facilita a integração com bibliotecas como **Venom-bot** e **OpenAI API**, além de simplificar o gerenciamento de fluxos de conversação.
- **Linguagem única no servidor e no cliente**: Como o projeto usa JavaScript tanto no backend (Node.js) quanto em possíveis interações com o frontend, isso simplifica a manutenção e consistência do código.

### Principais características do Node.js:
- **Escalabilidade**: O Node.js é excelente para construir sistemas que precisam lidar com um grande número de requisições simultâneas, como o chatbot que processa múltiplas interações de clientes.
- **Suporte a JSON e APIs**: O Node.js lida facilmente com o formato JSON, que é o padrão utilizado para se comunicar com a API do OpenAI e outras APIs, tornando a integração e manipulação de dados fluida e natural.

## Venom-bot
O **Venom-bot** é uma biblioteca baseada em JavaScript que permite a automação de interações via WhatsApp. Ele é uma ferramenta poderosa para construir bots que se conectam ao WhatsApp e respondem automaticamente às mensagens enviadas pelos usuários.

### No caso deste projeto, o Venom-bot é utilizado para:
- **Conectar ao WhatsApp e estabelecer uma sessão automatizada**: Isso permite que o chatbot receba mensagens dos clientes, processe essas mensagens e envie respostas de forma automática.
- **Gerenciar múltiplas sessões de conversa**: O Venom-bot permite que várias interações ocorram simultaneamente, o que é crucial para pizzarias que recebem pedidos de diferentes clientes ao mesmo tempo.
- **Simular digitação**: Para tornar a interação mais natural, o Venom-bot possui a capacidade de simular "digitação" antes de enviar a resposta, o que melhora a experiência do cliente ao interagir com o chatbot.
- **Recursos avançados de envio de mensagens**: O Venom-bot pode enviar diferentes tipos de mensagens, como texto, imagens, áudios e documentos, o que possibilita personalizar a comunicação de acordo com as necessidades da pizzaria.

### Principais características do Venom-bot:
- **Fácil integração com Node.js**: Como é escrito em JavaScript, o Venom-bot se integra perfeitamente com aplicações em Node.js, o que facilita o desenvolvimento de soluções como chatbots e sistemas de automação para WhatsApp.
- **Simulação de interações humanas**: O Venom-bot pode simular ações humanas, como o status de "digitando", para proporcionar uma experiência mais natural aos usuários.
- **Manutenção de sessões de WhatsApp**: Ele gerencia sessões de forma estável, garantindo que o bot esteja sempre pronto para receber e responder às mensagens.
- **Multi-dispositivo**: O Venom-bot suporta o modo multidevice do WhatsApp, o que permite conectar o bot a várias instâncias ao mesmo tempo, aumentando a flexibilidade no atendimento.
