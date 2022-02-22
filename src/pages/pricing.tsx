import MenuSimpleCentered from '../PageSections/Header/MenuSimpleCentered'
import PricingTable from '../PageSections/PricingTable/pricingTable'
import PricingTable2 from '../PageSections/PricingTable/pricingTable2'
import SimpleCentered from '../PageSections/HeroSection/SimpleCentered'
import en from '../locales/en'
import pt from '../locales/pt'
import {useRouter} from 'next/router'

export default function Pricing() {
  const router = useRouter()
  const {locale} = router
  const t = locale === 'en' ? en : pt

  return (
    <>
      <MenuSimpleCentered />
      <SimpleCentered
        badge=''
        tagline={t.heroPricing.tagline}
        subtitle={t.heroPricing.subtitle}
        cta=''
        smallText='🚀 Launch offer • 20% off membership for 3 months '
      />
      <PricingTable2 />
      {/* <PricingTable /> */}
    </>
  )
}
