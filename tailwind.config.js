/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      fontFamily: {
        base: ["var(--font-base)", "sans-serif"],
      },
      colors: {
        primary: "#660066",
        blackx: "#090909",
        blacky: "#666",
        slate: "#333366",
        slate2: "#5b5b84",
        gray40: "#666666",
        "coral-red": "#FF6452",
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)",
      },
      backgroundImage: (theme) => ({
        space: "url('/assets/images/bg-hero-1920-480.png')",
        hMerhaba: "url('/assets/images/home-merhaba.jpg')",
        rMerhaba: "url('/assets/images/reyhan-merhaba.jpg')",
        fMerhaba: "url('/assets/images/felsefe-merhaba.jpg')",
        tMerhaba: "url('/assets/images/topluluk-merhaba.jpg')",
        iMerhaba: "url('/assets/images/iletisim-merhaba.jpg')",
      }),
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar"),
  ],
};
