import React from 'react';
import { Link } from 'react-router-dom';

function Evento() {
    return (
        <div className="bg-gray-100 min-h-screen py-10 px-4 flex flex-col justify-center items-center font-sans gap-8">

            {/* Contenedor principal expandido a 2 columnas en escritorio */}
            <div className="bg-white w-full max-w-4xl rounded-[30px] shadow-xl overflow-hidden border border-gray-200 p-2 md:p-4">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">

                    {/* COLUMNA IZQUIERDA: Todo el texto y la nota actual (Contenido del folleto) */}
                    <div className="flex flex-col justify-between p-2 pb-6 md:pb-2">

                        <div>
                            {/* Cabecera Naranja */}
                            <div className="bg-[#E65C23] text-white text-center py-4 rounded-t-[22px] rounded-b-[12px] mb-6 px-4">
                                <h1 className="text-xl md:text-2xl font-black tracking-wide leading-tight uppercase">
                                    ¡LLEGÓ EL MOMENTO DE ELEGIR EL FUTURO DE NUESTRO GREMIO!
                                </h1>
                            </div>

                            {/* Cuerpo del Folleto */}
                            <div className="px-2 text-gray-900 text-[15px] leading-snug space-y-4">

                                <p className="font-medium text-gray-700">
                                    Este viernes 12 de junio, las y los trabajadores tenemos una cita importante con la democracia sindical.
                                </p>

                                {/* BLOQUE DE DATOS CLAVE (Amarillo destacado) */}
                                <div className="flex flex-col items-center gap-3 pt-1 pb-1 w-full">
                                    <div className="bg-[#FFF200] px-4 py-3 font-black text-sm md:text-base text-center w-full rounded-xl shadow-sm text-gray-900 space-y-1">
                                        <p className="tracking-wide">🗳️ ELECCIONES SOEVER 2026</p>
                                        <p className="text-base md:text-lg">VIERNES 12 DE JUNIO • 08:00 HS</p>
                                        <p className="text-xs md:text-sm font-bold">📍 San Juan y Andrés Pazos — Sindicato SOEVER</p>
                                    </div>

                                    {/* Botón de Google Maps para llegar al Sindicato */}
                                    <a
                                        href="https://www.google.com/maps/search/?api=1&query=Sindicato+SOEVER+San+Juan+Parana"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full text-center px-6 py-2 bg-white text-[#E65C23] font-black text-xs rounded-xl border-2 border-[#E65C23] hover:bg-[#E65C23] hover:text-white transition-all duration-200 uppercase tracking-wide shadow-sm"
                                    >
                                        Ver Ubicación del Sindicato
                                    </a>
                                </div>

                                {/* Párrafos del comunicado */}
                                <div className="space-y-5 pt-2">

                                    <p className="text-center md:text-left text-gray-900 text-base font-extrabold tracking-tight leading-snug">
                                        Es tiempo de participar, de hacer oír nuestra voz y de construir juntos el gremio que queremos.
                                    </p>

                                    {/* Tarjeta de testimonio/glosa institucional */}
                                    <div className="relative bg-orange-50/70 border-l-4 border-[#E65C23] p-4 rounded-r-2xl shadow-sm my-2">
                                        <span className="absolute top-1 left-2 text-orange-200 text-4xl font-serif select-none pointer-events-none">“</span>
                                        <p className="font-bold italic text-gray-800 text-xs md:text-sm pl-4 leading-relaxed relative z-10">
                                            La participación de cada compañera y compañero fortalece nuestra organización y nos permite seguir avanzando con compromiso, transparencia y trabajo.
                                        </p>
                                        <span className="absolute bottom-[-10px] right-3 text-orange-200 text-4xl font-serif select-none pointer-events-none">”</span>
                                    </div>

                                    {/* Píldoras de llamado a la acción (Call to Action) llamativas */}
                                    <div className="flex flex-col sm:flex-row gap-2 justify-center items-center pt-2 w-full">
                                        <div className="w-full sm:w-auto bg-orange-100/80 text-[#E65C23] font-black text-xs px-4 py-2 rounded-xl text-center uppercase tracking-wider border border-orange-200/60 shadow-sm">
                                            🗳️ Tu voto cuenta
                                        </div>
                                        <div className="w-full sm:w-auto bg-orange-600 text-white font-black text-xs px-4 py-2 rounded-xl text-center uppercase tracking-wider shadow-md">
                                            🟠 Hace la diferencia
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        {/* Cierre Político / Lista 1 */}
                        <div className="border-t border-gray-200 pt-4 mt-4 text-center space-y-2 px-2">
                            <div>
                                <p className="font-black text-lg text-orange-600 uppercase tracking-tight">
                                    Lista N° 1 – Naranja
                                </p>
                                <p className="font-bold text-gray-800 text-xs uppercase tracking-wider">
                                    Unión y Renovación
                                </p>
                            </div>

                            <div className="bg-gray-950 px-6 py-3 rounded-2xl border border-gray-800 inline-block shadow-lg transform hover:scale-105 transition-transform duration-200">
                                <p className="font-black text-white text-base md:text-lg tracking-wide uppercase">
                                    Fede Colominas
                                </p>
                                <div className="w-12 h-0.5 bg-[#E65C23] mx-auto my-1.5 rounded-full" />
                                <p className="text-[10px] md:text-xs font-black text-orange-400 uppercase tracking-widest">
                                    Secretario General SOEVER 2026
                                </p>
                            </div>

                            <p className="text-xs font-black text-orange-600 pt-0.5">
                                🟠 Porque si se quiere, se puede. 🟠
                            </p>
                        </div>

                    </div>

                    {/* COLUMNA DERECHA: El Afiche Oficial de la Lista Naranja */}
                    <div className="flex items-center justify-center bg-gray-50 rounded-2xl overflow-hidden p-2 md:p-0">
                        <img
                            src="/imagenes-propuesta/afiche-votacion.jpeg"
                            alt="Afiche Elecciones Lista 1 Naranja Fede Colominas"
                            className="w-full h-full object-contain rounded-2xl max-h-[500px] md:max-h-full shadow-inner"
                        />
                    </div>

                </div>

            </div>

            {/* BOTÓN DE RETORNO CORREGIDO CON LINK DE REACT ROUTER */}
            <Link
                to="/"
                className="px-8 py-2.5 bg-[#E65C23] text-white rounded-lg shadow hover:bg-orange-600 transition"
               
            >
                Volver al inicio
            </Link>
        </div>
    );
}

export default Evento;