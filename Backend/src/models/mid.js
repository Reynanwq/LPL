import Sequelize, { Model } from 'sequelize';

export default class Mid extends Model {
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