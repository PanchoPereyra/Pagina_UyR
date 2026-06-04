
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

                    {/* Texto resaltado en amarillo con los datos clave de la convocatoria */}
                    <div className="inline-block bg-[#FFF200] px-2 py-1 font-bold text-base my-2 text-left">
                        VIERNES 5 DE JUNIO • 18:30 HS<br />
                        Salta 141 – Obras Sanitarias, Paraná.
                    </div>

                    {/* Párrafos del comunicado */}
                    <p className="font-bold">
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

            <a
                href="/"
                className="px-6 py-2 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 transition"
            >
                Volver al inicio
            </a>
        </div>
    )
}
export default Evento;