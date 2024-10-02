## 📁 **Estrutura do Projeto**

Abaixo está a estrutura atual do seu projeto **WPP_CHATGPT**, com uma breve descrição de cada arquivo e pasta:

```bash
WPP_CHATGPT/
├── node_modules/          # Diretório onde estão instaladas as dependências do projeto (não incluído no controle de versão)
├── src/                   # Diretório que contém o código-fonte principal
│   ├── banco.js           # Arquivo para simulação de um "banco de dados" em memória (para armazenar histórico de mensagens e usuários)
│   ├── tokens/            # Diretório onde são armazenados os tokens de autenticação do WhatsApp gerados pelo Venom-bot
├── .env                   # Arquivo de variáveis de ambiente (contém a chave API do OpenAI e outras configurações)
├── .gitignore             # Arquivo para ignorar arquivos sensíveis no Git
├── app.js                 # Arquivo principal que inicia a aplicação e configura o chatbot com o Venom-bot e OpenAI
├── package-lock.json      # Versão travada das dependências instaladas
├── package.json           # Arquivo de configuração do projeto Node.js, define as dependências e scripts
├── README.md              # Arquivo de documentação do projeto
└── teste.js               # Arquivo para testes (provavelmente usado para testar funções ou módulos específicos)
```

## Descrição dos Arquivos e Diretórios:

### `node_modules/`
Este diretório contém todas as dependências e pacotes instalados através do npm. É gerado automaticamente quando você instala as dependências do projeto com o comando `npm install`. Como o diretório pode ser recriado, ele geralmente é ignorado no controle de versão (está listado no `.gitignore`).

### `src/`
Este diretório contém o código-fonte principal do projeto.

- **banco.js**: Este arquivo simula um "banco de dados" em memória para armazenar informações temporárias, como o histórico de mensagens dos usuários ou dados sobre os pedidos. Ele é utilizado pelo chatbot para manter o contexto das conversas.
- **tokens/**: Diretório onde são armazenados os tokens de autenticação gerados pelo Venom-bot. Esses tokens permitem manter sessões ativas de WhatsApp entre o bot e os usuários, sem necessidade de reautenticar o bot a cada reinicialização.

### `.env`
Este arquivo contém variáveis de ambiente sensíveis, como a chave de API do OpenAI e a configuração da sessão do Venom-bot. Ele é utilizado para manter essas informações fora do código-fonte principal, garantindo segurança e flexibilidade no ambiente de desenvolvimento.

Exemplo de conteúdo do `.env`:

```bash
OPENAI_API_KEY=your-openai-api-key
SESSION_NAME=session-pizzaria
```

## `.gitignore`
Este arquivo instrui o Git a ignorar certos arquivos e diretórios que não devem ser incluídos no controle de versão. No seu projeto, ele provavelmente inclui:

### Exemplo de `.gitignore`:

```bash
# Ignorar dependências
node_modules/

# Ignorar variáveis de ambiente e tokens
.env
src/tokens/
```


## `app.js`
Este é o arquivo principal do projeto. Ele provavelmente contém a lógica de inicialização do chatbot, configurando a sessão do **Venom-bot**, integrando a API do **OpenAI** e definindo os fluxos de conversação com os clientes.

Neste arquivo, você define como o bot responde às mensagens, como ele interage com os pedidos e integra as respostas geradas pelo **ChatGPT**.

## `package-lock.json`
Este arquivo é gerado automaticamente ao instalar as dependências do projeto com o npm. Ele garante que todas as dependências sejam instaladas exatamente nas mesmas versões em todas as máquinas. É importante mantê-lo no repositório para garantir consistência no ambiente de desenvolvimento.

## `package.json`
Este é o arquivo de configuração do projeto Node.js. Ele define as dependências do projeto, scripts de execução e outras informações sobre o projeto, como nome, versão e autor.

### Exemplo de algumas seções importantes do `package.json`:

```json
{
  "name": "wpp_chatgpt",
  "version": "1.0.0",
  "description": "Chatbot para pizzaria utilizando Venom-bot e OpenAI.",
  "main": "app.js",
  "scripts": {
    "start": "node app.js",
    "test": "node teste.js"
  },
  "dependencies": {
    "venom-bot": "^3.1.0",
    "axios": "^0.21.1",
    "dotenv": "^8.2.0"
  }
}

```

## `scripts`
Define os comandos que podem ser executados via terminal. Por exemplo:

- `npm start`: Inicia o chatbot.
- `npm test`: Executa o arquivo de testes, se configurado.

Esses scripts facilitam a execução de tarefas comuns durante o desenvolvimento e produção.

## `dependencies`
Lista as bibliotecas que o projeto utiliza. Por exemplo:

- **venom-bot**: Utilizado para automação do WhatsApp.
- **axios**: Utilizado para fazer chamadas à API do OpenAI.

As dependências são gerenciadas pelo npm e garantem que o projeto tenha todas as bibliotecas necessárias instaladas.

## `README.md`
Este é o arquivo de documentação do projeto, onde você descreve:

- Como o projeto funciona.
- Dependências necessárias.
- Instruções de instalação.
- Como utilizá-lo.

O **README.md** é importante para ajudar outros desenvolvedores (ou você mesmo no futuro) a entender o propósito e as funcionalidades do projeto.

## `teste.js`
Este arquivo serve para testar funcionalidades específicas do projeto, como chamadas à API ou comportamentos do chatbot. Ele pode ser utilizado para isolar partes do código e garantir que estão funcionando conforme o esperado antes de integrá-las ao projeto principal.
