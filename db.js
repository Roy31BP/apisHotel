import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { dbName: "Hotel" }); // Se conecta a la base de datos "Hotel"
    console.log("MongoDB conectado correctamente a la base de datos Hotel");
  } catch (error) {
    console.error("Error conectando a MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB;
