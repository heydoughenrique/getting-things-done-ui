import { Box, Container, Flex, Image, Stack, Text } from '@chakra-ui/react'

import en from '../../locales/en'
import pt from '../../locales/pt'
import { useRouter } from 'next/router'

function TestimonialItem({ picture, altText, title, desc, ...rest }) {
    return (
        <Box
            background='#fcfcfc'
            w={['100%', '360px']}
            p={5}
            borderWidth='0px'
            textAlign='center'
            letterSpacing='1px'
            {...rest} >
            <Box w={'full'} flex='1'>
                <Image
                    src={picture}
                    alt={altText}
                    mx='auto'
                    borderRadius='full'
                    boxSize='90px'
                />

            </Box>

            <Text as='h5' mt={6} fontSize='xl'>{title}</Text>
            <Text mt={4} fontSize='sm' >{desc}</Text>
        </Box >
    )
}

export default function Testimonials3Columns({ badge, tagline, subtitle, ctaPrimary, ctaSecondary }) {
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
            align='center'
        >

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



                    <Stack
                        justify='space-around'
                        spacing={4}
                        align='baseline'
                        flex='1'
                        flexDir={['column', 'row']}
                    >
                        <TestimonialItem
                            picture='/images/depoimento-giovanna-cocci.png'
                            altText='Depoimento Giovanna Cocci'
                            title='Giovanna Cocci'
                            desc='Isso est?? sendo vital na minha jornada. Me mostrou que a terapia vai al??m da sess??o, est?? em cada momento do dia, em como nos sentimentos e agimos em cada encontro e desencontro da vida. ???? ????'
                        />
                        <TestimonialItem
                            picture='/images/depoimento-erika-kodjaian.png'
                            altText='Depoimento Erika Kodjaian'
                            title='Erika Kodjaian'
                            desc='Muita motiva????o e ??tica. J?? fiz muita terapia e recomendo de olhos fechados. Fa??o online e posso afirmar que os benef??cios s??o os mesmos da terapia presencial.  Muito satisfeita! Gratid??o ! ????????'
                        />
                        <TestimonialItem
                            picture='/images/depoimento-danielle-venda.png'
                            altText='Depoimento Danielle Venda'
                            title='Danielle Venda'
                            desc='Mais de 13 anos de experi??ncia, formada pela Universidade Presbiteriana Mackenzie. P??s-graduada em ???Neuroci??ncias e Comportamento??? pela Pontif??cia Universidade Cat??lica ??? PUC e em ???Terapia Comportamental Cognitiva??? pela Faculdade Unyleya. Realiza terapia em ingl??s.
            '
                        />
                    </Stack>

                </Stack>

            </Container >
        </Flex >
    )
}
