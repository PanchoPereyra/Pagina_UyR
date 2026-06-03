// IMPORTS
//FUNCION
// function Hero() {
//     return (
//         <section className="bg-white">
//             {/* Usamos justify-center y gap para controlar la separación exacta entre los dos bloques */}
//             <div className="relative bg-center min-h-64 py-10 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 w-full max-w-7xl mx-auto px-4">




//                 {/* Contenedor de la Imagen */}
//                 <div className="w-full md:w-1/2 lg:w-auto flex justify-center md:justify-end">
//                     <img
//                         src="/imagenes/logo.png"
//                         alt="Logo"
//                         className="w-full max-w-[280px] sm:max-w-[360px] md:max-w-[500px] lg:max-w-[690px] h-auto object-contain"
//                     />
//                 </div>

//                 <div className="flex flex-col justify-center items-start w-full md:w-auto max-w-4xl text-left md:ml-12">
//                     <p className="text-black font-extrabold leading-none">
//                         {/* Título Principal - Compactado con leading-none y menor margen abajo */}
//                         <span className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl block mb-1 tracking-tight leading-none">
//                             UNIÓN Y RENOVACION
//                         </span>
//                         {/* Párrafo - Interlineado más cerrado (leading-tight) para achicar el espacio vertical */}
//                         <span className="block text-xl sm:text-2xl md:text-3xl lg:text-5xl font-medium italic leading-tight text-gray-900 mt-1">
//                             Queremos un sindicato presente, que escuche a los trabajadores y que defienda sus derechos. Es momento de participar. Es momento de votar.
//                         </span>
//                     </p>
//                 </div>

//             </div>
//         </section>
//     )
// }

// //EXPORTS
// export default Hero;

//IMPORT

//FUNCION
function Hero() {
    return (
        <section className="bg-white">
            <div className="relative bg-center min-h-64 py-10 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 w-full max-w-7xl mx-auto px-4">

                {/* Contenedor de la Imagen */}
                <div className="w-full md:w-1/2 lg:w-auto flex justify-center md:justify-end">
                    <img
                        src="/imagenes/logo.png"
                        alt="Logo"
                        className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[550px] lg:max-w-[730px] h-auto object-contain"
                    />
                </div>


                <div className="flex flex-col justify-center items-start w-full md:w-1/2 lg:w-auto max-w-4xl text-left md:ml-6">
                    <p className="text-black font-extrabold leading-none">

                        <span className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl block mb-1 tracking-tight leading-none">
                            UNIÓN Y RENOVACION
                        </span>
              
                        <span className="block text-xl sm:text-2xl md:text-3xl lg:text-5xl font-medium italic leading-tight text-gray-900 mt-1">
                            Queremos un sindicato presente, que escuche a los trabajadores y que defienda sus derechos. Es momento de participar. Es momento de votar.
                        </span>
                    </p>
                </div>
                
            </div>
        </section>
    )
}

//EXPORTS
export default Hero;