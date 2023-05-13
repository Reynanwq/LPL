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
            tableName: 'midPlayer',
        });
        return this;
    }
}
