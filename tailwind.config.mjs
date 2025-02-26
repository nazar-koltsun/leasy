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
        chineseBlack: "var(--chinese-black)",
        darkSlateGray: "var(--dark-slate-gray)",
        brightGray: "var(--bright-gray)",
      },
      screens: {
        'max-1250': { max: '1250px' },
        'max-1180': { max: '1180px' },
        'max-1100': { max: '1100px' },
        'max-768': { max: '768px' },
        'max-620': { max: '620px' },
      },
      boxShadow: {
        cardShadow: '0 30px 60px 0 rgba(0, 19, 87, 0.06)',
      }
    },
  },
  plugins: [],
};

export default config;
