import { SpeedInsights } from "@vercel/speed-insights/react";
import { Routes, Route } from "react-router-dom";


import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import Home from "./pages/Home";
import Propuestas from "./pages/Propuestas"

import EnConstruccion from "./pages/EnConstruccion"
import ObraSocial from "./pages/ObraSocial"
import Lista from "./Components/Lista"
import LinksInteres from "./pages/LinksInteres"
import Novedades from "./Components/Novedades"
import BarraNavegacion from "./Components/BarraNavegacion"
import Header from "./Components/Header"

// Agregados ahora ultimo
import AccesosRapidos from "./Components/AccesosRapidos";
import Noticias from "./pages/Noticias";

// Hasta aca

import Sindicato from "./pages/Sindicato"
import NotFound from "./pages/NotFound"
import { Analytics } from '@vercel/analytics/react'


function App() {
  // const [count, setCount] = useState(0) - Se borra

  return (
    <>
      {/* <Header /> */}
      <BarraNavegacion />

      {/* Páginas principales */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enconstruccion" element={<EnConstruccion />} />
        <Route path="/propuestas" element={<Propuestas />} />
        <Route path="/obrasocial" element={<ObraSocial />} />
        <Route path="/linksinteres" element={<LinksInteres />} />
        <Route path="/sindicato" element={<Sindicato />} />
        
        <Route path="/lista" element={<Lista />} />
        <Route path="/noticias" element={<Noticias/>}/>    
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* <Hero /> */}
      {/* <Eslogan /> */}
      {/* <Novedades /> */}
      {/* <Efemerides /> */}
      {/* <Galeria/> */}
      
      <AccesosRapidos/>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </>
  )
}

export default App
