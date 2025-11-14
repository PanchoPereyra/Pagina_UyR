//IMPORT


//FUNCION
function NotFound() {
return (
        <div className="flex flex-col items-center justify-center h-[70vh] text-center p-6">
            
            <h1 className="text-5xl font-bold text-orange-600 mb-4">
                404
            </h1>

            <h2 className="text-2xl font-semibold mb-2">
                Página no encontrada
            </h2>

            <p className="text-gray-600 max-w-md mb-6">
                Lo sentimos, la página que estás buscando no existe o fue movida.
            </p>

            <a 
                href="/"
                className="px-6 py-2 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 transition"
            >
                Volver al inicio
            </a>
        </div>
    );
}

//EXPORTS
export default NotFound