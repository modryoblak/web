/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
            colors: {
                'slsk-dark-purple': '#702f8a',
                'slsk-lavender': '#b580d1',
                'slsk-dark-blue': '#002855',
                'slsk-blue': '#004b87',
                'slsk-aqua': '#00b5e2',
                'slsk-yellow': '#ffcd00',
                'slsk-gold': '#f2a900',
                'slsk-orange': '#ed8b00',
                'slsk-red': '#e03c31',
                'slsk-lime': '#72bf44',
                'slsk-green': '#00965e',
                'slsk-dark-green': '#115740',
                'slsk-brown': '#8b5b29',
                'slsk-beige': '#fce9bf',
                'slsk-white': '#ffffff',
                'slsk-black': '#1d1d1d',
                'zbor-red': '#ea1b21',
                'zbor-green': '#00a654',
                'zbor-blue': '#0000fe',
                'zbor-yellow': '#fef200',
            },
            fontFamily: {
                'georama': ['"Georama"', '"Roboto"', 'sans-serif'],
            },
        },
	},
	plugins: [],
}
