//IMPORT


//FUNCION
function BarraNavegacion() {
    return (
            <header className="bg-gradient-to-r from-orange-50 to-orange-500/65 shadow-sm flex justify-end pr-5 pt-2 pb-2">
                {/* MENU */}
                <nav className="flex space-x-6 text-gray-950 text-xl font-semibold">
                    <a href="#" className="">Inicio</a>
                    <a href="#" className="">Novedades</a>
                    <a href="#" className="">Eventos</a>
                    {/* <a href="#" className="hover:text-blue-600">Galería</a> */}
                    <a href="#" className="">Efemérides</a>
                </nav>
            </header>
    )
}

//EXPORTS
export default BarraNavegacion