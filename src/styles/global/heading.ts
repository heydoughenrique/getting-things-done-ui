export const HeadingStyles = {

    baseStyle: {
        fontFamily: "heading",
        fontWeight: "",
    },
    // styles for different sizes ("sm", "md", "lg")
    sizes: {
        "5xl": {
            fontSize: "128px",
        },
        "4xl": {
            fontSize: "96px",
        },
        "3xl": {
            fontSize: "72px",
        },
        "2xl": {
            fontSize: "60px",
        },
        "lg": {
            fontSize: "46px",
        },
        "md": {
            fontSize: "36px",
        },
        "sm": {
            fontSize: "30px",
        },
        "xs": {
            fontSize: "24px",
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