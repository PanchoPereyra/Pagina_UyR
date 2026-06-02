function Lista() {
    return (
        <section class="bg-white">

 <div className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0">

                    <img
                        src="/imagenes/logo.png"
                        alt="Logo"
                        className="w-40 sm:w-56 md:w-64 lg:w-80"
                    />

                </div>
            {/* Imagen debajo */}
            <div className="flex justify-center items-center w-full md:w-2/3 px-4 
                text-center md:text-left">
                <p className="text-black text-4xl sm:text-5xl md:text-6xl lg:text-8xl 
                  font-extrabold leading-none">

                    <span className="block mt-4">
                        Aca podría ir la imagen de la lista.
                    </span>
                </p>
            </div> 
        </section>
    )
}

//EXPORTS
export default Lista