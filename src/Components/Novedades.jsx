//IMPORT

//FUNCION
function Novedades() {
    return (

        <section className="bg-yellow-400 py-12 px-5">
            <div className="max-w-6xl mx-auto flex flex-col items-center gap-10">
                {/* <div class="bg-yellow-400 flex justify-center p-7 gap-10 flex-col"> */}
                {/* <div class="bg-yellow-400 flex flex-col items-center p-7 gap-10"> */}

                    {/* EMPIEZAN LOS DIV DE LO QUE ES TITULO */}
                    {/* <div class="flex justify-center gap-10">
                    <div class="">
                        <h2 class="text-black text-6xl font-extrabold leading-none">
                            Últimas <br /> Novedades
                        </h2>
                    </div> */}

                    <div class="flex flex-col md:flex-row justify-center items-center md:items-start text-center md:text-left gap-10">
                        <div>
                            {/* <h2 class="text-black text-4xl sm:text-5xl md:text-6xl font-extrabold leading-none"> */}
                            <h2 class="text-black text-4xl sm:text-5xl md:text-6xl font-extrabold leading-none">
                                Últimas <br /> Novedades
                            </h2>
                        </div>


                        <div class="">
                            <p class="text-black italic text-xl max-w-sm p-6">
                                Mantente informado sobre las últimas noticias y comunicados del sindicato.
                            </p>
                        </div>
                    </div>

                    {/* EMPIEZAN LOS DIV DE LAS TARJETAS */}
                    <div class="gap-5 grid grid-cols-1 md:grid-cols-4">

                        {/* TARJETA 1 */}
                        <div class="bg-orange-600/65 p-6 rounded-lg shadow-md text-left">
                            <div class="flex items-center justify-between mb-4">
                                {/* <span class="bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full">Negociación</span> */}
                                <span class="text-sm text-white">1 de Enero, 2024</span>
                            </div>
                            <h3 class="text-lg font-bold mb-2 text-white">Prueba novedad uno 2024</h3>
                            <p class="text-white mb-4">Se ha alcanzado un acuerdo histórico que beneficia a todos los trabajadores del sector.</p>
                            <a href="/noticia1" class="text-yellow-300 hover:underline text-sm font-medium ">Leer más →</a>
                        </div>

                        {/* TARJETA 2 */}
                        <div class="bg-[#E65C23] p-6 rounded-lg shadow-md text-left">
                            <div class="flex items-center justify-between mb-4">
                                <span class="text-sm text-white">2 de Enero, 2024</span>
                            </div>
                            <h3 class="text-lg font-bold mb-2 text-white">Prueba novedad dos 2024</h3>
                            <p class="text-white mb-4">Se ha alcanzado un acuerdo histórico que beneficia a todos los trabajadores del sector.</p>
                            {/* <a href="#" class="text-yellow-300 hover:underline text-sm font-medium ">Leer más →</a> */}
                            <a href="/noticia2" class="text-yellow-300 hover:underline text-sm font-medium ">Leer más →</a>
                        </div>

                        {/* TARJETA 3 */}
                        <div class="bg-[#E65C23] p-6 rounded-lg shadow-md text-left">
                            <div class="flex items-center justify-between mb-4">
                                {/* <span class="bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full">Negociación</span> */}
                                <span class="text-sm text-white">3 de Enero, 2024</span>
                            </div>
                            <h3 class="text-lg font-bold mb-2 text-white">Prueba novedad tres 2024</h3>
                            <p class="text-white mb-4">Se ha alcanzado un acuerdo histórico que beneficia a todos los trabajadores del sector.</p>
                            {/* <a href="#" class="text-yellow-300 hover:underline text-sm font-medium ">Leer más →</a> */}
                            <a href="/noticia3" class="text-yellow-300 hover:underline text-sm font-medium ">Leer más →</a>
                        </div>

                        {/* TARJETA 4 */}
                        <div class="bg-orange-600/65 p-6 rounded-lg shadow-md text-left">
                            <div class="flex items-center justify-between mb-4">
                                <span class="text-sm text-white">4 de Enero, 2024</span>
                            </div>
                            <h3 class="text-lg font-bold mb-2 text-white">Prueba novedad cuatro 2024</h3>
                            <p class="text-white mb-4">Se ha alcanzado un acuerdo histórico que beneficia a todos los trabajadores del sector.</p>
                            {/* <a href="#" class="text-yellow-300 hover:underline text-sm font-medium ">Leer más →</a> */}
                            <a href="/noticia4" class="text-yellow-300 hover:underline text-sm font-medium ">Leer más →</a>
                        </div>
                    </div>

                </div>
            {/* </div> */}
        </section>
    )
}

//EXPORTS
export default Novedades