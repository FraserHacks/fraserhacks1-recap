import React from "react"
import { Heading, Box } from "@chakra-ui/core"

export default ({ sub, main }) => (
    <Box textAlign="center">
        <Heading color="blue.500" fontSize={["18px", "18px", "24px", "24px"]}>
            {sub}
        </Heading>
        <Heading color="white" fontSize={["28px", "28px", "42px", "42px"]}>
            {main}
        </Heading>
    </Box>
)
