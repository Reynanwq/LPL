import { Router } from 'express';
import PlayerController from '../controllers/PlayerController';

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

export default router;
