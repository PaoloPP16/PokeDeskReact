import React, { useEffect,useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';

export default function DetailPokemon() {
    const data = useParams() 
    const [detailPoke, setDetailPoke] = useState({});
    useEffect(()=>{
        getDetailPokemon()
    }
    ,[]);
    function capitalizarPrimeraLetra(str) {
      return str?.charAt(0)?.toUpperCase() + str?.slice(1);
    }

    const getDetailPokemon=async()=>{
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${data.id}`)
      setDetailPoke({...res.data})
    } 
    console.log(detailPoke)
    return (
      <div className="App">
        <div className="container">
          <img src={detailPoke?.sprites?.front_default} />
          <div className="divTable">
            <div>Nombre : {capitalizarPrimeraLetra(detailPoke?.name)}</div>  
            <div>Tipo : {capitalizarPrimeraLetra(detailPoke?.types?.[0]?.type?.name)}</div>
            <div >Daño Maximo : {detailPoke?.stats?.[4]?.base_stat}</div>
            <div>Altura {detailPoke?.height} cm</div>
            <div>Peso : {detailPoke?.weight} kg</div> 
          </div>
        </div>
      </div>
        
    );
}
