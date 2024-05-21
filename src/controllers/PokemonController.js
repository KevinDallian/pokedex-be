import { fibonacci } from "../utils/MathUtils.js";

class PokemonController {
    constructor(){

    }

    catchPokemon(req, res) {
        const success = Math.random() < 0.5;
        return res.status(200).json({ success });
    }

    releasePokemon(req, res) {
        const number = Math.floor(Math.random() * 100 + 1);
        return res.status(200).json({ number });
    }

    renamePokemon(req, res) {
        const { name, renameCount } = req.body;

        const newName = `${name}-${fibonacci(renameCount)}`;

        return res.status(200).json({name: newName, renameCount: renameCount + 1});
    }
}
export default PokemonController;