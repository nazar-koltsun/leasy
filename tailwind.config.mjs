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
        poppins: "var(--font-poppins)",
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
        fireOpal: "var(--fire-opal)",
        rhythm: "var(--rhythm)",
        auroMetal: "var(--auro-metal)",
        antiFlashWhite: "var(--anti-flash-white)",
        magicMint: "var(--magic-mint)",
        philippineGreen: "var(--philippine-green)",
        palePink: "var(--pale-pink)",
        bostonUniversityRed: "var(--boston-university-red)",
        blanchedAlmond: "var(--blanched-almond)",
        windsorTan: "var(--windsor-tan)",
        richBlack: "var(--rich-black)",
        darkLiver: "var(--dark-liver)",
        charlestonGreen: "var(--charleston-green)",
        raisinBlack: "var(--raisin-black)",
        cultured: "var(--cultured)",
        independence: "var(--independence)",
      },
      screens: {
        'max-1400': { max: '1400px' },
        'max-1250': { max: '1250px' },
        'max-1180': { max: '1180px' },
        'max-1100': { max: '1100px' },
        'max-1024': { max: '1024px' },
        'max-840': { max: '840px' },
        'max-768': { max: '768px' },
        'max-700': { max: '700px' },
        'max-620': { max: '620px' },
      },
      boxShadow: {
        cardShadow: '0 30px 60px 0 rgba(0, 19, 87, 0.06)',
        doobleSmallShadow: '0 2px 4px 0 rgba(35, 38, 59, 0.1), 0 0 0 1px rgba(35, 38, 59, 0.05);',
      }
    },
  },
  plugins: [],
};

export default config;
