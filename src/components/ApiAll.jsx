import React, {useEffect,useState,useContext, useReducer} from "react";
import axios from "axios";
import {useUrl} from '../components/FirstUp';
import {Link} from "react-router-dom"
import { PokemonContexFavorite } from "./PokemonContex";

const ApiAll = () => {
    const urlP2= useUrl();
    const [products2, setProducts2] = useState([]);
    const [products3, setProducts3] = useState([]);
    const [like, setLike] = useState([]);//lik
    const [one,two ] = useState(1);
    const {favoritePokemon,setFavoritePokemon} = useContext(PokemonContexFavorite)//lik
    const {shoppingCar,dispatchShoppingCar}= useContext(PokemonContexFavorite)
    
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
    

    setFavoritePokemon(listLike)

    function capitalizarPrimeraLetra(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);}
    
    useEffect(()=>{
        Pokeaa()
        getProducts2();
        
    }
    ,[one]);
    
    //console.log(favoritePokemon)
    const getProducts2=async()=>{
        const response2 = await axios.get(urlP2);
        setProducts2(response2.data.results);
        two( urlP2 );
  
    };
    const Pokeaa=async ()=>{
        products2.map(async(item)=>{
            const result=await axios.get(item.url)
            setProducts3(state=>{
                state=[...state,result.data]
                return state
                
            })
        })
        
    }
    
    console.log(listLike)
    return(
        <div>
            <div><Link to={`/favoritos`}>Ver Favoritos</Link></div>
            <div><Link to={`/carrito`}>Ver Carrito</Link></div>
            
            {products3.map((data,index) => {
            return (

                <div className="container">
                <img src={data.sprites["front_default"]} />
                <div className="divTable">
                        <div>Nombre : {capitalizarPrimeraLetra(data.name)}</div>  
                        <div><Link to={`/pokemon/${data.name}`}>ver detalles</Link></div>
                        <div>
                            <button onClick={()=>{
                              //{
                              //const newArr=[
                              //    ...like,{name:data.name,id:index}
                              //]
                              //setLike(newArr)
                              //setFavoritePokemon(array)
                              //}

                                dispatch({
                                    type: 'add_task',
                                    name:data.name,
                                    index:index
                                })
                                
                            }}>Like</button>
                        </div>
                        <div>
                        <button onClick={()=>{
                            dispatch({
                                type: 'remove_task',
                                index:index
                            })
                            
                        }}>Borrar</button>

                        </div>
                        <div>
                        <button onClick={()=>{
                            dispatchShoppingCar({
                                type: 'add_shoppingCar',
                                name:data.name,
                                index:index
                            })
                           
                        }}>Agregar al Carro</button>
                        
                        </div>
                    </div>
                </div>
            );
            })};
            
        </div> 
    )
}
  

 export default ApiAll;