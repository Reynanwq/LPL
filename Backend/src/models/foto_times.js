import Sequelize, { Model } from 'sequelize';
import appConfig from '../config/database';
import Times from './times';


export default class Foto extends Model {
    static init(sequelize) {
        super.init({
            originalname: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    notEmpty: {
                        msg: 'Campo não pode ficar vazio.',
                    },
                },
            },
            filename: {
                type: Sequelize.STRING,
                defaultValue: '',
                validate: {
                    notEmpty: {
                        msg: 'Campo não pode ficar vazio.',
                    },
                },
            },
            url: {
                type: Sequelize.VIRTUAL,
                get() {
                    return `${appConfig.url}/images/${this.getDataValue('filename')}`;
                },
            },
        }, {
            sequelize,
            tableName: 'fotos_times',
        });
        return this;
    }

    static associate(models) {
        this.belongsTo(models.Times, { foreignKey: 'times_id' });
    }
}
