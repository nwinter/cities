# Cities Ranking Design Prompts

Development log documenting prompts and design decisions.

## Initial Setup - January 22, 2025

**Prompt**: Create a website at cities.nickwinter.net that ranks all major US cities by multiple factors including homeless percentage of population. Include 3-4 relevant ranking factors (e.g., population, cost of living, homeless percentage, etc.). Display results in an interactive table or dashboard.

**Design Decisions**:

1. **Framework**: SvelteKit 5 with TypeScript, Tailwind CSS v4, Vercel adapter
   - Consistent with other nickwinter.net projects
   - Fast, lightweight, good SEO

2. **Ranking Factors**: Chose 4 key metrics that give a balanced view of city livability:
   - **Population**: Size/scale of the city (Census 2024)
   - **Homeless Percentage**: Homelessness as % of population (HUD 2024 PIT Count)
   - **Cost of Living Index**: Financial burden (Numbeo 2025, 100 = national avg)
   - **Crime Rate**: Safety metric - violent crimes per 100k (FBI UCR 2024)

3. **Data Sources**:
   - Population: US Census Bureau 2024 estimates
   - Homeless: [HUD 2024 Annual Homelessness Assessment Report](https://www.huduser.gov/portal/datasets/ahar/2024-ahar-part-1-pit-estimates-of-homelessness-in-the-us.html)
   - Cost of Living: [Numbeo Cost of Living Index](https://www.numbeo.com/cost-of-living/region_rankings_current.jsp?region=019)
   - Crime: [Council on Criminal Justice 2024 Report](https://counciloncj.org/crime-trends-in-u-s-cities-year-end-2024-update/)

4. **Cities Selected**: 40 major US cities covering:
   - All cities with 500k+ population
   - Representative geographic distribution
   - Mix of high/low cost, high/low crime areas

5. **UI Features**:
   - Interactive sortable table (click column headers)
   - Color-coded values (green=good, red=concerning)
   - Summary stats at top
   - Legend explaining color thresholds
   - Source citations with links
   - Responsive design

**Changes**:
- Created SvelteKit project with Tailwind CSS v4
- Created city data module with 40 cities and helper functions
- Built interactive dashboard with sorting and color coding
- Added comprehensive data source documentation
- Created AI agent scaffolding (AGENTS.md, CLAUDE.md)
- Deployed to cities.nickwinter.net via Vercel

**Key Findings from Data**:
- Boston has highest homeless % (3.25%) due to shelter-based counting
- Seattle has 2nd highest (2.19%)
- Los Angeles (1.98%), Honolulu (1.80%), Sacramento (1.76%) round out top 5
- Memphis has highest crime rate (2,501 per 100k)
- Detroit, St. Louis, Baltimore also have very high crime
- San Jose has highest cost of living (214 index)
- Memphis has lowest COL (84 index)

## Deployment - January 22, 2026

**Status**: Live at https://cities.nickwinter.net

**Deployment details**:
- GitHub: https://github.com/nwinter/cities
- Vercel project: cities-ranking (nick-winters-projects-49b46ac0)
- Custom domain: cities.nickwinter.net (A record → 76.76.21.21)
- Cloudflare DNS: DNS only (proxy disabled)

The dashboard displays 40 major US cities with 4 ranking factors:
1. Population (city size indicator)
2. Homeless Percentage (homelessness severity)
3. Cost of Living Index (affordability)
4. Crime Rate (safety metric - violent crimes per 100k)
