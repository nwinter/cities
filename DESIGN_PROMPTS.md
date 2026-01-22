# Cities Ranking Design Prompts

Development log documenting prompts and design decisions.

## Initial Setup - 2026-01-22

**Prompt**: Create a website at cities.nickwinter.net that ranks all major US cities by multiple factors including homeless percentage of population. Include 3-4 relevant ranking factors (e.g., population, cost of living, homeless percentage, etc.). Display results in an interactive table or dashboard.

**Design Decisions**:
1. **Ranking Factors Chosen** (4 factors as requested):
   - Population (total city population from Census 2024)
   - Homeless Percentage (homeless as % of population)
   - Cost of Living Index (100 = US average)
   - Crime Rate (violent crimes per 100,000 residents)

2. **Data Sources**:
   - US Census Bureau 2024 estimates for population
   - HUD 2024 Point-in-Time Count for homeless counts
   - Numbeo/ACCRA 2025 Cost of Living Index
   - FBI UCR 2024 violent crime statistics

3. **UI Approach**:
   - Interactive sortable table with 40 major US cities
   - Click column headers to sort ascending/descending
   - Color-coded cells (green=good, red=bad) for quick visual comparison
   - Summary statistics at top (total population, total homeless, avg crime rate)
   - Legend explaining color thresholds
   - Mobile-responsive design
   - Dark mode support via Tailwind

4. **Technology Stack**:
   - SvelteKit 5 + TypeScript + Svelte 5 runes
   - Tailwind CSS v4 (CSS import style)
   - Vercel deployment to cities.nickwinter.net
   - Vitest for testing

**Changes**:
- Initialized SvelteKit project with Vercel adapter
- Added Tailwind CSS v4 with PostCSS
- Created AI agent scaffolding (AGENTS.md, CLAUDE.md, DESIGN_PROMPTS.md)
- Built interactive dashboard with 40 major US cities
- Implemented sorting, color coding, and summary stats
- Added comprehensive tests (13 passing)
- Deployed to Vercel at cities.nickwinter.net
