/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lightOrange': "#FFFDF7",
        'silver': "#D3D3D3",
        'white': "#FFFFFF",
        'purple': "#602E93",
        'lightGrey': "#797979",
        'lightPink': "#C68CAD",
        'fusciaPink': "#AD72C2",
        'royalBlue': "#210080",
         'textColor': "#242331",
        'lightPurple' : "#EFECFF",
        'darkPurple' : '#5236FF',
        'darkGray' : '#242331',
        'lightPurple50': '#EBE7FF',
        'brand50':'#F9F5FF',
        'gray700': '#344054',
        'gray300' : '#D0D5DD'
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
      },
    },
    plugins: [],
  }
}
