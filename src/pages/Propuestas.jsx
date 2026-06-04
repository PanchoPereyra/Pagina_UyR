import React from 'react';

function Propuestas() {
    return (
        // Contenedor padre UNICO que envuelve a ambas tarjetas y al botón
        <div className="bg-gray-100 min-h-screen py-10 px-4 flex flex-col justify-center items-center font-sans gap-10">

            {/* ================= SALARIO ================= */}
            <div className="bg-white w-full max-w-lg rounded-[30px] shadow-xl overflow-hidden border border-gray-200 p-2 pb-6">

                {/* Cabecera Naranja */}
                <div className="bg-[#E65C23] text-white text-center py-4 rounded-t-[22px] rounded-b-[12px] mb-6">
                    <h1 className="text-4xl md:text-5xl font-black tracking-wide uppercase">
                        SALARIO
                    </h1>
                </div>

                {/* Cuerpo del Folleto */}
                <div className="px-6 text-gray-900 text-[15px] leading-snug space-y-4">

                    {/* Lista de viñetas en cursiva y negrita */}
                    <ul className="list-none space-y-0.5 font-bold italic text-base">
                        <li>- Fortalecer salario básico</li>
                        <li>- Mejor jubilación</li>
                        <li>- Igualar otras provincias</li>
                        <li>- Reconocer funciones</li>
                    </ul>

                    {/* Texto resaltado en amarillo */}
                    <div className="inline-block bg-[#FFF200] px-2 py-0.5 font-bold text-base my-2">
                        Justicia salarial real.
                    </div>

                    {/* Párrafos de Introducción */}
                    <p>
                        Actualmente entre el 60 % y el 75 % del salario de los trabajadores se compone de adicionales, lo que debilita el básico y perjudica jubilaciones, licencias y otros derechos.
                    </p>

                    <p>
                        Fortalecer el salario básico tomando como ejemplo experiencias de Santa Fe y Chaco, donde se avanzó en recomposición salarial.
                    </p>

                    <p>
                        Corregir la situación de quienes subrogan una Clase Vial para que cobren antigüedad en función de la categoría efectivamente desempeñada.
                    </p>

                    {/* SECCIÓN: JUBILADOS */}
                    <div className="pt-2">
                        <h2 className="font-bold text-base mb-1">"Jubilados"</h2>
                        <p className="mb-2">
                            Se propone crear espacios específicos para jubilados, tanto físicos como institucionales. Entre las medidas principales aparecen:
                        </p>
                        <ul className="list-none space-y-1 pl-1 font-medium">
                            <li>• Readecuar instalaciones para actividades y encuentros.</li>
                            <li>• Crear una subsecretaría del jubilado.</li>
                            <li>• Brindar asesoría legal gratuita.</li>
                            <li>• Organizar peñas, actividades culturales y turismo.</li>
                            <li>• Generar cursos dictados por jubilados.</li>
                            <li>• Priorizar hijos y nietos de viales en registros de ingreso.</li>
                            <li>• Reforzar el salario básico para sostener el 82 % móvil.</li>
                        </ul>
                    </div>

                    <p className="pt-1">
                        Los jubilados no pueden quedar aislados y deben seguir siendo parte activa de la vida sindical.
                    </p>

                    {/* SECCIÓN: ZONALES */}
                    <div className="pt-2">
                        <h2 className="font-bold text-base mb-1">"Zonales"</h2>
                        <p>
                            Las zonales deben ser verdaderos centros de representación sindical. Proponemos más presencia territorial, reuniones permanentes, formación sindical y participación de toda la conducción en el interior de la provincia.
                        </p>
                    </div>

                    <p>
                        Todas las secretarías sindicales deben trabajar en las zonales y no solo en Paraná. Muchos trabajadores del interior ni siquiera conocen a quienes ocupan cargos importantes.
                    </p>

                    <p>
                        Proponemos que cada zonal tenga sede propia, actividades culturales, deportivas y de formación, con acceso igualitario para todos los afiliados.
                    </p>

                    <p>
                        Los nuevos ingresos deben destinarse prioritariamente a zonales y talleres, especialmente técnicos, obreros y de servicios.
                    </p>

                </div>
            </div>


            {/* ================= DEFENSA DPV ================= */}
            <div className="bg-white w-full max-w-lg rounded-[30px] shadow-xl overflow-hidden border border-gray-200 p-2 pb-6">

                {/* Cabecera Naranja */}
                <div className="bg-[#E65C23] text-white text-center py-4 rounded-t-[22px] rounded-b-[12px] mb-6 px-4">
                    <h1 className="text-3xl md:text-4xl font-black tracking-wide leading-tight uppercase">
                        Defensa y Fortalecimiento<br />de nuestra DPV
                    </h1>
                </div>

                {/* Cuerpo del Folleto */}
                <div className="px-6 text-gray-900 text-[15px] leading-snug space-y-4">

                    {/* Lista de viñetas en cursiva y negrita */}
                    <ul className="list-none space-y-0.5 font-bold italic text-base">
                        <li>- Recursos para zonales y talleres</li>
                        <li>- Compra de maquinaria</li>
                        <li>- Ingreso de personal</li>
                        <li>- Prioridad hijos de trabajadores</li>
                    </ul>

                    {/* Texto resaltado en amarillo */}
                    <div className="inline-block bg-[#FFF200] px-2 py-0.5 font-bold text-base my-2">
                        Base fuerte = Institución fuerte.
                    </div>

                    {/* Párrafo de Introducción */}
                    <p>
                        Proponemos un programa de fortalecimiento institucional para la Dirección Provincial de Vialidad basado en leyes y medidas que prioricen a las zonales y talleres como núcleo de funcionamiento.
                    </p>

                    {/* Sección: Primero */}
                    <div className="pt-1">
                        <h2 className="font-bold text-base mb-0.5">Primero</h2>
                        <p>
                            Buscaremos que las zonales tengan más poder de decisión mediante presupuestos participativos, órganos consultivos y más recursos para obras por administración y conservación vial.
                        </p>
                    </div>

                    {/* Sección: Segundo */}
                    <div className="pt-1">
                        <h2 className="font-bold text-base mb-0.5">Segundo</h2>
                        <p>
                            Propondremos destinar parte del presupuesto anual a la compra progresiva de maquinaria y equipamiento, como motoniveladoras, tractores, retroexcavadoras y herramientas para talleres.
                        </p>
                    </div>

                    {/* Sección: Tercero */}
                    <div className="pt-1">
                        <h2 className="font-bold text-base mb-0.5">Tercero</h2>
                        <p>
                            Fortalecer el recurso humano mediante ingreso de personal técnico, obrero y de servicios para zonales y talleres. También incorpora prioridad para hijos de trabajadores viales y capacitación a cargo del sindicato.
                        </p>
                    </div>

                </div>
            </div>

            {/* Botón de "Volver al inicio" abajo de todo */}
              <a
                href="/"
                className="px-6 py-2 bg-[#E65C23] text-white rounded-lg shadow hover:bg-orange-600 transition"
            >
                Volver al inicio
            </a>

        </div>


    );
}

//EXPORTS
export default Propuestas;