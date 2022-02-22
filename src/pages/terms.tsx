import {Text} from '@chakra-ui/react'

import MenuSimpleCentered from '../PageSections/Header/MenuSimpleCentered'

import {fetchAll} from '../systems/api'

export default function Terms({terms}) {
  const title = terms.properties.name.title[0].plainText

  return (
    <>
      <MenuSimpleCentered />
      <Text>{title}</Text>
    </>
  )
}
