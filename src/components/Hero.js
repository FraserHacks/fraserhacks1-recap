import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Heading, Box } from "@chakra-ui/core"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

const Hero = () => {
    const { hero, logo } = useStaticQuery(graphql`
        query {
            hero: file(relativePath: { eq: "hero.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 2000, maxHeight: 900) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            logo: file(relativePath: { eq: "logo.png" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `)
    return (
        <Box height={["400px", "500px", "700px", "900px"]}>
            <BackgroundImage
                fluid={hero.childImageSharp.fluid}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    height: "100%",
                }}
                alt="Hero"
            >
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    flexDirection="column"
                    marginTop={["125px", "150px", "250px", "350px"]}
                    textAlign="center"
                    px="10vw"
                >
                    <Box marginBottom="20px">
                        <Heading size="md" color="white">
                            Lorem ipsum dolor
                        </Heading>
                    </Box>
                    <Heading size="2xl" color="white">
                        Fraser Hacks 2019 Recap
                    </Heading>
                </Box>
                <Box
                    marginTop={["75px", "125px", "150px", "225px"]}
                    width={["40vw", null, "400px", "400px"]}
                    display="flex"
                    alignItems="center"
                >
                    <Img
                        fluid={logo.childImageSharp.fluid}
                        alt="FraserHacks Logo"
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: "auto",
                            width: "inherit",
                        }}
                    />
                </Box>
            </BackgroundImage>
        </Box>
    )
}

export default Hero
