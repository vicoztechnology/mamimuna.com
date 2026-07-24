<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';
	let { children } = $props();
	import { onNavigate } from '$app/navigation';

	onNavigate((navigation) => {
		// Check if the browser supports the View Transitions API
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve(); // Tells SvelteKit to update the DOM
				await navigation.complete; // Waits for the new page to finish loading
			});
		});
	});
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div
	class="app-bar fixed w-full dark:bg-dark-surface bg-surface flex items-center justify-between top-0"
>
	<a href="/" class="ml-3" title="tombol menu">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height="24px"
			viewBox="0 -960 960 960"
			width="24px"
			class="fill-on-background dark:fill-dark-on-background"
			><path
				d="M170-254.62q-12.75 0-21.37-8.63-8.63-8.62-8.63-21.38 0-12.75 8.63-21.37 8.62-8.61 21.37-8.61h620q12.75 0 21.37 8.62 8.63 8.63 8.63 21.39 0 12.75-8.63 21.37-8.62 8.61-21.37 8.61H170ZM170-450q-12.75 0-21.37-8.63-8.63-8.63-8.63-21.38 0-12.76 8.63-21.37Q157.25-510 170-510h620q12.75 0 21.37 8.63 8.63 8.63 8.63 21.38 0 12.76-8.63 21.37Q802.75-450 790-450H170Zm0-195.39q-12.75 0-21.37-8.62-8.63-8.63-8.63-21.39 0-12.75 8.63-21.37 8.62-8.61 21.37-8.61h620q12.75 0 21.37 8.63 8.63 8.62 8.63 21.38 0 12.75-8.63 21.37-8.62 8.61-21.37 8.61H170Z"
			/></svg
		>
	</a>

	<form class="flex items-center rounded-full w-full ml-6 mr-6">
		<label for="voice-search" class="sr-only">Search</label>

		<div class="relative w-full rounded-full">
			<div class="absolute inset-y-0 flex items-center ps-3 pointer-events-none">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="24px"
					viewBox="0 -960 960 960"
					width="24px"
					class="fill-on-background dark:fill-dark-on-background"
					><path
						d="M380.77-335.39q-102.46 0-173.54-71.07-71.07-71.08-71.07-173.54t71.07-173.54q71.08-71.07 173.54-71.07t173.54 71.07q71.07 71.08 71.07 173.54 0 42.85-14.38 81.85-14.39 39-38.39 67.84l230.16 230.16q8.31 8.3 8.5 20.88.19 12.58-8.5 21.27t-21.08 8.69q-12.38 0-21.07-8.69L530.46-388.16q-30 24.77-69 38.77-39 14-80.69 14Zm0-59.99q77.31 0 130.96-53.66 53.66-53.65 53.66-130.96t-53.66-130.96q-53.65-53.66-130.96-53.66t-130.96 53.66Q196.15-657.31 196.15-580t53.66 130.96q53.65 53.66 130.96 53.66Z"
					/></svg
				>
			</div>
			<a href="/cari" aria-label="cari">
				<input
					type="text"
					id="voice-search"
					class=" w-full dark:text-dark-on-surface-variant dark:bg-dark-surface-container-high border-none focus:outline-none focus:ring-0 rounded-full block ps-9 pe-3 py-2.5 bg-surface-container-high text-on-surface-variant text-sm rounded-base placeholder:text-body"
					placeholder="cari..."
					required
				/>
			</a>
			<button
				title="tombol cari"
				type="button"
				class="absolute inset-y-0 end-0 flex items-center pe-3"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="fill-on-background dark:fill-dark-on-background"
					height="24px"
					viewBox="0 -960 960 960"
					width="24px"
					><path
						d="M409.04-449.04Q380-478.08 380-520v-240q0-41.92 29.04-70.96Q438.08-860 480-860q41.92 0 70.96 29.04Q580-801.92 580-760v240q0 41.92-29.04 70.96Q521.92-420 480-420q-41.92 0-70.96-29.04ZM480-640Zm-30 480v-101.85q-89.31-10.31-153.08-73.38-63.76-63.08-74.69-153.77-1.61-12.77 6.69-21.88Q237.23-520 250-520q12.77 0 21.38 8.81 8.62 8.8 11.47 21.57 10.92 73.47 67.19 121.54Q406.31-320 480-320q74.69 0 130.46-48.58 55.77-48.57 66.69-121.04 2.85-12.77 11.47-21.57Q697.23-520 710-520t21.08 9.12q8.3 9.11 6.69 21.88-10.93 88.69-74.19 152.58-63.27 63.88-153.58 74.57V-160q0 12.77-8.62 21.38Q492.77-130 480-130t-21.38-8.62Q450-147.23 450-160Zm58.5-331.5Q520-503 520-520v-240q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760v240q0 17 11.5 28.5T480-480q17 0 28.5-11.5Z"
					/></svg
				>
			</button>
		</div>
	</form>

	<button
		class="mr-3 mt-2 mb-2 text-on-secondary-container dark:text-dark-on-secondary-container bg-secondary-container dark:bg-dark-secondary-container text-sm p-2.5 rounded-full"
	>
		daftar
	</button>
</div>

{@render children()}
