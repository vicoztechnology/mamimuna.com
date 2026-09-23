<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<div class="top-level w-full top-17 bottom-17 fixed overflow-y-scroll">
	<div class="home text-on-background dark:text-dark-on-background">
		{#await data.listkategori}
			<div>loading...</div>
			<div>loading...</div>
			<div>loading...</div>
		{:then kategoris}
			<div class="flex kategori gap-3 max-w-full overflow-scroll ml-2 mr-2 scrollbar-none " style="view-transition-name: kategori">
				{#each kategoris as kategori}
					<a
						href={`/kategori/${kategori.kode_kategori}`}
						aria-label="detail"
						aria-current="location"
						class="grid justify-center text-center basis-1/4"
					>
						<button
							class="border-outline-variant dark:border-dark-outline-variant grid w-16 h-16 place-items-center gap-y-0 border rounded-3xl"
							title=""
						>
						{@html kategori.image}
						</button>
						<span class="text-on-surface-variant dark:text-dark-on-surface-variant text-sm"
							>{kategori.nama_kategori}</span
						>
					</a>
				{/each}
			</div>
		{/await}
	</div>
</div>
