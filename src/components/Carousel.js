import React from "react"
import { Box, Heading } from "@chakra-ui/core"
import Title from "./Title"
import Slider from "./Slider"
export default () => (
    <Box marginTop="200px">
        <Box px="10vw">
            <Title sub="Lorem ipsum dolor" main="Lorem ipsum dolor sit amet" />
        </Box>
        <Box height="500px" display="flex" alignItems="center" my="50px">
            <Slider />
        </Box>
    </Box>
)
