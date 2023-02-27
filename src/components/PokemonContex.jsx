import React, { useState, createContext} from "react";
import { useReducer } from "react";

export const PokemonContexFavorite= createContext();


function PokeProvider({children}) {
    const [favoritePokemon,setFavoritePokemon]= useState([])
    const [shoppingCar,dispatchShoppingCar] = useReducer((state = [], action) => {
        switch(action.type){
            case 'add_shoppingCar':{
                return [
                    ...state,
                    {id: state.length, name: action.name}
                ]
            }
            case 'remove_shoppingCar': {
                return state.filter((task,index)=> index != action.index);
            }
            default :{
               console.log("error")
            }
        }
    });
    return (
        <PokemonContexFavorite.Provider value={{favoritePokemon,setFavoritePokemon,shoppingCar,dispatchShoppingCar}}>
                {children}
        </PokemonContexFavorite.Provider>
    )
}
export default PokeProvider;