//IMPORT


//FUNCION
function Hero() {
    return (
        <section class="bg-white">
            {/* <div class="relative bg-center min-h-64 py-12 flex justify-evenly"> */}
            <div className="relative bg-center min-h-64 py-10 flex flex-col md:flex-row items-center justify-evenly">

                {/* <div class="max-w-full max-h-full bg-white w-1/3 flex justify-around">
                    <img src="/imagenes/logo.png" alt="" class="flex "/>
                </div> */}
                <div className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
                
                    <img
                        src="/imagenes/logo.png"
                        alt="Logo"
                        className="w-40 sm:w-56 md:w-64 lg:w-80"
                    />
                    {/* <div className="flex items-center justify-center gap-6 w-full px-4">
                    <img
                        src="/imagenes/logo.png"
                        alt="Unión y Renovación"
                        className="w-40 sm:w-48 md:w-56 lg:w-64 h-auto"
                    /> */}
                </div>

                {/* <div class="flex justify-center max-w-full max-h-full items-center w-2/3">
                    <p class="text-black text-[6rem] font-extrabold leading-none text-center">Para que <br/> <span class="text-[14rem]">todos</span> <br/>seamos uno.</p>
                </div> */}
                {/* <div className="flex justify-center items-center w-full md:w-2/3 px-4 text-center">
                    <p className="text-black text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold leading-none">
                        <br />
                        <span className="text-7xl sm:text-8xl md:text-[10rem] lg:text-[14rem] block">Todos</span>
                        <br />
                        por el mismo camino.
                    </p>
                </div> */}
                <div className="flex justify-center items-start w-full md:w-2/3 px-4 text-left">
        <p className="text-black text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold leading-none">
            <span className="text-7xl sm:text-8xl md:text-[10rem] lg:text-[14rem] block -mt-10">
                Todos
            </span>
            <span className="block mt-4">
                por el mismo camino.
            </span>
        </p>
    </div>

            </div>
        </section>
    )
}

//EXPORTS
export default Hero