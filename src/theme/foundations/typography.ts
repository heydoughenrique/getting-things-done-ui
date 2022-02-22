export const typography = {
    fonts: {
        body: 'Inter, sans-serif',
        heading: 'Inter, sans-serif',
    },

    styles: {
        global: {
            'h1, h2, h3, h4, h5': {
                color: 'neutral.900',
            },

            h1: {
                fontSize: '6xl', // 60px
                lineHeight: '1',
                fontWeight: '700'
            },

            h2: {
                fontSize: '4xl', // 36px
                lineHeight: 'shorter',
                fontWeight: '600'
            },

            h3: {
                fontSize: '2xl', // 24px
                lineHeight: 'shorter',
                fontWeight: '600'
            },


            h4: {
                fontSize: 'lg', // 36px
                fontWeight: '600'
            },


            'p, a': {
                color: 'neutral.600',
                fontSize: 'md',
                lineHeight: 'tall'
            },

        },

        defaultProps: {
            p: {
                fontSize: '9xl'
            },
        }
    },
}
