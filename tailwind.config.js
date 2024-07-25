/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      scrollbar: ['rounded'],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          '.scrollbar-hidden': {
            'scrollbar-width': 'none', /* Firefox */
            '-ms-overflow-style': 'none', /* IE and Edge */
          },
          '.scrollbar-hidden::-webkit-scrollbar': {
            display: 'none', /* Safari and Chrome */
          },
        },
        ['responsive', 'hover']
      );
    },
  ],
}
