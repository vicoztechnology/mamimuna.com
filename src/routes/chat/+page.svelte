<script lang="ts">
	import { slide } from 'svelte/transition';
import type { PageProps } from './$types';
	let { data }: PageProps = $props();
	// import function to register Swiper custom elements
	import { register } from 'swiper/element/bundle';
	// register Swiper custom elements
	register();
	const spaceBetween = 5;
	/*
	 const onProgress = (e) => {
    const [swiper, progress] = e.detail;
	swiper.slides.forEach((slide:any, index:any) => {
	

						const p = Math.min(Math.abs(slide.progress), 1);

						const width = 620 - p * 120;

						slide.style.width = `${width}px`;
	})
swiper.updateSlides();
    console.log(progress)
  };
	*/
	const onProgress = (e: CustomEvent) => {
		const [swiper,progress] = e.detail[0];

		swiper.slides.forEach((slide: HTMLElement, index: number) => {
			// Only change slide at index 2
			if (index !== 2) return;

			const progress = Math.min(Math.abs(slide.progress), 1);

			// Width between 220px and 320px
			const width = 220 + (1 - progress) * 100;

			slide.style.width = `${width}px`;
		});

		swiper.updateSlides();
	};
</script>

<div class="top-level w-full top-17 bottom-17 fixed overflow-y-scroll">
	<swiper-container
		slides-per-view="auto"
		space-between={spaceBetween}
		centered-slides={false}
		pagination={{
			hideOnClick: true
		}}
		onswiperprogress={onProgress}
  

		class="ml-2 mr-2"
	>
	{#await data.banners}
	<div>loading</div>
	{:then banner}
	{#each data.banners as listbanner}
		<swiper-slide class="rounded-4xl bg-red-400 w-6/7">
			<img
				class="rounded-4xl object-cover h-50"
				src={listbanner.image}
				alt="carousel 1"
			/>
		</swiper-slide>
		{/each}
	{/await}

	</swiper-container>
</div>

<style>
swiper-slide:nth-child(1) {
	width: 85%;
}
swiper-slide:nth-child(2) {
	width: 15%;
}
</style>
