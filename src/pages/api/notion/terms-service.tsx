import {Client} from '@notionhq/client'

const notion = new Client({auth: process.env.NOTION_API_KEY})

export default async (req, res) => {
  const blockId = process.env.NOTION_PAGE_ID
  const data = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 20,
  })
  res.status(200).json(data)
}
