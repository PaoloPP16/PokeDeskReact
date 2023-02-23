import React, {useState} from "react";
import axios from "axios";
import { useUrl} from '../components/FirstUp';


const ApiPokeC = () => {
  const [pokemon, setPokemon] = useState("");
  const [pokemonData, setPokemonData] = useState([]);

  const urlP= useUrl();

  function capitalizarPrimeraLetra(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);}

  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getPokemon();
  };
    const getPokemon = async () => {
      const toArray = [];
      try {
        
        const url = `${urlP}${pokemon}`;
        const res = await axios.get(url);
    
        toArray.push(res.data);
        setPokemonData(toArray);
        
      } catch (error) {
        
        
      }
    };

    
    
    
    
    return (
      <div className="App">
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} placeholder="enter pokemon name"/>
        </form>
        {pokemonData.map((data) => {
          return (
            <div className="container">
              <img src={data.sprites["front_default"]} />
              <div className="divTable">
                  <div>Nombre : {capitalizarPrimeraLetra(pokemon)}</div>  
                  <div>Tipo : {capitalizarPrimeraLetra(data.types[0].type.name)}</div>
                  <div >Daño Maximo : {data.stats[5].base_stat}</div>
                  <div>Altura {(data.height)} cm</div>
                  <div>Peso : {(data.weight)} kg</div> 
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  

 export default ApiPokeC;
