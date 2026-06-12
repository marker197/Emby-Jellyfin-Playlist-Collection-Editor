# Emby Chrono Playlist — Changelog

All notable changes to the Emby Chrono Playlist Generator are documented here.

---

## [Latest] — June 12, 2026

### 🆕 Collection Management System (Full Feature Release)

**Collection Creation & Saving**
- ✅ Create collections from Trakt and MDBlists imports
- ✅ Automatically save collection metadata by collection ID
- ✅ Store all original titles (matched + missing) for future refresh
- ✅ Collection ID-based linking (works even if renamed in Emby)

**Missing Movies Tracking**
- ✅ Separate localStorage for missing movies: `cp_collection_missing_movies_{collectionId}`
- ✅ Automatically saved when creating collections from imports
- ✅ Linked to collection by ID, not by name (rename-proof)

**Refresh Collection Feature**
- ✅ Search library for missing movies from saved list
- ✅ Fuzzy matching for title variations (handles year removal, substring matching)
- ✅ Show found movies in green, ready to add to collection
- ✅ Add all found movies to collection in one click
- ✅ Automatically remove added movies from missing list
- ✅ Persist found movies to localStorage for reliability

**Deleted Movie Sync**
- ✅ Detect when movies are deleted from collections in Emby
- ✅ Automatically add deleted movies back to missing list
- ✅ Update saved collection metadata to match Emby's current state
- ✅ Show toast with sync confirmation ("Synced X deleted movies")

**Collection Count Updates**
- ✅ Refresh circle button updates collection counts from Emby
- ✅ Syncs deleted movies to missing list on refresh
- ✅ Removes empty collections (0 movies) from saved list
- ✅ Toast confirmation with count of synced/removed items

**Storage Keys**
- `cp_saved_collections` — Collection metadata (embyId, name, originalTitles, source)
- `cp_collection_missing_movies_{collectionId}` — Missing titles for each collection
- `cp_pending_collection_movies_{collectionId}` — Temporary storage for movies to add

**Works with Both Platforms**
- ✅ Trakt imports
- ✅ MDBlists imports
- ✅ Identical workflow for both

**Bug Fixes This Session**
- ✅ Fixed matched titles not being stored (timing issue with Promise callbacks)
- ✅ Fixed missing movies not being saved (now saves all original titles)
- ✅ Fixed metadata sync (deleted movies now tracked properly)
- ✅ Fixed localStorage persistence (movies persist across page reloads)

---

## [Previous] — June 11, 2026

### 🆕 MDBlists Integration (Full Feature Release)

**Authentication & OAuth**
- ✅ Device Code OAuth PKCE flow with 30-day token expiry
- ✅ Persistent credential storage (encrypted + fallback to plain text)
- ✅ Auto-restore credentials on page load
- ✅ Disconnect button to clear MDBlists session

**List Management**
- ✅ Automatic curl server (Node.js) for CORS bypass
- ✅ Load lists from any MDBlists username (not just your own account)
- ✅ Auto-fetch list items with proper API endpoint handling
- ✅ Support for movies, shows, and episodes

**Preview & Import**
- ✅ Movie preview modal showing found (green) and missing (red) items
- ✅ Individual movie checkboxes for selective sending to Radarr
- ✅ "Tick All / Untick All" buttons for large lists (50+ movies)
- ✅ Send Selected to Radarr button (not just "Send All")
- ✅ Includes year data when sending to Radarr
- ✅ Auto-clear missing titles state on modal close

**Per-Server Quality Profiles**
- ✅ Quality profile selector under each Radarr server (not global)
- ✅ Auto-fetch available profiles from each server
- ✅ Per-server localStorage persistence (`cp_radarr_quality_0`, `cp_radarr_quality_1`, etc.)
- ✅ Refresh button to reload profiles on demand
- ✅ Quality profile used when sending missing movies to Radarr

**Bug Fixes**
- ✅ Fixed "encryptData is not defined" error with guarded storage calls
- ✅ Fixed token persistence with plain text fallback
- ✅ Fixed API endpoint (list ID instead of slug)
- ✅ Fixed missing movies list persisting across imports
- ✅ Fixed parsing of MDBlists response format (movies/shows/episodes arrays)
- ✅ Fixed profile picture and username display in server settings

**Settings & UI**
- ✅ Server username and profile picture display
- ✅ "Don't show this again" checkbox on welcome overlay
- ✅ Permanent hide preference stored in localStorage
- ✅ Updated Radarr setup instructions with quality profile guidance

**Documentation**
- ✅ Complete MDBlists setup guide with credential instructions
- ✅ MDBlists import workflow (yours or any username)
- ✅ Quick reference for Radarr quality profiles
- ✅ Node.js requirement clarification
- ✅ Updated settings modal documentation

---

## Previous Sessions

### Session 6 — Radarr Quality Profiles & Per-Server Config

- ✅ Quality profile dropdown moved from global to per-server
- ✅ Each Radarr server stores its own quality profile preference
- ✅ Auto-loads profiles from server's API
- ✅ Refresh button for manual profile reloading
- ✅ Proper localStorage key naming per server index

### Session 5 — Auto Playlist Welcome Overlay

- ✅ "Don't show this again" checkbox on welcome screen
- ✅ Permanent hide preference persisted across page reloads
- ✅ Respect hidden state in `runSmartDetection()`
- ✅ Clean UI integration with existing welcome box

### Session 4 — Server Settings Improvements

- ✅ Display actual Emby username (no more "undefined")
- ✅ Show user's profile picture if available
- ✅ Proper user lookup by `S.userId`
- ✅ Graceful handling of missing user data

### Session 3 — MDBlists CORS Bypass

- ✅ Node.js curl proxy server (`mdblist-curl-server.js`)
- ✅ Localhost:3000 forwarding for MDBlists API calls
- ✅ Auto-detection of curl availability
- ✅ Mac launcher script for automatic server startup

### Session 2 — Token Persistence & Expiry

- ✅ MDBlists token 30-day expiry tracking
- ✅ Auto-restoration of valid tokens on page load
- ✅ Visual feedback: "✓ Connected! (token expires in Xh)"
- ✅ Token clearing on expiry or manual disconnect
- ✅ Proper `.then()` handling for async operations

### Session 1 — MDBlists Initial Setup

- ✅ Device Code OAuth PKCE authentication
- ✅ Client ID and API key input fields
- ✅ Authorization code exchange flow
- ✅ Trakt-style authentication pattern
- ✅ Settings modal tab for MDBlists configuration

---

## Core Features (Built-in)

### Playlist Creation
- ✅ Chronological playlist generation from franchises
- ✅ Smart franchise detection from built-in library (70+ franchises)
- ✅ Drag-to-reorder playlist items
- ✅ One-click playlist creation
- ✅ Playlist refresh on library updates

### Collection Management
- ✅ Create collections from playlists
- ✅ Create playlists from existing Emby collections
- ✅ Collection preview before creation
- ✅ Import/export franchises

### Radarr Integration
- ✅ Up to 3 Radarr servers
- ✅ Click missing movies (red pills) to request
- ✅ Send all missing to Radarr in one click
- ✅ Auto-reconnect every 60 seconds
- ✅ Per-server quality profile selection
- ✅ Year data included in requests

### Data Sources
- ✅ **Built-in:** 70+ franchise definitions
- ✅ **CSV Import:** Upload custom franchise lists
- ✅ **TMDB:** Automatic franchise data refresh
- ✅ **Trakt:** Import watchlists and custom lists
- ✅ **MDBlists:** Import curated lists (new)

### Settings & Persistence
- ✅ Full settings encryption with fallback
- ✅ Backup & restore (JSON export)
- ✅ Local storage persistence
- ✅ Dark/Light theme toggle
- ✅ Welcome overlay toggle

### UI/UX
- ✅ Responsive design
- ✅ Network activity monitor
- ✅ Real-time connection status
- ✅ Progress indicators
- ✅ Toast notifications
- ✅ Mobile-friendly interface

---

## Known Limitations

- **Jellyfin:** Compatible but not officially tested
- **Plex:** Not supported (different API architecture)
- **Node.js:** Required for MDBlists list retrieval (not included)
- **CORS:** May require local server for some browser/network configurations

---

## File Structure

```
emby-chrono-playlist.html              (Main application, ~5,600 lines)
emby-chrono-playlist-instruction.html  (Full user guide, 35+ sections)
mdblist-curl-server.js                 (Node.js CORS proxy)
start-mdblist-app.sh                   (Mac launcher script)
CHANGELOG.md                           (This file)
```

---

## Development Notes

### Storage Keys

**MDBlists:**
- `cp_mdblist_token` — OAuth access token (cleared on disconnect)
- `cp_mdblist_token_expires` — Token expiry timestamp
- `cp_mdblist_client_id` — Client ID (persistent)
- `cp_mdblist_apikey` — API key (persistent, encrypted)
- `cp_mdblist_username` — Username (persistent, encrypted)

**Radarr:**
- `cp_radarr_servers` — Server array (URL, API key, label)
- `cp_radarr_quality_0` — Quality profile for server 0
- `cp_radarr_quality_1` — Quality profile for server 1
- `cp_radarr_quality_2` — Quality profile for server 2

**Welcome:**
- `cp_first_run_done` — First-run detection
- `cp_hide_welcome_permanently` — Hide preference

**Other:**
- `cp_theme` — Light/Dark mode preference
- `cp_franchises` — Custom franchises
- `cp_playlists` — Saved playlists

### API Endpoints

**MDBlists:**
- `GET /lists/user/{username}?sort=created&apikey={key}` — List user's lists
- `GET /lists/{listId}/items?apikey={key}` — Get list items (uses localhost:3000 proxy)

**Radarr:**
- `GET /api/v3/qualityprofile` — List quality profiles
- `GET /api/v3/movie/lookup?term=X` — Search for movie
- `POST /api/v3/movie` — Add movie to Radarr
- `GET /api/v3/rootfolder` — List root folders

---

## Future Roadmap

- [ ] Sonarr integration for TV series
- [ ] Automatic quality profile detection
- [ ] Batch operations for multiple playlists
- [ ] Cloud sync for settings
- [ ] Multi-user profiles
- [ ] Advanced filtering (year, rating, etc.)

---

## Credits

**Emby Chrono Playlist Generator** — Built for organizing movie franchises chronologically across media servers.

Integrations: Emby, Radarr, Trakt, TMDB, MDBlists

Last updated: June 11, 2026
