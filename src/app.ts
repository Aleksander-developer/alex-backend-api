// api/src/app.ts
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db.config';
import apiRoutes from './routes';
import newsletterRoutes from './routes/newsletter.routes';

dotenv.config();
const app = express();

const allowedOrigins = [
  'https://aleksandernikolli.netlify.app',
  'http://localhost:4200'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    console.log("CORS origin non permessa:", origin);
    return callback(new Error('Accesso CORS non consentito da questo dominio'), false);
  },
  credentials: true
}));

app.options('*', cors());  // <-- molto importante per preflight

app.use(express.json());

app.use('/api', apiRoutes);
app.use('/api', newsletterRoutes);

(async () => {
  await connectDB();
})();

export default app;
