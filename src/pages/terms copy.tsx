import {Client} from '@notionhq/client'

const notion = new Client({auth: process.env.NOTION_API_KEY})

export default function Terms({data}) {
  const getPageDisplay = () => {
    let jsx = []
    data.results.forEach((block) => {
      if (block.type === 'paragraph') {
        jsx.push(<div>{block.paragraph.text[0]?.plain_text}</div>)
      }
    })
    return jsx
  }
  return (
    <>
      <div>{getPageDisplay()}</div>
    </>
  )
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
