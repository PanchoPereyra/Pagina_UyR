function Lista() {
    return (
        <section className="py-12 md:py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-black text-center">
                    Lista Candidata
                </h2>
                <p className="text-gray-600 mb-10 text-sm md:text-lg max-w-2xl mx-auto text-center">
                    SOEVER · Elecciones 2026
                </p>
                <div className="flex justify-center">
                    <img
                        src="/imagenes/lista-soever.jpg"
                        alt="Lista Candidata SOEVER"
                        className="w-full max-w-md rounded-2xl shadow-lg"
                    />
                </div>
            </div>
        </section>
    )
}

//EXPORTS
export default Lista