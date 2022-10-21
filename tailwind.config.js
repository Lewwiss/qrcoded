module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: "#011336"
            },
            fontFamily: {
                'sans': ['Karla']
            },
            aspectRatio: {
                'screen': '9 / 16'
            },
        },
    },
    plugins: [],
}