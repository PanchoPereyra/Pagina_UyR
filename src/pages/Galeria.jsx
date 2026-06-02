// FUNCION
function Galeria() {
  return (
    <>
      <section className="py-12 md:py-20"> {/* Padding vertical variable */}
        <div className="max-w-6xl mx-auto px-4 text-center">
          
          {/* */}
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-black">
            Galería de Fotos
          </h2>
          
          <p className="text-gray-600 mb-10 text-sm md:text-lg max-w-2xl mx-auto">
            Momentos que reflejan nuestra lucha y unidad como organización
          </p>

          {/* GRID RESPONSIVE */}
          {/* 1 columna en móvil, 2 en tablet pequeña, 3 en escritorio */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">

            {/* TARJETA 1 */}
            <div className="relative bg-gradient-to-r from-orange-500 to-orange-300 h-48 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center gap-3">
              <div>
                <span className="bg-black/60 text-white text-sm px-4 py-1.5 rounded-full font-medium">
                  Asamblea 2023
                </span>
              </div>
              <div>
                <a href="/imagenes1" className="text-black hover:text-white transition-colors hover:underline text-sm font-bold flex items-center gap-1">
                  Ver más <span>→</span>
                </a>
              </div>
            </div>

            {/* TARJETA 2 */}
            <div className="relative bg-gradient-to-r from-orange-500 to-orange-300 h-48 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center gap-3">
              <div>
                <span className="bg-black/60 text-white text-sm px-4 py-1.5 rounded-full font-medium">
                    Día del Trabajador
                </span>
              </div>
              <div>
                <a href="/imagenes2" className="text-black hover:text-white transition-colors hover:underline text-sm font-bold flex items-center gap-1">
                  Ver más <span>→</span>
                </a>
              </div>
            </div>

            {/* TARJETA 3 */}
            <div className="relative bg-gradient-to-r from-orange-500 to-orange-300 h-48 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center gap-3">
               <div>
                 <span className="bg-black/60 text-white text-sm px-4 py-1.5 rounded-full font-medium">
                    Capacitación laboral
                 </span>
               </div>
               <div>
                <a href="/imagenes1" className="text-black hover:text-white transition-colors hover:underline text-sm font-bold flex items-center gap-1">
                  Ver más <span>→</span>
                </a>
              </div>
            </div>

            {/* Las demás tarjetas comentadas... */}

          </div>
        </div>
      </section>
    </>
  );
}

// EXPORTS
export default Galeria;