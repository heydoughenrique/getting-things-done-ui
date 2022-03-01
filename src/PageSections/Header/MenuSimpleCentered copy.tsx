import {Select} from '@chakra-ui/react'
import en from '../../locales/en'
import pt from '../../locales/pt'
import {useRouter} from 'next/router'

export default function Menu() {
  const router = useRouter()
  const {locale, pathname, asPath, query} = router
  const t = locale === 'en' ? en : pt

  const changeLanguage = (e) => {
    const locale = e.target.value
    router.push({pathname, query}, asPath, {locale: locale})
  }

  return (
    <Select
      placeholder={locale}
      onChange={changeLanguage}
      defaultValue={locale}
    >
      <option value='en'>EN-US</option>
      <option value='pt'>PT-BR</option>
    </Select>
  )
}
