import React from "react"
import { Heading, Box } from "@chakra-ui/core"

export default ({ sub, main }) => (
    <Box textAlign="center">
        <Heading color="blue.300" fontSize={["18px", "24px", null, "36px"]}>
            {sub}
        </Heading>
        <Heading
            color="white"
            fontSize={["28px", "42px", null, "60px"]}
            mt="10px"
        >
            {main}
        </Heading>
    </Box>
)
