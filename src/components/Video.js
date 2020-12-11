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
            px={["20px", "50px", null, "10vw"]}
            py={["30px", null, "100px", null]}
        >
            <Title sub="7 Schools" main="From Across the Peel Region" />
            <Text
                color="gray"
                marginTop="25px"
                maxWidth="600px"
                my="50px"
                fontSize={["md", null, "xl", null]}
            >
                FraserHacks 2019 was the largest hackathon in Mississauga, with
                over 125+ students from across the Peel Region
            </Text>
            <Heading
                size="2xl"
                color="white"
                fontSize={["42px", "52px", "90px", null]}
                my={["0px", "20px", null]}
            >
                29+ Hacks
            </Heading>
            <Text
                color="gray"
                maxWidth="600px"
                my="50px"
                fontSize={["md", null, "xl", null]}
            >
                Hackers formed teams of 4 to build innovative solutions to some
                of society's greatest problems. These included an AI Garbage
                Sorter, AI Pancreatic Cancer Detector, and more!
            </Text>
            <Box
                width={["80vw", null, null, "50vw"]}
                height={["45vw", null, null, "28vw"]}
                minWidth="200px"
                minHeight="113px"
                mt="30px"
            >
                <Box ref={ref} height="100%">
                    {(rendered = rendered || inView)}
                    {rendered ? (
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/p5iQph5EPK4"
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
