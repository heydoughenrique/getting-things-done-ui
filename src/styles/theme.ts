import { extendTheme } from '@chakra-ui/react'
import { HeadingStyles as Heading } from './global/heading'
import { TextingStyles as Text } from './global/texting'

export const theme = extendTheme({

    components: {
        Heading,
        Text,
    },

    styles: {
        global: {
            // textStyles
            h1: {
                fontSize: Heading.sizes['2xl'].fontSize,
                fontWeight: Heading.variants.fontWeight.bold,
            },
            h2: {
                fontSize: Heading.sizes.lg.fontSize,
                fontWeight: Heading.variants.fontWeight.bold,
            },
            h3: {
                fontSize: Heading.sizes.md.fontSize,
                fontWeight: Heading.variants.fontWeight.bold,
            },
            h4: {
                fontSize: Heading.sizes.sm.fontSize,
                fontWeight: Heading.variants.fontWeight.bold,
            },
            h5: {
                fontSize: Heading.sizes.xs.fontSize,
                fontWeight: Heading.variants.fontWeight.bold,
            },
        }
    },



})