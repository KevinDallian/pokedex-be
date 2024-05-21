import { Router } from "express";
import PokemonController from "../controllers/PokemonController.js";

const controller = new PokemonController();
const router = Router();

router.get('/api/v1/catch', controller.catchPokemon);
router.get('/api/v1/release', controller.releasePokemon);
router.post('/api/v1/rename', controller.renamePokemon);

export default router;