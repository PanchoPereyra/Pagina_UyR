import React from "react";
// Cambiamos Link por NavLink para poder usar estados activos dinámicos
import { NavLink, Link } from "react-router-dom"; 

function BarraNavegacion() {
    // Clases dinámicas para los enlaces de CELULAR
    const claseCelular = ({ isActive }) => 
        `py-1.5 px-0.5 rounded-lg transition-all ${
            isActive 
                ? "bg-orange-50 text-[#E65C23] font-extrabold" 
                : "text-gray-800 hover:bg-orange-50/50"
        }`;

    // Clases dinámicas para los enlaces de COMPUTADORA
    const clasePC = ({ isActive }) => 
        `px-4 py-2 rounded-xl transition-all duration-200 ${
            isActive 
                ? "bg-orange-50 text-[#E65C23] font-extrabold shadow-sm" 
                : "text-gray-800 hover:bg-orange-50 hover:text-[#E65C23]"
        }`;

    return (
        <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 border-b-2 border-[#E65C23] shadow-md transition-all">
            
            {/* =========================================================================
                1. VISTA PARA CELULARES (Grid en 2 filas fijas)
               ========================================================================= */}
            <div className="block md:hidden">
                {/* LOGO Y TEXTO COMPACTO */}
                <div className="px-4 pt-3 pb-2 border-b border-gray-100 flex items-center justify-center gap-3">
                    <img 
                        src="/imagenes/logo.png" 
                        alt="Logo Unión y Renovación" 
                        className="w-12 h-12 object-contain flex-shrink-0"
                    />
                    <div className="flex flex-col justify-center text-left">
                        <h1 className="text-base font-black text-black uppercase tracking-tight leading-tight">
                            Unión y Renovación
                        </h1>
                        <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">
                            SOEVER Lista 1
                        </p>
                    </div>
                </div>

                {/* MENÚ EN DOS FILAS EXACTAS CON DETECCIÓN ACTIVA */}
                <div className="bg-gray-50/50 px-2 py-2">
                    <nav className="grid grid-cols-4 gap-1 text-center text-xs font-bold">
                        <NavLink to="/" className={claseCelular}>Inicio</NavLink>
                        <NavLink to="/propuestas" className={claseCelular}>Propuestas</NavLink> 
                        <NavLink to="/eventos" className={claseCelular}>Eventos</NavLink>
                        <NavLink to="/jubilados" className={claseCelular}>Jubilados</NavLink>
                        <NavLink to="/sindicato" className={claseCelular}>Sindicato</NavLink>
                        <NavLink to="/linksinteres" className={claseCelular}>Enlaces de Interés</NavLink>
                        <NavLink to="/zonales" className={claseCelular}>Zonales</NavLink>
                        <NavLink to="/obrasocial" className={claseCelular}>Obra Social</NavLink>
                    </nav>
                    
                    {/* Botón Lista 1 centrado abajo en el celu */}
                    <div className="flex justify-center mt-2 px-2">
                        <Link to="/lista" className="w-full text-center bg-[#E65C23] text-white py-1.5 rounded-lg font-black text-xs uppercase tracking-wider shadow-sm active:bg-orange-600">
                            Lista 1
                        </Link>
                    </div>
                </div>
            </div>

            {/* =========================================================================
                2. VISTA PARA COMPUTADORAS (Enlaces dinámicos alineados)
               ========================================================================= */}
            <div className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 py-2.5">
                <div className="flex justify-center items-center">
                    <nav className="flex flex-wrap justify-center items-center gap-x-1 gap-y-2 text-base sm:text-lg font-bold">
                        
                        <NavLink to="/" className={clasePC}>
                            Inicio
                        </NavLink>

                        <NavLink to="/propuestas" className={clasePC}>
                            Propuestas
                        </NavLink> 

                        <NavLink to="/eventos" className={clasePC}>
                            Eventos
                        </NavLink>

                        <NavLink to="/jubilados" className={clasePC}>
                            Jubilados
                        </NavLink>

                        <NavLink to="/sindicato" className={clasePC}>
                            Sindicato
                        </NavLink>

                        <NavLink to="/linksinteres" className={clasePC}>
                            Enlaces de interés
                        </NavLink>

                        <NavLink to="/zonales" className={clasePC}>
                            Zonales
                        </NavLink>

                        <NavLink to="/obrasocial" className={clasePC}>
                            Obra Social
                        </NavLink>

                        {/* Botón Lista 1 destacado al final */}
                        <Link 
                            to="/lista" 
                            className="ml-3 px-5 py-2 bg-[#E65C23] text-white rounded-xl font-black text-sm uppercase tracking-wider shadow-sm hover:bg-orange-600 hover:shadow-md hover:scale-105 transition-all duration-200"
                        >
                            Lista 1
                        </Link>

                    </nav>
                </div>
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