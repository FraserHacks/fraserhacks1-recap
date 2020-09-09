import { theme as defaultTheme } from "@chakra-ui/core"

const theme = {
    ...defaultTheme,
    fonts: {
        ...defaultTheme.fonts,
        heading: "Metropolis, system-ui, sans-serif",
        body: "Metropolis, system-ui, sans-serif",
    },
    colors: {
        ...defaultTheme.colors,
        blue: "#298DC3",
        darkBlue: "#131D24",
        gray: "#BDBDBD",
    },
}

export default theme
