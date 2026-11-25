# PZRP | Reglamento Oficial

Aplicación de consulta interactiva del reglamento del servidor, construida con Next.js App Router, TypeScript, Tailwind CSS, Framer Motion y Lucide React.

## Requisitos
- Node.js 20.9 o superior
- npm

## Instalación
```bash
npm install
npm run dev
```
Abre http://localhost:3000

## Estructura
```text
pzrp-rulebook/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── RulesApp.tsx
├── data/
│   └── rules.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## Editar el reglamento
Todo el contenido vive en `data/rules.ts`. Cada sección tiene `id`, `title`, `icon` y un arreglo `rules`. Cada regla tiene `title` y `content`. Puedes agregar, editar o quitar reglas sin modificar el componente visual.

## Funciones incluidas
- Navegación por secciones.
- Búsqueda en títulos y contenido de todas las reglas.
- Atajo Ctrl/Cmd + K.
- Acordeones para abrir y cerrar reglas.
- Expandir o contraer todas las reglas de una sección.
- Navegación anterior / siguiente.
- Menú lateral adaptable a móvil.
- Animaciones de entrada y transición.
