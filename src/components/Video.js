import React from "react"
import Title from "./Title"
import { Box, Text, Heading } from "@chakra-ui/core"
import { useInView } from "react-intersection-observer"

let rendered = false

export default () => {
    const { ref, inView } = useInView()
    return (
        <Box
            textAlign="center"
            display="flex"
            flexDirection="column"
            alignItems="center"
            px="10vw"
            pb="100px"
        >
            <Title sub="Lorem ipsum dolor" main="Lorem ipsum dolor sit amet" />
            <Text color="gray" marginTop="25px" maxWidth="600px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Heading
                size="2xl"
                color="white"
                fontSize={["36px", "36px", "72px", "72px"]}
                mt="50px"
                mb="25px"
            >
                123,456,789
            </Heading>
            <Text color="gray" maxWidth="600px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
            </Text>
            <Box
                marginTop="100px"
                width={["80vw", null, null, "50vw"]}
                height={["45vw", null, null, "28vw"]}
                minWidth="200px"
                minHeight="113px"
            >
                <Box ref={ref} height="100%">
                    {(rendered = rendered || inView)}
                    {rendered ? (
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                            title="Recap Video"
                            loading="lazy"
                        ></iframe>
                    ) : (
                        ""
                    )}
                </Box>
            </Box>
        </Box>
    )
}
