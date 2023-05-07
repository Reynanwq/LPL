import { Router } from 'express';
import PlayerController from '../controllers/PlayerController';

const router = new Router();

router.get('/toplaner', PlayerController.toplaner);

router.get('/:id', PlayerController.toplanerByID);
router.get('/', PlayerController.jungler);
router.get('/:id', PlayerController.junglerByID);
router.get('/', PlayerController.midlaner);
router.get('/:id', PlayerController.midlanerByID);
router.get('/', PlayerController.adc);
router.get('/:id', PlayerController.adcByID);
router.get('/', PlayerController.suporte);
router.get('/:id', PlayerController.suporteByID);

export default router;