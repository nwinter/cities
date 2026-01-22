# AI Agent Instructions for Cities Ranking

## Automated Workflow

When a user says "save prompt to DESIGN_PROMPTS.md":
1. Save the current prompt/context to DESIGN_PROMPTS.md
2. Run tests: `npm test`
3. Run build: `npm run build`
4. If tests and build pass, commit with descriptive message
5. Push to remote

## Development Commands

- `npm run dev` - Start dev server
- `npm test` - Run tests
- `npm run build` - Build for production
- `npm run check` - Type checking

## Project Structure

```
cities/
├── src/
│   ├── routes/
│   │   ├── +layout.svelte    # Root layout with CSS
│   │   └── +page.svelte      # Main dashboard
│   ├── lib/
│   │   └── data/
│   │       └── cities.ts     # City data and types
│   ├── app.css               # Tailwind imports
│   ├── app.html              # HTML template
│   └── app.d.ts              # TypeScript declarations
├── tests/
│   └── example.test.ts       # Test files
├── claude/
│   ├── settings.json         # Shared Claude settings
│   └── settings.local.json   # Local Claude permissions
├── AGENTS.md                 # This file
├── CLAUDE.md                 # Claude-specific settings
└── DESIGN_PROMPTS.md         # Development log
```

## Features

- Interactive table of US cities
- Sortable by multiple factors:
  - Population
  - Homeless percentage of population
  - Cost of living index
  - Crime rate (per 100k residents)
- Responsive design with Tailwind CSS

## Git Workflow

- Main branch: `master`
- Always run tests before committing
- Use descriptive commit messages

### Commit Signature (Claude)

```
🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>
```
