import React, {useEffect,useState,useContext} from "react";
import axios from "axios";
import {useUrl} from '../components/FirstUp';
import {Link} from "react-router-dom"
import PokeContexFavorite from "./PokemonContex";

const ApiAll = () => {
    const urlP2= useUrl();
    const [products2, setProducts2] = useState([]);
    const [products3, setProducts3] = useState([]);
    const [like, setLike] = useState([]);
    const [one,two ] = useState(1);
    let favoritePokemon=like
    favoritePokemon=like
    console.log(favoritePokemon)
    //const pokemonListF = useContext(PokeContexFavorite)
    // let {favoritePokemon,setFavoritePokemon}  = pokemonListF
    // setFavoritePokemon(like)
    //console.log(favoritePokemon)
    function capitalizarPrimeraLetra(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);}
    
    useEffect(()=>{
        Pokeaa()
        getProducts2()
    }
    ,[one]);
    const getProducts2=async()=>{
        const response2 = await axios.get(urlP2);
        setProducts2(response2.data.results);
        two( urlP2 )
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
    
    
    return(
     <PokeContexFavorite.Provider value={favoritePokemon}>
        <div>
            {products3.map((data,index) => {
            return (
                
                <div className="container">
                <img src={data.sprites["front_default"]} />
                <div className="divTable">
                        <div>Nombre : {capitalizarPrimeraLetra(data.name)}</div>  
                        <div><Link to={`/pokemon/${data.name}`}>ver detalles</Link></div>
                        <div>
                            <button onClick={()=>{{
                                const newArr=[
                                    ...like,{name:data.name,index:index}
                                ]
                                setLike(newArr)
                            }}}>Like</button>
                        </div>
                    </div>
                </div>
            );
            })}
        </div>
     </PokeContexFavorite.Provider>    
    )
}
  

 export default ApiAll;