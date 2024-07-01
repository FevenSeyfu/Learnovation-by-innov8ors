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
        'textBlue': "#5663D9",
        'orange': "#FFB58A",
        'purplePink': "#8B15BD",
        'deepOrange': "#F79367",
      }
    },
    plugins: [],
  }
}
