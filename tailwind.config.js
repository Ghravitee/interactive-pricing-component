/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "Soft-Cyan-Full-Slider-Bar": "hsl(174, 77%, 80%)",
        "Strong-Cyan-Slider-Background": "hsl(174, 86%, 45%)",
        "Light-Grayish-Red-Discount-Background": "hsl(14, 92%, 95%)",
        "Light-Red-Discount-Text": "hsl(15, 100%, 70%)",
        "Pale-Blue-CTA-Text": "hsl(226, 100%, 87%)",
      
        "White-Pricing-Component-Background": "hsl(0, 0%, 100%)",
        "Very-Pale-Blue-Main-Background": "hsl(230, 100%, 99%)",
        "Light-Grayish-Blue-Empty-Slider-Bar": "hsl(224, 65%, 95%)",
        "Light-Grayish-Blue-Toggle-Background": "hsl(223, 50%, 87%)",
        "Grayish-Blue-Text": "hsl(225, 20%, 60%)",
        "Dark-Desaturated-Blue-Text-CTA-Background": "hsl(227, 35%, 25%)",
      },
      backgroundImage: {
        "main-background": "url('./src/images/bg-pattern.svg')",
      }
    },
  },
  plugins: [],
}

