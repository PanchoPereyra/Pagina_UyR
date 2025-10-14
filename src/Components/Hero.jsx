//IMPORT


//FUNCION
function Hero() {
    return (
        <section class="bg-white">
            <div class="relative bg-center min-h-64 py-12 flex justify-evenly">

                <div class="max-w-full max-h-full bg-white w-1/3 flex justify-around">
                    <img src="/imagenes/logo.png" alt="" class="flex "/>
                </div>

                <div class="flex justify-center max-w-full max-h-full items-center w-2/3">
                    <p class="text-black text-[6rem] font-extrabold leading-none text-center">Para que <br/> <span class="text-[14rem]">todos</span> <br/>seamos uno.</p>
                </div>

            </div>
        </section>
    )
}

//EXPORTS
export default Hero