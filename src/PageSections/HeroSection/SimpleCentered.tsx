import { Flex, Container, Stack, Heading, Box, Text, Button } from "@chakra-ui/react"


export default function SimpleCentered() {
    return (
        <Flex
            as="section"
            w="full"
            h={"640px"}
            align="center">

            <Container
                maxW={"container.2xl"}>

                <Stack
                    as={Flex}
                    align="center"
                    textAlign={'center'}
                    maxW={'7xl'}
                    spacing={["0", "40px"]}
                    py={["0", "24px"]}
                    mx={"auto"}>


                    <Heading as="h1" size="2xl" maxW={'4xl'}>
                        2Easy Accounting at <br />
                        Your Fingertips
                    </Heading>

                    <Text size="xl" maxW={'lg'}>
                        From proposal to payment, Incomee is the easiest tool to run your freelance business seamlessly ✌️
                    </Text>

                    <Button maxW={'2xs'}>
                        Get started
                    </Button>

                </Stack>

            </Container >
        </Flex >
    )
}
