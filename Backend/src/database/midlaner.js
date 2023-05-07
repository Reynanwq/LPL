import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Mid from '../models/mid';

const models = [Mid];
const connection = new Sequelize(databaseConfig);
models.forEach((model) => model.init(connection));