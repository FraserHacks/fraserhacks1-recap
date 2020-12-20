import React from "react"
import { Heading, Box } from "@chakra-ui/core"

export default ({ sub, main }) => (
    <Box textAlign="center">
        <Heading color="blue.300" fontSize={["18px", "20px", null, "24px"]}>
            {sub}
        </Heading>
        <Heading
            color="white"
            fontSize={["28px", "32px", null, "52px"]}
            mt="10px"
        >
            {main}
        </Heading>
    </Box>
)
