import express from 'express';
import pets from '../controllers/petsController.js'

const router = express.Router();

router.get("/", pets.getPets);
router.post("/", pets.postPet);
router.get("/:id", pets.getPetById);
router.put("/:id", pets.updatePet);
router.delete("/:id", pets.deletePet);

export default router;