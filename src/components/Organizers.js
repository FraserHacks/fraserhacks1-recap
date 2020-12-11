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
                    fluid(maxWidth: 2000, maxHeight: 700, quality: 100) {
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
            mt={["15px", null, "50px", null]}
        >
            <Box px={["20px", "50px", null, "10vw"]}>
                <Title
                    sub="FraserHacks 2019 was a blast"
                    main="We'll see you all next year!"
                />
                <Text
                    color="gray"
                    maxWidth="600px"
                    my="25px"
                    mb={["25px", "50px", "100px", null]}
                >
                    Thank you to the teachers, sponsors, organizers, and most
                    important, the hackers that made FraserHacks possible. 10
                    hours of caffeine-fueled innovation would not have been
                    possible without you.
                    <br />
                    <br />
                    Stay safe, and keep on hacking!
                </Text>
            </Box>
            <Box width="100%">
                <Img
                    fluid={organizers.childImageSharp.fluid}
                    alt="Organizers"
                />
            </Box>
        </Box>
    )
}

export default Footer
