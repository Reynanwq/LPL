import Sequelize, { Model } from 'sequelize';

export default class Adc extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrememt: true,
            },
            nickName: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            lane: {
                type: Sequelize.STRING(5),
                allowNull: false,
            },
        }, {
            sequelize,
        });
        return this;
    }
}

/*const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../main');

const BotPlayer = sequelize.define('BotPlayer', {
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

module.exports = BotPlayer;*/