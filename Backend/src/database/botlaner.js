import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Adc from '../models/bot';

const models = [Adc];
const connection = new Sequelize(databaseConfig);
models.forEach((model) => model.init(connection));