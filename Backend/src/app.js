import dotenv from 'dotenv';
dotenv.config();

import './database/index';
import './database/toplaner';
import './database/jg';

import express from 'express';
import homeRoutes from './routes/homeRoutes';
import playerRoutes from './routes/playerRoutes';

class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
    }

    routes() {
        this.app.use('/', homeRoutes);
        this.app.use('/players/', playerRoutes);
    }
}

export default new App().app;