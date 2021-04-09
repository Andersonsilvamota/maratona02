const sqlite3 = require('sqlite3')
const { open } = require('sqlite')

//abrindo a conexão do bd
module.exports = () => 
  open({
    filename: './database.sqlite',
    driver: sqlite3.Database,
  });