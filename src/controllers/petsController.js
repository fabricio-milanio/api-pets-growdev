import { pets } from '../database/pets.js';
import { v4 as uuidv4 } from 'uuid';

const getPets = async (req, res) => {
  try {
    return res.status(200).json({
    ok: true,
    message: "Dados dos pets requisitado com sucesso",
    dados: pets.length > 0 ? pets : "Nenhum pet cadastrado"
  });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      message: "Erro ao requisitar os dados dos pets",
      error: error.message
    });
  }
};

const postPet = async (req, res) => {
  try {
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
  } catch (error) {
    return res.status(500).json({
      ok: false,
      message: "Erro ao cadastrar o pet",
      error: error.message
    });
  }
};

const getPetById = async (req, res) => {
  try {
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
  } catch (error) {
    return res.status(500).json({
      ok: false,
      message: "Erro ao requisitar os dados do pet",
      error: error.message
    });
  }
};

const updatePet = async (req, res) => {
  try {
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
  } catch (error) {
    return res.status(500).json({
      ok: false,
      message: "Erro ao atualizar as informações do pet",
      error: error.message
    });
  }
};

const deletePet = async (req, res) => {
  try {
    const { id } = req.params;
    const petIndex = pets.findIndex((pet) => pet.id === id);

    if (petIndex === -1) {
      return res.status(404).json({
        ok: false,
        message: "Pet não encontrado",
      });
    }

    pets.splice(petIndex, 1);

    return res.status(200).json({
      ok: true,
      message: "Pet deletado com sucesso",
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      message: "Erro ao deletar as informações do pet",
      error: error.message
    });
  }
};

export default {
  getPets,
  postPet,
  getPetById,
  updatePet,
  deletePet
}