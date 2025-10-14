// De aca se borra hasta..
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// acá

import Efemerides from "./Components/Efemerides"
import Footer from "./Components/Footer"
import Galeria from "./Components/Galeria"

import Hero from "./Components/Hero"
import Eslogan from "./Components/Eslogan"
import Novedades from "./Components/Novedades"
import BarraNavegacion from "./Components/BarraNavegacion"
import Header from "./Components/Header"


function App() {
  // const [count, setCount] = useState(0) - Se borra

  return (
    <>
      <Header />
      <BarraNavegacion />
      <Hero />
      <Eslogan />
      <Novedades />
      <Efemerides />
      {/* <Galeria/> */}
      <Footer />

    </>
  )
}

export default App
