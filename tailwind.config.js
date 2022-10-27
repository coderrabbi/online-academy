/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            keyframes: {
                slideUp: {
                    '0%': {
                        transform: 'translateY(-5rem)',
                    },
                    '100%': {
                        transform: 'translateY(0)',
                    },
                },
                slideDown: {
                    '0%': {
                        transform: 'translateY(5rem)',
                    },
                    '100%': {
                        transform: 'translateY(0)',
                    },
                },
                sliderUp: {
                    '0%': {
                        transform: 'translateY(-5rem)',
                        visibility: 'visible',
                        top: '23rem',
                    },
                    '100% ': {
                        visibility: 'visible',
                        top: '17rem',
                    },
                },
            },
            animation: {
                'slide-up': 'slideUp  0.5s ease',
                'slide-down': 'slideDown  0.5s ease',
                'slider-up': 'sliderUp  1s ease ease 0.5s forwards',
            },
        },
    },
    plugins: [require('@tailwindcss/forms'), require('daisyui')],
};
