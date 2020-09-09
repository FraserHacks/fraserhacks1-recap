import React from "react"
import Title from "./Title"
import { graphql, useStaticQuery } from "gatsby"
import { Box, Text } from "@chakra-ui/core"
import Img from "gatsby-image"

const Footer = () => {
    const { organizers } = useStaticQuery(graphql`
        query {
            organizers: file(relativePath: { eq: "organizers.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2000, maxHeight: 700) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `)
    return (
        <Box
            textAlign="center"
            display="flex"
            flexDirection="column"
            alignItems="center"
        >
            <Box px="10vw">
                <Title
                    sub="Lorem ipsum dolor"
                    main="Lorem ipsum dolor sit amet"
                />
                <Text color="gray" maxWidth="600px" mt="25px" mb="100px">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </Text>
            </Box>
            <Box width="100%">
                <Img fluid={organizers.childImageSharp.fluid} />
            </Box>
        </Box>
    )
}

export default Footer
