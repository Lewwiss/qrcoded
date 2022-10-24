module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: "#3800d8",
                secondary: "#00b5d3"
            },
            fontFamily: {
                'sans': ['Karla']
            },
            minHeight: {
                "placeholder": "48rem"
            },
            width: {
                "128": "32rem"
            }
        },
    },
    plugins: [],
}