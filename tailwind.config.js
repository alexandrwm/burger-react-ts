/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'the-end' :'#2b2a2b',
      'white' :'#FDFEFE',
      'orange' :'#FFA500',
      

    },
    extend: {
      backgroundImage: {
       'dots': "url('./assets/images/bg-texture.png')",
      
       'arrow-left': "url('./src/assets/images/arrow-left.svg')",
      },
    },
  },
  plugins: [],
}

