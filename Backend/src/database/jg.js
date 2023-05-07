import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Jungler from '../models/jungler';

const models = [Jungler];
const connection = new Sequelize(databaseConfig);
models.forEach((model) => model.init(connection));