import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import RoutesApi from "./routes.js"; 

// Configurar variables de entorno
dotenv.config();

const app = express();

// Middleware
app.use(express.json()); // Para recibir datos JSON
app.use(cors()); // Habilita CORS para todas las rutas

// Conectar a MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
  })
  .then(() => console.log("✅ Conectado a MongoDB"))
  .catch((error) => console.log("❌ Error al conectar a MongoDB:", error));

// Rutas
app.use("/api", RoutesApi); // Rutas para los clientes

// Iniciar servidor
const PORT = process.env.PORT;  // Usa el puerto de Render o 5000 por defecto
const ip = '0.0.0.0';  // Asegura que se escuche en todas las interfaces de red
app.listen(PORT, ip, () =>
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`)  // Usa localhost o la URL pública de Render
); 
