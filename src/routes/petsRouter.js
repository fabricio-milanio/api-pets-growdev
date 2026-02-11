import express from 'express';
import pets from '../controllers/petsController.js';
import petsMiddleware from '../middlewares/petsMiddlewares.js';

const router = express.Router();

router.get("/", pets.getPets);
router.post("/", petsMiddleware.validateFieldsBody, pets.postPet);
router.get("/:id", pets.getPetById);
router.put("/:id", petsMiddleware.validateFieldsBody, pets.updatePet);
router.delete("/:id", pets.deletePet);

export default router;