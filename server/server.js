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
const port = 3000 || process.env.PORT;

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

// OUVINTE DE SERVIDOR
app.listen(port, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
