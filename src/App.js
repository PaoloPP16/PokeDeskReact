import React from "react"
import './App.css';
//import HighImg from "./components/HighImg";
//import ApiPokeC from "./components/ApiPokeC"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import ApiAll from "./components/ApiAll"
import Favorito from "./pages/Favorito"
import CarritoDeCompras from "./pages/CarritoDeCompras"
import DetailPokemon from "./pages/DetailPokemon"
import {FirstUp} from "./components/FirstUp"
import PokeProvider from "./components/PokemonContex";
function App() {

  return (
    <PokeProvider>
      <FirstUp>
        <BrowserRouter>
        <Routes>
        < Route path= '/' element= { <ApiAll/> }/>
        < Route path= '/pokemon/:id' element= { <DetailPokemon/> }/>
        < Route path= '/favoritos' element= { <Favorito/> }/>
        < Route path= '/carrito' element= { <CarritoDeCompras/> }/>
        </Routes>
        </BrowserRouter>
      </FirstUp>
    </PokeProvider>
      

  )
}

export default App;