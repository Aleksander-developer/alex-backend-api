// api/src/app.ts 
    import express from 'express';
    import dotenv from 'dotenv';
    import cors from 'cors';
    import { connectDB } from './config/db.config';
    import apiRoutes from './routes'; 

    dotenv.config();

    const app = express();

    const allowedOrigins = [
      'https://aleksander-nikolli-developer.netlify.app',
      'http://localhost:4200'
    ];

    app.use(cors({
      origin: function (origin, callback) {
        console.log('Origin richiesta:', origin);
        if (!origin) return callback(null, true);
        if (allowedOrigins.includes(origin)) return callback(null, true);
        console.log("CORS origin non permessa:", origin);
        return callback(new Error('Accesso CORS non consentito da questo dominio'), false);
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
    