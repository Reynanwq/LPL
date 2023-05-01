/* CONEXAO COM O BANCO DE DADOS  */
const { Sequelize } = require('sequelize');
const mysql = require("mysql2/promise");
const fs = require('fs').promises; //permite ler e escrever arquivoss

async function connectToDatabase() {
    try {
        //const connection = await mysql.createConnection("mysql://root:");
        const dbConfig = JSON.parse(await fs.readFile('db_config.json', 'utf8'));

        const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
            host: dbConfig.host,
            dialect: 'mysql'
        });
        return sequelize;
    } catch (error) {
        console.log(`Erro ao ler o arquivo db_config.json: ${error}`);
    }

}

module.exports = connectToDatabase;
module.exports = Sequelize;