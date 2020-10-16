import React from "react"
import { Box } from "@chakra-ui/core"
import Title from "./Title"
import Slider from "./Slider"
export default () => (
    <Box marginTop={["100px", null, "200px"]}>
        <Box px={["20px", "50px", null, "10vw"]}>
            <Title sub="Lorem ipsum dolor" main="Lorem ipsum dolor sit amet" />
        </Box>
        <Box
            height={["300px", "300px", "500px", "500px"]}
            display="flex"
            alignItems="center"
            my={["50px", null, "100px"]}
        >
            <Slider />
        </Box>
    </Box>
)
