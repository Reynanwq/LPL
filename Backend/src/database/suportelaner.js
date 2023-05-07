import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Sup from '../models/sup';

const models = [Sup];
const connection = new Sequelize(databaseConfig);
models.forEach((model) => model.init(connection));