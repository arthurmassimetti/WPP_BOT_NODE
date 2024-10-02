## ⚙️ **Configuração e Instalação do Projeto**

Este guia fornece todas as instruções necessárias para configurar e executar o projeto **WPP_CHATGPT**, que utiliza **Node.js**, **Venom-bot** e a **API do OpenAI (ChatGPT)** para criar um chatbot de pizzaria via **WhatsApp**.

### 📋 **Pré-requisitos**

Antes de começar, certifique-se de ter os seguintes itens instalados na sua máquina:

1. **Node.js** (versão 14 ou superior)
   - [Instruções de instalação do Node.js](https://nodejs.org/)
   
2. **npm** (Node Package Manager) – Geralmente, o npm é instalado junto com o Node.js.
   - Verifique se o npm está instalado corretamente com o comando:
     ```bash
     npm -v
     ```

3. **Git** (opcional, mas recomendado para versionamento de código)
   - [Instruções de instalação do Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

4. **Chave da API do OpenAI**
   - Crie uma conta no [OpenAI](https://beta.openai.com/signup/) e gere uma chave de API para usar o **ChatGPT**.
   
---

### 🚀 **Instalação do Projeto**

Siga os passos abaixo para clonar e configurar o projeto:

### 1. Clonar o repositório do projeto

Primeiro, clone o repositório para sua máquina local:

```bash
git clone https://github.com/seu-usuario/wpp_chatgpt.git
cd wpp_chatgpt
```

## 2. Instalar as dependências
Depois de clonar o repositório, você precisará instalar as dependências do projeto. Use o comando abaixo para instalar todas as bibliotecas e pacotes necessários:

```bash
npm install
```

Isso instalará as seguintes bibliotecas e ferramentas:

### 📦 Dependências do projeto:

- **venom-bot**: Biblioteca para automação do WhatsApp, que permite a interação do chatbot com os clientes via WhatsApp.

  [Documentação oficial do Venom-bot](https://github.com/orkestral/venom)

Instale com o comando:

```bash
npm install venom-bot
```

### **axios**: Cliente HTTP para fazer requisições à API do OpenAI. Ele é utilizado para enviar as mensagens do cliente ao ChatGPT e receber respostas.

[Documentação oficial do Axios](https://axios-http.com/)

Instale com o comando:

```bash
npm install axios
```

### **dotenv**: Biblioteca para carregar variáveis de ambiente de um arquivo `.env`, garantindo que informações sensíveis, como a chave da API, não fiquem expostas no código.

[Documentação oficial do Dotenv](https://github.com/motdotla/dotenv)

Instale com o comando:

```bash
npm install dotenv
```

## 3. Configurar variáveis de ambiente
Após a instalação das dependências, crie um arquivo `.env` na raiz do projeto. Esse arquivo armazenará suas variáveis de ambiente, como a chave da API do OpenAI e o nome da sessão do Venom-bot.

Crie o arquivo `.env`:

```bash
touch .env
```

Adicione as seguintes variáveis ao arquivo `.env`:

```bash
# Chave da API do OpenAI
OPENAI_API_KEY=your-openai-api-key

# Nome da sessão do Venom-bot
SESSION_NAME=session-pizzaria
```

**Nota:** Substitua `your-openai-api-key` pela sua chave real da API OpenAI.

## 4. Configurar e iniciar o Venom-bot
Ao rodar o projeto pela primeira vez, o Venom-bot irá gerar um QR code no terminal que você deve escanear usando o WhatsApp do seu celular para conectar o bot à sua conta.

Inicie o projeto com o seguinte comando:

```bash
node app.js
```

Assim que o QR code aparecer no terminal, faça o seguinte:

1. Abra o WhatsApp no seu celular.
2. Vá até **WhatsApp Web** e escaneie o QR code.
3. O bot será conectado e estará pronto para interagir com seus clientes.

## 5. Acessar a interface de pedidos (se houver)
Se o projeto inclui uma interface web para exibir os pedidos (a "notinha"), você poderá acessá-la em:

```bash
http://localhost:3000
```

## 📖 Scripts do Projeto
Aqui estão alguns comandos úteis que você pode usar para interagir com o projeto:

### Iniciar o chatbot:

```bash
npm start
```

Esse comando roda o arquivo `app.js` e inicia a aplicação do chatbot.

### Rodar testes (se aplicável):

```bash
npm test
```

