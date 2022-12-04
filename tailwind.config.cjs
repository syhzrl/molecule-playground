/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            animation: {
                'spin-slow': 'spin 1.5s linear infinite',
            },
        },
        fontFamily: {
            bold: ['Dosis-Bold'],
        },
    },
    plugins: [],
};
