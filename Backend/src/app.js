import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors';

import './database/index';
import './database/toplaner';
import './database/jg';
import './database/midlaner';
import './database/botlaner';
import './database/suportelaner';
import './database/games';

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
        this.app.use(cors());
    }

    routes() {
        this.app.use('/', homeRoutes);
        this.app.use('/players/', playerRoutes);
    }
}

export default new App().app;
