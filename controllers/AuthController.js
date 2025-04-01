import Cliente from "../models/auth.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const SECRET_KEY = "JoseRoy31@"; // Reemplaza esto con una clave segura

// **Registro de usuario**
export const register = async (req, res) => {
    try {
        const { nombre, apellido1, apellido2, email, password, telefono, fecha_nacimiento } = req.body;

        // Validar datos básicos
        if (!email || !password) {
            return res.status(400).json({ error: "Correo y contraseña son obligatorios" });
        }

        // Verificar si el usuario ya existe
        const clienteExistente = await Cliente.findOne({ email });
        if (clienteExistente) {
            return res.status(400).json({ error: "Ya existe un usuario con este correo electrónico" });
        }

        // Encriptar la contraseña
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Crear el usuario
        const nuevoCliente = new Cliente({
            nombre,
            apellido1,
            apellido2,
            email,
            password: hashedPassword,
            telefono,
            fecha_nacimiento,
        });

        await nuevoCliente.save();
        res.status(201).json({ message: "Usuario registrado correctamente" });
    } catch (error) {
        console.error("Error en el registro:", error);
        res.status(500).json({ error: "Error al registrar usuario" });
    }
};

// **Login de usuario**
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validar datos básicos
        if (!email || !password) {
            return res.status(400).json({ error: "Correo y contraseña son obligatorios" });
        }

        // Buscar el usuario por email
        const cliente = await Cliente.findOne({ email });
        if (!cliente) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        // Comparar la contraseña ingresada con la almacenada
        const isMatch = await bcrypt.compare(password, cliente.password);
        if (!isMatch) {
            return res.status(401).json({ error: "Contraseña incorrecta" });
        }

        // Generar un token JWT con el email y el ID del usuario
        const token = jwt.sign({ email: cliente.email, id: cliente._id }, SECRET_KEY, { expiresIn: "1h" });

        res.status(200).json({
            message: "Inicio de sesión exitoso",
            token: token, // Enviar el token generado
        });
    } catch (error) {
        console.error("Error en el inicio de sesión:", error);
        res.status(500).json({ error: "Error en el inicio de sesión" });
    }
};

// **Obtener perfil de usuario**
export const getProfile = async (req, res) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(401).json({ error: "Token no proporcionado" });
        }

        const decoded = jwt.verify(token, SECRET_KEY);
        const id = decoded.id; // Obtener el ID del usuario desde el token

        const cliente = await Cliente.findById(id); // Buscar por ID
        if (!cliente) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        const { password: _, ...clienteData } = cliente.toObject();

        res.status(200).json({
            message: "Perfil obtenido exitosamente",
            user: clienteData,
        });
    } catch (error) {
        console.error("Error al obtener el perfil:", error);
        res.status(500).json({ error: "Error al obtener el perfil" });
    }
};

// **Editar perfil de usuario por ID**
export const updateProfileById = async (req, res) => {
    try {
        const { id } = req.params; // Obtener ID desde los parámetros
        if (!id) {
            return res.status(400).json({ error: "ID del usuario no proporcionado" });
        }

        const updates = req.body;

        // Si se incluye la contraseña, encriptarla
        if (updates.password) {
            const salt = await bcrypt.genSalt(10);
            updates.password = await bcrypt.hash(updates.password, salt);
        }

        const cliente = await Cliente.findByIdAndUpdate(
            id,
            { $set: updates }, // Actualizar solo los campos enviados
            { new: true, runValidators: true }
        );

        if (!cliente) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        res.status(200).json({
            message: "Perfil actualizado exitosamente",
            user: cliente,
        });
    } catch (error) {
        console.error("Error al actualizar el perfil:", error);
        res.status(500).json({ error: "Error al actualizar el perfil" });
    }
};
