import express from 'express';
import pets from '../controllers/petsController.js'

const router = express.Router();

router.get("/", pets.getPets);
router.post("/", pets.postPet);
router.get("/:id", pets.getPetById);

export default router;