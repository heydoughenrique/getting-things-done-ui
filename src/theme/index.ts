import * as components from './components';

import { extendTheme } from "@chakra-ui/react"
import foundations from './foundations'

export const theme = extendTheme({
    ...foundations,
    components: { ...(components as any) },
})

