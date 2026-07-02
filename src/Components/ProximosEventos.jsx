//IMPORT

//FUNCION
function ProximosEventos() {
    return (

        <section className="bg-yellow-400 py-12 px-5">
            <div className="max-w-6xl mx-auto flex flex-col items-center gap-10">

                <div class="flex flex-col md:flex-row justify-center items-center md:items-start text-center md:text-left gap-10">

                    <div>
                        {/* <h2 class="text-black text-4xl sm:text-5xl md:text-6xl font-extrabold leading-none"> */}
                        <h2 class="flex justify-center items-center text-center text-amber-400 [text-stroke:1px_red] [-webkit-text:stroke:1px_black] text-5xl sm:text-6xl md:text-7xl font-extrabold leading-none h-32">
                            Eventos
                        </h2>
                    </div>

                    <div class="">
                        <p class="text-black italic text-xl max-w-sm p-6">
                            Participa en las actividades y encuentros de nuestra comunidad sindical.
                        </p>
                    </div>

                </div>
                <a href="/eventos" class="text-black hover:underline text-sm font-medium ">Leer más →</a>
            </div>
        </section>
    )
}

//EXPORTS
export default ProximosEventos