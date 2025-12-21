// Default / Dev Configuration
const DefaultConfig = {
    // [Global Settings]
    locale: "tr", // Supported: en, tr, de, fr, es, pt
    serverName: "TIRED ROLEPLAY",

    // [Logo]
    serverLogo: {
        type: "text",
        text: "G",
        url: "",
    },

    // [Boot Animation]
    enableBootSequence: true, // Matrix/BIOS style intro
    bootDuration: 500, // ms

    // [Background]
    background: {
        type: "youtube", // video | youtube
        url: "https://www.youtube.com/watch?v=Gk9spYNF5uQ",
        overlayOpacity: 0.6, // Dark overlay
        blur: 0 // px
    },

    // [Audio]
    audio: {
        volume: 0.2, // 0.0 - 1.0
        playlist: []
    },

    // [Minigame]
    game: {
        enabled: true,
        type: "snake",
        controlKeys: "arrows"
    },

    // [Staff Team]
    staff: [
        { name: "Kurucu", role: "Owner", avatar: "https://ui-avatars.com/api/?name=Owner&background=ff0000&color=fff", color: "#ef4444" },
        { name: "Admin", role: "Manager", avatar: "https://ui-avatars.com/api/?name=Admin&background=22c55e&color=fff", color: "#22c55e" }
    ],

    // [Socials]
    socials: {
        discord: "discord.gg/tiredbtw",
        website: "tiredbtw.com"
    }
}

// Export specific interface or any
export const Config = (window as any).Config || DefaultConfig;
