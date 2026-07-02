# SOEVER — Sitio web institucional

Sitio informativo para el Sindicato de Empleados Viales (SOEVER), construido con **Vite + React + Tailwind CSS v4**.

## Cómo correrlo

```bash
npm install
npm run dev
```

Abrí `http://localhost:5173` en el navegador.

Para generar la versión de producción:

```bash
npm run build
```

Los archivos listos para subir a un hosting quedan en la carpeta `dist/`.

## Estructura

```
src/
  components/   → Header, Footer, ThemeToggle, Logo, cards, divisores, etc.
  pages/        → Una página por sección (Home, Noticias, Nosotros, Beneficios, Afiliación, Documentos, Contacto)
  data/         → Contenido editable: noticias.js, institucional.js, beneficios.js
  hooks/        → useTheme.js (maneja el switch de inversión de colores)
  index.css     → Paleta de colores y tipografías (todo el sistema de diseño vive acá)
```

## Cómo reemplazar el logo

El logo actual es simbólico (un escudo con las iniciales SOEVER), pensado para reemplazarse fácil:

1. Reemplazá el contenido de `src/components/Logo.jsx` por tu propio SVG, o
2. Si tenés el logo como imagen (PNG/SVG ya armado), poné el archivo en `src/assets/` e importalo en `Logo.jsx` con una etiqueta `<img>` en lugar del SVG actual.
3. Si el logo nuevo ya tiene colores propios definidos, podés sacar los `stroke="var(--accent)"` del SVG y dejar los colores fijos del archivo.

También conviene actualizar `public/favicon.svg` con una versión simplificada del logo nuevo.

## Cómo cargar noticias nuevas

Editá `src/data/noticias.js` y agregá un objeto nuevo al array, siguiendo el mismo formato (incluí `slug` único, `categoria`, `titulo`, `resumen`, `fecha` en formato `YYYY-MM-DD`, y `destacada: true` en la que quieras mostrar como principal en el home).

## Paleta de colores y modo invertido

Todo el sistema de color está definido como variables CSS en `src/index.css`, bajo `:root` (modo normal, fondo negro) y `:root[data-theme='inverted']` (modo invertido, fondo amarillo). El switch en el header alterna el atributo `data-theme` del documento y guarda la preferencia en el navegador del visitante.

## Notas

- Las secciones de Afiliación y Contacto tienen formularios funcionales en el frontend (muestran confirmación visual), pero **no envían datos a ningún servidor todavía** — eso requiere conectarlos a un backend, email service (ej. Formspree, Resend) o planilla, según lo que prefieras.
- El contenido (textos de comisión directiva, historia, beneficios, documentos) es de ejemplo/placeholder y conviene reemplazarlo por la información real de SOEVER antes de publicar.
