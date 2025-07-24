// api/src/controllers/reviews.controller.ts
import { Request, Response } from 'express';
import { mockReviews } from '../data/mock-reviews'; // Importa i dati di mock

/**
 * Controller per ottenere le recensioni di mock.
 * Simula il comportamento di una chiamata API reale.
 */
export const getReviews = (req: Request, res: Response) => {
  // Simula un ritardo di rete per rendere la risposta più realistica
  setTimeout(() => {
    // In una vera implementazione, qui chiameresti l'API di Google My Business
    // e poi elaboreresti e restituiresti i dati.
    // Per ora, restituiamo semplicemente i dati di mock.
    res.status(200).json(mockReviews);
  }, 500); // Ritardo di 500ms
};
