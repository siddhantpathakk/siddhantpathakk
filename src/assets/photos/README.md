# Photos

Source photos for the site. They are imported in `src/data/site.ts` and
`src/data/achievements.ts` and processed by `astro:assets` at build time
(resized, cropped, converted to WebP, given a `srcset`), so originals can be
large. A missing or misnamed file fails the build instead of shipping a
broken image.

| File | Used on | Shown as |
|---|---|---|
| `avatar.jpg` | `/` (hero), social preview card | square crop; 1200×630 crop for `og:image` |
| `graduation.jpg` | `/resume/` (Education) | 3:4 portrait crop, anchored to the top |
| `awards/icarus.jpeg` | `/resume/` (Awards) | 4:3 landscape crop |
| `awards/delphi.jpeg` | `/resume/` (Awards) | 4:3 landscape crop |

To swap a photo, replace the file keeping its name, or change the import.
Alt text lives next to the import (`site.ts` for the avatar is generated from
the name; awards carry their own `alt`).
