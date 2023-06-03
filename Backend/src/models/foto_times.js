import Sequelize, { Model } from 'sequelize';

export default class Fotos extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            nome: {
                type: Sequelize.STRING(225),
                allowNull: false,
                field: 'nome',
            },
            imagem: {
                type: Sequelize.BLOB('long'),
                allowNull: false,
                field: 'imagem',
            },
        }, {
            sequelize,
            modelName: 'Fotos',
            tableName: 'imagens',
        });

        return this;
    }
}
