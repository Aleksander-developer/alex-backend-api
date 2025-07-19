// api/src/routes/progetti.routes.ts
import express from 'express';
import { getProgetti, getProgettoById, createProgetto } from '../controllers/progetti.controller';

const router = express.Router();

router.get('/', getProgetti);
router.get('/:id', getProgettoById); // SCOMMENTATA: Rotta per ottenere un singolo progetto per ID
router.post('/', createProgetto); // AGGIUNTA: Rotta per creare un nuovo progetto (per Portfolio Manager)

export default router;
