import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useReducer } from 'react';
import { PokemonContexFavorite } from '../components/PokemonContex';


function Favorito() {
    const [pokeListShoppingCar,setPokeListShoppingCar]=useState([])
    const {shoppingCar,dispatchShoppingCar} = useContext(PokemonContexFavorite)
    const [listLike,dispatch] = useReducer((state = [], action) => {
        switch(action.type){
            case 'add_task':{
                return [
                    ...state,
                    {id: state.length, name: action.name}
                ]
            }
            case 'remove_task': {
                return state.filter((task,index)=> index != action.index);
            }
            default :{
               console.log("error")
            }
        }
    });
    var hash = {};
    let array2=[];
    array2=pokeListShoppingCar
    array2 = array2.filter(function(current) {
    var exists = !hash[current.id];
    hash[current.id] = true;
    return exists;
    });
    
    useEffect(()=>{
        pokeLisApiLike()
    },[shoppingCar]);
    const pokeLisApiLike=async ()=>{
        shoppingCar.map(async(item)=>{
            const result=await axios.get(`https://pokeapi.co/api/v2/pokemon/${item.name}`)
            setPokeListShoppingCar(state=>{
                state=[...state,result.data]
                return state
            })
        })

    }
    console.log(shoppingCar)

    return (
        <div className="App">
          {array2.map((e,index) => {
            return (
              <div className="container">
                <img src={e.sprites["front_default"]} />
                <div className="divTable">
                    <div>Nombre : {e.name}</div>
                    <div>Tipo : {e.types[0].type.name}</div>
                    <div >Daño Maximo : {e.stats[5].base_stat}</div>
                    <div>Altura {e.height} cm</div>
                    <div>Peso : {e.weight} kg</div> 
                    <div>
                        <button onClick={()=>{
                                dispatchShoppingCar({
                                    type: 'remove_shoppingCar',
                                    index:index
                                })
                            }}>Eliminar</button>
                    </div>
                </div>
              </div>
            );
          })}
          
        </div>
      );
}

export default Favorito;