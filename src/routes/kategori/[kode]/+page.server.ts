import type { PageServerLoad } from './$types';

import kategoris from '$lib/kategori';



export const load: PageServerLoad = async () => {
    return {
   
        listkategori:kategoris
        
    
    };
};






