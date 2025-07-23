// api/src/app.ts
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db.config';
import apiRoutes from './routes'; 

dotenv.config();

const app = express();

const allowedOrigins = [
  'https://aleksandernikolli.com',
  'https://www.aleksandernikolli.com', // <--- AGGIUNTO QUESTO
  'https://aleksander-nikolli-developer.netlify.app', // <--- AGGIUNTO QUESTO
  'http://localhost:4200', // Per lo sviluppo locale del frontend
  'https://alex-backend-api.onrender.com' // <--- AGGIUNTO L'URL DEL TUO BACKEND STESSO (buona pratica)
];

app.use(cors({
  origin: function (origin, callback) {
    console.log('Origin richiesta:', origin);
    if (!origin) return callback(null, true); // Permetti richieste senza origine (es. da Postman)
    if (allowedOrigins.includes(origin)) return callback(null, true);
    console.log("CORS origin non permessa:", origin);
    return callback(new Error(`Accesso CORS non consentito da questo dominio: ${origin}`), false);
  },
  credentials: true
}));

// Lascia questa riga commentata, ha causato il problema!
// app.options('*', cors());

app.use(express.json());
app.use('/api', apiRoutes); // --- SCOMMENTA QUESTA RIGA ---

(async () => { await connectDB(); })();

// Puoi eliminare questa rotta di test ora che il server si avvia
// app.get('/', (req, res) => {
//   res.send('Server Express minimo avviato con successo!');
// });

export default app;
