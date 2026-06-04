
//FUNCION
function Evento() {
    return (
        <div className="flex flex-col items-center justify-center text-center h-[80vh] px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                OSPA
            </h1>

            <p className="text-gray-600 text-ellipsis max-w-md mb-8 text-lg text-justify text-justify leading-relaxed">
                
            </p>

            <a
                href="/inicio"
                className="px-6 py-2 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 transition"
            >
                Volver al inicio
            </a>
        </div>
    )
}
export default Evento;