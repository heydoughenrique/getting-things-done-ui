import { Flex, Heading, Text } from '@chakra-ui/react'
import MenuSimpleCentered from '../PageSections/Header/MenuSimpleCentered'
import SimpleTwoColumns from '../PageSections/HeroSection/SimpleTwoColumns'

import { useRouter } from 'next/router'
import en from '../locales/en'
import pt from '../locales/pt'
import Slider1Column from '../components/Slider1Column'



export default function Home() {

  const router = useRouter()
  const { locale } = router
  const t = locale === 'en' ? en : pt

  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push('/', '/', { locale })
  }


  return (
    <>
      <MenuSimpleCentered />

      <SimpleTwoColumns
        badge={t.heroHome.badge}
        tagline={t.heroHome.tagline}
        subtitle={t.heroHome.subtitle}
        ctaPrimary={t.heroHome.cta}
        ctaSecondary=''
        image=''
        altImage=''
      />

      <Slider1Column />



      <Flex direction='column'>
        <Heading fontSize='9xl'>Display 9xl</Heading>
        <Heading fontSize='8xl'>Display 8xl</Heading>
        <Heading fontSize='7xl'>Display 7xl</Heading>
        <Heading fontSize='6xl'>Display 6xl</Heading>
        <Heading as='h1' fontSize='5xl'>Display 5xl [h1]</Heading>
        <Heading as='h2' fontSize='4xl'>Display 4xl [h2]</Heading>
        <Heading as='h3' fontSize='3xl'>Display 3xl [h3]</Heading>
        <Heading as='h4' fontSize='2xl'>Display 2xl [h4]</Heading>
        <Heading as='h5' fontSize='xl' >Display xl  [h5]</Heading>
        <Heading as='h2' fontSize='lg'>Display lg</Heading>
        <Heading as='h3' fontSize='md'>Display md</Heading>
        <Heading as='h4' fontSize='sm'>Display sm</Heading>
        <Heading as='h5' fontSize='xs'>Display xs</Heading>


        <Text fontSize='xl'>Text xl</Text>
        <Text fontSize='lg'>Text lg</Text>
        <Text fontSize='md'>Text md (Default)</Text>
        <Text fontSize='sm'>Text sm</Text>
        <Text fontSize='xs'>Text xs</Text>
      </Flex>

    </>
  )
}
