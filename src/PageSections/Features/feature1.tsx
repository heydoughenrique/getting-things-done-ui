import { Flex, Container, Stack, Badge, Heading, Box, Image, VStack, Text, Button, ButtonGroup } from '@chakra-ui/react'

import { useRouter } from 'next/router'
import en from '../../locales/en'
import pt from '../../locales/pt'

export default function Feature1({ badge, tagline, subtitle, ctaPrimary, ctaSecondary }) {
    const router = useRouter()
    const { locale } = router
    const t = locale === 'en' ? en : pt

    const changeLanguage = (e) => {
        const locale = e.target.value;
        router.push('/', '/', { locale })
    }

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
                            src='/images/psicologa-em-pinheiros0katherine-avellar.jpg'
                            alt='Strides Logo'
                            mx='auto'
                        />
                    </Box>

                    <VStack
                        justify='flex-start'
                        spacing={4}
                        align='flex-start'
                        flex='1'
                    >
                        <Badge variant='solid' background='secondary.500' color='secondary.800'>{badge}</Badge>

                        <Heading as='h2' fontSize='4xl'>
                            {tagline}
                        </Heading>

                        <Text fontSize='lg' maxW={'lg'}>
                            {subtitle}
                        </Text>

                        <ButtonGroup>
                            <Button variant='solid' size='lg'>
                                {ctaPrimary}
                            </Button>
                            <Button variant='solid' size='lg'>
                                {ctaSecondary}
                            </Button>
                        </ButtonGroup>

                    </VStack>

                </Stack>

            </Container >
        </Flex >
    )
}
