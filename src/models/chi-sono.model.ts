<<<<<<< HEAD
// api/src/models/chisono.model.ts
import mongoose from 'mongoose';

const chiSonoSchema = new mongoose.Schema({
  contenuto: { type: String, required: true },
  aggiornata: { type: Date, default: Date.now }
});

export const ChiSono = mongoose.model('ChiSono', chiSonoSchema);

=======
// api/src/models/chisono.model.ts
import mongoose from 'mongoose';

const chiSonoSchema = new mongoose.Schema({
  contenuto: { type: String, required: true },
  aggiornata: { type: Date, default: Date.now }
});

export const ChiSono = mongoose.model('ChiSono', chiSonoSchema);

>>>>>>> 7cf6ab218ab5b40df2bcf973891236ea2417004b
