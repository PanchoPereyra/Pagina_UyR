function Noticias4() {
    return (
        <div className="max-w-4xl mx-auto px-5 py-12">

            {/* Fecha */}
            <p className="text-gray-500 text-sm mb-2">15 de Marzo, 2024</p>

            {/* Título */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Acuerdo Salarial 2024: Un avance histórico para los trabajadores
            </h1>

            {/* Imagen opcional */}
            {/* <img 
                src="/img/noticia1.jpg"
                alt="Acuerdo salarial"
                className="rounded-lg shadow mb-8"
            /> */}

            {/* Contenido */}
            <div className="text-gray-700 leading-relaxed space-y-4 text-lg">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Ex blanditiis harum veritatis, ratione illo voluptates, 
                    debitis earum aspernatur eveniet beatae incidunt.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis tempora sed magnam, sint eligendi velit. Ab vitae rerum similique placeat deserunt necessitatibus dolore hic magni, perspiciatis nihil veritatis mollitia in.
                </p>

                <p>
                    Sequi distinctio obcaecati, quis fuga, aspernatur numquam 
                    tempora voluptas tenetur cum, blanditiis libero? Rerum 
                    quibusdam iure ea? Suscipit illum repellendus doloribus earum.
                </p>

                <p>
                    Este acuerdo representa un paso fundamental para garantizar 
                    mejores condiciones laborales y mayor estabilidad económica.
                </p>
            </div>

            {/* Botón volver */}
            <div className="mt-10">
                <a
                    href="/novedades"
                    className="px-6 py-2 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 transition"
                >
                    ← Volver a Novedades
                </a>
            </div>
        </div>
    );
}

export default Noticias4;