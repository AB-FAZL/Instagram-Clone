const plugin = require('tailwindcss/plugin')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('optional', '&:optional')
      addVariant('group-optional', ':merge(.group):optional &')
      addVariant('peer-optional', ':merge(.peer):optional ~ &')
    })
  ],
}