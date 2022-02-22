import {Button, Container, Flex, Stack, Text} from '@chakra-ui/react'

import Link from 'next/link'

export default function SimpleCentered({
  badge,
  tagline,
  subtitle,
  smallText,
  cta,
}) {
  return (
    <Flex as='section' w='full' pt={44} align='center'>
      <Container maxW={'container.2xl'}>
        <Stack
          as={Flex}
          align='center'
          textAlign={'center'}
          maxW={'7xl'}
          spacing={['0', '40px']}
          py={['0', '24px']}
          mx={'auto'}
        >
          {/* <Badge variant='solid' background='secondary.500' color='secondary.800'>{badge}</Badge> */}

          <Text as='h1' maxW={'4xl'}>
            {tagline}
          </Text>

          <Text fontSize='xl' maxW={'4xl'}>
            {subtitle}
          </Text>

          {/* <Link href='/terms' passHref>
                        <Button variant='solid' size='lg'>Converse comigo via Whatsapp</Button>
                    </Link> */}

          <Text fontSize='sm' maxW={'2xl'}>
            {smallText}
          </Text>
        </Stack>
      </Container>
    </Flex>
  )
}
