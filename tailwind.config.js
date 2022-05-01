module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        'myWhite': '#FAF7F7',
        'claimed': ' #050448'
      },
      fontFamily:{
        "poppins": ["Poppins-Regular"],
        "poppins-bold": ["Poppins-Bold"],
        "outfit": ['Outfit-ExtraBold'],
      },
      screens: {
        md: '1099px'
      }
    },
  },
  variants: {
    backgroundColor: ['active']
  },
  plugins: [],
}

