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
            nick_name: {
                type: Sequelize.STRING(50),
                allowNull: false,
                field: 'nickName',
            },
            lane: {
                type: Sequelize.STRING(5),
                allowNull: false,
            },
        }, {
            sequelize,
            tableName: 'botPlayer',
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