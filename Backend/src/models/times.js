import Sequelize, { Model } from 'sequelize';

export default class Times extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            team_name: {
                type: Sequelize.STRING(100),
                allowNull: false,
                field: 'teamName',
            },
        }, {
            sequelize,
        });
        return this;
    }
}

/*const { DataTypes } = require('sequelize');
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

module.exports = Times;*/