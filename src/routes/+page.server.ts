import type { PageServerLoad } from './$types';
/*import vegetables from '$lib/list';
import banners from '$lib/banner';
*/
import kategoris from '$lib/kategori';



export const load: PageServerLoad = async () => {
	return {
		/*items:vegetables,
        listbanners:banners,*/
		listkategori:kategoris,
		
		title:"Akun Saya",
		footer:"visible",
		home:"visible",
	
	};
};






