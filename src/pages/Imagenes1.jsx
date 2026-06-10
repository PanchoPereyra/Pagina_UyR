import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Imagenes1() {
    
    // Estado para saber qué imagen se está viendo en grande (null = ninguna)
    const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

    // Tu lista de fotos
    const listaFotos = [
        "/imagenes1/foto1.jpg", 
        "/imagenes1/foto2.jpg",
        "/imagenes1/foto3.PNG",
        "/imagenes1/foto1.jpg", 
        "/imagenes1/foto2.jpg",
        "/imagenes1/foto3.PNG",
        "/imagenes1/foto1.jpg", 
        "/imagenes1/foto2.jpg",
        "/imagenes1/foto3.PNG",
        "/imagenes1/foto1.jpg", 
        "/imagenes1/foto2.jpg",
        "/imagenes1/foto3.PNG",
        // "imagenes/imagenes1/foto1.jpg",
    ];

    return (
        <section className="bg-white min-h-screen py-10 px-4">
             <div className="max-w-6xl mx-auto">
                
                {/* Cabecera: Título y Botón Volver */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                    <h2 className="text-3xl font-bold text-gray-800">Galería: Asamblea</h2>
                    
                    <Link to="/" className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded shadow transition">
                        ← Volver
                    </Link>
                </div>

                {/* Grilla de Imágenes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {listaFotos.map((foto, index) => (
                        <div 
                            key={index} 
                            onClick={() => setImagenSeleccionada(foto)}
                            // CORRECCIÓN AQUÍ: Agregué 'relative' al principio
                            className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer group"
                        >
                            <img 
                                src={foto} 
                                alt={`Foto ${index}`} 
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            
                            {/* Capa oscura con lupa al pasar el mouse */}
                            {/* Gracias al 'relative' de arriba, esto ahora se queda DENTRO de la tarjeta */}
                            {/* <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-white text-4xl"></span>
                            </div> */}
                        </div>
                    ))}
                </div>

                 {/* Mensaje si no hay fotos */}
                 {listaFotos.length === 0 && (
                    <p className="text-center text-gray-500 mt-10">Carga tus imágenes en la carpeta public...</p>
                )}

             </div>

            {/* MODAL (Visor de imagen grande) */}
            {imagenSeleccionada && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
                    onClick={() => setImagenSeleccionada(null)} // Cierra al tocar el fondo negro
                >
                    
                    {/* Botón Cerrar (X) */}
                    <button 
                        className="absolute top-5 right-5 text-white text-5xl font-bold hover:text-gray-300 z-50"
                        onClick={() => setImagenSeleccionada(null)}
                    >
                        &times;
                    </button>

                    {/* Imagen Grande */}
                    <img 
                        src={imagenSeleccionada} 
                        alt="Vista ampliada" 
                        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()} // Evita cerrar si tocas la foto
                    />
                </div>
            )}

        </section>
    )
}

export default Imagenes1;