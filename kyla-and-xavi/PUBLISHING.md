# Publishing this site to GitHub Pages

Everything is already committed to a local git repo in this folder. You just need to create the
repo on GitHub and push. Two options below — pick whichever you're comfortable with.

---

## Option A — GitHub Desktop (no terminal)

1. Download GitHub Desktop from https://desktop.github.com and sign in.
2. **File → Add Local Repository**, choose this `wedding-site` folder.
3. Click **Publish repository**.
   - Name it something like `kyla-and-xavi`
   - **Uncheck "Keep this code private"** — free accounts need a public repo for Pages.
4. Wait for the upload (384MB, expect 5–20 minutes depending on your connection).
5. Go to the repo on github.com → **Settings → Pages**.
   - Under "Build and deployment", set Source to **Deploy from a branch**
   - Branch: `main`, folder: `/ (root)` → **Save**
6. Wait ~2 minutes. Your site is live at:
   `https://YOUR-USERNAME.github.io/kyla-and-xavi/`

---

## Option B — Terminal

Create an empty repo on github.com first (no README, no .gitignore), then:

```bash
cd "path/to/wedding-site"
git remote add origin https://github.com/YOUR-USERNAME/kyla-and-xavi.git
git branch -M main
git push -u origin main
```

Then do step 5 above to turn on Pages.

---

## Notes

**Privacy.** GitHub Pages sites are publicly reachable on the internet — a private repo does not
make the site private (that requires GitHub Enterprise). What this repo *does* include is a
`robots.txt` and `noindex` meta tags, which keep it out of Google and other search engines. The
URL works for anyone you send it to, but nobody will stumble onto it. Treat it as unlisted,
not locked.

If you want an actual password wall, GitHub can't do it. Netlify's free tier can — drag this
same folder onto https://app.netlify.com/drop and add site protection in the settings.

**Size.** The repo is ~384MB, mostly the full-resolution photo downloads in `photos/full/`.
GitHub Pages allows up to 1GB, so there's room, but note:
- The first push will be slow.
- Bandwidth is capped at 100GB/month (soft limit). That's roughly 250 full site visits with
  heavy downloading — fine for a wedding, but worth knowing.
- If you ever want to slim it down, deleting `photos/full/` and pointing the download links at
  `photos/large/` instead takes the site to about 140MB.

**Custom domain.** If you'd rather have `kylaandxavi.com`, buy the domain, then add it under
Settings → Pages → Custom domain and follow the DNS instructions there.

---

## What's in here

```
index.html          the whole site — layout, styles, and behavior
photos.js           the manifest listing all 75 items in display order
photos/thumbs/      small versions for the gallery grid
photos/large/       2000px versions for full-screen viewing
photos/full/        original camera files, used by the download button
videos/             1080p H.264 versions of the six clips
videos/posters/     still frames used as video thumbnails
robots.txt          keeps search engines out
.nojekyll           tells GitHub not to run Jekyll on the files
```

To change the photo order, edit the array in `photos.js` — the site displays them in the order
they appear there.
