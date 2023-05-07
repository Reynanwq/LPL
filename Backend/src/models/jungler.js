import Sequelize, { Model } from 'sequelize';

export default class Jungler extends Model {
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

/*const TopPlayer = sequelize.define('TopPlayer', {
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

module.exports = TopPlayer;*/

/*const { Sequelize, DataTypes } = require('sequelize');
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

module.exports = Jungler;*/