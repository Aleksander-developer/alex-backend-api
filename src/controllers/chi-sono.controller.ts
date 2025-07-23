<<<<<<< HEAD
// api/src/controllers/chi-sono.controller.ts
import { Request, Response } from 'express';
import { ChiSono } from '../models/chi-sono.model';

export const getProfilo = async (_req: Request, res: Response) => {
  try {
    const contenuto = await ChiSono.findOne();
    res.json(contenuto);
  } catch (error) {
    res.status(500).json({ message: 'Errore caricamento profilo', error });
  }
};

=======
// api/src/controllers/chi-sono.controller.ts
import { Request, Response } from 'express';
import { ChiSono } from '../models/chi-sono.model';

export const getProfilo = async (_req: Request, res: Response) => {
  try {
    const contenuto = await ChiSono.findOne();
    res.json(contenuto);
  } catch (error) {
    res.status(500).json({ message: 'Errore caricamento profilo', error });
  }
};

>>>>>>> 7cf6ab218ab5b40df2bcf973891236ea2417004b
