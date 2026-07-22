<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div
	class="app-bar fixed w-full dark:bg-dark-surface bg-surface flex items-center justify-between top-0"
>
	<button class="ml-3">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height="24px"
			viewBox="0 -960 960 960"
			width="24px"
			class="fill-on-background dark:fill-dark-on-background"
			><path
				d="M180-269.23q-8.5 0-14.25-5.76T160-289.26q0-8.51 5.75-14.24t14.25-5.73h600q8.5 0 14.25 5.76 5.75 5.75 5.75 14.27 0 8.51-5.75 14.24T780-269.23H180ZM180-460q-8.5 0-14.25-5.76T160-480.03q0-8.51 5.75-14.24T180-500h600q8.5 0 14.25 5.76t5.75 14.27q0 8.51-5.75 14.24T780-460H180Zm0-190.77q-8.5 0-14.25-5.76-5.75-5.75-5.75-14.27 0-8.51 5.75-14.24t14.25-5.73h600q8.5 0 14.25 5.76t5.75 14.27q0 8.51-5.75 14.24T780-650.77H180Z"
			/></svg
		>
	</button>
	<form class="flex items-center rounded-full">
		<label for="voice-search" class="sr-only">Search</label>
		<div class="relative w-full rounded-full">
			<div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
			<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M381.54-350.77q-95.92 0-162.58-66.65-66.65-66.66-66.65-162.58 0-95.92 66.65-162.58 66.66-66.65 162.58-66.65 95.92 0 162.58 66.65 66.65 66.66 66.65 162.58 0 41.69-14.77 80.69t-38.77 66.69l236.31 236.31q5.61 5.62 6 13.77.38 8.16-6 14.54-6.39 6.38-14.16 6.38-7.76 0-14.15-6.38L528.92-404.31q-30 25.54-69 39.54t-78.38 14Zm0-40q79.61 0 134.42-54.81 54.81-54.8 54.81-134.42 0-79.62-54.81-134.42-54.81-54.81-134.42-54.81-79.62 0-134.42 54.81-54.81 54.8-54.81 134.42 0 79.62 54.81 134.42 54.8 54.81 134.42 54.81Z"/></svg>
			</div>
			<input
				type="text"
				id="voice-search"
				class="border-none focus:outline-none focus:ring-0 rounded-full block w-full ps-9 pe-3 py-2.5 bg-surface-container-high text-on-surface-variant text-sm rounded-base placeholder:text-body"
				placeholder="cari..."
				required
			/>
			<button type="button" class="absolute inset-y-0 end-0 flex items-center pe-3">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="24px"
					viewBox="0 -960 960 960"
					width="24px"
					fill="#1f1f1f"
					><path
						d="M423.08-463.08Q400-486.15 400-520v-240q0-33.85 23.08-56.92Q446.15-840 480-840t56.92 23.08Q560-793.85 560-760v240q0 33.85-23.08 56.92Q513.85-440 480-440t-56.92-23.08ZM480-640Zm-20 480v-120.69q-86.62-7.62-148.65-68.77-62.04-61.16-69.89-149.54-1.23-8.54 4.39-14.77Q251.46-520 260-520t14.27 6.12q5.73 6.11 7.42 14.65 7.85 76.92 64.89 128.08Q403.62-320 480-320q77.38 0 133.92-51.65 56.54-51.66 64.39-127.58 1.69-8.54 7.42-14.65Q691.46-520 700-520t14.15 6.23q5.62 6.23 4.39 14.77-7.85 86.38-69.39 148.15-61.53 61.77-149.15 70.16V-160q0 8.54-5.73 14.27T480-140q-8.54 0-14.27-5.73T460-160Zm48.5-331.5Q520-503 520-520v-240q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760v240q0 17 11.5 28.5T480-480q17 0 28.5-11.5Z"
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
