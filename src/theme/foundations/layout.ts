export const layout = {
    // Used for sections
    sizes: {
        max: "max-content",
        min: "min-content",
        full: "100%",
        "3xs": "14rem", // 224px
        "2xs": "16rem", // 256px
        xs: "20rem", // 320px
        sm: "24rem", // 384px
        md: "28rem", // 448px
        lg: "32rem",// 512px
        xl: "36rem", // 576px
        "2xl": "42rem", // 672px
        "3xl": "48rem", // 768px
        "4xl": "56rem", // 896px
        "5xl": "64rem", // 1024px
        "6xl": "72rem", // 1152px
        "7xl": "80rem", // 1280px
        "8xl": "90rem", // 1440px
        // Used for Container
        container: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1440px",
        },
    },

    layerStyles: {
        base: {
            bg: 'gray.50',
            border: '2px solid',
            borderColor: 'gray.500',
        },

        primary: {
            bg: 'primary.500',
            color: 'neutral.600',
            'h1, h2, h3, h4, h5': {
                color: 'white'
            },
            'p, a': {
                color: 'white'
            },

            button: {
                bg: 'secondary.500',
                color: 'secondary.800',

                _hover: {
                    bg: 'secondary.400',
                    color: 'secondary.800',
                },
            }

        },

        secondary: {
            bg: 'secondary.200',
            color: 'neutral.600',
            'h1, h2, h3, h4, h5': {
                color: 'neutral.900'
            },
            'p, a': {
                color: 'neutral.800'
            },

            button: {
                bg: 'secondary.500',
                color: 'secondary.800',

                _hover: {
                    bg: 'secondary.400',
                    color: 'secondary.800',
                },
            }
        },

        tertiary: {
            bg: 'primary.50',
            color: 'neutral.600',
            'h1, h2, h3, h4, h5': {
                color: 'neutral.900'
            },
            'p, a': {
                color: 'neutral.800'
            },

            button: {
                bg: 'primary.100',
                color: 'primary.500',

                _hover: {
                    bg: 'primary.200',
                    color: 'primary.500',
                },
            }

        },

        neutral: {
            bg: 'neutral.800',
            color: 'neutral.100',
            'h1, h2, h3, h4, h5': {
                color: 'neutral.500'
            },
            'p, a': {
                color: 'neutral.100'
            }

        },
    },
}