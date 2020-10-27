import React from "react"
import Marquee from "react-marquee-slider"
import Title from "../components/Title"
import { Box, Image, PseudoBox } from "@chakra-ui/core"

import htn from "../assets/sponsors/htn.svg"
import hackclub from "../assets/sponsors/hackclub.svg"
import leangap from "../assets/sponsors/leangap.svg"
import oreilly from "../assets/sponsors/oreilly.svg"
import shawee from "../assets/sponsors/shawee.svg"
import stickermule from "../assets/sponsors/stickermule.svg"
import TIG from "../assets/sponsors/TIG.svg"
import digitalocean from "../assets/sponsors/digitalocean.png"
import discord from "../assets/sponsors/discord.png"
import hyperx from "../assets/sponsors/hyperx.png"
import makeymakey from "../assets/sponsors/makeymakey.png"
import panago from "../assets/sponsors/panago.png"
import voiceflow from "../assets/sponsors/voiceflow.png"
import wolfram from "../assets/sponsors/wolfram.png"

const sponsors = [
    {
        name: "Hack the North",
        src: htn,
        id: 1,
        link: "https://hackthenorth.com/",
    },
    { name: "Hack Club", src: hackclub, id: 2, link: "https://hackclub.com/" },
    { name: "Leangap", src: leangap, id: 3, link: "https://www.leangap.org/" },
    { name: "O'Reilly", src: oreilly, id: 4, link: "https://www.oreilly.com/" },
    { name: "Shawee", src: shawee, id: 5, link: "https://shawee.io/" },
    {
        name: "stickermule",
        src: stickermule,
        id: 6,
        link: "https://www.stickermule.com/",
    },
    {
        name: "Taking it Global",
        src: TIG,
        id: 7,
        link: "https://www.risingyouth.ca/",
    },
    {
        name: "Digital Ocean",
        src: digitalocean,
        id: 8,
        link: "https://www.digitalocean.com/",
    },
    {
        name: "Discord",
        src: discord,
        id: 9,
        link: "https://discord.com/",
    },
    {
        name: "HyperX",
        src: hyperx,
        id: 10,
        link: "https://www.hyperxgaming.com/us",
    },
    {
        name: "Makey Makey",
        src: makeymakey,
        id: 11,
        link: "https://makeymakey.com/",
    },
    {
        name: "Panago",
        src: panago,
        id: 12,
        link: "https://www.panago.com/",
    },
    {
        name: "Voiceflow",
        src: voiceflow,
        id: 13,
        link: "https://www.voiceflow.com/",
    },
    {
        name: "Wolfram Alpha",
        src: wolfram,
        id: 14,
        link: "https://wolfram.com/",
    },
]

export default () => (
    <Box py={["15px", null, "50px", null]}>
        <Box px={["20px", "50px", null, "10vw"]}>
            <Title sub="Lorem ipsum dolor" main="Lorem ipsum dolor sit amet" />
        </Box>
        <Box my="50px">
            <Marquee velocity={5}>
                {sponsors.map(sponsor => (
                    <PseudoBox
                        m="25px"
                        height="125px"
                        width="250px"
                        transition="transform 0.5s"
                        _hover={{ transform: "scale(1.05)" }}
                        cursor="pointer"
                        display="flex"
                        justifyContent="center"
                    >
                        <a
                            href={sponsor.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src={sponsor.src}
                                height="125px"
                                width="auto"
                                alt={sponsor.name}
                            />
                        </a>
                    </PseudoBox>
                ))}
            </Marquee>
        </Box>
        {/* <Box px={["20px", "50px", null, "10vw"]}>
            <Title sub="Lorem ipsum dolor" main="Lorem ipsum dolor sit amet" />
        </Box>
        <Marquee velocity={12}>
            {sponsors.map(sponsor => (
                <PseudoBox
                    m="25px"
                    height="125px"
                    width="250px"
                    transition="transform 0.5s"
                    _hover={{ transform: "scale(1.05)" }}
                    cursor="pointer"
                    display="flex"
                    justifyContent="center"
                >
                    <a
                        href={sponsor.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Image
                            src={sponsor.src}
                            height="125px"
                            width="auto"
                            alt={sponsor.name}
                        />
                    </a>
                </PseudoBox>
            ))}
        </Marquee> */}
    </Box>
)
