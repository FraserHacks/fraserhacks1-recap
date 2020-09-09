import React from "react"
import { Box } from "@chakra-ui/core"
import Title from "./Title"

export default () => (
    <Box marginTop="200px" px="10vw">
        <Title sub="Lorem ipsum dolor" main="Lorem ipsum dolor sit amet" />
        <Box height="500px">{/* carousel here */}</Box>
    </Box>
)
