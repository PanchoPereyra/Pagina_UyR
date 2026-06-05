function EnConstruccion() {
    return (
        <div className="flex flex-col items-center justify-center text-center h-[80vh] px-4">

            {/* Icono */}
            <div className="bg-[#E65C23] mb-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-20 h-20"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3.75m0 3.75h.008v-.008H12v.008zM2.25 12l9.172-9.172a1 1 0 011.414 0L22.25 12M4.5 12v7.5A1.5 1.5 0 006 21h12a1.5 1.5 0 001.5-1.5V12"
                    />
                </svg>
            </div>

            {/* Título */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Página en construcción
            </h1>

            {/* Mensaje */}
            <p className="text-gray-600 max-w-md mb-8 text-lg">
                Estamos trabajando para traerte esta sección muy pronto.  
                ¡Gracias por tu paciencia!
            </p>

            {/* Botón */}
            <a
                href="/"
                className="px-6 py-2 bg-[#E65C23] text-white rounded-lg shadow hover:bg-orange-600 transition"
            >
                Volver al inicio
            </a>
        </div>
    );
}

export default EnConstruccion;