//IMPORT


//FUNCION
function Footer() {
  return (

    <footer >
      <div class="bg-orange-600/65">
        <div class="max-w-6xl mx-auto px-6 gap-8 flex justify-evenly">

          {/*COLUMNA 1 - DESCRIPCION */}
          <div class="w-1/2 text-center">
            <h2 class="text-lg font-semibold mb-2">Unión y Renovación</h2>
            <div>
              <p class="text-sm">
                Unidos por la defensa de los derechos laborales y el bienestar de todos los trabajadores.
                Juntos construimos un futuro más justo.
              </p>
            </div>
          </div>

          {/* COLUMNA 2 - CONTACTO */}
          {/* <div>
          <h2 class="text-lg font-semibold mb-2 text-gray-950">Contacto</h2>
          <ul class="text-sm text-gray-950 space-y-2">
            <li class="flex items-center gap-2">
              Av. Ramirez 15, Ciudad de Paraná
            </li>
            <li class="flex items-center gap-2">
              (0343) 1234-5678
            </li>
            <li class="flex items-center gap-2">
              unionyrenovacion@gmail.com
            </li>
          </ul>
        </div> */}

          {/* COLUMNA 3 - REDES SOCIALES */}
          <div class="w-1/2">
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
        </div>

        {/* LINEA INFERIOR */}
        <hr className="my-6 mx-6" />
        <div className="text-center text-sm ">
          © 2025 Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}

//EXPORTS
export default Footer