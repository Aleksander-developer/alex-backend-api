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
  'https://www.aleksandernikolli.com',
  'https://aleksander-nikolli-portfolio.netlify.app',
  'http://localhost:4200', // Frontend locale (ng serve)
  'http://localhost:10000', // Backend locale (se lo chiami da lì)
  'https://alex-backend-api.onrender.com', // L'URL pubblico del tuo backend su Render (anche se non è l'origine di una richiesta, averlo non fa male)
  // ✅ NUOVO: L'URL pubblico del tuo frontend su Render
  'https://aleksandernikolliportfolio.onrender.com' 
];

app.use(cors({
  origin: function (origin, callback) {
    console.log('Origin richiesta:', origin);
    // Permetti richieste senza origine (es. da Postman, curl, o file locali)
    if (!origin) return callback(null, true); 

    // Controlla se l'origine richiesta è nella lista delle origini consentite
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      // Se l'origine non è consentita, logga l'errore e rifiuta la richiesta
      console.log("CORS origin non permessa:", origin);
      return callback(new Error(`Accesso CORS non consentito da questo dominio: ${origin}`), false);
    }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204
}));

// Lascia questa riga commentata, ha causato il problema!
// app.options('*', cors());

app.use(express.json());
app.use('/api', apiRoutes); 

(async () => { await connectDB(); })();

export default app;
