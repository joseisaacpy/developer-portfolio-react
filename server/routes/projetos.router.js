// IMPORTS
import connect from "../database/connection.js";
import Projeto from "../database/schema.js";
import { Router } from "express";

// Chama a função de conexão
await connect(); // Vai dar o console.log informando que conectou

// CONSTANTES
const router = Router();

// ROTAS:

// POST
router.post("/", async (req, res) => {
  try {
    const novoProjeto = new Projeto(req.body);
    await novoProjeto.save();
    res.status(201).json(novoProjeto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao criar projeto" });
  }
});

// GET
router.get("/", async (req, res) => {
  try {
    const allProjetos = await Projeto.find();
    res.json(allProjetos);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar projetos." });
    console.error(error);
  }
});

// GET por ID
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const projeto = await Projeto.findById(id);
    res.json(projeto);
  } catch (error) {
    res.status(404).json({ error: "Projeto não encontrado." });
    console.error(error);
  }
});
// DELETE
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const projeto = await Projeto.findByIdAndDelete(id);
    res.json(projeto);
  } catch (error) {
    res.status(404).json({ error: "Projeto não encontrado." });
    console.error(error);
  }
});

export default router;
