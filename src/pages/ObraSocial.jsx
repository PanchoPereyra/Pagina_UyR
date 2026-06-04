// //IMPORT


// //FUNCION
// function ObraSocial() {
//     //     return (
//     //         <div className="flex flex-col items-center justify-center text-center h-[80vh] px-4">
//     //             <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//     //                 OSPA
//     //             </h1>

//     //             <p className="text-gray-600 text-ellipsis max-w-md mb-8 text-lg text-justify text-justify leading-relaxed">
//     //                 La sección Obra Social será un espacio dedicado a centralizar toda la información, beneficios y servicios de salud disponibles para los afiliados. Nuestro objetivo es brindar una atención clara, accesible y cercana, para que cada afiliado y su familia puedan realizar consultas y gestiones de manera simple y segura.
//     //                 Muy pronto vas a poder encontrar:
//     //                 Información completa sobre la cobertura médica. Detalles de prestadores, sanatorios y especialidades disponibles. Acceso a trámites, autorizaciones y derivaciones. Beneficios adicionales y programas de salud. Novedades, comunicados y actualizaciones importantes. Canales de contacto directo con el área de Obra Social.
//     //                 Estamos trabajando para brindarte un servicio claro, ágil y cercano.
//     //                 Esta sección se habilitará en las próximas actualizaciones.
//     //             </p>

//     //             <a
//     //                 href="/inicio"
//     //                 className="px-6 py-2 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 transition"
//     //             >
//     //                 Volver al inicio
//     //             </a>
//     //         </div>
//     //     )
//     // }

//     // ✔ min-h-screen → Se adapta a cualquier altura de pantalla
//     // ✔ max-w-xl → El texto no se estira de más en pantallas grandes
//     // ✔ text-base sm:text-lg → Tamaño de texto más grande en pantallas medianas
//     // ✔ Espaciado mejor organizado
//     // ✔ Compatible 100% con móviles
//     // ✔ Justificado real + buen interlineado (leading-relaxed)
//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen px-4 py-10">

//             {/* Título */}
//             {/* <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//                 OSPA
//             </h1> */}

//             {/* Mensaje */}
//             {/* <p className="text-gray-700 max-w-xl text-base sm:text-lg text-justify leading-relaxed mb-8">
//             La sección Obra Social será un espacio dedicado a centralizar toda la información, beneficios y servicios de salud disponibles para los afiliados. Nuestro objetivo es brindar una atención clara, accesible y cercana, para que cada afiliado y su familia puedan realizar consultas y gestiones de manera simple y segura.

//             <br /><br />
//             Muy pronto vas a poder encontrar información completa sobre la cobertura médica, detalles de prestadores, sanatorios y especialidades disponibles; acceso a trámites, autorizaciones y derivaciones; beneficios adicionales y programas de salud; novedades, comunicados y actualizaciones importantes; y canales de contacto directo con el área de Obra Social.

//             <br /><br />
//             Estamos trabajando para brindarte un servicio claro, ágil y cercano.  
//             Esta sección se habilitará en las próximas actualizaciones.
//         </p> */}

//             <div className="flex justify-center mt-1.5">
//                 <img
//                     src="/imagenes-propuesta/4-100.jpeg"
//                     alt="Lista Candidata SOEVER"
//                     className="w-full max-w-5xl rounded-2xl shadow-lg"
//                 />
//             </div>

//             {/* Botón */}
//             <a
//                 href="/inicio"
//                 className="px-6 py-2 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 transition"
//             >
//                 Volver al inicio
//             </a>
//         </div>
//     );
// }


import React from 'react';

function ObraSocial() {
    return (
        // Contenedor principal de la página
        <div className="bg-gray-100 min-h-screen py-10 px-4 flex flex-col justify-center items-center font-sans">

            {/* Contenedor principal estilo tarjeta/folleto */}
            <div className="bg-white w-full max-w-lg rounded-[30px] shadow-xl overflow-hidden border border-gray-200 p-2 pb-6">

                <div className="bg-[#E65C23] text-white text-center py-4 rounded-t-[22px] rounded-b-[12px] mb-6">
                    <h1 className="text-4xl md:text-5xl font-black tracking-wide">
                        OSPA
                    </h1>
                </div>
                {/* <p className="text-gray-600 text-center max-w-md mx-auto mb-8 text-lg italic leading-relaxed">
                    La sección Obra Social será un espacio dedicado a centralizar toda la información, beneficios y servicios de salud disponibles para los afiliados. Nuestro objetivo es brindar una atención clara, accesible y cercana, para que cada afiliado y su familia puedan realizar consultas y gestiones de manera simple y segura.
                    Muy pronto vas a poder encontrar:
                    Información completa sobre la cobertura médica. Detalles de prestadores, sanatorios y especialidades disponibles. Acceso a trámites, autorizaciones y derivaciones. Beneficios adicionales y programas de salud. Novedades, comunicados y actualizaciones importantes. Canales de contacto directo con el área de Obra Social.
                </p> */}

                <p className="text-gray-600 text-justify max-w-md mx-auto mb-8 text-lg italic leading-relaxed">
                    La sección Obra Social será un espacio dedicado a centralizar toda la información, beneficios y servicios de salud disponibles para los afiliados. Nuestro objetivo es brindar una atención clara, accesible y cercana, para que cada afiliado y su familia puedan realizar consultas y gestiones de manera simple y segura.
                    Muy pronto vas a poder encontrar:
                    Información completa sobre la cobertura médica. Detalles de prestadores, sanatorios y especialidades disponibles. Acceso a trámites, autorizaciones y derivaciones. Beneficios adicionales y programas de salud. Novedades, comunicados y actualizaciones importantes. Canales de contacto directo con el área de Obra Social.
                </p>

                {/* Cabecera Naranja */}
                <div className="bg-[#E65C23] text-white text-center py-4 rounded-t-[22px] rounded-b-[12px] mb-6">
                    <h1 className="text-4xl md:text-5xl font-black tracking-wide">
                        PROPUESTA OBRA SOCIAL
                    </h1>
                </div>

                {/* Cuerpo del Folleto */}
                <div className="px-6 text-gray-900 text-[15px] leading-snug space-y-4">

                    {/* Lista de viñetas en cursiva y negrita */}
                    <ul className="list-none space-y-0.5 font-bold italic text-base">
                        <li>- Transparencia total</li>
                        <li>- Defensa legal del PMO</li>
                        <li>- Convenios de salud</li>
                        <li>- Atención primaria accesible</li>
                        <li>- Cobertura integral</li>
                    </ul>

                    {/* Texto resaltado en amarillo */}
                    <div className="inline-block bg-[#FFF200] px-2 py-0.5 font-bold text-base my-2">
                        La salud es un derecho.
                    </div>

                    {/* Párrafos de Introducción */}
                    <p>
                        La obra social pertenece a todos los trabajadores y no a dirigentes o estructuras particulares. Sostenemos que el sindicato tiene la obligación de defender ese patrimonio y priorizar la salud del afiliado y su familia.
                    </p>

                    <p>
                        Hay una diferencia entre la conducción sindical y las autoridades de OSPA VIAL, algo importante para exigir transparencia y evitar que los problemas de gestión recaigan sobre los trabajadores.
                    </p>

                    {/* Sección: Transparencia en las cuentas */}
                    <div className="pt-2">
                        <h2 className="font-bold text-base mb-1">Transparencia en las cuentas</h2>
                        <ul className="list-none space-y-0.5">
                            <li>Patrimonio real de la obra social.</li>
                            <li>Pasivos existentes.</li>
                            <li>Prestaciones suspendidas.</li>
                            <li>Convenios vigentes y discontinuados.</li>
                            <li>Reclamos pendientes ante la Superintendencia de Servicios de Salud.</li>
                            <li>Defensa jurídica de prestaciones</li>
                        </ul>
                    </div>

                    <p>
                        Vamos a brindar un servicio jurídico sindical para reclamar administrativamente o judicialmente prestaciones médicas no cubiertas.
                    </p>

                    {/* Sección: Prestaciones a garantizar */}
                    <div className="pt-1">
                        <h3 className="font-bold mb-1">Entre las principales prestaciones garantizar</h3>
                        <ul className="list-none space-y-0.5">
                            <li>Consultas médicas.</li>
                            <li>Internaciones.</li>
                            <li>Estudios y diagnósticos.</li>
                            <li>Salud mental.</li>
                            <li>Medicamentos.</li>
                            <li>Programas especiales como diabetes, oncología o HIV.</li>
                            <li>Fertilización asistida.</li>
                            <li>Discapacidad.</li>
                            <li>Prótesis, rehabilitation y terapias.</li>
                            <li className="font-bold pt-1">Convenios con centros de salud</li>
                        </ul>
                    </div>

                    <p>
                        Vamos a firmar convenios para garantizar atención primaria, controles básicos, estudios simples, vacunación y derivaciones médicas. El objetivo es acercar la atención al trabajador y acelerar respuestas.
                    </p>

                    {/* Sección: Consumos problemáticos */}
                    <div className="pt-2">
                        <h2 className="font-bold text-base mb-1">Consumos problemáticos</h2>
                        <p>
                            Abordaremos los consumos problemáticos como un problema de salud y no disciplinario. Apuntamos a la detección temprana, acompañamiento, confidencialidad y articulación entre salud y recursos humanos.
                        </p>
                    </div>

                    {/* Sección: Campañas de prevención */}
                    <div className="pt-2">
                        <h2 className="font-bold text-base mb-1">Campañas de prevención</h2>
                        <p>
                            Haremos campañas provinciales de salud con controles clínicos, vacunación, prevención de enfermedades, salud mental, hábitos saludables y prevención de accidentes laborales.
                        </p>
                    </div>

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

export default ObraSocial;