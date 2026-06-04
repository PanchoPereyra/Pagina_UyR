import React from 'react';

function Jubilados() {
    return (
        // Contenedor principal de la página
        <div className="bg-gray-100 min-h-screen py-10 px-4 flex flex-col justify-center items-center font-sans gap-8">

            {/* Contenedor principal estilo folleto (más ancho que los anteriores para albergar las dos columnas en escritorio) */}
            <div className="bg-white w-full max-w-5xl rounded-[30px] shadow-xl overflow-hidden border border-gray-200 p-2 pb-8">

                {/* Cabecera Naranja */}
                <div className="bg-[#E65C23] text-white text-center py-5 rounded-t-[22px] rounded-b-[12px] mb-6 px-4">
                    <h1 className="text-3xl md:text-5xl font-black tracking-wide uppercase">
                        Queridos Jubilados y Jubiladas
                    </h1>
                </div>

                {/* CUERPO EN GRID: 1 columna en móvil, 2 columnas en escritorios grandes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 text-gray-900 text-[14.5px] leading-relaxed text-justify">
                    
                    {/* ================= COLUMNA IZQUIERDA ================= */}
                    <div className="space-y-5">
                        
                        {/* Sección 1 */}
                        <div>
                            <div className="inline-block bg-[#FFF200] px-2 py-0.5 font-bold text-base mb-2 text-left">
                                ¿Problemas con la obra social o la Caja?
                            </div>
                            <p>
                                El SOEVER pone a tu entera disposición un equipo de Abogados especializados para que nunca te sientas solo al realizar reclamos ante la caja de jubilaciones o frente a inconvenientes con OSPA vial, garantizando que se cumpla estrictamente con la prestación médica obligatoria y la atención primaria de tu salud, porque entendemos que tus derechos no son negociables y nuestro compromiso es acompañarte en cada paso burocrático, para que recibas la atención médica, los medicamentos y los beneficios que te corresponden de manera gratuita y con el respaldo de un sindicato que cuida tu bienestar y el de tu familia por sobre todas las cosas.
                            </p>
                        </div>

                        {/* Sección 2 */}
                        <div>
                            <div className="inline-block bg-[#FFF200] px-2 py-0.5 font-bold text-base mb-2 text-left">
                                ¡Viales de pura cepa!
                            </div>
                            <p>
                                Vamos a abrir de manera formal el registro de hijos y nietos de trabajadores viales estableciendo una prioridad absoluta para que las nuevas generaciones de nuestra familia sean quienes fortalezcan el recurso humano de nuestra institución valorando ese orgullo que se hereda en casa y garantizando que el conocimiento que los abuelos y padres transmitieron a lo largo de los años se convierta en la base del crecimiento de nuestro sindicato mediante una política de ingreso transparente que cuida el futuro de nuestros jóvenes y asegura que el esfuerzo vial siga pasando de generación en generación.
                            </p>
                        </div>

                        {/* Sección 3 */}
                        <div>
                            <div className="inline-block bg-[#FFF200] px-2 py-0.5 font-bold text-base mb-2 text-left">
                                ¡Tu jubilación no se toca!
                            </div>
                            <p>
                                Fortalecer el código 01 es la única forma real de defender nuestro 82 % móvil, porque entendemos que cada peso que logramos pasar al sueldo básico consolida definitivamente la escala salarial y garantiza que cualquier aumento sea permanente, trasladándose de manera automática al haber de cada jubilado sin vueltas ni demoras. Por eso nuestra propuesta no se basa en parches temporales o bonos que desaparecen sino en una política salarial estructural y seria que cuida el poder adquisitivo de quienes ya dieron todo por el camino, asegurando que la dignidad de tu salario sea el reflejo fiel de tu esfuerzo y la base sólida de una jubilación justa y móvil para siempre.
                            </p>
                        </div>

                        {/* Sección 4 */}
                        <div>
                            <div className="inline-block bg-[#FFF200] px-2 py-0.5 font-bold text-base mb-2 text-left">
                                ¡A disfrutar se ha dicho!
                            </div>
                            <p>
                                Vamos a organizar tours exclusivos a los eventos culturales y turísticos más importantes, para que nuestros jubilados viales puedan disfrutar de las fiestas populares y los paisajes de nuestra tierra, con la comodidad y la seguridad que se merecen, mediante salidas grupales diseñadas a su medida con transporte de calidad y coordinación permanente garantizando que cada viaje sea una oportunidad para el encuentro la alegría y el descanso, porque entendemos que después de tantos años de trabajo el sindicato debe ser el motor que los lleve a conocer y disfrutar de la riqueza de nuestra cultura, con el respeto y el cariño de siempre en cada destino elegido.
                            </p>
                        </div>

                    </div>

                    {/* ================= COLUMNA DERECHA ================= */}
                    <div className="space-y-5">

                        {/* Sección 5 */}
                        <div>
                            <div className="inline-block bg-[#FFF200] px-2 py-0.5 font-bold text-base mb-2 text-left">
                                ¡Tu propia Subsecretaría!
                            </div>
                            <p>
                                La creación de la subsecretaría del jubilado nace con la firme convicción de que nadie conoce mejor tus necesidades que vos mismo, por eso abrimos este nuevo espacio de participación real donde los propios jubilados serán los encargados de impulsar y diseñar los proyectos que consideren necesarios transformando sus ideas en acciones concretas que mejoren la calidad de vida de todos los compañeros pasivos.
                            </p>
                        </div>

                        {/* Sección 6 */}
                        <div>
                            <div className="inline-block bg-[#FFF200] px-2 py-0.5 font-bold text-base mb-2 text-left">
                                ¡Ponemos la sede en condiciones!
                            </div>
                            <p>
                                Queremos invitarte a ser parte de esta nueva etapa donde nuestras sedes de Andrés Pasos y San Juan junto a la casa de calle Gobernador Crespo y nuestro querido camping se transformarán en espacios totalmente accesibles y modernos pensados para que disfrutes de talleres recreativos y momentos compartidos con compañeros de toda la vida, porque sabemos que son el capital más grande de nuestro sindicato.
                            </p>
                        </div>

                        {/* Sección 7 */}
                        <div>
                            <div className="inline-block bg-[#FFF200] px-2 py-0.5 font-bold text-base mb-2 text-left">
                                ¡Celebración de tu día!
                            </div>
                            <p>
                                Queremos celebrar tu día porque para nosotros el día del jubilado es la oportunidad perfecta para poner en valor tu entrega de toda una vida y disfrutar juntos de una jornada inolvidable entre amigos reafirmando nuestro compromiso de que cada festejo sea un homenaje a tu trayectoria y una muestra clara de que en esta gestión los jubilados vuelven a ser el centro de la escena.
                            </p>
                        </div>

                        {/* Sección 8 */}
                        <div>
                            <div className="inline-block bg-[#FFF200] px-2 py-0.5 font-bold text-base mb-2 text-left">
                                ¡Tu experiencia vale!
                            </div>
                            <p>
                                Vamos a implementar un programa de capacitación liderado íntegramente por nuestros jubilados viales tomando como ejemplo el gran modelo de santa fe donde los compañeros que ya se retiraron hoy brindan sus conocimientos incluso a diferentes comunas mediante convenios institucionales permitiendo que toda esa sabiduría acumulada en años de trabajo en los caminos se transforme en enseñanza viva para las nuevas generaciones, mientras el sindicato garantiza el marco legal y los acuerdos necesarios para que tu saber siga construyendo futuro y bienestar.
                            </p>
                        </div>

                    </div>

                </div>
            </div>

            {/* Botón de "Volver al inicio" abajo de las columnas */}
            <a
                href="/"
                className="px-6 py-2 bg-[#E65C23] text-white rounded-lg shadow hover:bg-[#E65C23] transition"
            >
                Volver al inicio
            </a>

        </div>
    );
}

export default Jubilados;