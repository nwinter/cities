export interface City {
	name: string;
	state: string;
	population: number;
	homelessCount: number;
	homelessPercent: number;
	costOfLivingIndex: number;
	crimeRate: number; // violent crimes per 100k residents
}

// Data compiled from:
// - Population: US Census Bureau 2024 estimates
// - Homeless: HUD 2024 Point-in-Time Count (Continuum of Care data)
// - Cost of Living: Numbeo/ACCRA 2025 Cost of Living Index (100 = national average)
// - Crime Rate: FBI UCR 2024 violent crime per 100,000 residents

export const cities: City[] = [
	{
		name: 'New York',
		state: 'NY',
		population: 8336817,
		homelessCount: 91271,
		homelessPercent: 1.095,
		costOfLivingIndex: 187,
		crimeRate: 379
	},
	{
		name: 'Los Angeles',
		state: 'CA',
		population: 3822238,
		homelessCount: 75518,
		homelessPercent: 1.976,
		costOfLivingIndex: 166,
		crimeRate: 746
	},
	{
		name: 'Chicago',
		state: 'IL',
		population: 2665039,
		homelessCount: 18836,
		homelessPercent: 0.707,
		costOfLivingIndex: 107,
		crimeRate: 962
	},
	{
		name: 'Houston',
		state: 'TX',
		population: 2314157,
		homelessCount: 4366,
		homelessPercent: 0.189,
		costOfLivingIndex: 96,
		crimeRate: 972
	},
	{
		name: 'Phoenix',
		state: 'AZ',
		population: 1650070,
		homelessCount: 9648,
		homelessPercent: 0.585,
		costOfLivingIndex: 103,
		crimeRate: 789
	},
	{
		name: 'Philadelphia',
		state: 'PA',
		population: 1573916,
		homelessCount: 5693,
		homelessPercent: 0.362,
		costOfLivingIndex: 102,
		crimeRate: 927
	},
	{
		name: 'San Antonio',
		state: 'TX',
		population: 1495295,
		homelessCount: 2955,
		homelessPercent: 0.198,
		costOfLivingIndex: 91,
		crimeRate: 794
	},
	{
		name: 'San Diego',
		state: 'CA',
		population: 1388320,
		homelessCount: 10264,
		homelessPercent: 0.739,
		costOfLivingIndex: 160,
		crimeRate: 367
	},
	{
		name: 'Dallas',
		state: 'TX',
		population: 1302868,
		homelessCount: 4209,
		homelessPercent: 0.323,
		costOfLivingIndex: 102,
		crimeRate: 776
	},
	{
		name: 'San Jose',
		state: 'CA',
		population: 971233,
		homelessCount: 7922,
		homelessPercent: 0.816,
		costOfLivingIndex: 214,
		crimeRate: 427
	},
	{
		name: 'Austin',
		state: 'TX',
		population: 974447,
		homelessCount: 2312,
		homelessPercent: 0.237,
		costOfLivingIndex: 112,
		crimeRate: 436
	},
	{
		name: 'San Francisco',
		state: 'CA',
		population: 808437,
		homelessCount: 8323,
		homelessPercent: 1.029,
		costOfLivingIndex: 179,
		crimeRate: 726
	},
	{
		name: 'Seattle',
		state: 'WA',
		population: 749256,
		homelessCount: 16385,
		homelessPercent: 2.187,
		costOfLivingIndex: 149,
		crimeRate: 598
	},
	{
		name: 'Denver',
		state: 'CO',
		population: 716577,
		homelessCount: 6884,
		homelessPercent: 0.961,
		costOfLivingIndex: 128,
		crimeRate: 811
	},
	{
		name: 'Washington',
		state: 'DC',
		population: 678972,
		homelessCount: 8944,
		homelessPercent: 1.317,
		costOfLivingIndex: 152,
		crimeRate: 842
	},
	{
		name: 'Boston',
		state: 'MA',
		population: 654776,
		homelessCount: 21298,
		homelessPercent: 3.253,
		costOfLivingIndex: 152,
		crimeRate: 653
	},
	{
		name: 'Nashville',
		state: 'TN',
		population: 658602,
		homelessCount: 2137,
		homelessPercent: 0.324,
		costOfLivingIndex: 101,
		crimeRate: 1031
	},
	{
		name: 'Detroit',
		state: 'MI',
		population: 633218,
		homelessCount: 2380,
		homelessPercent: 0.376,
		costOfLivingIndex: 89,
		crimeRate: 1988
	},
	{
		name: 'Portland',
		state: 'OR',
		population: 641162,
		homelessCount: 6297,
		homelessPercent: 0.982,
		costOfLivingIndex: 130,
		crimeRate: 618
	},
	{
		name: 'Las Vegas',
		state: 'NV',
		population: 660929,
		homelessCount: 6548,
		homelessPercent: 0.991,
		costOfLivingIndex: 106,
		crimeRate: 593
	},
	{
		name: 'Memphis',
		state: 'TN',
		population: 628127,
		homelessCount: 1844,
		homelessPercent: 0.294,
		costOfLivingIndex: 84,
		crimeRate: 2501
	},
	{
		name: 'Baltimore',
		state: 'MD',
		population: 569931,
		homelessCount: 2025,
		homelessPercent: 0.355,
		costOfLivingIndex: 108,
		crimeRate: 1833
	},
	{
		name: 'Milwaukee',
		state: 'WI',
		population: 563305,
		homelessCount: 1321,
		homelessPercent: 0.235,
		costOfLivingIndex: 92,
		crimeRate: 1598
	},
	{
		name: 'Albuquerque',
		state: 'NM',
		population: 562540,
		homelessCount: 1855,
		homelessPercent: 0.330,
		costOfLivingIndex: 95,
		crimeRate: 1469
	},
	{
		name: 'Fresno',
		state: 'CA',
		population: 545567,
		homelessCount: 4189,
		homelessPercent: 0.768,
		costOfLivingIndex: 105,
		crimeRate: 571
	},
	{
		name: 'Sacramento',
		state: 'CA',
		population: 528001,
		homelessCount: 9278,
		homelessPercent: 1.757,
		costOfLivingIndex: 121,
		crimeRate: 665
	},
	{
		name: 'Kansas City',
		state: 'MO',
		population: 508090,
		homelessCount: 1912,
		homelessPercent: 0.376,
		costOfLivingIndex: 94,
		crimeRate: 1556
	},
	{
		name: 'Mesa',
		state: 'AZ',
		population: 511648,
		homelessCount: 1186,
		homelessPercent: 0.232,
		costOfLivingIndex: 100,
		crimeRate: 398
	},
	{
		name: 'Miami',
		state: 'FL',
		population: 449514,
		homelessCount: 4195,
		homelessPercent: 0.933,
		costOfLivingIndex: 127,
		crimeRate: 848
	},
	{
		name: 'Oakland',
		state: 'CA',
		population: 433823,
		homelessCount: 5180,
		homelessPercent: 1.194,
		costOfLivingIndex: 152,
		crimeRate: 1685
	},
	{
		name: 'Minneapolis',
		state: 'MN',
		population: 425115,
		homelessCount: 3982,
		homelessPercent: 0.937,
		costOfLivingIndex: 105,
		crimeRate: 951
	},
	{
		name: 'Honolulu',
		state: 'HI',
		population: 345510,
		homelessCount: 6215,
		homelessPercent: 1.799,
		costOfLivingIndex: 189,
		crimeRate: 281
	},
	{
		name: 'St. Louis',
		state: 'MO',
		population: 286578,
		homelessCount: 1456,
		homelessPercent: 0.508,
		costOfLivingIndex: 91,
		crimeRate: 2082
	},
	{
		name: 'Cleveland',
		state: 'OH',
		population: 361607,
		homelessCount: 1842,
		homelessPercent: 0.509,
		costOfLivingIndex: 90,
		crimeRate: 1517
	},
	{
		name: 'Tucson',
		state: 'AZ',
		population: 546574,
		homelessCount: 3096,
		homelessPercent: 0.566,
		costOfLivingIndex: 96,
		crimeRate: 739
	},
	{
		name: 'Raleigh',
		state: 'NC',
		population: 474069,
		homelessCount: 1098,
		homelessPercent: 0.232,
		costOfLivingIndex: 104,
		crimeRate: 441
	},
	{
		name: 'Colorado Springs',
		state: 'CO',
		population: 491279,
		homelessCount: 1563,
		homelessPercent: 0.318,
		costOfLivingIndex: 102,
		crimeRate: 584
	},
	{
		name: 'Tampa',
		state: 'FL',
		population: 403364,
		homelessCount: 1598,
		homelessPercent: 0.396,
		costOfLivingIndex: 103,
		crimeRate: 528
	},
	{
		name: 'Orlando',
		state: 'FL',
		population: 320742,
		homelessCount: 2235,
		homelessPercent: 0.697,
		costOfLivingIndex: 105,
		crimeRate: 767
	},
	{
		name: 'Pittsburgh',
		state: 'PA',
		population: 302908,
		homelessCount: 932,
		homelessPercent: 0.308,
		costOfLivingIndex: 96,
		crimeRate: 582
	}
];

export type SortField = 'name' | 'population' | 'homelessPercent' | 'costOfLivingIndex' | 'crimeRate';
export type SortDirection = 'asc' | 'desc';

export function sortCities(
	cityList: City[],
	field: SortField,
	direction: SortDirection
): City[] {
	return [...cityList].sort((a, b) => {
		let aVal: string | number;
		let bVal: string | number;

		if (field === 'name') {
			aVal = a.name;
			bVal = b.name;
		} else {
			aVal = a[field];
			bVal = b[field];
		}

		if (typeof aVal === 'string' && typeof bVal === 'string') {
			return direction === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
		}

		return direction === 'asc' ? (aVal as number) - (bVal as number) : (bVal as number) - (aVal as number);
	});
}

export function getRank(
	cityList: City[],
	cityName: string,
	field: SortField,
	lowerIsBetter: boolean = true
): number {
	const sorted = sortCities(cityList, field, lowerIsBetter ? 'asc' : 'desc');
	return sorted.findIndex((c) => c.name === cityName) + 1;
}

export function formatNumber(num: number): string {
	return num.toLocaleString();
}

export function formatPercent(num: number): string {
	return num.toFixed(3) + '%';
}
