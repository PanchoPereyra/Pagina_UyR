import React from 'react';
import { Link } from 'react-router-dom';

function LinksInteres() {
    const links = [
        {
            id: 1,
            titulo: "Elecciones SOEVER 2026",
            fecha: "Viernes 12 de junio - 8:00 hs",
            descripcion: "Es tiempo de participar, de hacer oír nuestra voz y de construir juntos el gremio que queremos. La participación de cada compañera y compañero fortalece nuestra organización y nos permite seguir avanzando con compromiso, transparencia y trabajo. Tu voto cuenta. Tu participación hace la diferencia. - San Juan y Andrés Pazos (Sindicato SOEVER)",
            textoBoton: "Ver Ubicación en Mapa",
            url: "https://www.google.com/maps/search/?api=1&query=Sindicato+SOEVER+San+Juan+Parana"
        },
        {
            id: 2,
            titulo: "Fede Colominas en entrevista con Canal Once",
            fecha: "Actualizado",
            descripcion: "Entrevista Canal Once.",
            textoBoton: "ver video",
            videoUrl: "/video/entrevista-canal-once.mp4",
        },
        {
            id: 3,
            titulo: "Consulta de Padron Electoral SOEVER",
            fecha: "Elecciones 12 de Junio",
            descripcion: "Verificá de forma segura el lugar y la mesa donde te toca emitir tu voto el próximo viernes.",
            textoBoton: "Consultar Padrón",
            url: "/doc/padron.pdf",
        },
        {
            id: 4,
            titulo: "Spot Radial",
            fecha: "Audio",
            descripcion: "Fede Colominas en entrevista radio Plaza.",
            textoBoton: "Escuchar Audio",
            audioUrl: "/audio/entrevista-radio-plaza.mpeg",
        },
        {
            id: 5,
            titulo: "Spot Radial",
            fecha: "Audio",
            descripcion: "Fede Colominas en entrevista radio Rubén Lovera.",
            textoBoton: "Escuchar Mensaje",
            audioUrl: "/audio/fedecolominas.mpeg",
        }
    ];

    return (
        <section className="py-12 md:py-20 bg-gray-100 min-h-screen flex flex-col justify-center items-center">
            <div className="max-w-5xl mx-auto px-4 w-full flex flex-col items-center">

                <h2 className="text-3xl md:text-5xl font-bold mb-2 text-black text-center uppercase tracking-tight">
                    Links de Interés
                </h2>
                <p className="text-gray-600 mb-12 text-sm md:text-lg max-w-2xl mx-auto text-center font-medium">
                    Accesos rápidos, gestiones sencillas y comunicados importantes para el afiliado vial.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    {links.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-2xl border-2 border-transparent hover:border-[#E65C23] shadow-md p-6 flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div>
                                <span className="inline-block bg-orange-50 text-[#E65C23] text-xs font-black uppercase tracking-wider px-2.5 py-1 rounded-md mb-3">
                                    {item.fecha}
                                </span>

                                <h3 className="text-xl font-black text-gray-900 leading-tight mb-2">
                                    {item.titulo}
                                </h3>

                                {item.videoUrl && (
                                    <div className="w-full aspect-video rounded-xl overflow-hidden mb-4 border border-gray-200 bg-black shadow-sm">
                                        <video className="w-full h-full object-cover" controls preload="metadata" playsInline>
                                            <source src={item.videoUrl} type="video/mp4" />
                                        </video>
                                    </div>
                                )}

                                {/* ================= AUDIO COMPATIBILIDAD MÁXIMA ================= */}
                                {item.audioUrl && (
                                    <div className="w-full mb-4 pt-1">
                                        {/* Usamos directamente la propiedad src en la etiqueta padre para evitar bloqueos de carga */}
                                        <audio
                                            src={item.audioUrl}
                                            className="w-full h-10 accent-[#E65C23]"
                                            controls
                                            preload="auto"
                                        >
                                            Tu navegador no soporta audio.
                                        </audio>
                                    </div>
                                )}

                                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                    {item.descripcion}
                                </p>
                            </div>

                            {/* BOTONES INTELIGENTES */}
                            {item.videoUrl ? (
                                <button
                                    onClick={(e) => {
                                        const videoComponent = e.currentTarget.closest('.bg-white').querySelector('video');
                                        if (videoComponent) {
                                            videoComponent.play().catch(() => { });
                                            if (videoComponent.requestFullscreen) videoComponent.requestFullscreen();
                                            else if (videoComponent.webkitRequestFullscreen) videoComponent.webkitRequestFullscreen();
                                        }
                                    }}
                                    className="w-full text-center px-4 py-2.5 bg-gray-950 text-white font-bold text-sm rounded-xl border border-gray-800 hover:bg-[#E65C23] hover:border-[#E65C23] transition-all duration-200 uppercase tracking-wide shadow-sm"
                                >
                                    {item.textoBoton}
                                </button>
                            ) : item.audioUrl ? (
                                <button
                                    onClick={(e) => {
                                        const audioComponent = e.currentTarget.closest('.bg-white').querySelector('audio');
                                        if (audioComponent) {
                                            if (audioComponent.paused) {
                                                // El catch evita que tire error en consola si el navegador bloquea el autoplay inicial
                                                audioComponent.play().catch(err => console.log("Error al reproducir:", err));
                                            } else {
                                                audioComponent.pause();
                                            }
                                        }
                                    }}
                                    className="w-full text-center px-4 py-2.5 bg-gray-950 text-white font-bold text-sm rounded-xl border border-gray-800 hover:bg-[#E65C23] hover:border-[#E65C23] transition-all duration-200 uppercase tracking-wide shadow-sm"
                                >
                                    {item.textoBoton}
                                </button>
                            ) : (
                                <a
                                    href={item.url || "#!"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full text-center px-4 py-2.5 bg-gray-950 text-white font-bold text-sm rounded-xl border border-gray-800 hover:bg-[#E65C23] hover:border-[#E65C23] transition-all duration-200 uppercase tracking-wide shadow-sm"
                                >
                                    {item.textoBoton}
                                </a>
                            )}
                        </div>
                    ))}
                </div>

                <Link to="/" className="mt-16 px-8 py-2.5 bg-[#E65C23] text-white rounded-lg shadow hover:bg-orange-600 transition">
                    Volver al inicio
                </Link>
            </div>
        </section>
    );
}

export default LinksInteres;