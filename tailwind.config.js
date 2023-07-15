/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: [
        "./src/**/*.{html,js,tsx}"
    ],
    theme: {
        extend: {
            fontFamily : {
                sans : ['Montserrat', ...defaultTheme.fontFamily.sans]
            },
            colors: {
                principal: "#00209F",
                secundary: "#D21034",
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}