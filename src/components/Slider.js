import React from "react"
import { Grid } from "@chakra-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Slider = () => {
    const { c1, c2, c3, c4, c5, c6, c7 } = useStaticQuery(graphql`
        query {
            c1: file(relativePath: { eq: "c1.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 900, maxHeight: 900) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            c2: file(relativePath: { eq: "c2.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 900, maxHeight: 900) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            c3: file(relativePath: { eq: "c3.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 900, maxHeight: 900) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            c4: file(relativePath: { eq: "c4.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 900, maxHeight: 900) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            c5: file(relativePath: { eq: "c5.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 900, maxHeight: 900) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            c6: file(relativePath: { eq: "c6.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 100, maxHeight: 900) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            c7: file(relativePath: { eq: "c7.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 900, maxHeight: 900) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `)
    return (
        <Grid
            templateColumns="1fr 1fr"
            columnGap={5}
            width="100%"
            height="500px"
        >
            <Grid templateRows="30% 30% 30%" rowGap={5} height="500px">
                <Grid templateColumns="6fr 4fr" columnGap={5}>
                    <Img fluid={c1.childImageSharp.fluid} />
                    <Img fluid={c2.childImageSharp.fluid} />
                </Grid>
                <Grid templateColumns="3fr 7fr" columnGap={5}>
                    <Img fluid={c3.childImageSharp.fluid} />
                    <Img fluid={c4.childImageSharp.fluid} />
                </Grid>
                <Grid templateColumns="6.5fr 4.5fr" columnGap={5}>
                    <Img fluid={c5.childImageSharp.fluid} />
                    <Img fluid={c2.childImageSharp.fluid} />
                </Grid>
            </Grid>
            <Grid templateRows="40% 54%" rowGap={5} height="500px">
                <Grid templateColumns="4fr 6fr" columnGap={5}>
                    <Img fluid={c5.childImageSharp.fluid} />
                    <Img fluid={c5.childImageSharp.fluid} />
                </Grid>
                <Grid templateColumns="2fr 8fr" columnGap={5}>
                    <Img fluid={c7.childImageSharp.fluid} />
                    <Img fluid={c1.childImageSharp.fluid} />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Slider