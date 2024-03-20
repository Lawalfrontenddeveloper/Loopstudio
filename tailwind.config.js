/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'asset-image': "url('/src/images/asset 36.jpeg')",
        'asset-image-1': "url('/src/images/asset 14.webp')",    
        'asset-image-2': "url('/src/images/asset 15.webp')",    
        'asset-image-3': "url('/src/images/asset 37.jpeg')",


      },
      }
    },
  plugins: [],
}