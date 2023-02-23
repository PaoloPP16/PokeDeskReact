import { useContext } from "react";
import pokemonContexFavorite from "./PokemonContex";
import pokemonContexSetFavorite from "./PokemonContex";

export function usePokeContexFavorite() {
    useContext(pokemonContexFavorite)
}
export function usePokeContexFavorite () {
    useContext(pokemonContexSetFavorite)
}