import React from 'react';
import { 
  Cylinder, 
  CheckCircle2, 
  Megaphone, 
  Building2, 
  Users, 
  HardHat, 
  TreePine, 
  ShieldAlert, 
  Route 
} from 'lucide-react';

export default function AccesosRapidos() {
  // Ajustamos el borde amarillo sutil por defecto (border-yellow-500/30) para calcar tu foto
  const tarjetaEstilo = "group flex flex-col items-center justify-center text-center p-6 rounded-xl border border-yellow-500/30 bg-neutral-950/40 transition-all duration-200 hover:bg-yellow-500 hover:border-yellow-500 hover:scale-[1.03] hover:shadow-[0_0_15px_rgba(250,204,21,0.15)]";
  const iconoEstilo = "w-10 h-10 text-yellow-500 group-hover:text-black transition-colors duration-200 shrink-0";
  const textoEstilo = "mt-4 text-xs font-black uppercase tracking-wider text-neutral-300 group-hover:text-black transition-colors duration-200 leading-tight";

  return (
    <section className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto"> {/* Achicamos la vista un pelín para que los bloques queden más armónicos */}
        
        {/* Título de la sección en Amarillo Vial */}
        <h2 className="text-2xl md:text-3xl font-black text-yellow-500 uppercase tracking-tight mb-10 text-center md:text-left">
          ACCESOS RÁPIDOS
        </h2>

        {/* 🛠️ CAMBIO CLAVE AQUÍ: grid-cols-1 en celu y md:grid-cols-3 fijo en compu para hacer 3x3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          
          {/* Tarjeta 1: Avance de Obra */}
          <a href="#" className={tarjetaEstilo}>
            <Cylinder className={iconoEstilo} strokeWidth={1.5} />
            <span className={textoEstilo}>Avance de Obra</span>
          </a>

          {/* Tarjeta 2: Obras Finalizadas */}
          <a href="#" className={tarjetaEstilo}>
            <CheckCircle2 className={iconoEstilo} strokeWidth={1.5} />
            <span className={textoEstilo}>Obras Finalizadas</span>
          </a>

          {/* Tarjeta 3: Interés General */}
          <a href="#" className={tarjetaEstilo}>
            <Megaphone className={iconoEstilo} strokeWidth={1.5} />
            <span className={textoEstilo}>Interés General</span>
          </a>

          {/* Tarjeta 4: Institucional */}
          <a href="#" className={tarjetaEstilo}>
            <Building2 className={iconoEstilo} strokeWidth={1.5} />
            <span className={textoEstilo}>Institucional</span>
          </a>

          {/* Tarjeta 5: Reunión de Trabajo */}
          <a href="#" className={tarjetaEstilo}>
            <Users className={iconoEstilo} strokeWidth={1.5} />
            <span className={textoEstilo}>Reunión de Trabajo</span>
          </a>

          {/* Tarjeta 6: Conservación */}
          <a href="#" className={tarjetaEstilo}>
            <HardHat className={iconoEstilo} strokeWidth={1.5} />
            <span className={textoEstilo}>Conservación</span>
          </a>

          {/* Tarjeta 7: Estudios Ambientales */}
          <a href="#" className={tarjetaEstilo}>
            <TreePine className={iconoEstilo} strokeWidth={1.5} />
            <span className={textoEstilo}>Estudios Ambientales</span>
          </a>

          {/* Tarjeta 8: Seguridad Vial */}
          <a href="#" className={tarjetaEstilo}>
            <ShieldAlert className={iconoEstilo} strokeWidth={1.5} />
            <span className={textoEstilo}>Seguridad Vial</span>
          </a>

          {/* Tarjeta 9: Estado de Rutas */}
          <a href="#" className={tarjetaEstilo}>
            <Route className={iconoEstilo} strokeWidth={1.5} />
            <span className={textoEstilo}>Estado de Rutas</span>
          </a>

        </div>

      </div>
    </section>
  );
}


// import React from 'react';
// import { 
//   Cylinder, 
//   CheckCircle2, 
//   GraduationCap, 
//   Megaphone, 
//   Building2, 
//   Users, 
//   CloudSun, 
//   HardHat, 
//   TreePine, 
//   ShieldAlert, 
//   Route, 
//   AlertTriangle 
// } from 'lucide-react';

// export default function AccesosRapidos() {
//   // Array de objetos para renderizar las tarjetas dinámicamente sin repetir código
//   const accesos = [
//     { label: 'Avance de Obra', icono: Cylinder },
//     { label: 'Obras Finalizadas', icono: CheckCircle2 },
//     { label: 'Capacitaciones', icono: GraduationCap },
//     { label: 'Interés General', icono: Megaphone },
//     { label: 'Institucional', icono: Building2 },
//     { label: 'Reunión de Trabajo', icono: Users },
//     { label: 'Clima', icono: CloudSun },
//     { label: 'Conservación', icono: HardHat },
//     { label: 'Estudios Ambientales', icono: TreePine },
//     { label: 'Seguridad Vial', icono: ShieldAlert },
//     { label: 'Estado de Rutas', icono: Route },
//     { label: 'Alertas', icono: AlertTriangle },
//   ];

//   return (
//     <section className="bg-black py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Título de la sección en Amarillo Vial */}
//         <h2 className="text-2xl md:text-3xl font-black text-yellow-500 uppercase tracking-tight mb-10 text-center md:text-left">
//           Accesos rápidos
//         </h2>

//         {/* Grid adaptable: 2 columnas en celu, 3 en tablet y 6 en computadora, igual que la foto */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
//           {accesos.map((item, index) => {
//             const IconoComponente = item.icono;
//             return (
//               <a
//                 key={index}
//                 href="#"
//                 className="group flex flex-col items-center justify-center text-center p-6 rounded-xl border border-neutral-800 bg-neutral-950/40 transition-all duration-200 hover:bg-yellow-500 hover:border-yellow-500 hover:scale-[1.03] hover:shadow-[0_0_15px_rgba(250,204,21,0.15)]"
//               >
//                 {/* Icono: amarillo por defecto, negro cuando hacés hover sobre la tarjeta */}
//                 <IconoComponente className="w-10 h-10 text-yellow-500 group-hover:text-black transition-colors duration-200 shrink-0" strokeWidth={1.5} />
                
//                 {/* Texto: gris claro por defecto, negro pesado cuando hacés hover */}
//                 <span className="mt-4 text-xs font-black uppercase tracking-wider text-neutral-300 group-hover:text-black transition-colors duration-200 leading-tight">
//                   {item.label}
//                 </span>
//               </a>
//             );
//           })}
//         </div>

//       </div>
//     </section>
//   );
// }


// import React from 'react';

// export default function AccesosRapidos() {
//   // Una clase base para no repetir todo el texto en las 12 tarjetas, pero de forma simple
//   const tarjetaEstilo = "group flex flex-col items-center justify-center text-center p-6 rounded-xl border border-yellow-500 bg-neutral-950 transition-all duration-200 hover:bg-yellow-500 hover:border-yellow-500 hover:scale-105";
//   const textoEstilo = "mt-4 text-xs font-bold uppercase tracking-wider text-yellow-500 group-hover:text-black transition-colors";

//   return (
//     <section className="bg-black py-16 px-4">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Título de la sección en Amarillo Vial */}
//         <h2 className="text-2xl font-black text-yellow-500 uppercase tracking-tight mb-10">
//           Accesos rápidos
//         </h2>

//         {/* La grilla: 2 columnas en celular, 6 en pantallas grandes */}
//         <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          
//           {/* Tarjeta 1 */}
//           <a href="#" className={tarjetaEstilo}>
//             <span className="text-3xl filter grayscale group-hover:grayscale-0 transition-all">⚙️</span>
//             <span className={textoEstilo}>Avance de Obra</span>
//           </a>

//           {/* Tarjeta 2 */}
//           <a href="#" className={tarjetaEstilo}>
//             <span className="text-3xl">✅</span>
//             <span className={textoEstilo}>Obras Finalizadas</span>
//           </a>

//           {/* Tarjeta 3 */}
//           <a href="#" className={tarjetaEstilo}>
//             <span className="text-3xl">🎓</span>
//             <span className={textoEstilo}>Capacitaciones</span>
//           </a>

//           {/* Tarjeta 4 */}
//           <a href="#" className={tarjetaEstilo}>
//             <span className="text-3xl">📢</span>
//             <span className={textoEstilo}>Interés General</span>
//           </a>

//           {/* Tarjeta 5 */}
//           <a href="#" className={tarjetaEstilo}>
//             <span className="text-3xl">🏛️</span>
//             <span className={textoEstilo}>Institucional</span>
//           </a>

//           {/* Tarjeta 6 */}
//           <a href="#" className={tarjetaEstilo}>
//             <span className="text-3xl">👥</span>
//             <span className={textoEstilo}>Reunión de Trabajo</span>
//           </a>

//           {/* Tarjeta 7 */}
//           <a href="#" className={tarjetaEstilo}>
//             <span className="text-3xl">☀️</span>
//             <span className={textoEstilo}>Clima</span>
//           </a>

//           {/* Tarjeta 8 */}
//           <a href="#" className={tarjetaEstilo}>
//             <span className="text-3xl">👷</span>
//             <span className={textoEstilo}>Conservación</span>
//           </a>

//           {/* Tarjeta 9 */}
//           <a href="#" className={tarjetaEstilo}>
//             <span className="text-3xl">🌳</span>
//             <span className={textoEstilo}>Estudios Ambientales</span>
//           </a>

//           {/* Tarjeta 10 */}
//           <a href="#" className={tarjetaEstilo}>
//             <span className="text-3xl">🛡️</span>
//             <span className={textoEstilo}>Seguridad Vial</span>
//           </a>

//           {/* Tarjeta 11 */}
//           <a href="#" className={tarjetaEstilo}>
//             <span className="text-3xl">🛣️</span>
//             <span className={textoEstilo}>Estado de Rutas</span>
//           </a>

//           {/* Tarjeta 12 */}
//           <a href="#" className={tarjetaEstilo}>
//             <span className="text-3xl">⚠️</span>
//             <span className={textoEstilo}>Alertas</span>
//           </a>

//         </div>

//       </div>
//     </section>
//   );
// }