//IMPORT


//FUNCION
function Galeria() {
    return (
        <>
            <section class="py-16 ">
                <div class="max-w-6xl mx-auto px-4 text-center">
                    {/* <!-- Título --> */}
                    <h2 class="text-3xl font-bold mb-2">Galería de Fotos</h2>
                    <p class="text-gray-600 mb-10">
                        Momentos que reflejan nuestra lucha y unidad como organización
                    </p>

                    {/* GRID */}
                    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                        {/* TARJETA 1 */}
                        <div class="relative bg-gradient-to-r from-orange-500 to-orange-300 h-48 rounded-2xl shadow hover:scale-105 transition-transform flex items-center justify-center">
                            <span class="bg-black/60 text-white text-sm px-3 py-1 rounded">Asamblea 2023</span>
                        </div>

                        {/* TARJETA 2 */}
                        <div class="relative bg-gradient-to-r from-orange-500 to-orange-300 h-48 rounded-2xl shadow hover:scale-105 transition-transform flex items-center justify-center">
                            <span class="bg-black/60 text-white text-sm px-3 py-1 rounded">Día del Trabajador</span>
                        </div>

                        {/* TARJETA 3 */}
                        <div class="relative bg-gradient-to-r from-orange-500 to-orange-300 h-48 rounded-2xl shadow hover:scale-105 transition-transform flex items-center justify-center">
                            <span class="bg-black/60 text-white text-sm px-3 py-1 rounded">Capacitación laboral</span>
                        </div>

                        {/* TARJETA 4 */}
                        <div class="relative bg-gradient-to-r from-orange-500 to-orange-300 h-48 rounded-2xl shadow hover:scale-105 transition-transform flex items-center justify-center">
                            <span class="bg-black/60 text-white text-sm px-3 py-1 rounded">Marcha por los derechos</span>
                        </div>

                        {/* TARJETA 5 */}
                        <div class="relative bg-gradient-to-r from-orange-500 to-orange-300 h-48 rounded-2xl shadow hover:scale-105 transition-transform flex items-center justify-center">
                            <span class="bg-black/60 text-white text-sm px-3 py-1 rounded">Celebración aniversario</span>
                        </div>

                        {/* TARJETA 6 */}
                        <div class="relative bg-gradient-to-r from-orange-500 to-orange-300 h-48 rounded-2xl shadow hover:scale-105 transition-transform flex items-center justify-center">
                            <span class="bg-black/60 text-white text-sm px-3 py-1 rounded">Encuentro de delegados</span>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

//EXPORTS
export default Galeria