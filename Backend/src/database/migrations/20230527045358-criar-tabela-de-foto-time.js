module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('fotos_times', {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: false,
            primaryKey: true,
        },
        originalname: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        filename: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        time_id: {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: {
                model: 'times',
                key: 'id',
            },
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE',
        },
        created_at: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        updated_at: {
            type: Sequelize.DATE,
            allowNull: false,
        },
    }),

    down: (queryInterface) => queryInterface.dropTable('fotos_times'),
};
