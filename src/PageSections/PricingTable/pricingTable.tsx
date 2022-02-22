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

function FeaturePlan({tooltipDesc, title, ...rest}) {
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

function Plan({title, desc, price, features, teste, testedois, ...rest}) {
  return (
    <Box
      maxW='sm'
      p='10'
      borderRadius='8'
      border='1px'
      borderColor='neutral.200'
      textAlign='center'
      bg='primary.50'
    >
      <Text as='h3' fontSize='4xl' fontWeight='semibold' pb={3} pt={6}>
        {title}
      </Text>
      <Text fontSize='md' lineHeight='tall' pb={4}>
        {desc}
      </Text>
      <Flex as='span' align='center' justify='center'>
        <Text color='neutral.900'>$</Text>
        <Text fontSize='5xl' pb={4} color='neutral.900'>
          {price}
        </Text>
        <Text color='neutral.900'>/m</Text>
      </Flex>

      <Button variant='solid' size='lg'>
        Get Started
      </Button>

      <List spacing={3}>
        <FeaturePlan title={teste} tooltipDesc={testedois} />
      </List>
    </Box>
  )
}

export default function PricingTable() {
  const router = useRouter()
  const {locale} = router
  const t = locale === 'en' ? en : pt

  return (
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
          <Plan
            title='Base'
            desc='Get your smooth and custom website with our core features.'
            price='129'
            features=''
            teste=''
            testedois=''
          />
          <Plan
            title='Unlimited'
            desc='Improve, add and update new content constantly.'
            price='279'
            features=''
            teste=''
            testedois=''
          />

          <Plan
            title='Premier'
            desc='For those who needs processing high volumes of updates quickly.'
            price='399'
            features=''
            teste='teste'
            testedois='teste'
          />
        </Stack>
      </Container>
    </Flex>
  )
}
