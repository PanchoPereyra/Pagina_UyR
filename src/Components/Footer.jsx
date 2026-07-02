//IMPORT

//FUNCION
function Footer() {
  return (

    // <footer >
    //   <div class="bg-orange-600/65">
    //     <div class="max-w-6xl mx-auto px-6 gap-8 flex justify-evenly">
    <footer class=" text-white">
      <div class="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">

        {/*COLUMNA 1 - DESCRIPCION */}
        {/* <div class="w-1/2 text-center">
            <h2 class="text-lg font-semibold mb-2">Unión y Renovación</h2>
            <div>
              <p class="text-sm">
                Unidos por la defensa de los derechos laborales y el bienestar de todos los trabajadores.
                Juntos construimos un futuro más justo.
              </p>
            </div>
          </div> */}
        <div class="text-center md:text-left md:w-1/2">
          <h2 class="text-xl font-semibold mb-3">Unión y Renovación</h2>
          <p class="text-sm leading-relaxed text-yellow-400">
            Unidos por la defensa de los derechos laborales y el bienestar de todos los trabajadores.
            Juntos construimos un futuro más justo.
          </p>
        </div>

        {/* COLUMNA 3 - REDES SOCIALES */}
        {/* <div class="w-1/2">
            <h2 className="text-lg font-semibold mb-2 text-center">Seguinos</h2>
            <div className="flex space-x-4 justify-center items-center">
              <div>
                <p>Facebook</p>
              </div>
              <div>
                <p>Instagram</p>
              </div>
            </div>
          </div>
        </div> */}
        {/* RESPONSIVE */}
        {/* <div class="text-center md:w-1/2">
          <h2 class="text-xl font-semibold mb-3">Seguinos</h2>
          <div class="flex justify-center md:justify-end gap-6">
            
            {/* Facebook */}
        {/* <a href="#" class="hover:text-yellow-300 transition-colors">
              <img src="imagenes/facebook.png" alt="" />
            </a> */}

        {/* Instagram */}
        {/* <a href="#" class="hover:text-yellow-300 transition-colors">
              <img src="imagenes/instagram.png" alt="" />
            </a> */}
        {/* </div> */}
        {/* </div> */}
        
        <div className="text-center md:w-1/2 flex flex-col items-center md:items-end">
          <h2 className="text-xl font-semibold mb-3 text-gray-950">Seguinos</h2>

          {/* FACEBOOK */}
          <div className="flex justify-center md:justify-end gap-4">
            <a href="https://www.facebook.com/share/1C2zwSmunZ/" className="hover:scale-110 transition-transform">
              <img
                src="/imagenes/facebook.png"
                alt="Facebook"
                className="w-7 h-7 md:w-8 md:h-8"
              />
            </a>

            {/* INSTAGRAM */}
            <a href="https://www.instagram.com/unionyrenovacion?igsh=ZHJ6Nmc3cG9paDdp" className="hover:scale-110 transition-transform">
              <img
                src="/imagenes/instagram.png"
                alt="Instagram"
                className="w-7 h-7 md:w-8 md:h-8"
              />
            </a>
          </div>
        </div>

      </div>

      {/* LINEA INFERIOR */}
      {/* <hr className="my-6 mx-6" />
        <div className="text-center text-sm ">
          © 2025 Todos los derechos reservados.
        </div> */}
      <hr class="border-gray-950 mx-6" />
      <div class="text-center text-xs py-4 text-yellow-400">
        © 2025 Todos los derechos reservados - SIGMA Ingeniería.
      </div>


    </footer>
  )
}

//EXPORTS
export default Footer