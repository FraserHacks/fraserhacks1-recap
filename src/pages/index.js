import React from "react"
import SEO from "../components/SEO"
import Hero from "../components/Hero"
import Carousel from "../components/Carousel"
import Video from "../components/Video"
import Sponsors from "../components/Sponsors"
import Organizers from "../components/Organizers"
import Footer from "../components/Footer"
import { Box } from "@chakra-ui/core"

export default () => {
    return (
        <Box backgroundColor="darkBlue">
            <SEO />
            <Hero />
            <Carousel />
            <Video />
            <Sponsors />
            <Organizers />
            <Footer />
        </Box>
    )
}
