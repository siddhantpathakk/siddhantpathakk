# Photos

Drop image files here. They are referenced from `src/data/site.ts` and
`src/data/achievements.ts`. Until the files exist, each spot renders a
dashed placeholder showing the expected path.

## Expected files

| Path | Used on | Suggested aspect |
|---|---|---|
| `avatar.jpg` | `/` (front-page hero) | square (~600×600) |
| `graduation.jpg` | `/resume` (next to Education) | landscape (~3:2) |
| `awards/icarus.jpg` | `/achievements` (Third Place — Deep Learning Week Hackathon) | landscape (~4:3 or 3:2) |
| `awards/delphi.jpg` | `/achievements` (Innovative Use of NLP — Delphi) | landscape (~4:3 or 3:2) |

JPG, PNG, or WebP all work. Filenames must match exactly. To change a
path, edit the `photos` block in `src/data/site.ts` or the `image`
field on the corresponding award in `src/data/achievements.ts`.
