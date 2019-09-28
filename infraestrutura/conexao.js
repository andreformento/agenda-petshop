const mysql = require('mysql')

const conexao = mysql.createConnection({
  host: 'localhost',
  port: 33060,
  user: 'root',
  password: 'password',
  database: 'agenda-petshop',
  multipleStatements: true
})

module.exports = conexao
