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
app.use("/api", RoutesApi); // Rutas para los clientes // Rutas para led

// Iniciar servidor
const PORT = process.env.PORT || 5000;
const ip = '192.168.100.100';  // Sustituye con la IP de tu red local
app.listen(PORT, ip, () =>
  console.log(`🚀 Servidor corriendo en http://${ip}:${PORT}`)
);
