# Emby Chronological Playlist Generator

A single-file web app for creating perfectly-ordered movie playlists on your Emby or Jellyfin server. No installation, no cloud service — runs entirely in your browser.

**[📖 Full Documentation](docs/USER_GUIDE.md)** | **[🚀 Quick Start](#quick-start)** | **[✨ Features](#features)** | **[🐛 Issues](https://github.com/marker197/Emby-Jellyfin-Playlist-Collection-Editor/issues)**

---

## Quick Start

1. **Download** the latest `emby-chrono-playlist.html` from [Releases](https://github.com/marker197/Emby-Jellyfin-Playlist-Collection-Editor/releases)
2. **Save** to your computer
3. **Open** in any web browser (Chrome, Firefox, Safari, Edge)
4. **Enter** your Emby/Jellyfin server details
5. **Select** a franchise and click Create Playlist

That's it! Your playlist appears in Emby immediately.

# MDBlists Server Setup Guide

Get the MDBlists server running in 2 minutes!

---

## Prerequisites

You need **Node.js** installed on your computer.

### Install Node.js

**Windows/Mac:** Go to https://nodejs.org and download the **LTS version**. Run the installer.

**Linux (Ubuntu/Debian):**
```bash
sudo apt update
sudo apt install nodejs
```

**Verify it worked:**
```bash
node --version
```

Should show something like `v20.x.x`

Open the start mdblist.sh file with terminal, command and it will start the server and open the app..

HTML, .js and .sh files shouls all be int he same directory.

---

## Features

### 🎬 Playlist Creation
- **100+ Built-in Franchises** — Marvel, Star Wars, James Bond, Harry Potter, Disney, DC, and 95 more
- **Custom Franchises** — Add your own movie series
- **Preview Mode** — See exactly which movies match before creating
- **Bulk Operations** — Create 50+ playlists in one batch
- **Collections Support** — Create Emby Collections alongside playlists
- **Smart Reordering** — Release Date or Production Order options

### ⭐ Franchise Management
- **CSV Import** — Upload custom franchise lists in bulk
- **TMDB Enrichment** — Auto-update franchises from The Movie Database
- **Franchise Sources** — Built-in, Custom, or TMDB with source toggle per playlist
- **Conflict Resolution** — Handle duplicate franchises across sources elegantly
- **Edit & Delete** — Manage franchises directly from the app

### 🎯 Smart Matching
- **Precision Title Matching** — Prevents false positives (e.g., "RV" won't appear in MCU)
- **Fuzzy Matching** — Handles minor title variations and regional names
- **Year-aware Logic** — Distinguishes between remakes and originals
- **Missing Movie Detection** — See which franchise titles aren't in your library

### 🔥 Integrations

#### Radarr
- Request missing movies directly from the app
- Manage multiple Radarr servers (4K, HDR, different qualities)
- Send all missing franchise movies with one click
- Auto-reconnect if servers drop

#### Trakt
- Authenticate with your Trakt account
- Import custom watchlists
- Create Emby collections from Trakt lists
- PIN-based OAuth flow

### ⚙️ Settings & Management
- **Multiple Configuration Options** — Radarr, TMDB, Trakt, Server, Network tabs
- **Encrypted Credentials** — All passwords/API keys encrypted locally with AES-GCM
- **Theme Toggle** — Light/Dark mode (saved to browser)
- **Backup & Restore** — Export your setup, restore anywhere
- **Network Transparency** — View every external API call in real-time

### 🛡️ Privacy First
- **Zero Cloud** — Everything stays on your local network
- **No Data Sharing** — Emby library never sent to external services
- **Transparent APIs** — Network panel shows exactly what the app contacts
- **Open Source** — Inspect the code, no hidden behavior

---

## Requirements

| Requirement | Details |
|---|---|
| **Emby Server** | v4.7+ running on local network |
| **Emby Account** | Username and password |
| **Web Browser** | Chrome, Firefox, Safari, or Edge (modern version) |
| **Network Access** | Browser must reach your Emby server URL |
| **Radarr** (optional) | Only needed for requesting missing movies |
| **TMDB API Key** (optional) | For auto-updating franchise data |
| **Trakt Account** (optional) | For importing Trakt watchlists |

### Note on File Access
If opening directly from your computer (`file://` address), some browsers block API calls. **Solution:** Run a local HTTP server:
```bash
# In the same folder as the HTML file
python3 -m http.server 8080
```
Then open `http://localhost:8080/emby-chrono-playlist.html`

---

## Compatibility

| Server | Status | Notes |
|---|---|---|
| **Emby** | ✅ Full | Officially supported, v4.7+ recommended |
| **Jellyfin** | ✅ High | API nearly identical to Emby, most features work |
| **Plex** | ❌ No | Different API architecture, would require rewrite |
| **Other** | ❌ No | Proprietary APIs not compatible |

See [Jellyfin & Plex Guide](docs/COMPATIBILITY.md) for detailed info.

---

## Usage

### Creating a Playlist
1. Select one or more movie libraries from your Emby server
2. Choose a franchise from Built-in, Custom, or TMDB sources
3. Pick ordering method (Release Date or Production Order)
4. Click Preview to see matching movies
5. Click Create Playlist

The app matches movies in your library to the franchise list and creates a correctly-ordered playlist in Emby.

### Importing from Trakt
1. Go to Settings (⚙) → Trakt tab
2. Enter your Trakt app credentials
3. Click "Open Trakt Auth URL" and approve access
4. Paste the PIN back into the app
5. Click "Import from Trakt" to load your lists
6. Select a list and import

The app creates an Emby Collection from your Trakt list.

### Requesting Missing Movies with Radarr
1. Set up Radarr servers in Settings → Radarr tab
2. After creating a playlist, red pills show missing movies
3. Click a red pill to request that movie
4. Or use "Send All Missing" to request the entire franchise

### Backing Up Your Setup
1. Settings (⚙) → Server tab
2. Click "Export settings"
3. Review what's included (playlists, franchises, servers)
4. Click "Download backup"

Your setup is saved as `chrono-backup-YYYY-MM-DD.json`

---

## Troubleshooting

### Login Issues
- **HTTP 401** → Wrong username/password
- **HTTP 404** → Incorrect server URL
- **Failed to fetch** → CORS issue (see Requirements section)
- **No response** → Emby server not running or firewall blocking

### Playlist Issues
- **No movies found** → Check libraries are selected and titles match exactly
- **Partial matches** → Red pills = movies not in your library
- **Order not correct** → Wait for progress bar to reach 100%, then refresh Emby client

### Radarr Issues
- **Connection fails** → Verify URL includes port (default 7878) and API key is complete
- **Movie already exists** → Radarr prevents duplicates; check if already in queue

See [Full Troubleshooting Guide](docs/USER_GUIDE.md#troubleshooting) for more help.

---

## Installation from Source

Want to build or modify the app?

```bash
# Clone the repo
git clone https://github.com/marker197/Emby-Jellyfin-Playlist-Collection-Editor.git
cd Emby-Jellyfin-Playlist-Collection-Editor

# Open in your browser
# No build step needed — it's a single HTML file!
open emby-chrono-playlist.html
```

The app is self-contained. All code, styling, and logic is in one `.html` file.

---

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on:
- Reporting bugs
- Suggesting features
- Submitting pull requests
- Code style and standards

Areas we're looking for help:
- Jellyfin API edge cases and compatibility
- Plex adaptation (exploratory)
- Additional franchises or data sources
- Translations/localization
- Mobile UI improvements

---

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for version history and what's new in each release.

**Latest:** v4.1
- Trakt authentication and list importing
- Duplicate playlist detection
- Settings modal with all configurations
- Backup & restore functionality
- Jellyfin/Plex compatibility guide

---

## Security & Privacy

- ✅ **All credentials encrypted locally** with AES-GCM
- ✅ **No telemetry** — app doesn't phone home
- ✅ **Open source** — inspect the code yourself
- ✅ **Network transparent** — see every API call
- ✅ **No cloud dependency** — works entirely offline after initial setup

Your Emby library data never leaves your local network.

---

## License

MIT License — see [LICENSE](LICENSE) for details.

You're free to use, modify, and distribute this app for personal or commercial use.

---

## Support

- 📖 **[Full User Guide](docs/USER_GUIDE.md)** — Detailed instructions for all features
- 🐛 **[Open an Issue](https://github.com/marker197/Emby-Jellyfin-Playlist-Collection-Editor/issues)** — Report bugs or request features
- 💬 **[Discussions](https://github.com/marker197/Emby-Jellyfin-Playlist-Collection-Editor/discussions)** — Ask questions and share ideas

---

## Credits

Built by the community for Emby and Jellyfin lovers who want perfectly-ordered movie marathons. ✨

---

**Happy playlist creating!** 🎬🍿
