# Contributing

Thanks for your interest in contributing to the Emby Chronological Playlist Generator! We welcome bug reports, feature requests, and pull requests.

---

## Getting Started

### Reporting Bugs

Found a bug? Help us fix it!

1. **Check existing issues** → Search [Issues](https://github.com/marker197/Emby-Jellyfin-Playlist-Collection-Editor/issues) to avoid duplicates
2. **Open a new issue** with:
   - **Title** — Clear, concise description (e.g., "Duplicate playlists created when server slow")
   - **Description** — What were you doing when it happened?
   - **Expected behavior** — What should have happened
   - **Actual behavior** — What actually happened
   - **Environment** — Emby version, browser, OS
   - **Steps to reproduce** — Detailed steps to trigger the bug
   - **Screenshots** — If applicable

### Requesting Features

Have an idea for improvement?

1. **Check Discussions** → See if someone already suggested it
2. **Open a Discussion** or Issue with:
   - **Motivation** — Why would this be useful?
   - **Use case** — When would you use this?
   - **Proposed solution** — How should it work?
   - **Alternatives** — Other ways to solve this?

---

## Development

### Project Structure

The app is a **single HTML file** with all code, styles, and logic embedded:
- `emby-chrono-playlist.html` — The complete application (~4500+ lines)
- `emby-chrono-playlist-instructions.html` — User documentation
- No build system, no dependencies — just HTML, CSS, and vanilla JavaScript

### Code Style

- **JavaScript** — Plain vanilla JS (no frameworks)
- **Variables** — `camelCase` for variables and functions
- **Functions** — Descriptive names like `fetchAllLibraryMovies()`, `createPlaylist()`
- **Comments** — Use `// ──` for section headers, clear comments for complex logic
- **Indentation** — 2 spaces
- **No external dependencies** — Everything self-contained

### Making Changes

#### For Small Fixes (Typos, Docs, etc.)
1. Fork the repo
2. Edit directly in GitHub web editor
3. Submit PR with clear commit message

#### For Features or Major Changes
1. **Create an issue first** — Discuss before spending time coding
2. **Fork the repo** and create a feature branch:
   ```bash
   git clone https://github.com/YOUR-USERNAME/Emby-Jellyfin-Playlist-Collection-Editor.git
   cd Emby-Jellyfin-Playlist-Collection-Editor
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Keep changes focused and minimal
   - Add comments explaining non-obvious logic
   - Test in multiple browsers (Chrome, Firefox, Safari, Edge)

4. **Test thoroughly**
   - Test against your Emby/Jellyfin server
   - Test with different library sizes
   - Test error scenarios (wrong password, server offline, etc.)
   - Check browser console for errors (F12)

5. **Submit a pull request**
   - Clear title and description
   - Reference any related issues (#123)
   - Explain what you changed and why
   - Include testing notes

### Areas for Contributions

We're especially looking for help with:

#### 🔧 Bug Fixes
- Jellyfin API edge cases or compatibility issues
- CORS or network-related bugs
- Title matching edge cases
- UI/UX issues

#### ✨ Features
- **Jellyfin-specific enhancements** — Make it native to Jellyfin
- **Additional franchises** — More TV series, anime, etc.
- **Mobile UI** — Better touch/tablet support
- **Keyboard shortcuts** — Power user features
- **Export formats** — M3U, Kaleidescape, etc.
- **Localization** — Translations to other languages
- **In-app help** — Tooltips and built-in tutorials

#### 📖 Documentation
- Translate user guide to other languages
- Create video tutorials
- Improve troubleshooting sections
- Add more examples

#### 🤔 Exploration (Lower Priority)
- Plex compatibility layer
- Kaleidescape integration
- Other media server APIs
- Automated refresh scheduling

### Testing Checklist

Before submitting a PR, test:

- [ ] Feature works in Emby 4.7+
- [ ] Feature works in Jellyfin (if applicable)
- [ ] No JavaScript errors in console (F12)
- [ ] Works on small libraries (10 movies) and large (1000+ movies)
- [ ] Works with slow network connections
- [ ] Works with server offline scenarios
- [ ] Tested in Chrome, Firefox, Safari
- [ ] Mobile browser (if UI changes)
- [ ] Backup/restore includes new data properly

---

## Pull Request Process

1. **Before you start**
   - Comment on an issue stating you'll work on it
   - Discuss approach with maintainers

2. **While you code**
   - Keep commits clear and focused
   - Write descriptive commit messages
   - Add comments to complex code sections

3. **Before you submit**
   - Rebase against `main` branch
   - Test once more against latest code
   - Update CHANGELOG.md if adding features/fixes

4. **Submit PR**
   - Fill out the PR template completely
   - Reference issues you're fixing (#123)
   - Link any relevant discussions
   - Provide clear before/after description

5. **Review process**
   - Maintainers will review within 1-2 weeks
   - May request changes or ask questions
   - Once approved, we'll merge and credit you!

---

## Code Review

Reviews focus on:

✅ **Does it work?** — Does it fix the bug / implement the feature correctly?
✅ **Is it maintainable?** — Is the code clear and well-commented?
✅ **Does it follow conventions?** — Consistent with existing code style?
✅ **Are there side effects?** — Does it break other features?
✅ **Is it secure?** — No sensitive data leaks, credential handling safe?
✅ **Is it performant?** — No slowdowns on large libraries?

---

## Questions?

- 💬 **[GitHub Discussions](https://github.com/marker197/Emby-Jellyfin-Playlist-Collection-Editor/discussions)** — Ask questions
- 🐛 **[GitHub Issues](https://github.com/marker197/Emby-Jellyfin-Playlist-Collection-Editor/issues)** — Report bugs
- 📧 **Open an issue** and label it `question` if you're not sure

---

## Contributor Recognition

Contributors will be:
- Listed in the CHANGELOG.md for their contribution
- Credited in comments near their code
- Mentioned in release notes for significant features

---

## Code of Conduct

Be respectful, helpful, and constructive. We're all here to make this tool better!

---

**Thank you for contributing!** Your help makes this project better for everyone. 🙌
