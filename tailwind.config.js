/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: "#f1f5fd",
                    100: "#dfe9fa",
                    200: "#c6d9f7 ",
                    300: "#9fc1f1",
                    400: "#729fe8",
                    500: "#4978df    ",
                    600: "#3c62d4",
                    700: "#334fc2 ",
                    800: "#2f429e",
                    900: "#2b3b7d",
                },
                secondary: {
                    DEFAULT: "#1877F2",
                },
                info: {
                    50: "#EFF6FF",
                    200: "#BFDBFE",
                    400: "#60A5FA",
                    600: "#2563EB", //base
                    800: "#1E40AF",
                },
                success: {
                    50: "#EEFCF3",
                    200: "#B5F5CC",
                    400: "#4BD87D",
                    600: "#239849", //base
                    800: "#1B5A31",
                },
                warning: {
                    50: "#FFFBEB",
                    200: "#FDE68A",
                    300: "#FCD34D",
                    400: "#FBBF24", // base
                    600: "#D97706",
                    800: "#92400E",
                },
                danger: {
                    50: "#FEF2F2",
                    200: "#FECACA",
                    400: "#F87171",
                    600: "#DC2626", //base
                    800: "#991B1B ",
                },
            },
        },
        fontFamily: {
            inter: ["Inter"],
            poppins: ["Poppins"],
            sourcesans3: ["Source Sans 3"],
        },
    },
    plugins: [],
};
