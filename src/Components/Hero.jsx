import React, { useState, useEffect } from 'react';

function Hero() {

    return (
        /* Contenedor principal con relative y overflow-hidden */
        <section className="relative b py-6 md:py-12 min-h-[70vh] flex items-center overflow-hidden">

            {/* ================= MARCA DE AGUA EN TODO EL ANCHO DE LA SECCIÓN ================= */}
            {/* Usamos opacity-25 directo en el contenedor y object-cover para que tape todo el fondo sin deformarse */}
            {/* <div className="absolute inset-0 pointer-events-none select-none opacity-28 z-0">
                <img
                    src="/imagenes-propuesta/fondo5.jpeg"
                    alt="Marca de agua Fondo Completo"
                    className="w-full h-full object-cover"
                />
            </div> */}

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
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Hero;

