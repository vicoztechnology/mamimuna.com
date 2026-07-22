<script>
	import Carousel from '../lib/Carousel.svelte';

	const sampleData = [
		{
			title: 'Gunung Bromo',
			description: 'Pemandangan matahari terbit yang menakjubkan di Jawa Timur.',
			image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=600'
		},
		{
			title: 'Pantai Kuta',
			description: 'Destinasi wisata populer dengan pasir putih di Bali.',
			image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600'
		},
		{
			title: 'Candi Borobudur',
			description: 'Candi Buddha terbesar di dunia yang terletak di Magelang.',
			image: 'https://images.unsplash.com/photo-1609825488888-3a766db05542?w=600'
		},
		{
			title: 'Raja Ampat',
			description: 'Surga penyelam dengan keanekaragaman hayati laut terasri.',
			image: 'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?w=600'
		}
	];
</script>

<main>
	<Carousel items={sampleData} title="Destinasi Populer" />
</main>

<style>
	main {
		padding: 24px;
	}
</style>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<h1 class="text-3xl font-bold underline">Hello world!</h1>
<h1 class="bg-primary text-on-primary">PRIMARY</h1>
<!-- src/routes/+page.svelte -->


<input type="text" placeholder="sdf">