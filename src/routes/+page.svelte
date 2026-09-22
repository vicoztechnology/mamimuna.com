<script lang="ts">
	
	import type { PageProps } from './$types';
	import { register } from 'swiper/element/bundle';

	let { data }: PageProps = $props();
	register();

	let y = $state(0);
	let sy = $state(0);

	let lebar = $derived((5 / 6) * y - 16);
	let lebar2 = $derived((1 / 6) * y - 16);

	let scrollLeft = $state(0);
	let scrollTop = $state(0);
	let xPosition = $state(0);
</script>

<svelte:window bind:innerWidth={y} />
<div class="text-on-surface dark:text-dark-on-surface">
	<div class="top-level top-15 bottom-17 fixed overflow-y-scroll">
		<div class="ml-2 mr-2">
			<img
				class="rounded-4xl object-cover h-50 w-full"
				src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="carousel 1"
			/>
		</div>
		<div class="mt-3 flex ml-4 mr-4 max-w-full flex-wrap flex-row gap-y-4">
			{#await data.listkategori}
				<div>loading...</div>
				<div>loading...</div>
				<div>loading...</div>
			{:then kategoris}
				{#each kategoris as kategoris}
					
						<a href={`/kategori/${kategoris.kode_kategori}`}
						aria-label="detail"
						aria-current="location" class="grid justify-center text-center basis-1/4">
							<button
								class="border-outline-variant dark:border-dark-outline-variant grid w-16 h-16 place-items-center gap-y-0 border rounded-3xl"
								title=""
							>
								<img src={kategoris.image} alt={kategoris.image} />
							</button>
							<span class="text-on-surface-variant dark:text-dark-on-surface-variant text-sm"
								>{kategoris.nama_kategori}</span
							>
						</a>
					
				{/each}
			{/await}
		</div>

		<div
			class="mt-4 text-sm text-on-tertiary-container dark:text-dark-on-tertiary-container flex justify-between rounded-4xl bg-tertiary-container dark:bg-dark-tertiary-container ml-5 mr-5 p-4"
		>
			<div class="flex items-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="20px"
					viewBox="0 -960 960 960"
					width="20px"
					class="fill-on-tertiary-container dark:fill-dark-on-tertiary-container"
					><path
						d="m501.38-472 70-42.92 70 42.92q4.62 2.23 9.54-.66 4.93-2.89 2.93-8.19L635-561.08l62.77-53.15q4.61-3.23 2.11-8.35-2.5-5.11-7.73-6.11l-81.22-7.12-32.32-76.11q-1.75-4.62-7.1-4.62-5.36 0-7.36 4.62l-32.31 76.11-81.22 7.12q-5.23 1-7.73 6.11-2.5 5.12 2.11 8.35l62.77 53.15-18.85 80.23q-2 5.3 2.93 8.19 4.92 2.89 9.53.66Zm-138.3 173.23q-30.31 0-47.31-17-17-17-17-47.31v-416.61q0-30.31 17-47.31 17-17 47.31-17h416.61Q810-844 827-827q17 17 17 47.31v416.61q0 30.31-17 47.31-17 17-47.31 17H363.08Zm0-52h416.61q5.39 0 8.85-3.46t3.46-8.85v-416.61q0-5.39-3.46-8.85t-8.85-3.46H363.08q-5.39 0-8.85 3.46t-3.46 8.85v416.61q0 5.39 3.46 8.85t8.85 3.46Zm208.3-220.61ZM223-168Zm21.62 50.84q-25.93 3.62-47.23-12.96-21.31-16.57-24.93-42.5l-56.07-404.76q-3.62-26.82 12.77-48.26 16.38-21.44 43.3-24.28l25.7-2.39q12.76-.84 20.3 6.39 7.54 7.23 7.54 19.69 0 10.06-5.81 17.76-5.8 7.7-15.96 8.55l-24.31 2.38q-5.38.39-8.46 4.42-3.08 4.04-2.31 9.43l53.93 403.38q.77 5.39 4.61 8.46 3.85 3.08 9.23 2.31l460.47-62.38q11.25-1.62 19.83 4.85 8.57 6.47 10.01 17.3 1.62 10.77-4.8 19.54-6.42 8.76-17.35 10.31l-460.46 62.76Z"
					/></svg
				>
				<div class="ml-2">2.500 Poin</div>
			</div>
			<div class="flex items-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="20px"
					viewBox="0 -960 960 960"
					width="20px"
					class="fill-on-tertiary-container dark:fill-dark-on-tertiary-container"
					><path
						d="M208.12-220.08Q176-252.17 176-298h-42.92q-11.05 0-18.53-7.42-7.47-7.42-7.47-18.38 0-10.97 7.47-18.58 7.48-7.62 18.53-7.62h56.54q13.92-25.85 39.5-41.92Q254.69-408 286-408q31.31 0 56.89 16.08 25.57 16.07 39.5 41.92h204.84l85.93-346H273.23q-11.05 0-18.52-7.42-7.48-7.42-7.48-18.38 0-10.97 7.48-18.58 7.47-7.62 18.52-7.62h425.54q14.69 0 25.04 12.43 10.34 12.43 6.11 27.96L706.46-614h33.92q15.38 0 29.15 7.18 13.76 7.19 23.7 19.74l76.46 108.47q8.85 12.84 11.15 26.42 2.31 13.57-2.3 28.04l-29.46 103.23q-2.62 9.84-11.15 16.38-8.53 6.54-19.39 6.54h-7.16q0 45.77-32.07 77.88Q747.24-188 701.43-188q-45.81 0-77.93-32.08-32.11-32.09-32.11-77.92H396q0 45.77-32.07 77.88Q331.86-188 286.05-188q-45.82 0-77.93-32.08ZM659.23-427h166.54l4.54-18.31L746.54-562h-53.85l-33.46 135Zm-64.15 44.46 5.28-21.46q5.28-21.46 13.41-52.54 4.77-17.69 7.96-33 3.19-15.31 6.19-25.92l5.29-21.46q5.28-21.46 13.41-52.54 8.12-31.08 13.41-52.54l5.28-21.46 7.85-32.54-85.93 346 7.85-32.54Zm-515.04-48q-10.86 0-18.37-7.42-7.51-7.42-7.51-18.38 0-10.97 7.45-18.58 7.46-7.62 18.48-7.62H205.5q11.02 0 18.64 7.42 7.63 7.42 7.63 18.38 0 10.97-7.46 18.59-7.46 7.61-18.48 7.61H80.04Zm72.01-132.92q-11.03 0-18.65-7.42-7.63-7.42-7.63-18.38 0-10.97 7.46-18.59 7.46-7.61 18.49-7.61h161.77q11.03 0 18.65 7.42 7.63 7.42 7.63 18.38 0 10.97-7.46 18.58-7.46 7.62-18.49 7.62H152.05ZM286-240q24.25 0 41.12-16.88Q344-273.75 344-298q0-24.25-16.88-41.12Q310.25-356 286-356q-24.25 0-41.12 16.88Q228-322.25 228-298q0 24.25 16.88 41.12Q261.75-240 286-240Zm415.39 0q24.24 0 41.12-16.88 16.88-16.87 16.88-41.12 0-24.25-16.88-41.12Q725.63-356 701.39-356q-24.25 0-41.13 16.88-16.88 16.87-16.88 41.12 0 24.25 16.88 41.12Q677.14-240 701.39-240Z"
					/></svg
				>
				<div class="ml-2">Dikirim Besok</div>
			</div>
		</div>
		<div class="flex justify-between ml-3 mr-3 text-primary dark:text-dark-primary font-bold mt-3">
			<div>Hot Promo</div>
			<div>Semuanya</div>
		</div>
		<div
			class="gap-3 hot-promo rounded-3xl bg-primary-container dark:bg-dark-primary-container flex overflow-scroll scrollbar-none w-full p-2"
		>
			<div class="relative rounded-2xl">
				<img
					height="200px"
					width="100px"
					class="rounded-2xl"
					src="https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlc2glMjBjYXJyb3R8ZW58MHwxfDB8fHww"
					alt="wortel"
				/>
				<div class="absolute inset-0 bg-black/10 rounded-2xl"></div>
				<div class="absolute inset-0 flex flex-col items-start justify-end text-left p-1">
					<h2 class="text-base font-bold text-white">Wortel</h2>
					<p class="text-sm text-gray-200">Rp.10.000</p>
				</div>
			</div>
			<div class="relative rounded-2xl">
				<img
					height="200px"
					width="100px"
					class="rounded-2xl"
					src="https://images.unsplash.com/photo-1528556860752-2a6a19a285a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGp1aWNlfGVufDB8MXwwfHx8MA%3D%3D"
					alt="wortel"
				/>
				<div class="absolute inset-0 bg-black/10 rounded-2xl"></div>
				<div class="absolute inset-0 flex flex-col items-start justify-end text-left p-1">
					<h2 class="text-base font-bold text-white">Wortel</h2>
					<p class="text-sm text-gray-200">Rp.10.000</p>
				</div>
			</div>
			<div class="relative rounded-2xl">
				<img
					height="200px"
					width="100px"
					class="rounded-2xl"
					src="https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlc2glMjBjYXJyb3R8ZW58MHwxfDB8fHww"
					alt="wortel"
				/>
				<div class="absolute inset-0 bg-black/10 rounded-2xl"></div>
				<div class="absolute inset-0 flex flex-col items-start justify-end text-left p-1">
					<h2 class="text-base font-bold text-white">Wortel</h2>
					<p class="text-sm text-gray-200">Rp.10.000</p>
				</div>
			</div>
			<div class="relative rounded-2xl">
				<img
					height="200px"
					width="100px"
					class="rounded-2xl"
					src="https://images.unsplash.com/photo-1528556860752-2a6a19a285a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGp1aWNlfGVufDB8MXwwfHx8MA%3D%3D"
					alt="wortel"
				/>
				<div class="absolute inset-0 bg-black/10 rounded-2xl"></div>
				<div class="absolute inset-0 flex flex-col items-start justify-end text-left p-1">
					<h2 class="text-base font-bold text-white">Wortel</h2>
					<p class="text-sm text-gray-200">Rp.10.000</p>
				</div>
			</div>

			<!--
	<img
		height="200px"
		width="100px"
		class="rounded-2xl"
		src="https://plus.unsplash.com/premium_photo-1664648005449-b50d4773c2ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGt1YmlzJTIwdW5ndXxlbnwwfDF8MHx8fDA%3D"
		alt="wortel"
	/>

	<img
		height="200px"
		width="100px"
		class="rounded-2xl"
		src="https://images.unsplash.com/photo-1528556860752-2a6a19a285a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGp1aWNlfGVufDB8MXwwfHx8MA%3D%3D"
		alt="wortel"
	/>

	<img
		height="200px"
		width="100px"
		class="rounded-2xl"
		src="https://images.unsplash.com/photo-1587351177732-5b0739d1bd44?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YnJva29saXxlbnwwfDF8MHx8fDA%3D"
		alt="wortel"
	/>

	<img
		height="200px"
		width="100px"
		class="rounded-2xl"
		src="https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlc2glMjBjYXJyb3R8ZW58MHwxfDB8fHww"
		alt="wortel"
	/>

	<img
		height="200px"
		width="100px"
		class="rounded-2xl"
		src="https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlc2glMjBjYXJyb3R8ZW58MHwxfDB8fHww"
		alt="wortel"
	/>
	-->
		</div>
		<div class="flex justify-between ml-3 mr-3 text-primary dark:text-dark-primary font-bold mt-3">
			<div>Untukmu</div>
			<div>Semuanya</div>
		</div>
		<div class="text-sm ml-3 mr-3 mt-7 mb-17">
			<ul class="grid grid-cols-2 gap-3">
				<li class="rounded-3xl shadow-md-z4 dark:shadow-dark-md-z4 pb-3">
					<img
						class="rounded-3xl"
						src="https://images.unsplash.com/photo-1622943495354-f49d2964094c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2FsZXxlbnwwfDJ8MHx8fDA%3D"
						alt="gambar"
					/>
					<div class="pl-2 pr-2 pt-2">
						<div class="nama text-on-surface-variant dark:text-dark-on-surface-variant">
							Curly Kale
						</div>
						<div class="harga text-primary dark:text-dark-primary font-bold">Rp. 15.000</div>
						<div class="text-xs text-on-surface-variant dark:text-dark-on-surface-variant">
							Terjual 160
						</div>
					</div>
				</li>
				<li class="shadow-md-z4 pb-3 dark:shadow-dark-md-z4 rounded-3xl">
					<img
						class="rounded-3xl"
						src="https://images.unsplash.com/photo-1652448919151-c8be3cfb185b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN0cmF3YmVycnl8ZW58MHwyfDB8fHww"
						alt="gambar"
					/>
					<div class="pl-2 pr-2">
						<div>harga</div>
						<div>nama</div>
					</div>
				</li>
				<li class="rounded-3xl shadow-md-z4 dark:shadow-dark-md-z4 pb-3">
					<img
						class="rounded-3xl"
						src="https://images.unsplash.com/photo-1622943495354-f49d2964094c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2FsZXxlbnwwfDJ8MHx8fDA%3D"
						alt="gambar"
					/>
					<div class="pl-2 pr-2">
						<div>harga</div>
						<div>nama</div>
					</div>
				</li>
				<li class="rounded-3xl shadow-md-z4 dark:shadow-dark-md-z4 pb-3">
					<img
						class="rounded-3xl"
						src="https://images.unsplash.com/photo-1518164147695-36c13dd568f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnJva29saXxlbnwwfDJ8MHx8fDA%3D"
						alt="gambar"
					/>
					<div class="pl-2 pr-2">
						<div>harga</div>
						<div>nama</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</div>
