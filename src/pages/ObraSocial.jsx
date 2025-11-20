//IMPORT


//FUNCION
function ObraSocial() {
//     return (
//         <div className="flex flex-col items-center justify-center text-center h-[80vh] px-4">

    
//             <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
//                 OSPA
//             </h1>


//             <p className="text-gray-600 text-ellipsis max-w-md mb-8 text-lg text-justify text-justify leading-relaxed">
           
//                 La sección Obra Social será un espacio dedicado a centralizar toda la información, beneficios y servicios de salud disponibles para los afiliados. Nuestro objetivo es brindar una atención clara, accesible y cercana, para que cada afiliado y su familia puedan realizar consultas y gestiones de manera simple y segura.

//                 Muy pronto vas a poder encontrar:

//                 Información completa sobre la cobertura médica. Detalles de prestadores, sanatorios y especialidades disponibles. Acceso a trámites, autorizaciones y derivaciones. Beneficios adicionales y programas de salud. Novedades, comunicados y actualizaciones importantes. Canales de contacto directo con el área de Obra Social.

//                 Estamos trabajando para brindarte un servicio claro, ágil y cercano.
//                 Esta sección se habilitará en las próximas actualizaciones.
//             </p>


//             <a
//                 href="/inicio"
//                 className="px-6 py-2 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 transition"
//             >
//                 Volver al inicio
//             </a>
//         </div>
//     )
// }

// ✔ min-h-screen → Se adapta a cualquier altura de pantalla
// ✔ max-w-xl → El texto no se estira de más en pantallas grandes
// ✔ text-base sm:text-lg → Tamaño de texto más grande en pantallas medianas
// ✔ Espaciado mejor organizado
// ✔ Compatible 100% con móviles
// ✔ Justificado real + buen interlineado (leading-relaxed)
return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-10">

        {/* Título */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            OSPA
        </h1>

        {/* Mensaje */}
        <p className="text-gray-700 max-w-xl text-base sm:text-lg text-justify leading-relaxed mb-8">
            La sección Obra Social será un espacio dedicado a centralizar toda la información, beneficios y servicios de salud disponibles para los afiliados. Nuestro objetivo es brindar una atención clara, accesible y cercana, para que cada afiliado y su familia puedan realizar consultas y gestiones de manera simple y segura.

            <br /><br />
            Muy pronto vas a poder encontrar información completa sobre la cobertura médica, detalles de prestadores, sanatorios y especialidades disponibles; acceso a trámites, autorizaciones y derivaciones; beneficios adicionales y programas de salud; novedades, comunicados y actualizaciones importantes; y canales de contacto directo con el área de Obra Social.

            <br /><br />
            Estamos trabajando para brindarte un servicio claro, ágil y cercano.  
            Esta sección se habilitará en las próximas actualizaciones.
        </p>

        {/* Botón */}
        <a
            href="/inicio"
            className="px-6 py-2 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 transition"
        >
            Volver al inicio
        </a>
    </div>
);
}


//EXPORTS
export default ObraSocial