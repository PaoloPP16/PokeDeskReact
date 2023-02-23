import React,{ useContext } from 'react';
import {usePokeContexFavorite}  from '../components/useContex';


function Favorito() {
    const abb= usePokeContexFavorite()
    console.log(abb)
    return (
        <div>
            
        </div>
    );
}

export default Favorito;