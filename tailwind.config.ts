import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#BEE1E6",
        "green-custom": "#006D77",
        "light-grey-custom": "#444",
        "grey-light-custom": "#E9E9E9",
        "light-primary-color": "#d3f9ff",
        "grey-custom": "#929292"
      },
      maxWidth: {
        grid: "69.3125rem",
      },
      height: {
        "height-532": "532px"
      },
      margin: {
        marginBtnNav: "103px",
        marginArrowNav: "0.5px"
      },
      fontSize: {
        fourteen: "14px"
      },
      backgroundImage: {
        'brand-B': "url('/brand-B.svg')",
        "brand-loveclip": "url('/brand-loveclip.svg')",
        "brand-suchi": "url('/brand-suchi.svg')",
        "brand-paint": "url('/brand-paint.svg')",
        "brand-bg": "url('/brand-bg.svg')",
        "brand-time": "url('/brand-time.svg')",
        "brand-m": "url('/brand-m.svg')",
        
      },

    },
  },
  plugins: [],
}
export default config
