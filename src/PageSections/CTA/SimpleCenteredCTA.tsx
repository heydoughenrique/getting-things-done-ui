import { Badge, Box, Button, Container, Flex, Stack, Text } from '@chakra-ui/react'

import Link from 'next/link'

export default function SimpleCenteredCTA({ layerStyle, badge, tagline, subtitle, cta }) {
    return (
        <Flex
            as='section'
            w='full'
            minH='2xl'
            align='center'
            layerStyle={layerStyle}>

            <Container
                maxW={'container.2xl'}>

                <Stack
                    as={Flex}
                    align='center'
                    textAlign={'center'}
                    maxW={'7xl'}
                    py={['0', '24px']}
                    mx={'auto'}>


                    {/* <Badge variant='solid' background='secondary.500' color='secondary.800'>{badge}</Badge> */}

                    <Text as='h2' fontSize='5xl' maxW={'xl'} pb={4}>
                        {tagline}
                    </Text>

                    <Text fontSize='xl' maxW={'xl'} pb={8}>
                        {subtitle}
                    </Text>

                    <Link href='/pricing' passHref>
                        <Button variant='solid' size='lg'>Ver planos e preços</Button>
                    </Link>

                </Stack>

            </Container >
        </Flex >
    )
}
