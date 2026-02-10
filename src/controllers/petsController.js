import { pets } from '../database/pets.js';
import { v4 as uuidv4 } from 'uuid';

const getPets = async (req, res) => {

  return res.status(200).json({
    ok: true,
    message: "Dados dos pets requisitado com sucesso",
    dados: pets.length > 0 ? pets : "Nenhum pet cadastrado"
  });
};

const postPet = async (req, res) => {
  const { nome, raca, idade, nomeTutor } = req.body;
  
  const novoPet = {
    id: uuidv4(),
    nome,
    raca,
    idade,
    nomeTutor
  };

  pets.push(novoPet);

  return res.status(201).json({
    ok: true,
    message: "Pet cadastrado com sucesso",
    dados: novoPet
  });
};

export default {
  getPets,
  postPet,
}