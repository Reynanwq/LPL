import Sequelize, { Model } from 'sequelize';

export default class Games extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            win: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            lose: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
        }, {
            sequelize,
            tableName: 'games',
        });
        return this;
    }
}
