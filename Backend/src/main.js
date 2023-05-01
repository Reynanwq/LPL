/*------ REQUIZICOES -------*/

const dotenv = require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const moment = require('moment');
const { Sequelize } = require('sequelize');
const routes = require('./router');
const db = require('./db');
const fs = require('fs');



const app = express();

/*------ CONFIGURANDO SEQUELIZE ----------*/
async function main() {
    const path = require('path');
    const dbConfigPath = path.join(__dirname, 'db_config.json');
    const dbConfigBuffer = fs.readFileSync(dbConfigPath);
    const dbConfigString = await dbConfigBuffer.toString();
    const dbConfig = JSON.parse(dbConfigString);
    const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
        host: dbConfig.host,
        dialect: 'mysql',
        logging: false,
    });

}

main();



/*------ CONFIGURANDO MIDDLEWARE ----------*/
app.use(cors());
app.use(bodyParser.json());
app.use(helmet());
app.use(morgan('[:date[clf]] :method :url :status :response-time ms'));

/*----- ROTAS DA APLICACAO --------*/

app.use('/', routes);

/*----------- INICIALIZANDO SERVIDOR ---------*/
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`O Servidor esta rodando na porta: ${port}`);
});

module.exports = { Sequelize };