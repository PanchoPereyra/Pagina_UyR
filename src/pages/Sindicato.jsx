import React from 'react';

function Sindicato() {
    return (
        // Contenedor principal de la página
        <div className="bg-gray-100 min-h-screen py-10 px-4 flex flex-col justify-center items-center font-sans">

            {/* Contenedor principal estilo tarjeta/folleto */}
            <div className="bg-white w-full max-w-lg rounded-[30px] shadow-xl overflow-hidden border border-gray-200 p-2 pb-6">

                {/* Cabecera Naranja */}
                <div className="bg-[#E65C23] text-white text-center py-4 rounded-t-[22px] rounded-b-[12px] mb-6">
                    <h1 className="text-4xl md:text-5xl font-black tracking-wide">
                        SINDICATO PRESENTE
                    </h1>
                </div>

                {/* Cuerpo del Folleto */}
                <div className="px-6 text-gray-900 text-[15px] leading-snug space-y-4">

                    {/* Lista de viñetas en cursiva y negrita */}
                    <ul className="list-none space-y-0.5 font-bold italic text-base">
                        <li>- Recuperar el sindicato como herramienta real</li>
                        <li>- Delegados y zonales activos</li>
                        <li>- Recorridas permanentes</li>
                        <li>- Espacios de encuentro</li>
                        <li>- Participación en salario</li>
                    </ul>

                    {/* Subtítulo en negrita */}
                    <div className="font-bold text-base pt-1">
                        Sindicato cercano y activo.
                    </div>

                    {/* Párrafos de Introducción */}
                    <p>
                        Nuestro eje principal es que el sindicato vuelva a estar cerca de los trabajadores y recupere su función real de representación. Se plantea que un sindicato alejado de la realidad diaria pierde capacidad para defender derechos y resolver problemas.
                    </p>

                    <p>
                        Proponemos que la conducción conozca concretamente la situación de cada trabajador:{' '}
                        <span className="bg-[#FFF200] px-1 font-bold">
                            condiciones laborales, problemas y propuestas.
                        </span>{' '}
                        Dirigentes alejados de la actividad cotidiana no pueden representar correctamente las necesidades reales.
                    </p>

                    <p>
                        Vamos a reforzar el rol de las comisiones ejecutivas y de los delegados. La idea es que no se limiten a actividades simbólicas o asistenciales, sino que escuchen, recorran las zonales y generen reuniones permanentes con autoridades y trabajadores.
                    </p>

                    <p>
                        Vamos a recuperar el sentido de pertenencia mediante{' '}
                        <span className="bg-[#FFF200] px-1 font-bold">
                            actividades deportivas, culturales y recreativas,
                        </span>{' '}
                        así como revalorizar el patrimonio sindical y celebraciones tradicionales.
                    </p>

                    {/* Párrafo destacado final en negrita */}
                    <p className="font-bold text-base pt-2">
                        El sindicato debe tener un rol activo en la discusión salarial, las condiciones de trabajo y las políticas viales de la provincia.
                    </p>

                </div>
            </div>

            {/* Botón de "Volver al inicio" abajo de la tarjeta */}
            <a
                href="/"               
                className="mt-8 px-8 py-2.5 bg-[#E65C23] text-white rounded-lg shadow hover:bg-orange-600 transition"
            >
                Volver al inicio
            </a>

           
        </div>
    );
}

export default Sindicato;