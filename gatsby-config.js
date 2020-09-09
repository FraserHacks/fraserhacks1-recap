const path = require(`path`)

module.exports = {
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `assets`,
                path: path.join(__dirname, `src`, `assets`),
            },
        },
        {
            resolve: `gatsby-plugin-web-font-loader`,
            options: {
                custom: {
                    families: [`Metropolis`],
                    urls: [`/fonts/fonts.css`],
                },
            },
        },
        {
            resolve: `gatsby-plugin-chakra-ui`,
            options: {
                isResettingCSS: true,
                isUsingColorMode: false,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Fraser Hacks 2019 Recap`,
                short_name: `Fraser Hacks`,
                description: `FraserHacks 2020 coming soon! Hosted at John Fraser Secondary School`,
                lang: `en`,
                start_url: `/`,
                background_color: `#131D24`,
                theme_color: `#298DC3`,
                display: `standalone`,
                icon: `src/assets/logo.png`,
            },
        },
        `gatsby-plugin-sass`,
        `gatsby-plugin-chakra-ui`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-preload-fonts`,
    ],
}
