import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Times from '../models/times';

const models = [Times];
const connection = new Sequelize(databaseConfig);
models.forEach((model) => model.init(connection));
