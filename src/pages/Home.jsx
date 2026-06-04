//IMPORT
import Hero from "../Components/Hero"
import Lista from "../Components/Lista"
import Header from "../Components/Header"
// import Eslogan from "../Components/__Eslogan"
// import Novedades from "../Components/Novedades"
// import Jubilados from "../Components/Jubilados"
import ProximosEventos from "../Components/ProximosEventos"
// import Galeria from "../Components/Galeria"




//FUNCION
function Home() {
    return (
        <div>

            <Hero />
            <Lista />
            <Header />
            {/* <Eslogan /> */}
            {/* <Novedades/> */}
            {/* <Jubilados /> */}
            <ProximosEventos/>
            {/* <Galeria /> */}
            {/* <Evento /> */}

        </div>
    )
}

//EXPORTS
export default Home