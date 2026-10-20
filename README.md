# Dermaclínica Web

Rediseño del frontend de [dermaclinica.cl](https://dermaclinica.cl), clínica dermatológica en Temuco, Chile.
El sitio consume WordPress como CMS headless (solo para el blog) y el resto del contenido es estático.

## Stack

- [Next.js 16](https://nextjs.org) (App Router) + React 19
- Tailwind CSS 4
- Framer Motion, Lucide React
- TypeScript
- Fuente de datos del blog: WordPress REST API (`https://dermaclinica.cl/wp-json/wp/v2`)

## Requisitos

- Node.js 20 o superior
- npm (incluido con Node)
- Conexión a internet: el blog y sus imágenes se cargan desde dermaclinica.cl

## Cómo ejecutarlo

```bash
# 1. Clonar el repositorio
git clone git@github.com:C-RB/dermaclinica-web.git
cd dermaclinica-web

# 2. Instalar dependencias
npm install

# 3. Levantar el servidor de desarrollo
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

No se necesitan variables de entorno: la URL de la API de WordPress está definida en `lib/wordpress.ts`.

## Scripts

| Comando         | Descripción                                   |
|-----------------|-----------------------------------------------|
| `npm run dev`   | Servidor de desarrollo con recarga automática |
| `npm run build` | Build de producción                           |
| `npm run start` | Sirve el build de producción (requiere build) |
| `npm run lint`  | Revisa el código con ESLint                   |

Para probar la versión de producción localmente:

```bash
npm run build
npm run start
```

## Estructura

```
app/
├── page.tsx              Home
├── servicios/            Servicios
├── doctores/             Equipo médico
├── blog/                 Listado de posts y [slug] individual (WordPress)
├── contacto/             Contacto
├── agendar/              Agendamiento
├── promociones/          Promociones
├── dermatitis/           Dermatitis
├── dermatologia/         Cirugías e inyecciones
├── estetica/             CoolTech, cosmetología, depilación, inyección, tienda
└── recomendaciones/      Recomendaciones (acné, dermatitis)
components/               Navbar, Hero, Footer, PostCard, etc.
lib/
├── wordpress.ts          Funciones fetch a la API de WordPress
├── especialistas.ts      Datos del equipo médico
└── utils.ts              Utilidades
public/                   Imágenes y recursos estáticos
```

## Solución de problemas

- **Las imágenes del blog no cargan:** `next.config.ts` solo permite imágenes de `dermaclinica.cl/wp-content/uploads/`. Si cambia el dominio, actualizar `remotePatterns`.
- **El blog aparece vacío:** verificar que `https://dermaclinica.cl/wp-json/wp/v2/posts` responda desde tu red.
- **Puerto 3000 ocupado:** `npm run dev -- -p 3001`.

## Deploy

Pensado para [Vercel](https://vercel.com): importar el repositorio y usar la configuración por defecto de Next.js.

## Flujo de trabajo

- `main`: versión estable
- `develop`: integración
- `feature/*`: una rama por vista o funcionalidad
