// api/src/controllers/progetti.controller.ts
import { Request, Response } from 'express';
import { Progetto, IProgetto } from '../models/progetto.model'; // Importa l'interfaccia IProgetto

// Controller per ottenere tutti i progetti
export const getProgetti = async (req: Request, res: Response) => {
  try {
    // Recupera solo i progetti marcati come visibili per il frontend pubblico
    const progetti = await Progetto.find({ visibile: true }).sort({ dataCreazione: -1 }); // Ordina dal più recente
    res.json(progetti);
  } catch (error: any) {
    console.error('Errore recupero progetti:', error);
    res.status(500).json({ message: 'Errore interno del server nel recupero dei progetti.', error: error.message });
  }
};

// Controller per ottenere un singolo progetto per ID
export const getProgettoById = async (req: Request, res: Response): Promise<void> => {
  try {
    const progetto = await Progetto.findById(req.params.id);
    if (!progetto) {
      res.status(404).json({ message: 'Progetto non trovato' });
      return;
    }
    res.json(progetto);
  } catch (error: any) {
    console.error('Errore recupero progetto:', error);
    if (error.name === 'CastError') {
      res.status(400).json({ message: 'ID progetto non valido.' });
    } else {
      res.status(500).json({ message: 'Errore interno del server nel recupero del progetto.', error: error.message });
    }
  }
};

// Controller per creare un nuovo progetto
// Questo metodo sarà utilizzato dal tuo Portfolio Manager e dovrebbe essere protetto.
export const createProgetto = async (req: Request, res: Response) => {
  try {
    // Estrai tutti i campi dal corpo della richiesta, inclusi i nuovi dettagliati
    const {
      titolo,
      descrizione,
      tecnologie,
      linkDemo,
      linkRepo,
      immagine,
      caratteristiche,
      visibile,
      keywordsSeo,
      sfideAffrontate,
      soluzioniImplementate,
      risultatiChiave,
      architettura,
      fasiDiSviluppo,
      targetAudience,
      aspectsCovered
    } = req.body;

    // Crea una nuova istanza del modello Progetto con i dati ricevuti
    const nuovoProgetto: IProgetto = new Progetto({
      titolo,
      descrizione,
      tecnologie,
      linkDemo,
      linkRepo,
      immagine,
      caratteristiche: caratteristiche || [],
      visibile: visibile !== undefined ? visibile : false,
      keywordsSeo: keywordsSeo || [],
      sfideAffrontate: sfideAffrontate || [],
      soluzioniImplementate: soluzioniImplementate || [],
      risultatiChiave: risultatiChiave || [],
      architettura,
      fasiDiSviluppo: fasiDiSviluppo || [],
      targetAudience,
      aspectsCovered: aspectsCovered || []
    });

    // Salva il nuovo progetto nel database
    const progettoSalvato = await nuovoProgetto.save();

    res.status(201).json(progettoSalvato); // 201 Created - Risorsa creata con successo
  } catch (error: any) {
    console.error('Errore nella creazione del progetto:', error);
    if (error.name === 'ValidationError') {
      res.status(400).json({ message: 'Dati progetto non validi.', errors: error.errors });
    } else {
      res.status(500).json({ message: 'Errore interno del server nella creazione del progetto.', error: error.message });
    }
  }
};

// TODO: Aggiungi qui i controller per updateProgetto e deleteProgetto
// export const updateProgetto = async (req: Request, res: Response) => { ... };
// export const deleteProgetto = async (req: Request, res: Response) => { ... };
