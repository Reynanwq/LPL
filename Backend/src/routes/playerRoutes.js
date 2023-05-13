import { Router } from 'express';
import Sequelize from 'sequelize';
import PlayerController from '../controllers/PlayerController';
import TopPlayer from '../models/top';
import MidPlayer from '../models/mid';
import JunglerPlayer from '../models/jungler';
import BotPlayer from '../models/bot';
import SupPlayer from '../models/sup';
import Games from '../models/games';
import Times from '../models/times';

const router = new Router();

router.get('/toplaner', PlayerController.toplaner);
router.get('/toplaner/:id', PlayerController.toplanerByID);

router.get('/jungler', PlayerController.jungler);
router.get('/jungler/:id', PlayerController.junglerByID);

router.get('/midlaner', PlayerController.midlaner);
router.get('/midlaner/:id', PlayerController.midlanerByID);

router.get('/adc', PlayerController.adc);
router.get('/adc/:id', PlayerController.adcByID);

router.get('/suporte', PlayerController.suporte);
router.get('/suporte/:id', PlayerController.suporteByID);

router.get('/games/', PlayerController.pontuacao);
router.get('/games/:id', PlayerController.pontucaoByID);

router.get('/times/:teamName', async(req, res) => {
    try {
        const { teamName } = req.params;

        const result = await Times.findOne({
            where: { teamName },
            include: [
                { model: TopPlayer, as: 'top' },
                { model: JunglerPlayer, as: 'jg' },
                { model: MidPlayer, as: 'mid' },
                { model: BotPlayer, as: 'bot' },
                { model: SupPlayer, as: 'sup' },
                { model: Games, as: 'gm' },
            ],
            attributes: [
                ['teamName', 'Team']
            ],
            order: [
                ['gm', 'win', 'DESC']
            ]
        });

        if (result) {
            res.json(result);
        } else {
            res.status(404).json({ message: 'Team not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export default router;
