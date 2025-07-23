<<<<<<< HEAD
// api/src/models/contatto.model.ts
import mongoose from 'mongoose';

const contattoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true },
  messaggio: { type: String, required: true },
  cellulare: String,
  data: { type: Date, default: Date.now }
});

export const Contatto = mongoose.model('Contatto', contattoSchema);

=======
// api/src/models/contatto.model.ts
import mongoose from 'mongoose';

const contattoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true },
  messaggio: { type: String, required: true },
  cellulare: String,
  data: { type: Date, default: Date.now }
});

export const Contatto = mongoose.model('Contatto', contattoSchema);

>>>>>>> 7cf6ab218ab5b40df2bcf973891236ea2417004b
