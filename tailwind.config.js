/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{ts,html,svelte}'],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "12px",
        md: "16px",
        lg: "20px",
      },
    },
    extend: {
      screens: {
        "xl-max": { max: "1279px" },
        "lg-max": { max: "1023px" },
        "md-max": { max: "767px" },
        "sm-max": { max: "639px" },
        "lg-only": { min: "768px", max: "1023px" },
        "md-only": { min: "640px", max: "767px" },
      },
    },
  },
  plugins: [],
}
