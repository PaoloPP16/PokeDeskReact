import React,{useContext} from 'react';

const First = React.createContext();
export function useUrl (){
    return useContext (First);
}
export function FirstUp ({children}){
    const urlP ="https://pokeapi.co/api/v2/pokemon/"
 return(
    <First.Provider value = {urlP}>
        {children}
    </First.Provider>
 )
}