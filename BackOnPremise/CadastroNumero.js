const db = require('./db');

async function verificarClientePorMessageFrom(messageFrom) {
  const [rows] = await db.query(
    'SELECT * FROM clientes WHERE message_from = ?',
    [messageFrom]
  );
  return rows.length > 0;
}

async function cadastrarCliente(dados) {
  const {
    numero_telefone,
    nome,
    message_from,
    endereco_casa = null,
    numero_casa = null,
    complemento = null
  } = dados;

  await db.query(
    `INSERT INTO clientes 
      (numero_telefone, nome, message_from, endereco_casa, numero_casa, complemento, created, updated)
     VALUES (?, ?, ?, ?, ?, ?, NOW(), NOW())`,
    [numero_telefone, nome, message_from, endereco_casa, numero_casa, complemento]
  );
}

module.exports = {
  verificarClientePorMessageFrom,
  cadastrarCliente
};
