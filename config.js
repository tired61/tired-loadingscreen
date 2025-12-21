Config = {
    // [Global Settings]
    locale: "tr", // Supported: en, tr, de, fr, es, pt
    serverName: "TIRED ROLEPLAY",

    // [Logo]
    serverLogo: {
        type: "text", // 'text' | 'image'
        // If type is 'text' (Gothic Font)
        text: "G",
        // If type is 'image'
        url: "https://r2.fivemanage.com/pub/logo.png", // Link to your logo
        // Recommended Size: 512x512px or 1024x1024px (Square transparent PNG)
    },

    // [Boot Animation]
    enableBootSequence: true, // Matrix/BIOS style intro
    bootDuration: 500, // ms

    // [Background]
    background: {
        type: "youtube", // video | youtube
        // YouTube Video ID or Full URL
        url: "https://www.youtube.com/watch?v=Gk9spYNF5uQ",

        // Settings
        overlayOpacity: 0.6, // Dark overlay (0.0 - 1.0)
        blur: 0 // px
    },

    // [Audio]
    audio: {
        volume: 0.2, // 0.0 - 1.0
    },

    // [Socials]
    socials: {
        discord: "discord.gg/tiredbtw",
        website: "tiredbtw.com"
    }
}
