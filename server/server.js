// IMPORTS
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import connect from "./database/connection.js";
import projetoRouter from "./routes/projetos.router.js";

// CONSTANTES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = process.env.PORT || 8080;

// MIDDLEWARES
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// ROTAS
app.use("/api/projetos", projetoRouter);

// Rota para baixar o curriculo
app.get("/curriculo", (req, res) => {
  const filePath = path.join(__dirname, "public", "Jose-Isaac-Estagio-TI.pdf");
  res.download(filePath, "Curriculo-Jose-Isaac.pdf");
});

// CONEXÃO COM O BANCO DE DADOS
connect();

// EXPORTAÇÃO PARA VERCEL
export default app; // usado por Node adapter abaixo

// Para a Vercel rodar como função
export const handler = (req, res) => {
  app(req, res);
};

// OUVINTE DE SERVIDOR
// app.listen(port, () => {
//   console.log("Servidor rodando em http://localhost:" + port);
// });
