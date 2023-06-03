import { Router } from 'express';

import fotoController from '../controllers/FotoController';

const router = new Router();

router.get('/', fotoController.fotos);

export default router;
