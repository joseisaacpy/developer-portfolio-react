// Importa o módulo mongoose
import mongoose from "mongoose";

// Definições do schema
const projetosSchema = new mongoose.Schema(
  {
    nome: String,
    descricao: String,
    data_criacao: String,
    link: String,
    status: String,
  },
  { collection: "projetos" }
);

// Exporta o model
const Projeto = mongoose.model("Projeto", projetosSchema);
export default Projeto;
