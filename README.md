# tiredbtw-loadingscreen 

**tiredbtw-loadingscreen** is a premium, gothic-themed loading screen resource designed for FiveM servers. Built with **React**, **Vite**, and **TailwindCSS**, it offers a modern, cinematic experience for players joining your server.

## ✨ Features

- **Cinematic Visuals**: 
  - Centered "Gothic Gold" logo design (configurable).
  - Cyberpunk-style glowing progress bar.
  - Smooth fade-in animations.
- **Dynamic Backgrounds**:
  - **YouTube Support**: Play any YouTube video as a background (muted/authenticated).
  - **Video Support**: Use local video files (`.webm`, `.mp4`).
  - **Dark Overlay**: Configurable transparent dark layer for text readability.
- **Boot Sequence**:
  - "Matrix/BIOS" style startup text.
  - Ultra-fast "Flash" boot mode (configurable duration).
- **Audio Control**:
  - Integrated audio from the background video.
  - **Spacebar Control**: Players can pause/play music (and video) instantly with the Space key.
- **No-Rebuild Configuration**: 
  - All settings are managed via a root `config.js` file.
  - **Instant Updates**: Change settings and restart the script—no need to recompile the React app!

## 🛠️ Installation

1.  **Download/Clone**:
    Download the resource and place it in your `resources` folder.
    *Ensure the folder name is `tiredbtw-loadingscreen`.*

2.  **Server Configuration**:
    Add the resource to your `server.cfg`.
    ```cfg
    ensure tiredbtw-loadingscreen
    ```

3.  **Dependencies (Optional - Dev Only)**:
    If you want to modify the source code (React), navigate to the `web` folder.
    ```bash
    cd tiredbtw-loadingscreen/web
    npm install
    npm run build
    ```
    *You do NOT need to do this just to change config settings.*

## ⚙️ Configuration

You can customize the loading screen by editing `config.js` in the root folder.

### Example Config (`config.js`)

```javascript
Config = {
    // [Global Settings]
    locale: "tr", // Supported: en, tr
    serverName: "TIRED ROLEPLAY",

    // [Logo]
    serverLogo: {
        type: "text", // 'text' | 'image'
        text: "G",
        url: "https://link-to-your-logo.png", 
    },

    // [Background]
    background: {
        type: "youtube", // 'video' or 'youtube'
        url: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
        overlayOpacity: 0.6,
    },
    
    // [Audio]
    audio: {
        volume: 0.2, // 0.0 - 1.0
    }
}
```

## ⌨️ Controls

- **SPACE**: Toggle Music/Video Playback.

## 💻 Tech Stack

- **Framework**: React 18
- **Bundler**: Vite
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Language**: TypeScript

---
*Developed by TireDBTW*
