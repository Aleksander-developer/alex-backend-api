// api/src/models/progetto.model.ts
import mongoose, { Document, Schema } from 'mongoose';

// Interfaccia per il documento Progetto, estende Document di Mongoose
export interface IProgetto extends Document {
  titolo: string;
  descrizione: string;
  tecnologie: string[];
  linkDemo?: string;
  linkRepo?: string;
  immagine?: string;
  dataCreazione: Date; // Data di creazione del progetto
  caratteristiche: string[]; // Funzionalità specifiche del progetto
  visibile: boolean; // Flag per controllare la visibilità nel frontend
  keywordsSeo?: string[]; // Parole chiave SEO
  // Nuovi campi per dettagli approfonditi del progetto
  sfideAffrontate?: string[]; // Sfide incontrate durante lo sviluppo
  soluzioniImplementate?: string[]; // Soluzioni adottate per superare le sfide
  risultatiChiave?: string[]; // Risultati e impatti principali del progetto
  architettura?: string; // Descrizione dell'architettura tecnica
  fasiDiSviluppo?: string[]; // Fasi principali del ciclo di sviluppo
  targetAudience?: string; // Pubblico di destinazione dell'applicazione
  aspectsCovered?: string[]; // Aree di competenza coperte dal progetto
}

// Definizione dello Schema Mongoose per il Progetto
const progettoSchema = new Schema<IProgetto>({
  titolo: {
    type: String,
    required: true,
    trim: true,
  },
  descrizione: {
    type: String,
    required: true,
    trim: true,
  },
  tecnologie: {
    type: [String],
    default: [],
  },
  linkDemo: {
    type: String,
    trim: true,
  },
  linkRepo: {
    type: String,
    trim: true,
  },
  immagine: {
    type: String,
    default: 'https://placehold.co/800x500/1a1a2e/00bcd4?text=Immagine+Progetto',
  },
  dataCreazione: {
    type: Date,
    default: Date.now,
  },
  caratteristiche: {
    type: [String],
    default: [],
  },
  visibile: {
    type: Boolean,
    default: false,
  },
  keywordsSeo: {
    type: [String],
    default: [],
  },
  // Nuovi campi aggiunti allo schema
  sfideAffrontate: {
    type: [String],
    default: [],
  },
  soluzioniImplementate: {
    type: [String],
    default: [],
  },
  risultatiChiave: {
    type: [String],
    default: [],
  },
  architettura: {
    type: String,
    trim: true,
  },
  fasiDiSviluppo: {
    type: [String],
    default: [],
  },
  targetAudience: {
    type: String,
    trim: true,
  },
  aspectsCovered: {
    type: [String],
    default: [],
  },
}, {
  timestamps: true // Aggiunge automaticamente createdAt e updatedAt
});

export const Progetto = mongoose.model<IProgetto>('Progetto', progettoSchema);
