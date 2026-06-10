
// import Eslogan from "./Components/__Eslogan"
// import Noticias1 from "./pages/__Noticias1"
// import Noticias2 from "./pages/__Noticias2"
// import Noticias3 from "./pages/__Noticias3"
// import Noticias4 from "./pages/__Noticias4"
// import Imagenes1 from "./pages/Imagenes1"
// import Imagenes2 from "./pages/Imagenes2"
//import Galeria from "./Components/Galeria"

import { SpeedInsights } from "@vercel/speed-insights/react";

// import Jubilados from "./Components/Jubilados"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import Home from "./pages/Home";
import Propuestas from "./pages/Propuestas"
import Eventos from "./pages/Evento"
import Jubilados from "./pages/Jubilados"
import EnConstruccion from "./pages/EnConstruccion"
import ObraSocial from "./pages/ObraSocial"
import Lista from "./Components/Lista"
import LinksInteres from "./pages/LinksInteres"
import Novedades from "./Components/Novedades"
import BarraNavegacion from "./Components/BarraNavegacion"
import Header from "./Components/Header"
import { Routes, Route } from "react-router-dom"
import Sindicato from "./pages/Sindicato"
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
import Parana from "./pages/Parana"

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
        {/* <Route path="/novedades" element={<Novedades />} />
        <Route path="/noticia1" element={<Noticias1 />} />
        <Route path="/noticia2" element={<Noticias2 />} />
        <Route path="/noticia3" element={<Noticias3 />} />
        <Route path="/noticia4" element={<Noticias4 />} /> */}
        <Route path="/enconstruccion" element={<EnConstruccion />} />
        <Route path="/jubilados" element={<Jubilados />} />
        <Route path="/propuestas" element={<Propuestas />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/obrasocial" element={<ObraSocial />} />
        <Route path="/linksinteres" element={<LinksInteres />} />
        <Route path="/sindicato" element={<Sindicato />} />
        <Route path="/zonales" element={<Zonales />} />
        <Route path="/alcaraz" element={<Alcaraz />} />
        <Route path="/cerrito" element={<Cerrito />} />
        <Route path="/chajari" element={<Chajari />} />
        <Route path="/concepcionuruguay" element={<ConcepcionUruguay />} />
        <Route path="/concordia" element={<Concordia />} />
        <Route path="/costauruguay" element={<CostaUruguay />} />
        <Route path="/diamante" element={<Diamante />} />
        <Route path="/federal" element={<Federal />} />
        <Route path="/feliciano" element={<Feliciano />} />
        <Route path="/gualeguay" element={<Gualeguay />} />
        <Route path="/gualeguaychu" element={<Gualeguaychu />} />
        <Route path="/islas" element={<Islas />} />
        <Route path="/lapaz" element={<LaPaz />} />
        <Route path="/nogoya" element={<Nogoya />} />
        <Route path="/salvador" element={<SanSalvador />} />
        <Route path="/segui" element={<Segui />} />
        <Route path="/tala" element={<Tala />} />
        <Route path="/victoria" element={<Victoria />} />
        <Route path="/villaelisa" element={<VillaElisa />} />
        <Route path="/villaguay" element={<Villaguay />} />
        <Route path="/parana" element={<Parana />} />

        {/* <Route path="/imagenes1" element={<Imagenes1 />} />
        <Route path="/imagenes2" element={<Imagenes2 />} /> */}
        <Route path="/lista" element={<Lista />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* <Hero /> */}
      {/* <Eslogan /> */}
      {/* <Novedades /> */}
      {/* <Efemerides /> */}
      {/* <Galeria/> */}

      <Footer />
      <Analytics />
      <SpeedInsights />
    </>
  )
}

export default App
