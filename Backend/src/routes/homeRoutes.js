import { Router } from 'express';
const router = new Router();
import HomeController from '../controllers/HomeController';
import PlayerController from '../controllers/PlayerController';

router.get('/', HomeController.index);
router.get('/:id', HomeController.getbyID);
router.get('/', PlayerController.toplaner);
router.get('/', PlayerController.toplanerByID);
router.get('/', PlayerController.jungler);
router.get('/', PlayerController.junglerByID);
router.get('/', PlayerController.midlaner);
router.get('/', PlayerController.midlanerByID);
router.get('/', PlayerController.adc);
router.get('/', PlayerController.adcByID);
router.get('/', PlayerController.suporte);
router.get('/', PlayerController.suporteByID);

export default router;
