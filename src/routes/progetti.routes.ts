<<<<<<< HEAD
// api/src/routes/progetti.routes.ts
import express from 'express';
import { getProgetti, getProgettoById } from '../controllers/progetti.controller';

const router = express.Router();

router.get('/', getProgetti);
// router.get('/:id', getProgettoById);

export default router;

=======
// api/src/routes/progetti.routes.ts
import express from 'express';
import { getProgetti, getProgettoById, createProgetto } from '../controllers/progetti.controller';

const router = express.Router();

router.get('/', getProgetti);
router.get('/:id', getProgettoById); // SCOMMENTATA: Rotta per ottenere un singolo progetto per ID
router.post('/', createProgetto); // AGGIUNTA: Rotta per creare un nuovo progetto (per Portfolio Manager)

export default router;
>>>>>>> 7cf6ab218ab5b40df2bcf973891236ea2417004b
