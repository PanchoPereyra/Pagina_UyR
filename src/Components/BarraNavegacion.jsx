import React from "react";
// Usamos Link para navegación interna rápida sin recargar la página
import { Link } from "react-router-dom"; 

function BarraNavegacion() {
    return (
        <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b-2 border-[#E65C23] shadow-md transition-all">
            {/* Contenedor principal: En PC justifica al centro, en Celular permite desborde horizontal */}
            <div className="max-w-7xl mx-auto px-2 sm:px-6 py-2 flex md:justify-center items-center overflow-x-auto scrollbar-none">
                
                {/* MENU */}
                {/* 'flex-nowrap' en celular evita que se vaya para abajo. 'md:flex-wrap' en PC mantiene tu diseño original */}
                {/* 'whitespace-nowrap' clave para que el texto de los botones no se corte en dos líneas */}
                <nav className="flex flex-nowrap md:flex-wrap items-center gap-x-1 sm:gap-x-2 pb-1 md:pb-0 text-gray-800 text-sm sm:text-base md:text-lg font-bold whitespace-nowrap">
                    
                    <Link to="/" className="px-3 py-1.5 md:px-4 md:py-2 rounded-xl hover:bg-orange-50 hover:text-[#E65C23] transition-all duration-200">
                        Inicio
                    </Link>

                    <Link to="/propuestas" className="px-3 py-1.5 md:px-4 md:py-2 rounded-xl hover:bg-orange-50 hover:text-[#E65C23] transition-all duration-200">
                        Propuestas
                    </Link> 

                    <Link to="/eventos" className="px-3 py-1.5 md:px-4 md:py-2 rounded-xl hover:bg-orange-50 hover:text-[#E65C23] transition-all duration-200">
                        Eventos
                    </Link>

                    <Link to="/jubilados" className="px-3 py-1.5 md:px-4 md:py-2 rounded-xl hover:bg-orange-50 hover:text-[#E65C23] transition-all duration-200">
                        Jubilados
                    </Link>

                    <Link to="/sindicato" className="px-3 py-1.5 md:px-4 md:py-2 rounded-xl hover:bg-orange-50 hover:text-[#E65C23] transition-all duration-200">
                        Sindicato
                    </Link>

                    <Link to="/linksinteres" className="px-3 py-1.5 md:px-4 md:py-2 rounded-xl hover:bg-orange-50 hover:text-[#E65C23] transition-all duration-200">
                        Links de interés
                    </Link>

                    <Link to="/zonales" className="px-3 py-1.5 md:px-4 md:py-2 rounded-xl hover:bg-orange-50 hover:text-[#E65C23] transition-all duration-200">
                        Zonales
                    </Link>

                    <Link to="/obrasocial" className="px-3 py-1.5 md:px-4 md:py-2 rounded-xl hover:bg-orange-50 hover:text-[#E65C23] transition-all duration-200">
                        Obra Social
                    </Link>

                    {/* BOTÓN DESTACADO: LISTA 1 */}
                    <Link 
                        to="/lista" 
                        className="ml-1 md:ml-2 px-4 py-1.5 md:px-5 md:py-2 bg-[#E65C23] text-white rounded-xl font-black text-xs md:text-sm uppercase tracking-wider shadow-sm hover:bg-orange-600 hover:shadow-md hover:scale-105 transition-all duration-200"
                    >
                        Lista 1
                    </Link>

                </nav>
            </div>
        </header>
    );
}

export default BarraNavegacion;


// //IMPORT
// import { Link } from "react-router-dom";
// //FUNCION
// function BarraNavegacion() {
//     return (
//         // <header className="bg-gradient-to-r from-orange-50 to-orange-500/65 shadow-sm flex justify-end pr-5 pt-2 pb-2">
//         <header className="bg-gradient-to-r from-orange-50 to-orange-500/65 shadow-sm flex flex-col sm:flex-row sm:justify-end sm:items-center pr-5 pt-2 pb-2">

//             {/* MENU */}
//             {/* <nav className="flex space-x-6 text-gray-950 text-xl font-semibold"> */}
//             <nav className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-950 text-lg sm:text-xl font-semibold">
//                 <a href="/" className="">Inicio</a>

//                 {/* novedades lo cambiamos por propuestas */}
//                 <a href="/propuestas" className="">Propuestas</a> 

//                 <a href="/eventos" className="">Eventos</a>
//                 <a href="/jubilados" className="">Jubilados</a>
//                 {/* <a href="/enconstruccion" className="">En Actividad</a> */}
//                 <a href="/sindicato" className="">Sindicato</a>

//                 {/* <a href="/galeria" className="">Galería</a> */}
//                 <a href="/zonales" className="">Zonales</a>
                
//                 <a href="/lista" className="">Lista 1</a>

//                 <a href="/obrasocial" className="">Obra Social</a>
//                 {/* <a href="#" className="hover:text-blue-600">Galería</a> */}

//                 {/* <Link to="/">Inicio</Link>
//                 <Link to="/novedades">Novedades</Link>
//                 <Link to="/eventos">Eventos</Link>
//                 <Link to="/efemerides">Efemerides</Link> */}

//             </nav>
//         </header>
//     )
// }

// //EXPORTS
// export default BarraNavegacion