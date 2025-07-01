import type { Config } from 'tailwindcss'

const config: Config = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                background: '#0f0f0f',
                primary: '#ffffff',
            },
        },
    },
    plugins: [],
}
export default config
