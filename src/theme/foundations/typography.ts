

export const fonts = {
    heading: 'Inter, sans-serif',
    body: 'Inter, serif',
}

export const headingStyles = {

    baseStyle: {
        fontFamily: fonts.heading,
        fontWeight: "bold",
        letterSpacing: "-0.4px",
        color: "neutral.900",
    },

    sizes: {
        "5xl": {
            fontSize: "128px",
            lineHeight: "136px",
        },
        "4xl": {
            fontSize: "96px",
            lineHeight: "104px",
        },
        "3xl": {
            fontSize: "72px",
            lineHeight: "80px",
        },
        "2xl": {
            fontSize: "60px",
            lineHeight: "72px",
        },
        "lg": {
            fontSize: "46px",
            lineHeight: "60px",
        },
        "md": {
            fontSize: "36px",
            lineHeight: "44px",
        },
        "sm": {
            fontSize: "30px",
            lineHeight: "38px",
        },
        "xs": {
            fontSize: "24px",
            lineHeight: "32px",
        },


    },
    // styles for different visual variants ("outline", "solid")
    variants: {
        fontWeight: {
            normal: 400,
            medium: 500,
            semibold: 600,
            bold: 700,
        }
    },

    // default values for `size` and `variant`
    defaultProps: {
        size: "",
        variant: "",
    },


}

export const textStyles = {

    baseStyle: {
        fontFamily: fonts.body,
        fontWeight: "regular",
        color: "neutral.600"
    },

    sizes: {
        "xl": {
            fontSize: "20px",
            lineHeight: "30px",
        },
        "lg": {
            fontSize: "18px",
            lineHeight: "28px",
        },
        "md": {
            fontSize: "16px",
            lineHeight: "24px",
        },
        "sm": {
            fontSize: "14px",
            lineHeight: "20px",
        },
        "xs": {
            fontSize: "12px",
            lineHeight: "18px",
        },


    },
    // styles for different visual variants ("outline", "solid")
    variants: {},
    // default values for `size` and `variant`
    defaultProps: {
        size: "",
        variant: "",
    },


}


// export const styles = {
//     styles: {
//         global: {
//             h1: {
//                 fontSize: headingStyles.sizes['2xl'].fontSize,
//                 fontWeight: headingStyles.variants.fontWeight.bold,
//                 lineHeight: headingStyles.sizes['2xl'].lineHeight,
//             },
//             h2: {
//                 fontSize: headingStyles.sizes.lg.fontSize,
//                 fontWeight: headingStyles.variants.fontWeight.bold,
//             },
//             h3: {
//                 fontSize: headingStyles.sizes.md.fontSize,
//                 fontWeight: headingStyles.variants.fontWeight.bold,
//             },
//             h4: {
//                 fontSize: headingStyles.sizes.sm.fontSize,
//                 fontWeight: headingStyles.variants.fontWeight.bold,
//             },
//             h5: {
//                 fontSize: headingStyles.sizes.xs.fontSize,
//                 fontWeight: headingStyles.variants.fontWeight.bold,
//             },
//         }
//     },

// }
