import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Top from '../models/top';

const models = [Top];
const connection = new Sequelize(databaseConfig);
models.forEach((model) => model.init(connection));