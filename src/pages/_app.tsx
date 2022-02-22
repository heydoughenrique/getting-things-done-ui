import '../theme/external/formik.css'
import '../theme/external/swiperSlider.css'

import {AppProps} from 'next/app'
import {ChakraProvider} from '@chakra-ui/react'
import Head from 'next/head'
import {theme} from '../theme'

function MyApp({Component, pageProps}: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta charSet='UTF-8' />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
