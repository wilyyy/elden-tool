module.exports = {
   content: ["./src/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
   darkMode: "media",
   theme: {
      extend: {
         colors: {
            transparent: "transparent",
            current: "currentColor",
            "light-grey": "#E5EEE5",
            purple: "#7652C6",
            richBlack: "#141E2D",
            camel: "#C5A15F",
            camelLight: "#C7BAA1",
            crayola: "#FF5B5B",
         },
      },
      fontFamily: {
         medieval: ["MedievalSharp", "cursive"],
         oswald: ["Oswald", "sans-serif"],
      },
   },
   variants: {
      extend: {},
   },
   plugins: [],
};
