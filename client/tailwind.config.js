/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './components/**/*.{vue,js,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
        "./app.vue",
        // "./assets/**/*.scss",
        // "./assets/**/*.css",
    ],
    variants: {
        backgroundColor: ['dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd'],
        textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    },
    theme: {
        extend: {
            container: {
                center: true,
            },
            spacing: {
                'xs': '4px',
                'sm': '8px',
                'md': '16px',
                'lg': '32px',
                'xl': '48px',
                '2xl': '64px',
            },
            margin: {
                'xs': '4px',
                'sm': '8px',
                'md': '16px',
                'lg': '32px',
                'xl': '48px',
                '2xl': '64px',
            },
            fontSize: {
                'xs': '.8rem',
                'sm': '.9rem',
                'md': '1.04rem',
                'lg': '1.2rem',
                'xl': '1.4rem',
                '2xl': '1.6rem',
                '3xl': '1.8rem',
                '4xl': '2rem'
            },
            colors: {
                transparent: 'transparent',
                black: '#000',
                white: '#fff',
                primary: {
                    lightest: '#7398ef',
                    light: '#5865F2',
                    DEFAULT: '#404eed',
                    dark: '#204fb6',
                    darkest: '#203769',
                },
                secondary: 'var(--color-secondary)',
            }
        }
    }
}
