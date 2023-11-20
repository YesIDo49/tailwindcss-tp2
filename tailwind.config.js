/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#1C85E8",
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.unsplash.com/photo-1540509091513-39cb2c5fa101?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      },
      borderRadius: {
        'none': '0',
        'small': '10px',
      },
    },
  },
  plugins: [],
}

