module.exports = {
    theme: {
        extend: {
            colors: {
                yellow: {
                    100: '#ecd47f',
                    200: '#e1ba32',
                    300: '#ddb119',
                    400: '#f7bf00',
                    500: '#daa900',
                    700: '#c49800',
                    800: '#684F1D',
                    900: '#453411'
                }
            },
            width: {
                '96': '24rem',
                '112': '28rem',
                '128': '32rem',
            }
        }
    },
    variants: {
        padding: ['responsive', 'first', 'hover', 'focus', 'last'],
        cursor: ['hover'],
        background: ['hover']
    },
    plugins: []
}
