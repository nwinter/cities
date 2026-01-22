<script lang="ts">
	import { cities, sortCities, formatNumber, formatPercent, type SortField, type SortDirection } from '$lib/data/cities';

	let sortField: SortField = $state('population');
	let sortDirection: SortDirection = $state('desc');
	
	let sortedCities = $derived(sortCities(cities, sortField, sortDirection));
	
	function handleSort(field: SortField) {
		if (sortField === field) {
			sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
		} else {
			sortField = field;
			// Default direction based on what makes sense for each field
			sortDirection = field === 'name' ? 'asc' : 'desc';
		}
	}
	
	function getSortIndicator(field: SortField): string {
		if (sortField !== field) return '';
		return sortDirection === 'asc' ? ' ↑' : ' ↓';
	}
	
	function getCostOfLivingColor(index: number): string {
		if (index < 95) return 'text-green-600';
		if (index < 110) return 'text-gray-600';
		if (index < 140) return 'text-orange-500';
		return 'text-red-600';
	}
	
	function getHomelessColor(percent: number): string {
		if (percent < 0.3) return 'text-green-600';
		if (percent < 0.7) return 'text-gray-600';
		if (percent < 1.2) return 'text-orange-500';
		return 'text-red-600';
	}
	
	function getCrimeColor(rate: number): string {
		if (rate < 500) return 'text-green-600';
		if (rate < 800) return 'text-gray-600';
		if (rate < 1200) return 'text-orange-500';
		return 'text-red-600';
	}
</script>

<svelte:head>
	<title>US Cities Ranking | Population, Homelessness, Cost of Living, Crime</title>
	<meta name="description" content="Compare 40 major US cities by population, homeless percentage, cost of living index, and violent crime rate. Interactive sortable table with 2024-2025 data." />
</svelte:head>

<div class="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
	<header class="bg-white shadow-sm border-b border-gray-200">
		<div class="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
			<h1 class="text-3xl font-bold text-gray-900">US Cities Ranking</h1>
			<p class="mt-2 text-gray-600">Compare major US cities by key metrics. Click column headers to sort.</p>
		</div>
	</header>

	<main class="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
		<!-- Stats Summary -->
		<div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
			<div class="bg-white rounded-lg shadow p-4">
				<p class="text-sm text-gray-500">Cities Tracked</p>
				<p class="text-2xl font-bold text-gray-900">{cities.length}</p>
			</div>
			<div class="bg-white rounded-lg shadow p-4">
				<p class="text-sm text-gray-500">Total Population</p>
				<p class="text-2xl font-bold text-gray-900">{formatNumber(cities.reduce((sum, c) => sum + c.population, 0))}</p>
			</div>
			<div class="bg-white rounded-lg shadow p-4">
				<p class="text-sm text-gray-500">Total Homeless</p>
				<p class="text-2xl font-bold text-gray-900">{formatNumber(cities.reduce((sum, c) => sum + c.homelessCount, 0))}</p>
			</div>
			<div class="bg-white rounded-lg shadow p-4">
				<p class="text-sm text-gray-500">Avg Crime Rate</p>
				<p class="text-2xl font-bold text-gray-900">{Math.round(cities.reduce((sum, c) => sum + c.crimeRate, 0) / cities.length)}</p>
			</div>
		</div>

		<!-- Data Table -->
		<div class="bg-white rounded-lg shadow overflow-hidden">
			<div class="overflow-x-auto">
				<table class="min-w-full divide-y divide-gray-200">
					<thead class="bg-gray-50">
						<tr>
							<th 
								class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors"
								onclick={() => handleSort('name')}
							>
								City{getSortIndicator('name')}
							</th>
							<th 
								class="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors"
								onclick={() => handleSort('population')}
							>
								Population{getSortIndicator('population')}
							</th>
							<th 
								class="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors"
								onclick={() => handleSort('homelessPercent')}
								title="Homeless population as percentage of total population"
							>
								Homeless %{getSortIndicator('homelessPercent')}
							</th>
							<th 
								class="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors"
								onclick={() => handleSort('costOfLivingIndex')}
								title="Cost of Living Index (100 = national average)"
							>
								COL Index{getSortIndicator('costOfLivingIndex')}
							</th>
							<th 
								class="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100 transition-colors"
								onclick={() => handleSort('crimeRate')}
								title="Violent crimes per 100,000 residents"
							>
								Crime Rate{getSortIndicator('crimeRate')}
							</th>
						</tr>
					</thead>
					<tbody class="bg-white divide-y divide-gray-200">
						{#each sortedCities as city, i}
							<tr class="hover:bg-gray-50 transition-colors {i % 2 === 0 ? '' : 'bg-gray-50/50'}">
								<td class="px-4 py-3 whitespace-nowrap">
									<div class="font-medium text-gray-900">{city.name}</div>
									<div class="text-sm text-gray-500">{city.state}</div>
								</td>
								<td class="px-4 py-3 whitespace-nowrap text-right text-gray-900">
									{formatNumber(city.population)}
								</td>
								<td class="px-4 py-3 whitespace-nowrap text-right {getHomelessColor(city.homelessPercent)}">
									{formatPercent(city.homelessPercent)}
									<div class="text-xs text-gray-400">{formatNumber(city.homelessCount)}</div>
								</td>
								<td class="px-4 py-3 whitespace-nowrap text-right {getCostOfLivingColor(city.costOfLivingIndex)}">
									{city.costOfLivingIndex}
								</td>
								<td class="px-4 py-3 whitespace-nowrap text-right {getCrimeColor(city.crimeRate)}">
									{formatNumber(city.crimeRate)}
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>

		<!-- Legend & Sources -->
		<div class="mt-8 grid md:grid-cols-2 gap-8">
			<div class="bg-white rounded-lg shadow p-6">
				<h2 class="text-lg font-semibold text-gray-900 mb-4">Color Legend</h2>
				<div class="space-y-3 text-sm">
					<div>
						<p class="font-medium text-gray-700">Homeless %</p>
						<div class="flex gap-4 mt-1">
							<span class="text-green-600">&lt;0.3% Good</span>
							<span class="text-gray-600">0.3-0.7% Avg</span>
							<span class="text-orange-500">0.7-1.2% High</span>
							<span class="text-red-600">&gt;1.2% Critical</span>
						</div>
					</div>
					<div>
						<p class="font-medium text-gray-700">Cost of Living (100 = national avg)</p>
						<div class="flex gap-4 mt-1">
							<span class="text-green-600">&lt;95 Low</span>
							<span class="text-gray-600">95-110 Avg</span>
							<span class="text-orange-500">110-140 High</span>
							<span class="text-red-600">&gt;140 V.High</span>
						</div>
					</div>
					<div>
						<p class="font-medium text-gray-700">Crime Rate (per 100k)</p>
						<div class="flex gap-4 mt-1">
							<span class="text-green-600">&lt;500 Low</span>
							<span class="text-gray-600">500-800 Avg</span>
							<span class="text-orange-500">800-1200 High</span>
							<span class="text-red-600">&gt;1200 V.High</span>
						</div>
					</div>
				</div>
			</div>

			<div class="bg-white rounded-lg shadow p-6">
				<h2 class="text-lg font-semibold text-gray-900 mb-4">Data Sources</h2>
				<ul class="space-y-2 text-sm text-gray-600">
					<li>
						<strong>Population:</strong> US Census Bureau 2024 estimates
					</li>
					<li>
						<strong>Homeless:</strong> 
						<a href="https://www.huduser.gov/portal/datasets/ahar/2024-ahar-part-1-pit-estimates-of-homelessness-in-the-us.html" 
						   class="text-blue-600 hover:underline" target="_blank" rel="noopener">
							HUD 2024 Point-in-Time Count
						</a>
					</li>
					<li>
						<strong>Cost of Living:</strong>
						<a href="https://www.numbeo.com/cost-of-living/region_rankings_current.jsp?region=019"
						   class="text-blue-600 hover:underline" target="_blank" rel="noopener">
							Numbeo 2025 Cost of Living Index
						</a>
					</li>
					<li>
						<strong>Crime Rate:</strong>
						<a href="https://counciloncj.org/crime-trends-in-u-s-cities-year-end-2024-update/"
						   class="text-blue-600 hover:underline" target="_blank" rel="noopener">
							FBI UCR / Council on Criminal Justice 2024
						</a>
					</li>
				</ul>
				<p class="mt-4 text-xs text-gray-500">
					Note: Homeless percentage = homeless count / city population. Crime rate = violent crimes per 100,000 residents.
					Data represents city proper populations where available.
				</p>
			</div>
		</div>
	</main>

	<footer class="bg-white border-t border-gray-200 mt-12">
		<div class="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
			<p class="text-center text-sm text-gray-500">
				Built with SvelteKit. Data compiled January 2025.
			</p>
		</div>
	</footer>
</div>
