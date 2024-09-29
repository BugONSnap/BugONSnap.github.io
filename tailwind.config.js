/** @type {import('tailwindcss').Config} */
import { join } from 'path';

export default {
    content: [
        './src/**/*.{html,js,svelte,ts}',
        'node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
    ],
    theme: {
        extend: {
            colors: {
                primary: '#3498db',
                secondary: '#f1c40f',
                background: '#2c3e50',
                text: '#ecf0f1',
            },
            spacing: {
                px: '1px',
                py: '1.5rem',
                pr: '1.5rem',
                pl: '1.5rem',
                pt: '1.5rem',
                m: '1.5rem',
                mx: '1.5rem',
                my: '1.5rem',
                ml: '1.5rem',
                mr: '1.5rem',
            },
            fontSize: {
                xs: '0.75rem',
                sm: '0.875rem',
                md: '1rem',
                lg: '1.125rem',
                xl: '1.5rem',
                '2xl': '1.875rem',
                '3xl': '2.25rem',
                '4xl': '2.5rem',
                '5xl': '2.75rem',
                '6xl': '3rem',
            },
            fontFamily: {
                sans: ['cambria', 'Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'next-ui-sans-serif'],
            },
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
                '2xl': '1536px',
            },
        },
    },
    plugins: [
        require('flowbite/plugin')
    ],
}