/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens:{
      sm:'576px',
      md:'769px',
      lg:'992',
      xl:'1200px'
    },
    container:{
      center:true,
      padding: '1rem'

    },
    extend: {
      fontFamily:{
        poppins : "'Poppins' , sans-serif",
        roboto : "'Roboto', sans-serif;"
      },
      colors:{
        'primary' : '#45FFCA'
      }
    },
  },
  variants:{
    extend:{
      display: 'group-hover',
      visibility : 'group-hover'
    }
  },
  plugins: [],
}

