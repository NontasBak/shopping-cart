/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            animation: {
                slideIn: "slideIn 0.3s ease",
                slideOut: "slideOut 0.3s ease",
                fadeIn: "fadeIn 0.3s ease",
                fadeOut: "fadeOut 0.3s ease",
            },
            keyframes: {
                slideIn: {
                    from: {
                        transform: "translateX(100%)",
                    },
                    to: {
                        transform: "translateX(0)",
                    },
                },
                slideOut: {
                    from: {
                        transform: "translateX(0)",
                    },
                    to: {
                        transform: "translateX(100%)",
                    },
                },
                fadeIn: {
                    from: {
                        opacity: 0,
                    },
                    to: {
                        opacity: 1,
                    },
                },
                fadeOut: {
                    from: {
                        opacity: 1,
                    },
                    to: {
                        opacity: 0,
                    },
                },
            },
        },
    },
    plugins: [],
};
