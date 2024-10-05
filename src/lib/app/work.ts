export interface Work {
	company: {
		name: string;
		href: string;
	};
	role: string;
	isRemote: boolean;
	date: {
		from: number;
		to: number | null;
	};
	description: string;
}

const positions: Work[] = [
	{
		company: {
			name: 'BBC',
			href: 'https://www.bbc.co.uk/'
		},
		role: 'Software Engineer',
		isRemote: true,
		date: {
			from: 2022,
			to: null
		},
		description:
			'Contributed to systems that bring audio and video content to platforms such as iPlayer, Sounds, News, and Sport.'
	}
];

export default positions;
