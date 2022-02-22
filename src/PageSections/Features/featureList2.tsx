import {
    Box,
    Button,
    Container,
    Flex,
    Image,
    List,
    ListIcon,
    ListItem,
    Stack,
    Text,
    Tooltip,
    VStack,
} from '@chakra-ui/react'
import { CheckIcon, InfoIcon } from '@chakra-ui/icons'

import en from '../../locales/en'
import pt from '../../locales/pt'
import { useRouter } from 'next/router'

function FeatureItem({ tooltipDesc, title, ...rest }) {
    return (
        <ListItem>
            <ListIcon mr='4' as={CheckIcon} color='#34f599' />
            <Tooltip p='4' label={tooltipDesc} hasArrow arrowSize={15}>
                {title}
            </Tooltip>
            <InfoIcon ml='4' color='neutral.400' />
        </ListItem>
    )
}

export default function FeatureListTwo() {
    const router = useRouter()
    const { locale } = router
    const t = locale === 'en' ? en : pt


    return (
        <Flex
            as='section'
            pt={12}
            pb={24}
            align='center'
            w='full'>

            <Container
                maxW={'container.2xl'}>

                <Stack
                    as={Flex}
                    flexDirection={['column', 'row']}
                    alignItems='center'
                    justifyContent='space-evenly'
                    maxW={'7xl'}
                    spacing={['0', '0px']}
                    py={['0', '24px']}
                    mx={'auto'}>


                    <Text as='span' w='xs' fontSize='4xl' textAlign='center' fontWeight='semibold'>E mais →</Text>

                    <Flex w='2xl' justify='space-around'>
                        <VStack
                            justify='space-between'
                            spacing={4}
                            align='flex-start'
                            px={4}

                        >
                            <List spacing={3}>
                                <FeatureItem
                                    title='Site Veloz'
                                    tooltipDesc='Seguindo as recomendações do Google, nossos sites carregam em menos de 03 segundos.' />
                                <FeatureItem
                                    title='Site Veloz'
                                    tooltipDesc='Seguindo as recomendações do Google, nossos sites carregam em menos de 03 segundos.' />
                                <FeatureItem
                                    title='Site Veloz'
                                    tooltipDesc='Seguindo as recomendações do Google, nossos sites carregam em menos de 03 segundos.' />
                                <FeatureItem
                                    title='Site Veloz'
                                    tooltipDesc='Seguindo as recomendações do Google, nossos sites carregam em menos de 03 segundos.' />
                            </List>
                        </VStack>

                        <VStack
                            justify='flex-start'
                            spacing={4}
                            align='flex-start'
                            px={4}
                        >
                            <List spacing={3}>
                                <FeatureItem
                                    title='Site Veloz'
                                    tooltipDesc='Seguindo as recomendações do Google, nossos sites carregam em menos de 03 segundos.' />
                                <FeatureItem
                                    title='Site Veloz'
                                    tooltipDesc='Seguindo as recomendações do Google, nossos sites carregam em menos de 03 segundos.' />
                                <FeatureItem
                                    title='Site Veloz'
                                    tooltipDesc='Seguindo as recomendações do Google, nossos sites carregam em menos de 03 segundos.' />
                                <FeatureItem
                                    title='Site Veloz'
                                    tooltipDesc='Seguindo as recomendações do Google, nossos sites carregam em menos de 03 segundos.' />
                            </List>
                        </VStack>

                        <VStack
                            align='flex-start'
                            justify='flex-start'
                            px={4}
                            spacing={4}>
                            <List spacing={3}>
                                <FeatureItem
                                    title='Site Veloz'
                                    tooltipDesc='Seguindo as recomendações do Google, nossos sites carregam em menos de 03 segundos.' />
                                <FeatureItem
                                    title='Site Veloz'
                                    tooltipDesc='Seguindo as recomendações do Google, nossos sites carregam em menos de 03 segundos.' />
                                <FeatureItem
                                    title='Site Veloz'
                                    tooltipDesc='Seguindo as recomendações do Google, nossos sites carregam em menos de 03 segundos.' />
                                <FeatureItem
                                    title='Site Veloz'
                                    tooltipDesc='Seguindo as recomendações do Google, nossos sites carregam em menos de 03 segundos.' />
                            </List>
                        </VStack>

                    </Flex>

                </Stack>

            </Container >
        </Flex >
    )
}
