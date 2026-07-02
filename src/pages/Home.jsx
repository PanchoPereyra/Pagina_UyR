//IMPORT
import Hero from "../Components/Hero"
import Lista from "../Components/Lista"
import Header from "../Components/Header"
import ProximosEventos from "../Components/ProximosEventos"
import Noticias from "./Noticias"



//FUNCION
function Home() {
    return (
        <div>
            {/* Aca va lo que se muestra en la pantalla "inicio" */}
            <Hero />
            <Lista />
            <Header />
            <Noticias/>
            <ProximosEventos/>
        </div>
    )
}

//EXPORTS
export default Home