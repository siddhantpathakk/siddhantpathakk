# Vendored skills

Copied from upstream at the commits below. To update, re-copy from a newer commit and review the diff.

| Skill(s) | Upstream | Commit | License |
|---|---|---|---|
| design-taste-frontend | Leonxlnx/taste-skill (`skills/taste-skill`) | 6010f91 | MIT |
| impeccable | pbakaus/impeccable (`.claude/skills/impeccable`) | 33003f1 | Apache-2.0 |
| web-design-guidelines | vercel-labs/agent-skills (`skills/web-design-guidelines`) | 063bee9 | see upstream |
| ui-ux-pro-max, design-system | nextlevelbuilder/ui-ux-pro-max-skill (`.claude/skills/*`, tests removed) | d14efff | MIT |
| playwright-cli | microsoft/playwright-cli (`skills/playwright-cli`) | b1a5903 | Apache-2.0 |
| emil-design-eng, animate, review-animations, improve-animations, animation-performance, find-animation-opportunities, animation-vocabulary, apple-design, break-ui, prototype, pick-ui-library, mobile-native | emilkowalski/skills (`skills/*`) | 2d22863 | MIT |

`playwright-cli` needs the CLI installed: `npm i -g @playwright/cli@0.1.22`. `.playwright/cli.config.json` points it at the preinstalled Chromium.
