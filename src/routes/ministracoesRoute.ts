import { Router } from 'express';
import ministracoesController from '../controllers/ministracoesController';

const router = Router();

router.post('/add-ministracao', ministracoesController.addMinistracao)
router.get('/get-ministracoes', ministracoesController.getMinistracoes)
router.post('/delete-ministracao', ministracoesController.deleteMinistracao)
router.post('/update-ministracao', ministracoesController.updateMinistracao)

export default router;