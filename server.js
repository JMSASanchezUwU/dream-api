import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dreamRoutes from './routes/dreams.js';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Conectado a MongoDB Atlas'))
  .catch(err => console.error('❌ Error de conexión:', err));

// Rutas
app.use('/api/dreams', dreamRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});