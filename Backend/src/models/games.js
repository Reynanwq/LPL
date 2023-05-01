const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../main');

const Games = sequelize.define('Games', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrememt: true,
    },
    win: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    lose: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
});

module.exports = Games;