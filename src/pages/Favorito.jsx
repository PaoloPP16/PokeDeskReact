import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { PokemonContexFavorite } from '../components/PokemonContex';


function Favorito() {
    const [pokeListLikeShow,setPokeListLikeShow]=useState([])
    const [bug,setBug ] = useState();
    const {favoritePokemon} = useContext(PokemonContexFavorite)

    var hash = {};
    let array2=[];
    array2=[...pokeListLikeShow]
    array2 = array2.filter(function(current) {
    var exists = !hash[current.id];
    hash[current.id] = true;
    return exists;
    
    });
    console.log(array2)
    useEffect(()=>{
        pokeLisApiLike()
    },[])
    const pokeLisApiLike=async ()=>{
        favoritePokemon.map(async(item)=>{
            const result=await axios.get(`https://pokeapi.co/api/v2/pokemon/${item.name}`)
            setPokeListLikeShow(state=>{
                state=[...state,result.data]
                return state
            })
            setBug(1)
        })

    }


    return (
        <div className="App">
          {array2.map((e) => {
            return (
              <div className="container">
                <img src={e.sprites["front_default"]} />
                <div className="divTable">
                    <div>Nombre : {e.name}</div>
                    <div>Tipo : {e.types[0].type.name}</div>
                    <div >Daño Maximo : {e.stats[5].base_stat}</div>
                    <div>Altura {e.height} cm</div>
                    <div>Peso : {e.weight} kg</div> 
                </div>
              </div>
            );
          })}
        </div>
      );
}

export default Favorito;