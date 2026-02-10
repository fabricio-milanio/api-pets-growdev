import express from 'express';
import { pets } from '../database/pets.js'

const router = express.Router();

router.get("/", (req, res) => {
  return res.status(200).json({
    ok: true,
    message: "Dados dos pets requisitado com sucesso",
    dados: pets
  });
});

export default router;