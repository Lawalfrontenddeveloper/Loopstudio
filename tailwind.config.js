/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'asset-image': "url('/src/images/asset 36.jpeg')",
        'asset-image-1': "url('/src/images/asset 14.webp')"},
        colors: {
          blue: {
            950: '#17275c',
          },
        }
      }
    },
  plugins: [],
}