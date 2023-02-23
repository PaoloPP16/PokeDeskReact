import React, { useState, createContext } from "react";

const [favoritePokemon,setFavoritePokemon]= useState([])
setFavoritePokemon("aaa")
const pokemonContexFavorite = createContext(
    favoritePokemon
);
const pokemonContexSetFavorite = createContext(
    setFavoritePokemon
);



// export function usePokeContexFavorite(){
//     return useContext(pokemonContexFavorite)
// }
// export function usepokeContexSetFavorite(){
//     return useContext(pokemonContexSetFavorite)
// }
// function PokeProvider({Children}) {
//     const [favoritePokemon,setFavoritePokemon]= useState([])
//     return (
//         <pokemonContexFavorite value={favoritePokemon}>
//             <pokemonContexSetFavorite value={setFavoritePokemon}>
//                 {Children}
//             </pokemonContexSetFavorite>
//         </pokemonContexFavorite>
//     );
// }

// export default PokeProvider;