import type { ComponentType } from 'svelte';

import LinkedIn from '$lib/components/icons/LinkedIn.svelte';
import GitHub from '$lib/components/icons/GitHub.svelte';

export interface Social {
	name: string;
	href: string;
	icon: ComponentType;
}

const socials: Social[] = [
	{
		name: 'GitHub',
		href: 'https://github.com/williamjhughes',
		icon: GitHub
	},
	{
		name: 'LinkedIn',
		href: 'https://www.linkedin.com/in/williamjhughes-dev/',
		icon: LinkedIn
	}
];

export default socials;
