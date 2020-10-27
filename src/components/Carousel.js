import React from "react"
import { Box } from "@chakra-ui/core"
import Title from "./Title"
import { graphql, useStaticQuery } from "gatsby"
import Marquee from "react-marquee-slider"
import Img from "gatsby-image"

const Slider = () => {
    const {
        c1,
        c2,
        c3,
        c4,
        c5,
        c6,
        c7,
        c8,
        c9,
        c10,
        c11,
        c12,
        c13,
        c14,
    } = useStaticQuery(graphql`
        query {
            c1: file(relativePath: { eq: "c1.jpg" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            c2: file(relativePath: { eq: "c2.jpg" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            c3: file(relativePath: { eq: "c3.jpg" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            c4: file(relativePath: { eq: "c4.jpg" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            c5: file(relativePath: { eq: "c5.jpg" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            c6: file(relativePath: { eq: "c6.jpg" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            c7: file(relativePath: { eq: "c7.jpg" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            c8: file(relativePath: { eq: "c8.jpg" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            c9: file(relativePath: { eq: "c9.jpg" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            c10: file(relativePath: { eq: "c10.jpg" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            c11: file(relativePath: { eq: "c11.jpg" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            c12: file(relativePath: { eq: "c12.jpg" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            c13: file(relativePath: { eq: "c13.jpg" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            c14: file(relativePath: { eq: "c14.jpg" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `)
    const top = [c1, c2, c3, c4, c5, c6, c7]
    const bottom = [c8, c9, c10, c11, c12, c13, c14]
    return (
        <Box mt={["100px", null, "200px"]}>
            <Box px={["20px", "50px", null, "10vw"]}>
                <Title
                    sub="Lorem ipsum dolor"
                    main="Lorem ipsum dolor sit amet"
                />
            </Box>
            <Box
                height={["250px", null, "500px", null]}
                my={["50px", null, "100px"]}
                overflow="hidden"
            >
                <Box>
                    <Marquee velocity={15}>
                        {top.map(photo => (
                            <Box
                                width={["150px", null, "300px", null]}
                                height={["100px", null, "200px", null]}
                                overflow="hidden"
                                ml={["20px", null, "80px", null]}
                                mr="0px"
                            >
                                <Img fluid={photo.childImageSharp.fluid} />
                            </Box>
                        ))}
                    </Marquee>
                </Box>
                <Box mt={["20px", null, "80px", null]}>
                    <Marquee velocity={15}>
                        {bottom.map(photo => (
                            <Box
                                width={["150px", null, "300px", null]}
                                height={["100px", null, "200px", null]}
                                overflow="hidden"
                                ml="0px"
                                mr={["20px", null, "80px", null]}
                            >
                                <Img fluid={photo.childImageSharp.fluid} />
                            </Box>
                        ))}
                    </Marquee>
                </Box>
            </Box>
        </Box>
    )
}

export default Slider
