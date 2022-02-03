import {
    Heading,
    Text,
    Box,
    Button,
    Image
} from '@chakra-ui/react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

function SliderItem({ title, subtitle, desc, ...rest }) {
    return (
        <Box p={5} borderWidth='1px' textAlign='center' {...rest}>
            <Box w={'full'} flex='1'>
                <Image
                    src='/images/psicologa-em-pinheiros0katherine-avellar.jpg'
                    alt='Strides Logo'
                    mx='auto'
                    borderRadius='full'
                    boxSize='100px'
                />
            </Box>

            <Heading as='h3' fontSize='xl'>{title}</Heading>
            <Text mt={4}>{subtitle}</Text>
            <Text mt={4} textAlign='left'>{desc}</Text>
            <Link href='/terms' passHref>
                <Button variant='link' size='lg'>Ver currículo completo →</Button>
            </Link>
        </Box>
    )
}

export default function Slider1Column() {
    return (
        <Swiper
            freeMode={true}
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <SliderItem
                    title='Psicóloga Lucielle Santos'
                    subtitle='CRP 06/90327 – SÃO PAULO'
                    desc='Mais de 13 anos de experiência, formada pela Universidade Presbiteriana Mackenzie. Pós-graduada em “Neurociências e Comportamento” pela Pontifícia Universidade Católica – PUC e em “Terapia Comportamental Cognitiva” pela Faculdade Unyleya. Realiza terapia em inglês.
                    '
                />
            </SwiperSlide>
            <SwiperSlide>
                <SliderItem
                    title='Psicóloga Ilse Particelli'
                    subtitle='CRP 06/22538 – SÃO PAULO'
                    desc='Com 20 anos de experiência, é graduada em pela Faculdades Metropolitanas Unidas (FMU) com pós-graduação em “Piscoterapia Breve” pela Faculdade Unyleya. Os atendimentos são destinadaos aos adolescentes (a partir de 10 anos), adultos, idosos e casais.
                    '
                />
            </SwiperSlide>
            <SwiperSlide>
                <SliderItem
                    title='Psicóloga Patricia Rovida'
                    subtitle='CRP 06/88141 – SÃO PAULO'
                    desc='Mais de 19 anos de experiência, graduada pela Universidade Mackenzie com formação em Terapia Comportamental Cognitiva” pelo CETCC, possui certificação em “Coaching” pelo ICI – Integrated Coaching Institute, além de “Qualificação em MBTI®” pelo IDHL e certificação em “Assessment Training (Teoria DISC)” pela TTI Success Insights.
                    '
                />
            </SwiperSlide>

            <SwiperSlide>
                <SliderItem
                    title='Psicóloga Paula Roberta'
                    subtitle='CRP 06/90327 – SÃO PAULO'
                    desc='Graduada em Psicologia, pós-graduanda em “Neuropsicologia e Reabilitação Cognitiva” pela Escola de Educação Permanente do Hospital das Clínicas da Faculdade de Medicina da Universidade de São Paulo – EEP HCFMUSP; Vivência e apresentação de pesquisas relacionadas a Psicologia em congressos nacionais e internacionais'
                />
            </SwiperSlide>

        </Swiper>
    );
};