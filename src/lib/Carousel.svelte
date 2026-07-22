<script>
	// Properti input (Props)
	let { items = [], title = '' } = $props();

	// State untuk tracking scroll/posisi
	let containerRef = $state(null);
	let activeIndex = $state(0);

	// Fungsi untuk scroll ke item tertentu
	function scrollToIndex(index) {
		if (!containerRef) return;
		const targetCard = containerRef.children[index];
		if (targetCard) {
			targetCard.scrollIntoView({
				behavior: 'smooth',
				block: 'nearest',
				inline: 'start'
			});
			activeIndex = index;
		}
	}

	function handleNext() {
		if (activeIndex < items.length - 1) {
			scrollToIndex(activeIndex + 1);
		}
	}

	function handlePrev() {
		if (activeIndex > 0) {
			scrollToIndex(activeIndex - 1);
		}
	}

	// Update activeIndex berdasarkan scroll manual (touch/swipe)
	function handleScroll() {
		if (!containerRef) return;
		const scrollLeft = containerRef.scrollLeft;
		const cardWidth = containerRef.children[0]?.offsetWidth || 1;
		activeIndex = Math.round(scrollLeft / cardWidth);
	}
</script>

<div class="md3-carousel-wrapper">
	<!-- Header & Control Buttons -->
	<div class="carousel-header">
		{#if title}
			<h2 class="md3-title">{title}</h2>
		{/if}
		<div class="carousel-controls">
			<button
				class="md3-icon-btn"
				onclick={handlePrev}
				disabled={activeIndex === 0}
				aria-label="Previous"
			>
				‹
			</button>
			<button
				class="md3-icon-btn"
				onclick={handleNext}
				disabled={activeIndex === items.length - 1}
				aria-label="Next"
			>
				›
			</button>
		</div>
	</div>

	<!-- Carousel Track / Container -->
	<div class="carousel-container" bind:this={containerRef} onscroll={handleScroll}>
		{#each items as item, index}
			<div class="carousel-item">
				<img src={item.image} alt={item.title} loading="lazy" />
				<div class="item-content">
					<h3>{item.title}</h3>
					{#if item.description}
						<p>{item.description}</p>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	/* MD3 Variable Tokens (Surface & Color) */
	:root {
		--md-sys-color-surface-container: #f3edf7;
		--md-sys-color-on-surface: #1d1b20;
		--md-sys-color-primary: #6750a4;
		--md-sys-color-on-primary: #ffffff;
		--md-sys-shape-corner-large: 16px;
		--md-sys-shape-corner-full: 9999px;
	}

	.md3-carousel-wrapper {
		width: 100%;
		max-width: 800px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 12px;
		font-family: system-ui, -apple-system, sans-serif;
	}

	.carousel-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 8px;
	}

	.md3-title {
		margin: 0;
		font-size: 1.25rem;
		color: var(--md-sys-color-on-surface);
	}

	.carousel-controls {
		display: flex;
		gap: 8px;
	}

	/* MD3 Icon Button */
	.md3-icon-btn {
		width: 40px;
		height: 40px;
		border-radius: var(--md-sys-shape-corner-full);
		border: none;
		background-color: var(--md-sys-color-surface-container);
		color: var(--md-sys-color-on-surface);
		font-size: 1.5rem;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: background-color 0.2s ease;
	}

	.md3-icon-btn:hover:not(:disabled) {
		background-color: #e6ddf5;
	}

	.md3-icon-btn:disabled {
		opacity: 0.38;
		cursor: not-allowed;
	}

	/* Carousel Track & Items (Scroll Snap MD3 Style) */
	.carousel-container {
		display: flex;
		gap: 16px;
		overflow-x: auto;
		scroll-snap-type: x mandatory;
		scroll-behavior: smooth;
		padding-bottom: 8px;
		/* Sembunyikan scrollbar bawaan */
		scrollbar-width: none;
	}

	.carousel-container::-webkit-scrollbar {
		display: none;
	}

	.carousel-item {
		/* Desain Hero/Multi-browse Carousel MD3 */
		flex: 0 0 70%; 
		scroll-snap-align: start;
		background-color: var(--md-sys-color-surface-container);
		border-radius: var(--md-sys-shape-corner-large);
		overflow: hidden;
		display: flex;
		flex-direction: column;
		box-shadow: 0 1px 3px rgba(0,0,0,0.12);
	}

	.carousel-item img {
		width: 100%;
		height: 200px;
		object-fit: cover;
	}

	.item-content {
		padding: 16px;
	}

	.item-content h3 {
		margin: 0 0 4px 0;
		font-size: 1.1rem;
		color: var(--md-sys-color-on-surface);
	}

	.item-content p {
		margin: 0;
		font-size: 0.9rem;
		color: #49454f;
	}
</style>