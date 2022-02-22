import axios from 'axios'

const client = axios.create({url: '/'})

export const fetchAll = async () => {
  const {data} = await client.get('/api/notion/terms-service')
  return data
}
