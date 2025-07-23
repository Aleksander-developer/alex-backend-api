<<<<<<< HEAD
// api/src/models/servizio.model.ts
import mongoose from 'mongoose';

const servizioSchema = new mongoose.Schema({
  titolo: { type: String, required: true },
  descrizione: String,
  icona: String
});

export const Servizio = mongoose.model('Servizio', servizioSchema);

=======
// api/src/models/servizio.model.ts
import mongoose from 'mongoose';

const servizioSchema = new mongoose.Schema({
  titolo: { type: String, required: true },
  descrizione: String,
  icona: String
});

export const Servizio = mongoose.model('Servizio', servizioSchema);

>>>>>>> 7cf6ab218ab5b40df2bcf973891236ea2417004b
