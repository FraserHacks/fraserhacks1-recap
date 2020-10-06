import React from "react"
import { Box, PseudoBox, Heading } from "@chakra-ui/core"

export default () => (
    <Box px="10vw" py="75px" color="blue.500">
        <Box
            display="flex"
            flexDirection={["column", "column", "row", "row"]}
            justifyContent="center"
            alignItems="center"
        >
            <Box display="flex" justifyContent="center" alignItems="center">
                <PseudoBox mx="25px" _hover={{ color: "blue.300" }}>
                    <a
                        href="https://www.instagram.com/fraser_hacks/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i class="fab fa-instagram fa-2x"></i>
                    </a>
                </PseudoBox>
                <PseudoBox mx="25px" _hover={{ color: "blue.300" }}>
                    <a
                        href="https://www.facebook.com/fraserhacks/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i class="fab fa-facebook fa-2x"></i>
                    </a>
                </PseudoBox>
                <PseudoBox mx="25px" _hover={{ color: "blue.300" }}>
                    <a
                        href="https://discord.gg/4MDySsa"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i class="fab fa-discord fa-2x"></i>
                    </a>
                </PseudoBox>
                <PseudoBox mx="25px" _hover={{ color: "blue.300" }}>
                    <a
                        href="https://twitter.com/fraserhacks"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i class="fab fa-twitter fa-2x"></i>
                    </a>
                </PseudoBox>
            </Box>
            <Box mx="25px" mt={["20px", "20px", "0px", "0px"]}>
                <a
                    href="https://hackcodeofconduct.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Heading color="white" size="md" fontWeight="600">
                        Code of Conduct
                    </Heading>
                </a>
            </Box>
        </Box>
    </Box>
)
