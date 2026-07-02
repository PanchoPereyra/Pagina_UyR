import React from "react";
// Cambiamos Link por NavLink para poder usar estados activos dinámicos
import { NavLink, Link } from "react-router-dom"; 

function BarraNavegacion() {
// Clases dinámicas para los enlaces de CELULAR con borde amarillo en hover
// Enlaces de CELULAR: solo estructura básica, el color lo maneja el index.css
const claseCelular = ({ isActive }) => 
    `py-1.5 px-2 rounded-lg border text-center block w-full transition-all duration-200 font-bold ${
        isActive 
            ? "!bg-yellow-500 !text-black !border-yellow-500 shadow-md" 
            : "!bg-transparent !text-neutral-400 !border-transparent hover:!bg-yellow-500 hover:!text-black hover:!border-yellow-500"
    }`;
    // Clases dinámicas para los enlaces de COMPUTADORA (Match exacto con la foto)
    // Clases dinámicas para los enlaces de COMPUTADORA con borde amarillo en hover
// Enlaces de COMPUTADORA: solo estructura básica
const clasePC = "px-4 py-2 rounded-xl border border-transparent transition-all duration-200 hover:bg-yellow-500 text-black";

    return (
        <header className="bg-black sticky top-0 z-50 border-b border-neutral-800 transition-all">
            
            {/* =========================================================================
                1. VISTA PARA CELULARES (Grid en 2 filas fijas sobre fondo negro)
               ========================================================================= */}
            <div className="block md:hidden">
                {/* LOGO Y TEXTO COMPACTO */}
                <div className="px-4 pt-3 pb-2 border-b border-neutral-900 flex items-center justify-center gap-3">
                    <img 
                        src="/imagenes/logo.png" 
                        alt="Logo SOEVER" 
                        className="w-12 h-12 object-contain flex-shrink-0"
                    />
                    <div className="flex flex-col justify-center text-left">
                        <h1 className="text-4xl font-black text-yellow-400 uppercase tracking-tight leading-tight">
                            S.O.E.V.E.R.
                        </h1>
                        <p className="text-[9px] font-bold text-yellow-400 uppercase tracking-widest">
                            Sindicato Empleados Viales de Entre Ríos
                        </p>
                    </div>
                </div>

                {/* MENÚ EN DOS FILAS EXACTAS CON DETECCIÓN ACTIVA */}
                <div className="bg-black px-2 py-2">
                    <nav className="grid grid-cols-4 gap-1 text-center text-xs font-bold">
                        <NavLink to="/" className={claseCelular}>Inicio</NavLink>
                        <NavLink to="/noticias" className={claseCelular}>Noticias</NavLink> 
                        <NavLink to="/eventos" className={claseCelular}>Nosotros</NavLink>
                        <NavLink to="/jubilados" className={claseCelular}>Beneficios</NavLink>
                        <NavLink to="/sindicato" className={claseCelular}>Afiliación</NavLink>
                        <NavLink to="/linksinteres" className={claseCelular}>Documentos</NavLink>
                        <NavLink to="/zonales" className={claseCelular}>Contacto</NavLink>
                        {/* <NavLink to="/obrasocial" className={claseCelular}>Obra Social</NavLink> */}
                    </nav>
                    
                    {/* Botón Lista 1 centrado abajo en el celu */}
                    {/* <div className="flex justify-center mt-2 px-2">
                        <Link to="/lista" className="w-full text-center bg-yellow-500 text-black py-1.5 rounded-lg font-black text-xs uppercase tracking-wider shadow-sm active:bg-yellow-600">
                            Lista 1
                        </Link>
                    </div> */}
                </div>
            </div>

            {/* =========================================================================
                2. VISTA PARA COMPUTADORAS (Enlaces dinámicos alineados estilo oscuro)
               ========================================================================= */}
            <div className="hidden md:block max-w-7xl mx-auto px-4 sm:px-6 py-2.5">
                <div className="flex justify-center items-center">
                    <nav className="flex flex-wrap justify-center items-center gap-x-1 gap-y-2 text-base font-bold">
                        
                        
                        <NavLink to="/" className={clasePC}>
                            Inicio
                        </NavLink>

                        <NavLink to="/noticias" className={clasePC}>
                            Noticias
                        </NavLink> 

                        <NavLink to="/eventos" className={clasePC}>
                            Nosotros
                        </NavLink>

                        <NavLink to="/jubilados" className={clasePC}>
                            Beneficios
                        </NavLink>

                        <NavLink to="/sindicato" className={clasePC}>
                            Afiliación
                        </NavLink>

                        <NavLink to="/linksinteres" className={clasePC}>
                            Documentos
                        </NavLink>

                        <NavLink to="/zonales" className={clasePC}>
                            Contacto
                        </NavLink>

                        {/* <NavLink to="/obrasocial" className={clasePC}>
                            Obra Social
                        </NavLink> */}

                        {/* Botón Lista 1 destacado al final (Amarillo con letras negras) */}
                        {/* <Link 
                            to="/lista" 
                            className="ml-3 px-5 py-2 bg-yellow-500 text-black rounded-xl font-black text-sm uppercase tracking-wider shadow-sm hover:bg-yellow-400 hover:shadow-md hover:scale-105 transition-all duration-200"
                        >
                            Lista 1
                        </Link> */}

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