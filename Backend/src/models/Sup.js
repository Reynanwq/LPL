const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../main');

const SupPlayer = sequelize.define('SupPlayer', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrememt: true,
    },
    nickName: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    lane: {
        type: DataTypes.STRING(5),
        allowNull: false,
    }
});

module.exports = SupPlayer;