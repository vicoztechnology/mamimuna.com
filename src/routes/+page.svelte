<script>
	let y = $state(0);
	let lebar = $derived(y - 70);
	let tinggi = $derived((y - 70) / 2);
	let lebar2 = $derived(y - 310);
	let tinggi2 = $derived((y - 310) / 2);
</script>

<svelte:window bind:innerWidth={y} />
<div class="home mt-13 text-on-background dark:text-dark-on-background max-w-full overflow-scroll">
	<div>
		<div class="flex m-2 gap-2">
			<img
				width={lebar}
				height={tinggi}
				class="rounded-3xl"
				src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="carousel 1"
			/>
			<img
				width={lebar2}
				height={tinggi2}
				class="rounded-3xl object-cover"
				src="https://images.unsplash.com/photo-1603569283847-aa295f0d016a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8anVpY2V8ZW58MHwwfDB8fHww"
				alt="carousel 1"
			/>
			<img
				width={lebar2}
				height={tinggi2}
				class="rounded-3xl object-cover"
				src="https://images.unsplash.com/photo-1603569283847-aa295f0d016a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8anVpY2V8ZW58MHwwfDB8fHww"
				alt="carousel 1"
			/>
		</div>
	</div>
</div>
<div class="mt-3 flex gap-2 m-2">
<div class="text-center">
	<button
		class="grid w-16 h-16 place-items-center gap-y-0 shadow-md bg-tertiary-container rounded-3xl"
		title=""
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height="48px"
			viewBox="0 -960 960 960"
			width="48px"
			class="fill-on-tertiary-container dark:fill-dark-on-tertiary-container"
			><path
				d="M295.73-215.73Q220-291.46 220-400q0-92.69 56.89-163.61 56.88-70.93 147.34-90.77-24.46-4.23-47.31-13.35-22.84-9.11-40.3-26.96-26.47-26.69-35.2-62.19-8.73-35.5-9.11-73.19 7.31-3.08 14.42-4.39 7.12-1.31 12.89.23 69.07 3.77 116.84 54Q484.23-730 484-659.61q13.23-39.16 36.42-73.08t52.5-63.23q6.69-6.69 16-6.69 9.31 0 16 6.69 6.69 6.69 6.69 15.81 0 9.11-6.69 15.8-23.84 24.23-42.69 51.5-18.85 27.27-32.08 57.35 92.08 17.85 150.96 89.5Q740-494.31 740-400q0 108.54-75.73 184.27T480-140q-108.54 0-184.27-75.73Zm336.42-32.12q62.46-62.46 62.46-152.15t-62.46-152.15Q569.69-614.61 480-614.61t-152.15 62.46Q265.39-489.69 265.39-400t62.46 152.15q62.46 62.46 152.15 62.46t152.15-62.46ZM480-400Z"
			/></svg
		>
	</button>
	<span>Buah</span>
	</div>
	<div class=" text-center">
		<button
			class="grid w-16 h-16 place-items-center gap-y-0 shadow-md bg-tertiary-container rounded-3xl"
			title=""
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="48px"
				viewBox="0 -960 960 960"
				width="48px"
				class="fill-on-tertiary-container dark:fill-dark-on-tertiary-container"
				><path
					d="M480-184.39q-56.2 0-105.88-19.38-49.68-19.38-89.27-53.46l-73.93 72.54q-6.56 7.07-15.43 7.07-8.87 0-15.57-6.88-6.69-6.89-6.69-15.56 0-8.68 6.69-15.25l72.93-73.54q-34.58-40.24-53.71-89.56Q180-427.73 180-484.38q0-125.63 87.19-212.82 87.19-87.18 212.81-87.18h253.85q18.98 0 32.56 13.43Q780-757.51 780-738.23v253.85q0 125.24-87.19 212.61-87.19 87.38-212.81 87.38Zm0-45.38q106.09 0 180.35-74.26 74.26-74.27 74.26-180.35V-739H480q-106.09 0-180.35 74.26-74.26 74.27-74.26 180.36 0 46.65 15.76 88.78 15.77 42.14 43.31 75.14l215.46-214.85q6.57-6.69 15.44-6.69t15.66 6.98q6.59 6.59 6.59 15.61t-6.69 15.72L316.08-289.23q32.92 27.61 75.17 43.53 42.24 15.93 88.75 15.93Zm0-254.61Z"
				/></svg
			>
		</button>
		<span>Sayur</span>
	</div>
</div>
