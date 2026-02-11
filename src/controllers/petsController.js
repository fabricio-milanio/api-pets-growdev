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

const getPetById = async (req, res) => {
  const { id } = req.params;
  const pet = pets.find((pet) => pet.id === id);

  if (!pet) {
    return res.status(404).json({
      ok: false,
      message: "Pet não encontrado",
    });
  }

  return res.status(200).json({
    ok: true,
    message: "Dados do pet requisitado com sucesso",
    dados: pet
  });
};

const updatePet = async (req, res) => {
  const { id } = req.params;
  const { nome, raca, idade, nomeTutor } = req.body;

  const petIndex = pets.findIndex((pet) => pet.id === id);

  if (petIndex === -1) {
    return res.status(404).json({
      ok: false,
      message: "Pet não encontrado",
    });
  }

  const petAtualizado = {
    id,
    nome,
    raca,
    idade,
    nomeTutor
  };

  pets[petIndex] = petAtualizado;

  return res.status(200).json({
    ok: true,
    message: "Pet atualizado com sucesso",
    dados: petAtualizado
  });
};

export default {
  getPets,
  postPet,
  getPetById,
  updatePet,
}