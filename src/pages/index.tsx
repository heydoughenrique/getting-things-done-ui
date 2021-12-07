import { Flex, Heading, Text } from "@chakra-ui/react"
import SimpleCentered from "../PageSections/HeroSection/SimpleCentered"


export default function Home() {


  return (
    <>
      <SimpleCentered />

      <Flex direction="column">
        <Heading as="h1" size="5xl">Display 5xl</Heading>
        <Heading as="h1" size="4xl">Display 4xl</Heading>
        <Heading as="h1" size="3xl">Display 3xl</Heading>
        <Heading as="h1">[h1] Display 2xl </Heading>
        <Heading as="h2">[h2] Display lg </Heading>
        <Heading as="h3">[h3] Display md </Heading>
        <Heading as="h4">[h4] Display sm </Heading>
        <Heading as="h5">[h5] Display xs </Heading>

        <Heading size="5xl" fontWeight="semibold">Display 5xl</Heading>
        <Heading size="4xl" fontWeight="semibold">Display 4xl</Heading>
        <Heading size="3xl" fontWeight="semibold">Display 3xl</Heading>
        <Heading as="h1" fontWeight="semibold">[h1] Display 2xl </Heading>
        <Heading as="h2" fontWeight="semibold">[h2] Display lg </Heading>
        <Heading as="h3" fontWeight="semibold">[h3] Display md </Heading>
        <Heading as="h4" fontWeight="semibold">[h4] Display sm </Heading>
        <Heading as="h5" fontWeight="semibold">[h5] Display xs </Heading>

        <Heading size="5xl" fontWeight="medium">Display 5xl</Heading>
        <Heading size="4xl" fontWeight="medium">Display 4xl</Heading>
        <Heading size="3xl" fontWeight="medium">Display 3xl</Heading>
        <Heading as="h1" fontWeight="medium">[h1] Display 2xl </Heading>
        <Heading as="h2" fontWeight="medium">[h2] Display lg </Heading>
        <Heading as="h3" fontWeight="medium">[h3] Display md </Heading>
        <Heading as="h4" fontWeight="medium">[h4] Display sm </Heading>
        <Heading as="h5" fontWeight="medium">[h5] Display xs </Heading>

        <Heading size="5xl" fontWeight="normal">Display 5xl</Heading>
        <Heading size="4xl" fontWeight="normal">Display 4xl</Heading>
        <Heading size="3xl" fontWeight="normal">Display 3xl</Heading>
        <Heading as="h1" fontWeight="normal">[h1] Display 2xl </Heading>
        <Heading as="h2" fontWeight="normal">[h2] Display lg </Heading>
        <Heading as="h3" fontWeight="normal">[h3] Display md </Heading>
        <Heading as="h4" fontWeight="normal">[h4] Display sm </Heading>
        <Heading as="h5" fontWeight="normal">[h5] Display xs </Heading>

        <Text size="xl">Text xl</Text>
        <Text size="lg">Text lg</Text>
        <Text size="md">Text md (Default)</Text>
        <Text size="sm">Text sm</Text>
        <Text size="xs">Text xs</Text>

      </Flex>

    </>
  )
}
