import {
  Badge,
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react'

import Image from 'next/image'
import en from '../../locales/en'
import pt from '../../locales/pt'
import {useRouter} from 'next/router'

type FeatureProps = {
  layerStyle: string
  image: string
  altText: string
  badge: string
  tagline: string
  subtitle: string
  ctaPrimary: string
  ctaSecondary?: string
}

export default function Feature1(props: FeatureProps) {
  const router = useRouter()
  const {locale} = router
  const t = locale === 'en' ? en : pt

  return (
    <Flex
      as='section'
      align='center'
      layerStyle={props.layerStyle}
      minH={'640px'}
      w='full'
    >
      <Container maxW={'container.2xl'}>
        <Stack
          as={Flex}
          flexDirection={['column', 'row']}
          alignItems='center'
          maxW={'7xl'}
          spacing={['0', '40px']}
          py={['0', '24px']}
          mx={'auto'}
        >
          <Box position='relative' w='full' flex='1'>
            <Image
              width='100%'
              height='70%'
              layout='responsive'
              objectFit='contain'
              src={props.image}
              alt={props.altText}
            />
          </Box>

          <VStack justify='flex-start' spacing={4} align='flex-start' flex='1'>
            <Badge
              variant='solid'
              background='secondary.500'
              color='secondary.800'
            >
              {props.badge}
            </Badge>

            <Text as='h2'>{props.tagline}</Text>

            <Text fontSize='lg' maxW={'lg'}>
              {props.subtitle}
            </Text>

            <ButtonGroup>
              <Button variant='solid' size='lg'>
                {props.ctaPrimary}
              </Button>
              {/* <Button variant='solid' size='lg'>
                                {props.ctaSecondary}
                            </Button> */}
            </ButtonGroup>
          </VStack>
        </Stack>
      </Container>
    </Flex>
  )
}
