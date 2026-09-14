import type { PageServerLoad } from './$types';
import caraousel from '$lib/carousel';

export const load: PageServerLoad = async () => {
	return {
		banners:caraousel,
	
	
	};
};
