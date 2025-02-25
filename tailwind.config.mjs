/** @type {import('tailwindcss').Config} */

const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: "var(--font-lato)",
        firaSans: "var(--font-fira-sans)",
      },
      colors: {
        lightSilver: "var(--light-silver)",
        sonicSilver: "var(--sonic-silver)",
        lotion: "var(--lotion)",
        green: "var(--green)",
        castletonGreen: "var(--castleton-green)",
      },
      screens: {
        'max-1250': { max: '1250px' },
        'max-1100': { max: '1100px' },
        'max-620': { max: '620px' },
      }
    },
  },
  plugins: [],
};

export default config;
