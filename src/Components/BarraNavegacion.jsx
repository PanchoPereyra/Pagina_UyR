//IMPORT
import { Link } from "react-router-dom";
//FUNCION
function BarraNavegacion() {
    return (
        // <header className="bg-gradient-to-r from-orange-50 to-orange-500/65 shadow-sm flex justify-end pr-5 pt-2 pb-2">
        <header className="bg-gradient-to-r from-orange-50 to-orange-500/65 shadow-sm flex flex-col sm:flex-row sm:justify-end sm:items-center pr-5 pt-2 pb-2">

            {/* MENU */}
            {/* <nav className="flex space-x-6 text-gray-950 text-xl font-semibold"> */}
            <nav className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-950 text-lg sm:text-xl font-semibold">
                <a href="/" className="">Inicio</a>
                <a href="/novedades" className="">Novedades</a>
                <a href="/enconstruccion" className="">Eventos</a>
                <a href="/enconstruccion" className="">Efemérides</a>
                <a href="/obrasocial" className="">Obra Social</a>
                {/* <a href="#" className="hover:text-blue-600">Galería</a> */}

                {/* <Link to="/">Inicio</Link>
                <Link to="/novedades">Novedades</Link>
                <Link to="/eventos">Eventos</Link>
                <Link to="/efemerides">Efemerides</Link> */}

            </nav>
        </header>
    )
}

//EXPORTS
export default BarraNavegacion