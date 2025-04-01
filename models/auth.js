import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const ClienteSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    apellido1: { type: String, required: true },
    apellido2: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    telefono: { type: String, required: true },
    fecha_nacimiento: { type: Date, required: true },
    profile_image: { type: String },
});

// Método para comparar contraseñas
ClienteSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const Cliente = mongoose.model("Cliente", ClienteSchema);
export default Cliente;
