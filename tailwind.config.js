/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,scss,ts}'],
    theme: {
        extend: {
            colors: {
                'website-background-color': '#191919',
                'black-palette': {
                    50: '#ffffff',
                    100: '#C7C7C7',
                    200: '#7A7A7A',
                    300: '#6f6f6f',
                    400: '#3B3B3B',
                    500: '#313131',
                    600: '#252525',
                    700: '#1a1a1a',
                    800: '#0F0F0F',
                    900: 'black',
                },
            },
        },
    },
    plugins: [],
};
