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
        blue: {
            50: "#def7ff",
            100: "#bae1f7",
            200: "#92cceb",
            300: "#6ab7e1",
            400: "#41a3d7",
            500: "#2889be",
            600: "#1a6b94",
            700: "#0d4c6b",
            800: "#002f43",
            900: "#00111c",
        },
        darkBlue: "#131D24",
        gray: "#BDBDBD",
    },
}

export default theme
