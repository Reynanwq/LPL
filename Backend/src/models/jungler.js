const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../main');

const Jungler = sequelize.define('Jungler', {
    id: {
        Type: DataTypes.INTEGER,
        AutoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nickName: {
        Type: DataTypes.STRING(50),
        allowNull: false,
    },
    lane: {
        Type: DataTypes.STRING(5),
        allowNull: false,
    }
});

module.exports = Jungler;