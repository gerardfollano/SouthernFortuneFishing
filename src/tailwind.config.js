/**
 * Tailwind CSS configuration file
 *
 * docs: https://tailwindcss.com/docs/configuration
 * default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const path = require('path')

module.exports = {
    theme: {
        extend: {

        },
        container: {
            center: true,
            padding: '1rem'
        },
        fontSize: {
            'xs': '.75rem',
            'sm': '.875rem',
            'tiny': '.875rem',
            'base': '1rem',
            'lg': '1.125rem',
            'xl': '1.25rem',
            '2xl': '1.5rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': ['5rem', '5rem'],
            '6xl': ['6rem', '6rem'],
            '7xl': ['7rem', '6rem']
        },
        textShadow: { // defaults to {}
            'default': '0 2px 5px rgba(0, 0, 0, 0.5)',
            'md': '0px 5px 5px rgb(0 0 0 / 50%)',
            'lg': '0 2px 10px rgba(0, 0, 0, 0.5)'
        },
        colors: {
            'black': '#000000',
            'blue': '#0a076c',
            'green': '#22c4cd',
            'gray-dark': '#252525',
            'gray': '#8492a6',
            'gray-light': '#d3dce6',
            'white': '#ffffff',
        },
        fontFamily: {
            sans: ['Graphik', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
            hermona: ['hermonaregular', 'sans-serif'],
            infinite_stroke: ['infinite_strokeregular', 'sans-serif']
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('tailwindcss-textshadow')
    ],
    content: [
        path.resolve(__dirname, '**/*.{js,vue}'),
        path.resolve(__dirname, '../shopify/**/*.liquid')
    ]
}