import express from 'express';
import { register, login, getProfile, updateProfileById } from './controllers/AuthController.js'; // Controlador de autenticación
import multer from "multer";
const router = express.Router();


const upload = multer({ dest: "./uploads" });

// Rutas de autenticación
router.post("/register", register); // Ruta de registro
router.post("/login", login);   
router.get("/perfil", getProfile);
router.put("/perfil/:id", updateProfileById); // Actualizar perfil
export default router;
