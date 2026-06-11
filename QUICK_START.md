# Quick Start Guide

Get up and running in 5 minutes.

---

## Step 1: Download

1. Go to [Releases](https://github.com/marker197/Emby-Jellyfin-Playlist-Collection-Editor/releases)
2. Download the latest `emby-chrono-playlist.html`
3. Save to your computer (Desktop is fine)

---

## Step 2: Open in Browser

Double-click the file or:
- Right-click → Open With → Chrome/Firefox/Safari
- Or type `file:///path/to/emby-chrono-playlist.html` in your browser

---

## Step 3: Connect to Emby

1. Enter your **Emby Server URL** (e.g., `http://192.168.1.10:8096`)
2. Enter your **Emby username** and **password**
3. Check **"Remember me"** for auto-login next time (optional)
4. Click **Connect**

A green dot in the top-right confirms you're connected.

---

## Step 4: Select Libraries

The app loads your movie libraries. Check the ones you want to use:
- ✓ 4K Movies
- ✓ Movies
- (uncheck others like TV Shows)

---

## Step 5: Create Your First Playlist

1. **Choose a Franchise** → Pick "Marvel Cinematic Universe" or any other
2. **Click Preview** → See which movies in your library match
3. **Click Create Playlist** → Done!

Your playlist appears in Emby within seconds.

---

## Common First Playlists

Try these franchises first (most libraries have them):
- Marvel Cinematic Universe
- Star Wars (Episodes)
- Harry Potter
- Lord of the Rings
- Fast & Furious
- Mission Impossible
- James Bond

---

## Next Steps

### Add Radarr (Optional)
Request missing movies directly from the app:
1. Get your **Radarr API key** (Radarr Settings → General → Security)
2. Click **Settings** (⚙) → Radarr tab
3. Add your Radarr server (default port is 7878)
4. Click Test to verify

Then click red movie pills to request them!

### Add TMDB (Optional)
Keep franchises updated automatically:
1. Get free **TMDB API key** from https://www.themoviedb.org/settings/api
2. Click **Settings** (⚙) → TMDB tab
3. Enter API key and test it
4. Click "Refresh Franchises" to pull latest data

### Import from Trakt (Optional)
Create collections from your Trakt watchlists:
1. Get **Trakt app credentials** from https://trakt.tv/settings/developer
2. Click **Settings** (⚙) → Trakt tab
3. Enter Client ID and Secret
4. Follow the auth flow
5. Click "Import from Trakt" to load your lists

---

## Troubleshooting

### Can't Connect to Emby?
- ✓ Double-check server URL (no trailing slash)
- ✓ Verify Emby is running
- ✓ Check username and password
- ✓ Confirm network access (try pinging the server)

### "No movies found"?
- ✓ Make sure libraries are checked
- ✓ Verify franchise titles match your Emby library exactly
- ✓ Try a well-known franchise like Marvel to test

### Opening as `file://` blocks API?
Run a simple HTTP server instead:
```bash
# In the folder with the HTML file:
python3 -m http.server 8080

# Then open: http://localhost:8080/emby-chrono-playlist.html
```

---

## Full Documentation

For detailed guides on all features, see [User Guide](emby-chrono-playlist-instructions.html) (included in the repo).

---

**Tips:**
- 💡 Save the HTML file in a consistent location for data persistence
- 💡 Bookmark the URL if using HTTP server
- 💡 Backup your settings periodically (Settings → Server → Export settings)
- 💡 Report bugs at [GitHub Issues](https://github.com/marker197/Emby-Jellyfin-Playlist-Collection-Editor/issues)

---

**Enjoy!** 🎬🍿
