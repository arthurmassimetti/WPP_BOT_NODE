# 📄 Documentação do Projeto: Chatbot de Pizzaria

## 📚 Sumário
1. [Descrição do Projeto](https://github.com/arthurmassimetti/WPP_BOT_NODE/blob/main/Docs/Descricao.md)
2. [Funcionalidades](https://github.com/arthurmassimetti/WPP_BOT_NODE/blob/main/Docs/Funcionalidades.md)
3. [Tecnologias Utilizadas](https://github.com/arthurmassimetti/WPP_BOT_NODE/blob/main/Docs/Tecnologias.md)
5. [Configuração e Instalação](https://github.com/arthurmassimetti/WPP_BOT_NODE/blob/main/Docs/ConfigEInstall.md)
6. [Estrutura do Projeto](https://github.com/arthurmassimetti/WPP_BOT_NODE/blob/main/Docs/EstruturaProjeto.md)
7. [Configuração do ChatGPT e Venom](https://github.com/arthurmassimetti/WPP_BOT_NODE/blob/main/Docs/ConfigDoChatEVenom.md)


---

## 📝 Descrição do Projeto
Este projeto implementa um **chatbot para uma pizzaria** chamado **Pizza da Larica**. Ele utiliza a integração com o **OpenAI (ChatGPT)** para responder perguntas dos clientes, processar pedidos e fornecer informações sobre o cardápio e formas de pagamento. O bot simula um atendente de pizzaria e também pode gerar uma "notinha" de pedido que será enviada para a cozinha.


---



## ⚙️ Configuração e Instalação

### 1. Clonar o repositório

```bash
git clone https://github.com/arthurmassimetti/WPP_BOT_NODE
cd seu_caminho/WPP_BOT_NODE
```

### 2. Instalar as dependências

Execute o comando abaixo para instalar todas as dependências necessárias:
```bash
npm install
```

### 3. Configurar variáveis de ambiente

Crie um arquivo .env na raiz do projeto e configure as seguintes variáveis:

```bash
OPENAI_API_KEY=your-openai-api-key
SESSION_NAME=session-pizzaria
```

### 4. Configuração do .gitignore

Certifique-se de que arquivos sensíveis como node_modules, .env e outros estejam no .gitignore:

```bash
# Ignorar dependências
node_modules/

# Arquivo de configuração de ambiente
.env
```
