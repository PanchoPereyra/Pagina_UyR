// De aca se borra hasta..
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// acá


import Efemerides from "./Components/Efemerides"
import Footer from "./Components/Footer"
//import Galeria from "./Components/Galeria"

import Hero from "./Components/Hero"
import Eslogan from "./Components/Eslogan"
import Novedades from "./Components/Novedades"
import BarraNavegacion from "./Components/BarraNavegacion"
import Header from "./Components/Header"
import { Routes, Route } from "react-router-dom"
import NotFound from "./pages/NotFound"
import Noticias1 from "./pages/Noticias1"
import Noticias2 from "./pages/Noticias2"
import Noticias3 from "./pages/Noticias3"
import Noticias4 from "./pages/Noticias4"
import Home from "./pages/Home";
import EnConstruccion from "./pages/EnConstruccion"
import ObraSocial from "./pages/ObraSocial"
import Galeria from "./pages/Galeria"
import Imagenes1 from "./pages/Imagenes1"




function App() {
  // const [count, setCount] = useState(0) - Se borra

  return (

    <>

      {/* <Header /> */}
      <BarraNavegacion />

      {/* Páginas principales */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/novedades" element={<Novedades />} />
        <Route path="/noticia1" element={<Noticias1 />} />
        <Route path="/noticia2" element={<Noticias2 />} />
        <Route path="/noticia3" element={<Noticias3 />} />
        <Route path="/noticia4" element={<Noticias4 />} />
        <Route path="/enconstruccion" element={<EnConstruccion />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/obrasocial" element={<ObraSocial />} />
        <Route path="/galeria" element={<Galeria/>}/>
        <Route path="/imagenes1" element={<Imagenes1/>}/>
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
