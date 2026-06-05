import React from 'react';
import { Link } from 'react-router-dom';

//FUNCION
function Evento() {
    return (
        <div className="bg-gray-100 min-h-screen py-10 px-4 flex flex-col justify-center items-center font-sans gap-8">

            {/* Contenedor principal estilo tarjeta/folleto */}
            <div className="bg-white w-full max-w-lg rounded-[30px] shadow-xl overflow-hidden border border-gray-200 p-2 pb-6">

                {/* Cabecera Naranja */}
                <div className="bg-[#E65C23] text-white text-center py-4 rounded-t-[22px] rounded-b-[12px] mb-6 px-4">
                    <h1 className="text-3xl md:text-4xl font-black tracking-wide leading-tight uppercase">
                        Encuentro de Campaña
                    </h1>
                </div>

                {/* Cuerpo del Folleto */}
                <div className="px-6 text-gray-900 text-[15px] leading-snug space-y-4">

                    {/* Lista de viñetas en cursiva y negrita */}
                    <ul className="list-none space-y-0.5 font-bold italic text-base">
                        <li>- Compromiso y unidad</li>
                        <li>- Escuchar a los trabajadores</li>
                        <li>- Gremio fuerte, presente y activo</li>
                        <li>- Elecciones SOEVER 2026</li>
                    </ul>

                    {/* CORREGIDO: items-center para alinear todo horizontalmente al medio */}
                    <div className="flex flex-col items-center gap-4 pt-2 pb-1 w-full">
                        
                        {/* Texto resaltado en amarillo: text-center para centrar las líneas internas */}
                        <div className="bg-[#FFF200] px-4 py-2 font-bold text-base text-center w-full rounded-sm shadow-sm">
                            VIERNES 5 DE JUNIO • 18:30 HS<br />
                            Salta 141 – Obras Sanitarias, Paraná.
                        </div>

                        {/* ================= BOTÓN DE UBICACIÓN AL MEDIO ================= */}
                        <a
                            href="https://maps.app.goo.gl/cT7wTasWKW6eEMaQ8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto text-center px-6 py-2.5 bg-white text-[#E65C23] font-black text-xs rounded-xl border-2 border-[#E65C23] hover:bg-[#E65C23] hover:text-white transition-all duration-200 uppercase tracking-wide shadow-sm"
                        >
                            Ver Ubicación en Mapa
                        </a>
                    </div>

                    {/* Párrafos del comunicado */}
                    <p className="font-bold pt-2">
                        Compañeras y compañeros:
                    </p>

                    <p>
                        Los invitamos a participar del Encuentro de Campaña de Unión y Renovación, de cara a las Elecciones SOEVER 2026, que se llevarán a cabo el próximo viernes 12 de junio.
                    </p>

                    <p>
                        Un espacio para encontrarnos, dialogar sobre nuestras propuestas y seguir fortaleciendo este proyecto colectivo que recorre toda la provincia.
                    </p>

                    <p>
                        Con compromiso, participación y unidad, seguimos construyendo un gremio más fuerte, presente y activo.
                    </p>

                    <p className="font-bold text-center pt-2 text-base">
                        ¡Los esperamos!
                    </p>

                    {/* Cierre de Lista / Firma destacado al final */}
                    <div className="border-t border-gray-200 pt-4 text-center space-y-1">
                        <p className="font-black text-lg text-orange-600 uppercase tracking-wide">
                            Lista N° 1 – Unión y Renovación
                        </p>
                        <p className="font-bold text-gray-700 text-sm">
                            Federico Colominas – Candidato a Secretario General SOEVER 2026
                        </p>
                    </div>

                </div>
            </div>

            {/* BOTÓN DE RETORNO CORREGIDO CON LINK DE REACT ROUTER */}
            <a
                href="/"
                className="px-8 py-2.5 bg-[#E65C23] text-white rounded-lg shadow hover:bg-orange-600 transition"
            >
                Volver al inicio
            </a>
        </div>
    );
}

export default Evento;