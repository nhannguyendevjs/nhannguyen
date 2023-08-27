const defaultTheme = require('tailwindcss/defaultTheme');
const tailwindElements = require('tw-elements/dist/plugin.cjs');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{html,js}',
        './node_modules/tw-elements/dist/js/**/*.js',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [
        tailwindElements,
    ],
    darkMode: 'class',
}
