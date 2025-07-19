// api/src/app.ts
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db.config';
import apiRoutes from './routes';
import { Request, Response, NextFunction } from 'express'; // Importa i tipi per il gestore errori

dotenv.config();

const app = express();

const allowedOrigins = [
  'https://aleksander-nikolli-developer.netlify.app',
  'http://localhost:4200'
];

app.use(cors({
  origin: function (origin, callback) {
    console.log('Origin richiesta:', origin);
    // Permetti richieste senza origine (es. da Postman o richieste dirette)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    console.log("CORS origin non permessa:", origin);
    return callback(new Error('Accesso CORS non consentito da questo dominio'), false);
  },
  credentials: true
}));

// Lascia questa riga commentata, ha causato il problema!
// app.options('*', cors()); // Questa riga è stata lasciata commentata come richiesto

app.use(express.json()); // Middleware per parsare il body delle richieste JSON
app.use('/api', apiRoutes); // Rotte API principali

(async () => { await connectDB(); })();

// Gestione degli errori 404 - Middleware finale per rotte non trovate
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ message: 'Risorsa API non trovata.' });
});

// Gestore degli errori globale - Cattura tutti gli errori passati con next(err)
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack); // Logga lo stack trace dell'errore per il debug
  res.status(err.status || 500).json({
    message: err.message || 'Errore interno del server.',
    error: process.env.NODE_ENV === 'development' ? err : {} // Invia dettagli errore solo in sviluppo
  });
});

export default app;
