# Cities Ranking Design Prompts

Development log documenting prompts and design decisions.

## Initial Setup - 2026-01-22

**Prompt**: Create a website at cities.nickwinter.net that ranks all major US cities by multiple factors including homeless percentage of population. Include 3-4 relevant ranking factors (e.g., population, cost of living, homeless percentage, etc.). Display results in an interactive table or dashboard.

**Design Decisions**:
1. **Ranking Factors Chosen**:
   - Homeless Percentage (homeless per 10,000 population)
   - Population (total city population)
   - Cost of Living Index (100 = US average)
   - Median Income (annual household income)

2. **Data Sources**:
   - HUD Annual Homeless Assessment Report (AHAR) for homeless counts
   - US Census Bureau for population and income data
   - Various cost of living indices

3. **UI Approach**:
   - Interactive sortable table with all cities
   - Click column headers to sort ascending/descending
   - Color-coded cells for quick visual comparison
   - Mobile-responsive design

4. **Technology Stack**:
   - SvelteKit 5 + TypeScript
   - Tailwind CSS v4
   - Vercel deployment to cities.nickwinter.net

**Changes**:
- Initialized SvelteKit project
- Added Tailwind CSS
- Created AI agent scaffolding
- Built interactive dashboard with ~50 major US cities
- Deployed to Vercel
