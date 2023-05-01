/*----- ROTAS DO MEU SERVIDOR ----------*/
const express = require('express');
const { sequelize, DataTypes } = require('sequelize');
const router = express.Router();
const { Times } = require('../models/times')(sequelize);

/*------- ROTAS PARA A TABELA "TIMES" --------*/
router.get('/times', async(req, res) => {
    const timesList = await Times.findAll();
    res.json(timesList);
});


/*------- ROTAS PARA A TABELA "TOP LANER" --------*/



/*------- ROTAS PARA A TABELA "JUNGLER" --------*/



/*------- ROTAS PARA A TABELA "MID LANER" -------*/



/*------- ROTAS PARA A TABELA "ADC" --------*/



/*------- ROTAS PARA A TABELA "SUPORTE" --------*/



/*------- ROTAS PARA A TABELA "COACH" --------*/



/*------- ROTAS PARA A TABELA "GAMES" --------*/

module.exports = router;
module.exports = sequelize;