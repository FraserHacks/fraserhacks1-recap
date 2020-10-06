import React from "react"
import { Helmet } from "react-helmet"

export default () => (
    <Helmet>
        <title>Fraser Hacks 2019 Recap</title>
        <meta
            name="description"
            content="FraserHacks 2020 coming soon! Hosted at John Fraser Secondary School"
        />
        {/* Open Graph Protocol */}
        <meta property="og:title" content="Fraser Hacks 2019 Recap" />
        <meta
            property="og:description"
            content="FraserHacks 2020 coming soon! Hosted at John Fraser Secondary School"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/banner.jpg" />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1080" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Fraser Hacks 2019 Recap" />
        <meta
            property="twitter:description"
            content="FraserHacks 2020 coming soon! Hosted at John Fraser Secondary School"
        />
        <meta property="twitter:image" content="/banner.jpg" />
        <script
            src="https://kit.fontawesome.com/c7434d4388.js"
            crossorigin="anonymous"
            defer
            async
        ></script>
    </Helmet>
)
