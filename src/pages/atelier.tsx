import { Button, ButtonGroup, Flex, IconButton, Image, Select, Stack } from '@chakra-ui/react'

import ContactWithImage from '../PageSections/Contact/contactWithImage'
import FAQFooter from '../PageSections/Footer/FAQFooter'
import Feature1 from '../PageSections/Features/feature1'
import Feature2 from '../PageSections/Features/feature2'
import Feature3 from '../PageSections/Features/feature3'
import FeatureList from '../PageSections/Features/featureList'
import SimpleCentered from '../PageSections/HeroSection/SimpleCentered'
import SimpleCenteredCTA from '../PageSections/CTA/SimpleCenteredCTA'
import SimpleTwoColumns from '../PageSections/HeroSection/SimpleTwoColumns'
import Slider3Columns from '../components/Slider3Columns'
import Testimonials3Columns from '../PageSections/Testimonials/testimonials3Columns'

export default function Atelier() {

    return (
        <>
            <SimpleTwoColumns
                badge=''
                tagline='Vamos Psicologar?'
                subtitle='Tudo bem fazer terapia. Converse conosco e vamos desvendar juntos novas maneiras de pensar e agir.'
                ctaPrimary='Agende sua consulta'
                ctaSecondary='Fale Conosco '
                image='/images/bg-katherine1.png'
                altImage='Clínica de Psicologia em São Paulo'
            />


            <Feature1
                layerStyle=''
                image=''
                altText=''
                badge='Sobre nós'
                tagline='Psicóloga em São Paulo Katherine Avellar'
                subtitle='Especialista em Terapia Cognitivo Comportamental e pós-graduada em “Neurociências do Comportamento”, também formada em: Transtornos de Ansiedade e Depressão, Programação Neurolinguística e Psicologia do Desenvolvimento e da Aprendizagem .'
                ctaPrimary='Ver currículo completo →'
                ctaSecondary=''
            />

            <Flex as='section'>
                <Slider3Columns />
            </Flex>

            <SimpleCenteredCTA
                layerStyle='secondary'
                badge=''
                tagline=''
                subtitle='Trabalhamos incansavelmente para possibilitar aos nossos pacientes mecanismos para encontrarem as respostas que procuram.'
                cta='Converse conosco via Whatsapp'
            />

            <FeatureList
                title='teste'
                desc='teste2' />

            <Feature2
                badge=''
                tagline=''
                subtitle=''
                ctaPrimary=''
                ctaSecondary='' />

            <Feature3
                badge=''
                tagline=''
                subtitle=''
                ctaPrimary=''
                ctaSecondary='' />

            <Testimonials3Columns
                badge=''
                tagline=''
                subtitle=''
                ctaPrimary=''
                ctaSecondary='' />

            <ContactWithImage
                badge='Contato'
                tagline='Converse Conosco. Tudo bem fazer terapia.'
                subtitle=''
            />

            <FAQFooter />
        </>
    )
}