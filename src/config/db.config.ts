// api/src/config/db.config.ts
import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) throw new Error("MONGO_URI non definita");
    await mongoose.connect(uri);
    console.log('✅ Connesso a MongoDB Atlas');
  } catch (error) {
    console.error('❌ Errore di connessione a MongoDB:', error);
  }
};
