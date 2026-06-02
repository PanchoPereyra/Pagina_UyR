//IMPORT
import Hero from "../Components/Hero"
import Lista from "../Components/Lista"
import Header from "../Components/Header"
import Eslogan from "../Components/Eslogan"
import Novedades from "../Components/Novedades"
import Efemerides from "../Components/Efemerides"
import ProximosEventos from "../Components/ProximosEventos"
// import Galeria from "../Components/Galeria"

//FUNCION
function Home() {
    return (
        <div>
            <Hero />
            <Lista />
            <Header />
            <Eslogan />
            <Novedades/>
            <Efemerides />
            <ProximosEventos/>
            {/* <Galeria /> */}

        </div>
    )
}

//EXPORTS
export default Home