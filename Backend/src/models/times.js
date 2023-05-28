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
    static associate(models) {
        this.hasMany(models.Foto, { foreignKey: 'times_id' });
    }
}
