import { Badge, Box, Container, Flex, Image, Stack, Text, VStack } from '@chakra-ui/react'

import en from '../../locales/en'
import pt from '../../locales/pt'
import { useRouter } from 'next/router'

export default function ContactWithImage({ badge, tagline, subtitle }) {
    const router = useRouter()
    const { locale } = router
    const t = locale === 'en' ? en : pt

    return (
        <Flex
            as='section'
            w='full'
            minH={'640px'}
            align='center'
            pt='80px'>

            <Container
                maxW={'container.2xl'}>

                <Stack
                    as={Flex}
                    flexDirection={['column', 'row']}
                    alignItems='center'
                    maxW={'7xl'}
                    spacing={['0', '40px']}
                    py={['0', '24px']}
                    mx={'auto'}>

                    <Box w={'full'} flex='1'>
                        <Image
                            src='/images/contato.png'
                            alt='Contato'
                        />
                    </Box>

                    <VStack
                        justify='flex-start'
                        spacing={4}
                        align='flex-start'
                        flex='1'
                    >
                        <Badge variant='solid' background='secondary.500' color='secondary.800'>{badge}</Badge>

                        <Text as='h1'>
                            {tagline}
                        </Text>

                        <Text fontSize='xl' maxW={'lg'}>
                            {subtitle}
                        </Text>


                    </VStack>



                </Stack>

            </Container >
        </Flex >
    )
}
