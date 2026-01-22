import { describe, it, expect } from 'vitest';
import { cities, sortCities, getRank, formatNumber, formatPercent } from '../src/lib/data/cities';

describe('Cities Data', () => {
	it('should have cities data', () => {
		expect(cities.length).toBeGreaterThan(0);
	});

	it('should have at least 40 cities', () => {
		expect(cities.length).toBeGreaterThanOrEqual(40);
	});

	it('should have required fields for each city', () => {
		for (const city of cities) {
			expect(city.name).toBeTruthy();
			expect(city.state).toBeTruthy();
			expect(city.population).toBeGreaterThan(0);
			expect(city.homelessPercent).toBeGreaterThanOrEqual(0);
			expect(city.costOfLivingIndex).toBeGreaterThan(0);
			expect(city.crimeRate).toBeGreaterThanOrEqual(0);
		}
	});

	it('should have valid state abbreviations', () => {
		const validStates = [
			'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
			'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
			'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
			'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
			'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY', 'DC'
		];
		for (const city of cities) {
			expect(validStates).toContain(city.state);
		}
	});

	it('should have New York as the most populous city', () => {
		const byPopulation = [...cities].sort((a, b) => b.population - a.population);
		expect(byPopulation[0].name).toBe('New York');
	});
});

describe('sortCities', () => {
	it('should sort by population descending', () => {
		const sorted = sortCities(cities, 'population', 'desc');
		expect(sorted[0].name).toBe('New York');
		for (let i = 1; i < sorted.length; i++) {
			expect(sorted[i - 1].population).toBeGreaterThanOrEqual(sorted[i].population);
		}
	});

	it('should sort by population ascending', () => {
		const sorted = sortCities(cities, 'population', 'asc');
		for (let i = 1; i < sorted.length; i++) {
			expect(sorted[i - 1].population).toBeLessThanOrEqual(sorted[i].population);
		}
	});

	it('should sort by name alphabetically', () => {
		const sorted = sortCities(cities, 'name', 'asc');
		for (let i = 1; i < sorted.length; i++) {
			expect(sorted[i - 1].name.localeCompare(sorted[i].name)).toBeLessThanOrEqual(0);
		}
	});
});

describe('getRank', () => {
	it('should return rank 1 for New York by population (higher is better)', () => {
		const rank = getRank(cities, 'New York', 'population', false);
		expect(rank).toBe(1);
	});

	it('should return correct rank for homeless percentage (lower is better)', () => {
		const lowestHomeless = sortCities(cities, 'homelessPercent', 'asc')[0];
		const rank = getRank(cities, lowestHomeless.name, 'homelessPercent', true);
		expect(rank).toBe(1);
	});
});

describe('formatNumber', () => {
	it('should format numbers with commas', () => {
		expect(formatNumber(1000)).toBe('1,000');
		expect(formatNumber(1000000)).toBe('1,000,000');
	});
});

describe('formatPercent', () => {
	it('should format percentages with 3 decimal places', () => {
		expect(formatPercent(1.5)).toBe('1.500%');
		expect(formatPercent(0.123)).toBe('0.123%');
	});
});
