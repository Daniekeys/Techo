  // tailwind.config.js
  module.exports = {
    purge: [],
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
     darkMode: false, // or 'media' or 'class'
     theme: {
      colors: {
        textPrimary: '#474747',
        textSecondary: '#474747',
        black:"#000000",
        lightBlack:'#00000075',
        white:"#ffff",
        primaryColor:'#100E86',
        darkPrimaryColor:"#0d0c6e",
        lightBlue:"#00B4D7",
        lightGray:"#ECECEC",
        googleBlue:"#1784BD",
        darkGoogleBlue:"#0b5881",
        red:"#ff0000"
      },
       extend: {},
     },
     variants: {
       extend: {},
     },
     plugins: [],
   }