# Changelog

All notable changes to this project are documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/), and this project adheres to [Semantic Versioning](https://semver.org/).

---

## [4.1] - 2026-06-10

### Added
- **Trakt Integration** — Authenticate with Trakt account and import custom watchlists
  - PIN-based OAuth authentication flow
  - Load and preview Trakt lists before importing
  - Create Emby Collections from Trakt lists
  - Auto-detect missing movies with Radarr integration
- **Duplicate Playlist Detection** — Warn before creating playlists with duplicate names
  - Single mode: User choice to confirm or cancel
  - Bulk mode: Auto-append timestamp to avoid conflicts
- **Settings Modal** — Centralized configuration interface (v4.0+)
  - Radarr Tab — Manage multiple servers
  - TMDB Tab — API key and franchise refresh controls
  - Network Tab — View all external API endpoints
  - Server Tab — Emby connection, theme, backup/restore
  - Trakt Tab — Authentication and account management
- **Backup & Restore System** — Export/import your entire setup
  - Download JSON backup of playlists, collections, franchises
  - Restore backups on new computers or after reinstalls
  - Merge mode (doesn't replace existing data)
  - Excludes credentials for security
- **Jellyfin Compatibility Documentation** — Detailed guide on Jellyfin/Plex support
  - Jellyfin: High compatibility notes
  - Plex: Honest assessment of why it's not compatible
  - How to try on Jellyfin with troubleshooting
- **Content Security Policy** — Allow HTTP connections for local file usage

### Fixed
- Movie fetching from libraries now correctly extracts Items array from API response
- Trakt import movie matching with proper title normalization
- Collection creation uses correct query string format (matches Playlist API)
- Settings modal closes automatically when other modals open
- Missing variable reference in playlist creation error handling
- Franchise storage format standardization (Object not Array)

### Improved
- Movie title matching engine with better fuzzy logic
- API response handling for Emby endpoints
- User feedback with detailed debug logging for import features
- Modal stacking and navigation

---

## [4.0] - 2026-05-XX

### Added
- **Settings Modal** — Centralized configuration with 5 tabs
- **TMDB Franchise Refresh** — Auto-update franchise lists from The Movie Database
- **Franchise Source Toggle** — Switch between Built-in, Custom, and TMDB ordering
- **Conflict Resolution Modal** — Handle duplicate franchises elegantly
- **Franchise Source Labels** — Visual labels for Built-in (grey), TMDB (blue), Custom (purple)
- **First-Run Detection** — Auto-suggest franchises based on your library
- **Radarr Auto-Reconnect** — Servers auto-ping and reconnect if dropped
- **Send All Missing** — One-click to request entire franchise to Radarr
- **Precision Title Matching** — Rewritten matching engine prevents false positives
- **Create from Collections** — Use Emby collections as source instead of library
- **Toast Notifications** — Visual feedback for all actions (success, error, warning)
- **Light/Dark Theme Toggle** — Persistent theme preference

### Improved
- Franchise grid UI with better filtering
- Playlist refresh performance for large libraries
- Error handling and user feedback
- Code organization and comments

---

## [3.1] - 2026-04-XX

### Added
- **CSV Import** — Upload custom franchises from CSV files
- **Bulk Mode** — Create multiple playlists at once
- **Preview Matches** — Dry-run playlists before creating
- **TMDB Enrichment (Beta)** — Optional TMDB API integration

### Fixed
- Library selection persistence
- Playlist reordering for collections

---

## [3.0] - 2026-03-XX

### Added
- **Radarr Integration** — Request missing movies directly
- **Multiple Radarr Servers** — Manage 4K, HDR, separate instances
- **Custom Franchises** — Create and save your own movie series

### Improved
- Movie matching algorithm
- User interface responsiveness
- Settings persistence

---

## [2.0] - 2026-02-XX

### Added
- **Collections Support** — Create Emby BoxSets
- **Refresh Existing Playlists** — Re-sort and auto-add new movies
- **Production Order** — Alternative to Release Date ordering
- **Encrypted Credentials** — AES-GCM encryption for stored passwords

### Fixed
- CORS issues for local file usage
- Library scanning performance

---

## [1.0] - 2026-01-XX

### Added
- Initial release
- Create chronological playlists from 100+ built-in franchises
- Login to Emby server
- Select movie libraries
- Match movies and create playlists
- Reorder playlists by release date

---

## Roadmap

### Planned for Future Releases
- [ ] Keyboard shortcuts for power users
- [ ] In-app tooltips and help system
- [ ] Export playlists as M3U format
- [ ] Mobile-optimized interface
- [ ] Jellyfin-specific enhancements
- [ ] Plex compatibility layer (exploratory)
- [ ] Automated playlist refresh scheduling
- [ ] Playlist merge and clone operations
- [ ] User preference profiles
- [ ] Internationalization/translation support

---

## Version Support

| Version | Status | Support |
|---|---|---|
| 4.1 | Current | ✅ Active |
| 4.0 | Previous | ⚠️ Limited |
| 3.x | Older | ❌ No |
| 2.x | Legacy | ❌ No |
| 1.x | Legacy | ❌ No |

---

## Upgrade Notes

### From 4.0 to 4.1
- No breaking changes
- Backup your data before updating (Settings → Export)
- New Trakt features optional — all existing features work as before

### From 3.x to 4.0
- Franchise storage format changed (Object instead of Array)
- Custom franchises will be automatically converted
- TMDB integration is optional but recommended
- Settings now centralized in modal instead of scattered UI

---

## Bug Reports & Feature Requests

Found a bug? Have a feature idea?

→ **[Open an Issue](https://github.com/marker197/Emby-Jellyfin-Playlist-Collection-Editor/issues)**

Please include:
- What you were trying to do
- What happened instead
- Your Emby version and browser
- Steps to reproduce (for bugs)

---

## Contributing

Want to help improve this app?

→ **[See CONTRIBUTING.md](CONTRIBUTING.md)**

Contributors are credited in release notes.
