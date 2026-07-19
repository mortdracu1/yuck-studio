# MINISTRY OF SILENCE — Replaceable Asset Directory

Every asset the game renders is referenced from a manifest or content file —
**nothing is hardcoded inside components**. Drop approved files into the
folders below and update the matching manifest field. Missing artwork never
breaks the game: a labelled placeholder is shown instead.

## characters/ — doorway + conscience standees

Final art: one **transparent PNG per character**, full body, front view.

| File (place here)             | Character                | Manifest id   |
| ----------------------------- | ------------------------ | ------------- |
| `attendant.png`               | Office attendant         | `attendant`   |
| `bureaucrat.png`              | Senior bureaucrat        | `bureaucrat`  |
| `minister.png`                | Fellow minister          | `minister`    |
| `police.png`                  | Police officer           | `police`      |
| `ghost.png`                   | Dictator-like ghost      | `ghost`       |
| `pm.png`                      | PM caricature            | `pm`          |
| `conscience.png`              | Minister's conscience    | `conscience`  |
| `exampaper.png` (optional)    | Exam paper concept skin  | `exampaper`   |
| `roachman.png` (optional)     | Cockroach concept skin   | `roachman`    |

Optional speaking-pose variants: `<id>_speaking.png` next to the front image.

**Image requirements**
- PNG with real alpha transparency (the silhouette IS the cut-out edge).
- Portrait orientation, full body, feet at the bottom edge of the canvas.
- Recommended: 1024 px wide × 2048 px tall (min 512×1024). The standee
  preserves the image's aspect ratio; world height comes from the manifest.
- Front view, facing the viewer, neutral or speaking pose.
- No rectangular background, no baked floor shadow (shadows are in-engine).

**After dropping files in:** edit `src/content/characters.ts` and point each
entry's `standee.frontImage` from `assets/characters/placeholders/<id>.png`
to `assets/characters/<id>.png` (and `standee.speakingImage` if supplied).
Tune `height`, `yOffset`, `edgeColor`, `contactShadow`, `idleSway`/`idleBob`,
`doorwayOffset` per character in the same file. For the exam paper and
cockroach set `texturePath` instead (their 3D bodies stay for articulation).

`characters/placeholders/` holds the current neutral labelled silhouettes.
They are temporary and must not ship as final art.

## posters/ — wall graphics

Illustrated blank-text-region backgrounds: `emblem.png`, `arrow.png`,
`committee.png`, `drinks.png` (512×710). Text is composited in-engine from
`src/content/posters.ts` — replace a background by overwriting the file;
adjust wording in the manifest. Memos are fully procedural (no file needed).

## television/ · phone/ · documents/

Supplied video frames, phone UI images and document scans. Empty until the
final assets arrive; the TV and phone already have manifest hooks
(`src/content/tv.ts`, `src/content/phoneMessages.ts`).

## audio/doorway/ · audio/environment/

Recorded dialogue clips: `<id>.mp3` matching the manifest id
(e.g. `attendant.mp3`). Then set `audioPath: 'assets/audio/doorway/attendant.mp3'`
in `src/content/characters.ts`. While `audioPath` is null the game shows
subtitles with a temporary mumble — nothing fails.

## textures/environment/

Wall / floor / furniture texture replacements (PNG/JPG, tileable, ≤1024 px).
