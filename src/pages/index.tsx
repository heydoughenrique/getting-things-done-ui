import {AppProps} from 'next/app'
import FAQFooter from '../PageSections/Footer/FAQFooter'
import Feature1 from '../PageSections/Features/feature1'
import Feature1Inverted from '../PageSections/Features/feature1inverted'
import FeatureCards from '../PageSections/Features/feature3cards'
import FeatureListTwo from '../PageSections/Features/featureList2'
import Head from 'next/head'
import MenuSimpleCentered from '../PageSections/Header/MenuSimpleCentered'
import SimpleCenteredCTA from '../PageSections/CTA/SimpleCenteredCTA'
import SimpleTwoColumns from '../PageSections/HeroSection/SimpleTwoColumns'
import Slider1Column from '../components/Slider1Column'
import en from '../locales/en'
import pt from '../locales/pt'
import {useRouter} from 'next/router'

export default function Home({Component, pageProps}: AppProps) {
  const router = useRouter()
  const {locale} = router
  const t = locale === 'en' ? en : pt

  return (
    <>
      <Head>
        <title>Strides Digital®</title>
        <meta
          name='description'
          content='Ajudamos você a encontrar a cortina ou persiana ideal. Solicite seu atendimento online.'
        />
      </Head>
      <MenuSimpleCentered />

      <SimpleTwoColumns
        badge={t.heroHome.badge}
        tagline={t.heroHome.tagline}
        subtitle={t.heroHome.subtitle}
        ctaPrimary={t.heroHome.cta}
        ctaSecondary
        image='/images/Strides/welcome-strides.png'
        altImage=''
      />

      <Slider1Column />

      <FeatureCards />

      <FeatureListTwo />

      <Feature1
        layerStyle='secondary'
        image='/images/Strides/money-back.svg'
        altText='Money back guarantee for our Website Subscription.'
        badge=''
        tagline='14 dias de garantia'
        subtitle='Se dentro de 14 dias após a publicação do site você não ficar satisfeito, reembolsaremos seu dinheiro.'
        ctaPrimary='Comece hoje'
      />

      <Feature1Inverted
        layerStyle='tertiary'
        image='/images/Strides/cancel-anytime.png'
        altText='Cancel anytime'
        badge=''
        tagline='Cancele quando quiser'
        subtitle='Sentimos ao ver você partir, mas se precisar cancelar seu plano, tudo bem. Sem contratos longos. Todos os nossos planos são mensais.'
        ctaPrimary='Ok! Vamos lá!'
        ctaSecondary=''
      />

      <SimpleCenteredCTA
        layerStyle='primary'
        badge=''
        tagline='Dê grandes passos com um ótimo website'
        subtitle='Obtenha mais clientes com um site claro, simples e profissional a preços razoáveis.'
        cta='Ver Planos e Preços'
      />

      <FAQFooter />
    </>
  )
}
