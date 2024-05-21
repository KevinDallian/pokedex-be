import { Router } from "express";
import pokemonRoutes from './PokemonRoute.js';

const router = Router();

router.use(pokemonRoutes);

export default router;