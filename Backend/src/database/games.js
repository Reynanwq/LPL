import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Games from '../models/games';

const models = [Games];
const connection = new Sequelize(databaseConfig);
models.forEach((model) => model.init(connection));
