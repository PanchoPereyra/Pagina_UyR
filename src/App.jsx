// De aca se borra hasta..
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// acá


import Footer from "./Components/Footer"
//import Galeria from "./Components/Galeria"
import Hero from "./Components/Hero"
import Eslogan from "./Components/__Eslogan"
import Lista from "./Components/Lista"

// import Novedades from "./Components/Novedades"
import BarraNavegacion from "./Components/BarraNavegacion"
import Header from "./Components/Header"
import { Routes, Route } from "react-router-dom"
import NotFound from "./pages/NotFound"
// import Noticias1 from "./pages/Noticias1"
// import Noticias2 from "./pages/Noticias2"
// import Noticias3 from "./pages/Noticias3"
// import Noticias4 from "./pages/Noticias4"
import Home from "./pages/Home";
import EnConstruccion from "./pages/EnConstruccion"
import ObraSocial from "./pages/ObraSocial"
import Propuestas from "./pages/Propuestas"

import Sindicato from "./pages/Sindicato"
import Jubilados from "./pages/Jubilados"

import Zonales from "./pages/Zonales"
import Concordia from "./pages/Concordia"
import Alcaraz from "./pages/Alcaraz"
import Cerrito from "./pages/Cerrito"
import Chajari from "./pages/Chajari"
import ConcepcionUruguay from "./pages/ConcepcionUruguay"
import CostaUruguay from "./pages/CostaUruguay"
import Diamante from "./pages/Diamante"
import Federal from "./pages/Federal"
import Feliciano from "./pages/Feliciano"
import Gualeguay from "./pages/Gualeguay"
import Gualeguaychu from "./pages/Gualeguaychu"
import Islas from "./pages/Islas"
import LaPaz from "./pages/LaPaz"
import Nogoya from "./pages/Nogoya"
import SanSalvador from "./pages/SanSalvador"
import Segui from "./pages/Segui"
import Tala from "./pages/Tala"
import Victoria from "./pages/Victoria"
import VillaElisa from "./pages/VillaElisa"
import Villaguay from "./pages/Villaguay"

import Evento from "./pages/Evento"

import Imagenes1 from "./pages/Imagenes1"
import Imagenes2 from "./pages/Imagenes2"
import LinksInteres from "./pages/LinksInteres"




function App() {
  // const [count, setCount] = useState(0) - Se borra

  return (

    <>

      {/* <Header /> */}
      <BarraNavegacion />

      {/* Páginas principales */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/novedades" element={<Novedades />} /> */}
        {/* <Route path="/noticia1" element={<Noticias1 />} /> */}
        {/* <Route path="/noticia2" element={<Noticias2 />} /> */}
        {/* <Route path="/noticia3" element={<Noticias3 />} /> */}
        {/* <Route path="/noticia4" element={<Noticias4 />} /> */}
        <Route path="/enconstruccion" element={<EnConstruccion />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/obrasocial" element={<ObraSocial />} />
        <Route path="/sindicato" element={<Sindicato />} />
        <Route path="/linksinteres" element={<LinksInteres />} />
        <Route path="/jubilados" element={<Jubilados />} />
        <Route path="/propuestas" element={<Propuestas />} />
        
        <Route path="/zonales" element={<Zonales/>}/>
        <Route path="/alcaraz" element={<Alcaraz/>}/>
        <Route path="/cerrito" element={<Cerrito/>}/>
        <Route path="/chajari" element={<Chajari/>}/>
        <Route path="/concepcionuruguay" element={<ConcepcionUruguay/>}/>
        <Route path="/concordia" element={<Concordia/>}/>
        <Route path="/costauguguay" element={<CostaUruguay/>}/>
        <Route path="/diamante" element={<Diamante/>}/>
        <Route path="/federal" element={<Federal/>}/>
        <Route path="/feliciano" element={<Feliciano/>}/>
        <Route path="/gualeguay" element={<Gualeguay/>}/>
        <Route path="/gualeguaychu" element={<Gualeguaychu/>}/>
        <Route path="/islas" element={<Islas/>}/>
        <Route path="/lapaz" element={<LaPaz/>}/>
        <Route path="/nogoya" element={<Nogoya/>}/>

        <Route path="/imagenes1" element={<Imagenes1/>}/>
        <Route path="/imagenes2" element={<Imagenes2/>}/>
        <Route path="/lista" element={<Lista/>}/>

        <Route path="/eventos" element={<Evento />} />
      </Routes>

      {/* <Hero /> */}
      {/* <Eslogan /> */}
      {/* <Novedades /> */}
      {/* <Efemerides /> */}
      {/* <Galeria/> */}

      <Footer />

    </>
  )
}

export default App
