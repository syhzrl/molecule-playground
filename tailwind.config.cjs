/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            animation: {
                'spin-slow': 'spin 1.5s linear infinite',
            },
            colors: {
                'black-primary': '#292929',
                'black-secondary': '#212121',
                'white-primary': '#F0F2F5',
            },
        },
        fontFamily: {
            bold: ['Poppins-Bold'],
        },
    },
    plugins: [],
};
