import React from "react"
import { Heading, Box, Grid } from "@chakra-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const Slider = () => {
    const { placeholder } = useStaticQuery(graphql`
        query {
            placeholder: file(relativePath: { eq: "placeholder.jpg" }) {
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
                    <Img fluid={placeholder.childImageSharp.fluid} />
                    <Img fluid={placeholder.childImageSharp.fluid} />
                </Grid>
                <Grid templateColumns="3fr 7fr" columnGap={5}>
                    <Img fluid={placeholder.childImageSharp.fluid} />
                    <Img fluid={placeholder.childImageSharp.fluid} />
                </Grid>
                <Grid templateColumns="6.5fr 4.5fr" columnGap={5}>
                    <Img fluid={placeholder.childImageSharp.fluid} />
                    <Img fluid={placeholder.childImageSharp.fluid} />
                </Grid>
            </Grid>
            <Grid templateRows="40% 54%" rowGap={5} height="500px">
                <Grid templateColumns="4fr 6fr" columnGap={5}>
                    <Img fluid={placeholder.childImageSharp.fluid} />
                    <Img fluid={placeholder.childImageSharp.fluid} />
                </Grid>
                <Grid templateColumns="2fr 8fr" columnGap={5}>
                    <Img fluid={placeholder.childImageSharp.fluid} />
                    <Img fluid={placeholder.childImageSharp.fluid} />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Slider
