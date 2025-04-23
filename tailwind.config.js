/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      // Colores base para asegurar que estén disponibles directamente
      'shadow-black': '#0D0D0D',
      'blood-red': '#C41E3A', 
      'flesh': '#F3D4BE',
      'bruise-purple': '#673147',
      'clown-white': '#F5F5F5', 
      'night-blue': '#1D3461',
      'toxic-orange': '#FF5E0E',
      'absinthe': '#84A646',
      'rust-red': '#A93226',
      'sick-yellow': '#D9A441',
      'gray-blue': '#A3BAC6',
      'transparent': 'transparent',
      'current': 'currentColor',
    },
    extend: {
      colors: {
        // Mantenemos la referencia a todos los colores aquí para mantener consistencia
        'blood-red': '#C41E3A',      // Rojo más intenso y oscuro (labios)
        'flesh': '#F3D4BE',          // Tono de piel claro de las pinturas
        'bruise-purple': '#673147',  // Morado oscuro como magulladura
        'clown-white': '#F5F5F5',    // Blanco maquillaje de payaso
        'night-blue': '#1D3461',     // Azul muy oscuro (capucha)
        'toxic-orange': '#FF5E0E',   // Naranja vibrante (fondos)
        'absinthe': '#84A646',       // Verde enfermizo
        'shadow-black': '#0D0D0D',   // Negro profundo
        'rust-red': '#A93226',       // Rojo oxidado
        'sick-yellow': '#D9A441',    // Amarillo enfermizo
        
        // Colores previos
        coral: '#E7503B',
        'acid-green': '#6E9033',
        'dark-green': '#26351C',
        'deep-blue': '#22437D',
        'gray-blue': '#A3BAC6',
        ochre: '#D1A256',      
        'skin-beige': '#F3D1A0',
        'toast-brown': '#7C3F18',
        'deep-black': '#191414',
        'bright-orange': '#F47A28',
        'dirty-white': '#F7F5E6',
      },
      fontFamily: {
        'sans': ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
        'display': ['Oswald', 'sans-serif'],
        'grotesque': ['Playfair Display', 'serif'], // Nueva fuente para elementos destacados
      },
      backgroundImage: {
        'texture-noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        'brush-stroke': "url(\"data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0%25' y1='0%25' x2='100%25' y2='0%25' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%23A93226'/%3E%3Cstop offset='1' stop-color='%23FF5E0E'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M20 40 Q40 20 60 40 T100 40 T140 40 T180 40' stroke-width='35' stroke='url(%23a)' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'brutal': '4px 4px 0px 0px rgba(0, 0, 0, 0.9)',
        'inner-glow': 'inset 0 0 8px 2px rgba(255, 94, 14, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
} 