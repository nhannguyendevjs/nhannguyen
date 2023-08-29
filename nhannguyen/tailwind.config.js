const defaultTheme = require('tailwindcss/defaultTheme');
const tailwindMerge = require('tailwind-merge');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{html,ts}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [
        tailwindMerge,
    ],
    darkMode: 'class',
}
