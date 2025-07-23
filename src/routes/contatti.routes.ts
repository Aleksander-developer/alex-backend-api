<<<<<<< HEAD
// api/src/routes/contatti.routes.ts
import express from 'express';
import { inviaMessaggio } from '../controllers/contatti.controller';

const router = express.Router();

router.post('/', (req, res, next) => {
  inviaMessaggio(req, res).catch(next);
});

export default router;

=======
// api/src/routes/contatti.routes.ts
import express from 'express';
import { inviaMessaggio } from '../controllers/contatti.controller';

const router = express.Router();

router.post('/', (req, res, next) => {
  inviaMessaggio(req, res).catch(next);
});

export default router;

>>>>>>> 7cf6ab218ab5b40df2bcf973891236ea2417004b
