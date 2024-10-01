# 📄 Documentação do Projeto: Chatbot de Pizzaria

## 📚 Sumário
1. [Descrição do Projeto](#descrição-do-projeto)
2. [Funcionalidades](https://github.com/arthurmassimetti/WPP_BOT_NODE/blob/main/Docs/Funcionalidades.md)
3. [Tecnologias Utilizadas](https://github.com/arthurmassimetti/WPP_BOT_NODE/blob/main/Docs/ConfigEInstall.md)
4. [Pré-requisitos](#pré-requisitos)
5. [Configuração e Instalação](#configuração-e-instalação)
6. [Estrutura do Projeto](#estrutura-do-projeto)
7. [Configuração do ChatGPT e Venom](#configuração-do-chatgpt-e-venom)
8. [Como Usar](#como-usar)
9. [Exemplos de Uso](#exemplos-de-uso)
10. [Testes](#testes)
11. [Contribuição](#contribuição)
12. [Licença](#licença)

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
