import React, { useState, useEffect } from 'react';

function Hero() {
    // --- LÓGICA DE LA CUENTA REGRESIVA ---
    const fechaElecciones = new Date(2026, 5, 12, 8, 0, 0).getTime();

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
    // -------------------------------------

    return (
        /* Contenedor principal con relative y overflow-hidden */
        <section className="relative bg-white py-6 md:py-12 min-h-[70vh] flex items-center overflow-hidden">
            
            {/* ================= MARCA DE AGUA EN TODO EL ANCHO DE LA SECCIÓN ================= */}
            {/* Usamos opacity-25 directo en el contenedor y object-cover para que tape todo el fondo sin deformarse */}
            <div className="absolute inset-0 pointer-events-none select-none opacity-28 z-0">
                <img
                    src="/imagenes-propuesta/fondo5.jpeg"
                    alt="Marca de agua Fondo Completo"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* CONTENEDOR CON Z-10 PARA QUEDAR POR ENCIMA DE LA MARCA DE AGUA */}
            <div className="max-w-5xl mx-auto px-4 w-full relative z-10">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    
                    {/* COLUMNA IZQUIERDA: Bloque de Información de Elecciones */}
                    <div className="flex flex-col justify-center items-start gap-6 order-last md:order-first w-full">
                        
                        <div className="w-full space-y-4">
                            <h2 className="text-xl md:text-2xl font-black text-gray-950 uppercase tracking-tight text-center md:text-left">
                                ¡Cada vez falta menos para elegir nuestro futuro!
                            </h2>
                            <p className="font-medium text-gray-700 text-sm md:text-base text-center md:text-left">
                                Este viernes 12 de junio, las y los trabajadores tenemos una cita importante con la democracia sindical. Es tiempo de participar y hacer oír nuestra voz.
                            </p>
                        </div>

                        {/* BLOQUE DE DATOS CLAVE AMARILLO */}
                        <div className="flex flex-col items-center gap-3 w-full max-w-xl mx-auto md:mx-0">
                            <div className="bg-[#FFF200] px-4 py-4 font-black text-sm md:text-base text-center w-full rounded-xl shadow-sm text-gray-900 space-y-1">
                                <p className="tracking-wide text-xs md:text-sm">🗳️ ELECCIONES SOEVER 2026</p>
                                <p className="text-base md:text-lg">VIERNES 12 DE JUNIO • 08:00 HS</p>
                                <p className="text-xs md:text-sm font-bold">📍 San Juan y Andrés Pazos — Sindicato SOEVER</p>
                            </div>

                            {/* Botón de Google Maps */}
                            <a
                                href="https://www.google.com/maps/search/?api=1&query=Sindicato+SOEVER+San+Juan+Parana"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full text-center px-6 py-2.5 bg-white text-[#E65C23] font-black text-xs rounded-xl border-2 border-[#E65C23] hover:bg-[#E65C23] hover:text-white transition-all duration-200 uppercase tracking-wide shadow-sm"
                            >
                                Ver Ubicación del Sindicato
                            </a>
                        </div>

                        {/* Píldoras de llamado a la acción */}
                    <div className="flex flex-col sm:flex-row gap-2 justify-center items-center w-full max-w-xl mx-auto pt-1">
                        <div className="w-full sm:w-auto bg-orange-100/80 text-[#E65C23] font-black text-xs px-5 py-2 rounded-xl text-center uppercase tracking-wider border border-orange-200/60 shadow-sm">
                            🗳️ Tu voto cuenta
                        </div>
                        <div className="w-full sm:w-auto bg-[#E65C23] text-white font-black text-xs px-5 py-2 rounded-xl text-center uppercase tracking-wider shadow-md">
                            🟠 Hace la diferencia
                        </div>
                    </div>

                    </div>

                    {/* COLUMNA DERECHA: Reloj + Afiche Oficial */}
                    <div className="flex flex-col gap-3 bg-gray-50/90 rounded-3xl p-3 md:p-4 justify-center order-first md:order-last border border-gray-100 shadow-inner w-full backdrop-blur-sm">
                        
                        {/* El Afiche Oficial */}
                        <div className="flex items-center justify-center overflow-hidden order-last md:order-first">
                            <img
                                src="/imagenes-propuesta/afiche-votacion.jpeg"
                                alt="Afiche Oficial Elecciones"
                                className="w-full h-auto object-contain rounded-2xl max-h-[420px] lg:max-h-[460px] shadow-sm"
                            />
                        </div>

                        {/* El Reloj Digital Estilo Hero */}
                        <div className="bg-white rounded-2xl p-4 border-2 border-[#E65C23] shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 order-first md:order-last">
                            {tiempoRestante.finalizado ? (
                                <p className="text-[#E65C23] font-black uppercase text-sm animate-pulse py-2 text-center w-full">
                                    ¡Los comicios han comenzado! 🗳️
                                </p>
                            ) : (
                                <>
                                    <div className="text-center sm:text-left">
                                        <p className="text-[#E65C23] font-black uppercase text-xs md:text-sm tracking-wider">
                                            Falta para votar:
                                        </p>
                                    </div>
                                    
                                    <div className="flex justify-center items-center gap-1.5">
                                        <div className="bg-[#111827] text-white rounded-xl p-2 min-w-[50px] md:min-w-[55px] text-center shadow-md flex flex-col items-center">
                                            <span className="text-lg md:text-2xl font-black text-[#E65C23] leading-tight">{tiempoRestante.dias}</span>
                                            <span className="text-[8px] font-bold uppercase text-gray-400 tracking-wide">Días</span>
                                        </div>
                                        <div className="bg-[#111827] text-white rounded-xl p-2 min-w-[50px] md:min-w-[55px] text-center shadow-md flex flex-col items-center">
                                            <span className="text-lg md:text-2xl font-black text-white leading-tight">{tiempoRestante.horas.toString().padStart(2, '0')}</span>
                                            <span className="text-[8px] font-bold uppercase text-gray-400 tracking-wide">Hrs</span>
                                        </div>
                                        <div className="bg-[#111827] text-white rounded-xl p-2 min-w-[50px] md:min-w-[55px] text-center shadow-md flex flex-col items-center">
                                            <span className="text-lg md:text-2xl font-black text-white leading-tight">{tiempoRestante.minutos.toString().padStart(2, '0')}</span>
                                            <span className="text-[8px] font-bold uppercase text-gray-400 tracking-wide">Min</span>
                                        </div>
                                        <div className="bg-[#111827] text-white rounded-xl p-2 min-w-[50px] md:min-w-[55px] text-center shadow-md flex flex-col items-center">
                                            <span className="text-lg md:text-2xl font-black text-[#E65C23] leading-tight animate-pulse">{tiempoRestante.segundos.toString().padStart(2, '0')}</span>
                                            <span className="text-[8px] font-bold uppercase text-gray-400 tracking-wide">Seg</span>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Hero;





// HERO POSTA
// import React, { useState, useEffect } from 'react';

// //FUNCION
// function Hero() {
//     // 1. CONFIGURACIÓN DE LA FECHA DE LAS ELECCIONES
//     const fechaElecciones = new Date(2026, 5, 12, 8, 0, 0).getTime(); 

//     // 2. FUNCIÓN AUXILIAR DE CÁLCULO
//     const calcularTiempoRestante = () => {
//         const ahora = new Date().getTime();
//         const distancia = fechaElecciones - ahora;

//         if (distancia < 0) {
//             return { dias: 0, horas: 0, minutos: 0, segundos: 0, finalizado: true };
//         }

//         return {
//             dias: Math.floor(distancia / (1000 * 60 * 60 * 24)),
//             horas: Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//             minutos: Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60)),
//             segundos: Math.floor((distancia % (1000 * 60)) / 1000),
//             finalizado: false
//         };
//     };

//     const [tiempoRestante, setTiempoRestante] = useState(calcularTiempoRestante);

//     useEffect(() => {
//         setTiempoRestante(calcularTiempoRestante());
//         const intervalo = setInterval(() => {
//             setTiempoRestante(calcularTiempoRestante());
//         }, 1000);

//         return () => clearInterval(intervalo);
//     }, [fechaElecciones]);

//     return (
//         <section className="bg-white">
//             <div className="relative bg-center min-h-[80vh] py-6 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 w-full max-w-7xl mx-auto px-4">

//                 {/* Contenedor de la Imagen */}
//                 <div className="w-full md:w-1/2 lg:w-auto flex justify-center md:justify-end">
//                     <img
//                         src="/imagenes/logo.png"
//                         alt="Logo"
//                         /* TAMAÑO INTERMEDIO: Subimos la altura máxima a 370px para que mantenga buena presencia */
//                         className="w-full max-w-[190px] sm:max-w-[250px] md:max-w-[340px] lg:max-w-[420px] lg:max-h-[370px] h-auto object-contain"
//                     />
//                 </div>

//                 {/* Contenedor del Texto */}
//                 <div className="flex flex-col justify-center items-start w-full md:w-1/2 lg:w-auto max-w-xl md:max-w-2xl text-left md:ml-4 gap-4">
//                     <p className="text-black font-extrabold tracking-tight leading-none">
//                         {/* Título: Mantenemos text-7xl pero cerramos el interlineado a leading-none */}
//                         <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl block mb-1 tracking-tight leading-none break-words">
//                             UNIÓN Y RENOVACION
//                         </span>

//                         {/* Descripción */}
//                         <span className="block text-base sm:text-lg md:text-xl lg:text-2xl font-medium italic leading-snug text-gray-900 mt-2 max-w-xl">
//                             Queremos un sindicato presente, que escuche a los trabajadores y que defienda sus derechos. Es momento de participar. Es momento de votar.
//                         </span>
//                     </p>

//                     {/* ================= CUENTA REGRESIVA EQUILIBRADA ================= */}
//                     {/* {!tiempoRestante.finalizado ? (
//                         <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 bg-gray-900 text-white p-4 rounded-2xl shadow-md border border-gray-800 w-full sm:w-auto mt-1.5">
//                             <span className="text-sm md:text-base font-bold tracking-wider text-[#E65C23] uppercase pr-2">
//                                 Falta para votar:
//                             </span>
                            
//                             <div className="flex gap-2 text-center"> */}
//                                 {/* Días */}
//                                 {/* <div className="bg-black/30 rounded-lg px-3 py-1.5 min-w-[55px]">
//                                     <span className="block text-lg md:text-2xl font-black text-white">{tiempoRestante.dias}</span>
//                                     <span className="text-[9px] text-gray-400 uppercase font-bold">Días</span>
//                                 </div> */}
//                                 {/* Horas */}
//                                 {/* <div className="bg-black/30 rounded-lg px-3 py-1.5 min-w-[55px]">
//                                     <span className="block text-lg md:text-2xl font-black text-white">{tiempoRestante.horas.toString().padStart(2, '0')}</span>
//                                     <span className="text-[9px] text-gray-400 uppercase font-bold">Horas</span>
//                                 </div> */}
//                                 {/* Minutos */}
//                                 {/* <div className="bg-black/30 rounded-lg px-3 py-1.5 min-w-[55px]">
//                                     <span className="block text-lg md:text-2xl font-black text-white">{tiempoRestante.minutos.toString().padStart(2, '0')}</span>
//                                     <span className="text-[9px] text-gray-400 uppercase font-bold">Min</span>
//                                 </div> */}
//                                 {/* Segundos */}
//                                 {/* <div className="bg-black/30 rounded-lg px-3 py-1.5 min-w-[55px]">
//                                     <span className="block text-lg md:text-2xl font-black text-[#E65C23] animate-pulse">{tiempoRestante.segundos.toString().padStart(2, '0')}</span>
//                                     <span className="text-[9px] text-gray-400 uppercase font-bold">Seg</span>
//                                 </div>
//                             </div>
//                         </div>
//                     ) : (
//                         <div className="bg-[#E65C23] text-white font-black text-base md:text-lg px-6 py-2.5 rounded-xl shadow animate-bounce tracking-wide uppercase mt-1.5">
//                             ¡Hoy elegimos Unión y Renovación!
//                         </div> */}
//                     {/* )} */}

// {/* ================= CUENTA REGRESIVA CON BORDE NARANJA Y FONDOS NEGROS ================= */}
// {!tiempoRestante.finalizado ? (
//     /* Contenedor principal con fondo blanco, borde naranja oficial y esquinas redondeadas */
//     <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 bg-white p-4 rounded-2xl border-2 border-[#E65C23] shadow-sm w-full sm:w-auto mt-2">
        
//         {/* Texto en el naranja oficial de la campaña */}
//         <span className="text-sm md:text-base font-black tracking-wider text-[#E65C23] uppercase">
//             Falta para votar:
//         </span>
        
//         <div className="flex gap-2 text-center">
//             {/* Días */}
//             <div className="bg-gray-950 rounded-xl px-3 py-1.5 min-w-[58px] shadow-inner border border-gray-800">
//                 <span className="block text-xl md:text-2xl font-black text-[#E65C23]">
//                     {tiempoRestante.dias}
//                 </span>
//                 <span className="text-[9px] text-gray-400 uppercase font-bold tracking-wider block mt-0.5">
//                     Días
//                 </span>
//             </div>

//             {/* Horas */}
//             <div className="bg-gray-950 rounded-xl px-3 py-1.5 min-w-[58px] shadow-inner border border-gray-800">
//                 <span className="block text-xl md:text-2xl font-black text-[#E65C23]">
//                     {tiempoRestante.horas.toString().padStart(2, '0')}
//                 </span>
//                 <span className="text-[9px] text-gray-400 uppercase font-bold tracking-wider block mt-0.5">
//                     Horas
//                 </span>
//             </div>

//             {/* Minutos */}
//             <div className="bg-gray-950 rounded-xl px-3 py-1.5 min-w-[58px] shadow-inner border border-gray-800">
//                 <span className="block text-xl md:text-2xl font-black text-[#E65C23]">
//                     {tiempoRestante.minutos.toString().padStart(2, '0')}
//                 </span>
//                 <span className="text-[9px] text-gray-400 uppercase font-bold tracking-wider block mt-0.5">
//                     Min
//                 </span>
//             </div>

//             {/* Segundos */}
//             <div className="bg-gray-950 rounded-xl px-3 py-1.5 min-w-[58px] shadow-inner border border-gray-800">
//                 <span className="block text-xl md:text-2xl font-black text-[#E65C23] animate-pulse">
//                     {tiempoRestante.segundos.toString().padStart(2, '0')}
//                 </span>
//                 <span className="text-[9px] text-gray-400 uppercase font-bold tracking-wider block mt-0.5">
//                     Seg
//                 </span>
//             </div>
//         </div>
//     </div>
// ) : (
//     <div className="bg-orange-500 text-white font-black text-base md:text-lg px-6 py-2.5 rounded-xl shadow animate-bounce tracking-wide uppercase mt-1.5">
//         ¡Hoy elegimos Unión y Renovación!
//     </div>
// )}


//                 </div>

//             </div>
//         </section>
//     );
// }

// //EXPORTS
// export default Hero;


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

