import {
  Box,
  Button,
  Container,
  Flex,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  Tooltip,
} from '@chakra-ui/react'
import {CheckIcon, InfoIcon} from '@chakra-ui/icons'

import en from '../../locales/en'
import pt from '../../locales/pt'
import {useRouter} from 'next/router'
import {useState} from 'react'

type PlanProps = {
  title: string
  desc: string
}

function Plan(props: PlanProps) {
  return (
    <>
      <Text as='h3' fontSize='4xl' fontWeight='semibold' pb={3} pt={6}>
        {props.title}
      </Text>
      <Text fontSize='md' lineHeight='tall' pb={4}>
        {props.desc}
      </Text>
    </>
  )
}

export default function PricingTable2() {
  const router = useRouter()
  const {locale} = router
  const t = locale === 'en' ? en : pt

  const [topics, setFeature] = useState<string[]>([
    'Diferencial 1',
    'Diferencial 2',
    'Diferencial 3',
    'Diferencial 4',
    'Diferencial 5',
  ])

  return (
    <>
      {topics.map((topic) => {
        return (
          <>
            <Flex as='section' w='full' align='center' pt={24}>
              <Container maxW={'container.2xl'}>
                <Stack
                  as={Flex}
                  flexDirection={['column', 'row']}
                  alignItems='flex-start'
                  justifyContent='space-between'
                  maxW={'7xl'}
                  spacing={['0', '0px']}
                  py={['0', '24px']}
                  mx={'auto'}
                >
                  <Plan title={topic} desc='teste1' />
                  <Plan title={topic} desc='teste1' />
                  <Plan title={topic} desc='teste1' />
                </Stack>
              </Container>
            </Flex>
          </>
        )
      })}
    </>
  )
}
