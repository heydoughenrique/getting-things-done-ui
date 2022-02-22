import {
    Box,
    Button,
    Container,
    Flex,
    Stack,
    Text,
} from '@chakra-ui/react'

import Image from 'next/image'
import en from '../../locales/en'
import pt from '../../locales/pt'
import { useRouter } from 'next/router'

function Card({ title, desc, link, image, altText, ...rest }) {
    return (
        <Box
            maxW='sm'
            p='10'
            borderRadius='8'
            border='1px solid'
            borderColor='neutral.200'
        >
            <Box
                position='relative'
                w='full'
            >
                <Image
                    width="100%"
                    height="16px"
                    layout="responsive"
                    objectFit="contain"
                    objectPosition='left bottom'
                    src={image}
                    alt={altText} />
            </Box>

            <Text pt={6} pb={3} fontSize='xl' fontWeight='semibold' as='h3'>{title}</Text>
            <Text pb={4} fontSize='md' lineHeight='tall'>{desc}</Text>
            <Button variant='link' size='md' color='primary.500'>
                {link}
            </Button>

        </Box >
    )
}

export default function FeatureCards() {
    const router = useRouter()
    const { locale } = router
    const t = locale === 'en' ? en : pt

    return (
        <Flex
            as='section'
            w='full'
            align='center'
            pt={24}
        >

            <Container
                maxW={'container.2xl'}>

                <Text as='h2' maxW={'7xl'} mx={'auto'} pb={8} >O que está incluso</Text>

                <Stack
                    as={Flex}
                    flexDirection={['column', 'row']}
                    alignItems='flex-start'
                    justifyContent='space-between'
                    maxW={'7xl'}
                    spacing={['0', '0px']}
                    py={['0', '24px']}
                    mx={'auto'}>


                    <Card
                        image='/images/Strides/setting.svg'
                        altText=''
                        title='SEO'
                        desc='Cuidamos do SEO para você. Pesquisa de palavras-chave, configuração técnica, sugestões de listas locais e mais…'
                        link='Saiba mais' />

                    <Card
                        image='/images/Strides/book-alt.svg'
                        altText=''
                        title='Blog Pronto'
                        desc='Compartilhe sua autoridade em um blog pronto e fácil de usar. Direcione o tráfego e atraia mais clientes potenciais naturalmente.'
                        link='Saiba mais' />

                    <Card
                        image='/images/Strides/icon-tf.svg'
                        altText=''
                        title='Guia de Estilo'
                        desc='Consistência é a carta mais poderosa para uma marca memorável. Nós criamos essa identidade para você reutilizá-las em todos os seus canais.'
                        link='Ver exemplo' />

                </Stack>

            </Container >
        </Flex >
    )
}
