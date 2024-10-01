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
