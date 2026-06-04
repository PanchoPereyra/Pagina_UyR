import React, { useState, useEffect } from 'react';

//FUNCION
function Hero() {
    // 1. CONFIGURACIÓN DE LA FECHA DE LAS ELECCIONES
    const fechaElecciones = new Date(2026, 5, 12, 8, 0, 0).getTime(); 

    // 2. FUNCIÓN AUXILIAR DE CÁLCULO
    const calcularTiempoRestante = () => {
        const ahora = new Date().getTime();
        const distancia = fechaElecciones - ahora;

        if (distancia < 0) {
            return { dias: 0, horas: 0, minutos: 0, segundos: 0, finalizado: true };
        }

        return {
            dias: Math.floor(distancia / (1000 * 60 * 60 * 24)),
            horas: Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutos: Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60)),
            segundos: Math.floor((distancia % (1000 * 60)) / 1000),
            finalizado: false
        };
    };

    const [tiempoRestante, setTiempoRestante] = useState(calcularTiempoRestante);

    useEffect(() => {
        setTiempoRestante(calcularTiempoRestante());
        const intervalo = setInterval(() => {
            setTiempoRestante(calcularTiempoRestante());
        }, 1000);

        return () => clearInterval(intervalo);
    }, [fechaElecciones]);

    return (
        <section className="bg-white">
            <div className="relative bg-center min-h-[80vh] py-6 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 w-full max-w-7xl mx-auto px-4">

                {/* Contenedor de la Imagen */}
                <div className="w-full md:w-1/2 lg:w-auto flex justify-center md:justify-end">
                    <img
                        src="/imagenes/logo.png"
                        alt="Logo"
                        /* TAMAÑO INTERMEDIO: Subimos la altura máxima a 370px para que mantenga buena presencia */
                        className="w-full max-w-[190px] sm:max-w-[250px] md:max-w-[340px] lg:max-w-[420px] lg:max-h-[370px] h-auto object-contain"
                    />
                </div>

                {/* Contenedor del Texto */}
                <div className="flex flex-col justify-center items-start w-full md:w-1/2 lg:w-auto max-w-xl md:max-w-2xl text-left md:ml-4 gap-4">
                    <p className="text-black font-extrabold tracking-tight leading-none">
                        {/* Título: Mantenemos text-7xl pero cerramos el interlineado a leading-none */}
                        <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl block mb-1 tracking-tight leading-none break-words">
                            UNIÓN Y RENOVACION
                        </span>

                        {/* Descripción */}
                        <span className="block text-base sm:text-lg md:text-xl lg:text-2xl font-medium italic leading-snug text-gray-900 mt-2 max-w-xl">
                            Queremos un sindicato presente, que escuche a los trabajadores y que defienda sus derechos. Es momento de participar. Es momento de votar.
                        </span>
                    </p>

                    {/* ================= CUENTA REGRESIVA EQUILIBRADA ================= */}
                    {!tiempoRestante.finalizado ? (
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 bg-gray-900 text-white p-4 rounded-2xl shadow-md border border-gray-800 w-full sm:w-auto mt-1.5">
                            <span className="text-sm md:text-base font-bold tracking-wider text-orange-400 uppercase pr-2">
                                Falta para votar:
                            </span>
                            
                            <div className="flex gap-2 text-center">
                                {/* Días */}
                                <div className="bg-black/30 rounded-lg px-3 py-1.5 min-w-[55px]">
                                    <span className="block text-lg md:text-2xl font-black text-white">{tiempoRestante.dias}</span>
                                    <span className="text-[9px] text-gray-400 uppercase font-bold">Días</span>
                                </div>
                                {/* Horas */}
                                <div className="bg-black/30 rounded-lg px-3 py-1.5 min-w-[55px]">
                                    <span className="block text-lg md:text-2xl font-black text-white">{tiempoRestante.horas.toString().padStart(2, '0')}</span>
                                    <span className="text-[9px] text-gray-400 uppercase font-bold">Horas</span>
                                </div>
                                {/* Minutos */}
                                <div className="bg-black/30 rounded-lg px-3 py-1.5 min-w-[55px]">
                                    <span className="block text-lg md:text-2xl font-black text-white">{tiempoRestante.minutos.toString().padStart(2, '0')}</span>
                                    <span className="text-[9px] text-gray-400 uppercase font-bold">Min</span>
                                </div>
                                {/* Segundos */}
                                <div className="bg-black/30 rounded-lg px-3 py-1.5 min-w-[55px]">
                                    <span className="block text-lg md:text-2xl font-black text-orange-400 animate-pulse">{tiempoRestante.segundos.toString().padStart(2, '0')}</span>
                                    <span className="text-[9px] text-gray-400 uppercase font-bold">Seg</span>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-orange-500 text-white font-black text-base md:text-lg px-6 py-2.5 rounded-xl shadow animate-bounce tracking-wide uppercase mt-1.5">
                            ¡Hoy elegimos Unión y Renovación!
                        </div>
                    )}
                </div>

            </div>
        </section>
    );
}

//EXPORTS
export default Hero;


// el codigo de abajo es el anterior

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

