import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Foto from '../models/foto_times';

const models = [Foto];
const connection = new Sequelize(databaseConfig);
models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
