/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'coral': '#E7503B',      // Rojo coral intenso
        'acid-green': '#6E9033', // Verde ácido/oliva
        'dark-green': '#26351C', // Verde oscuro casi negro
        'deep-blue': '#22437D',  // Azul eléctrico profundo
        'gray-blue': '#A3BAC6',  // Azul claro grisáceo
        'ochre': '#D1A256',      // Amarillo ocre/siena
        'skin-beige': '#F3D1A0', // Beige piel
        'toast-brown': '#7C3F18',// Marrón tostado
        'deep-black': '#191414', // Negro profundo
        'bright-orange': '#F47A28', // Naranja intenso
        'dirty-white': '#F7F5E6', // Blanco sucio
      },
      fontFamily: {
        'sans': ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
        'display': ['Oswald', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 