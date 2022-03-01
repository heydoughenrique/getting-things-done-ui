import {Container, Flex, ListItem, OrderedList, Text} from '@chakra-ui/react'

import {Client} from '@notionhq/client'
import MenuSimpleCentered from '../PageSections/Header/MenuSimpleCentered'
import en from '../locales/en'
import pt from '../locales/pt'
import {useRouter} from 'next/router'

const notion = new Client({auth: process.env.NOTION_API_KEY})

export default function Terms({data}) {
  console.log(data)

  const router = useRouter()
  const {locale} = router
  const t = locale === 'en' ? en : pt

  const getPageDisplay = () => {
    let jsx = []
    data.results.forEach((block) => {
      if (block.type === 'heading_1') {
        jsx.push(<Text as='h1'>{block.heading_1.text[0]?.plain_text}</Text>)
      }
      if (block.type === 'callout') {
        jsx.push(
          <Text as='span' color='primary.500' fontWeight='700'>
            {block.callout.text[0]?.plain_text}
          </Text>
        )
      }
      if (block.type === 'heading_2') {
        jsx.push(
          <Text mt='4' mb='1' as='h2'>
            {block.heading_2.text[0]?.plain_text}
          </Text>
        )
      }
      if (block.type === 'paragraph') {
        jsx.push(<Text py='2'>{block.paragraph.text[0]?.plain_text}</Text>)
      }
      if (block.type === 'numbered_list_item') {
        jsx.push(
          <OrderedList>
            <ListItem className='listStyle'>
              {block.numbered_list_item.text[0]?.plain_text}
            </ListItem>
          </OrderedList>
        )
      }
    })
    return jsx
  }

  if (locale === 'en') {
    return (
      <>
        <MenuSimpleCentered />
        <Flex as='section' w='full' align='center' pt='180px'>
          <Container maxW={'container.md'}>{getPageDisplay()}</Container>
        </Flex>

        {/* {data.map((content) => (
          <Text key={content.id}></Text>
        ))} */}
      </>
    )
  } else {
    return (
      <>
        <MenuSimpleCentered />
        <Flex as='section' w='full' align='center' pt='180px'>
          <Container maxW={'container.md'}>hi</Container>
        </Flex>
      </>
    )
  }
}

export async function getStaticProps() {
  const blockId = process.env.NOTION_PAGE_ID
  const response = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 100,
  })

  return {
    props: {
      data: response,
    },
  }
}
