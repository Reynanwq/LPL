const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const Times = sequelize.define('times', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    teamName: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
});

module.exports = Times;
module.exports = sequelize;

//module.exports = Times;
