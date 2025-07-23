import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connect = async () => {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error("A variável de ambiente MONGODB_URI não está definida.");
    console.log(process.env.MONGODB_URI);
    return;
  }

  try {
    await mongoose.connect(uri);
    console.log("Conectado ao banco de dados MongoDB");
  } catch (err) {
    console.error("Erro ao conectar ao MongoDB:", err);
  }
};

export default connect;
