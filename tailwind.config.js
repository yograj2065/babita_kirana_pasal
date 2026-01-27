/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#166534", // Green-800
                secondary: "#ca8a04", // Yellow-600
                accent: "#fca5a5", // Red-300
                dark: "#1e293b", // Slate-800
                light: "#f8fafc", // Slate-50
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
