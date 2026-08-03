<script>
	let y = $state(0);
	let lebar = $derived(y - 70);
	let tinggi = $derived((y - 70) / 2);
	let lebar2 = $derived(y - 310);
	let tinggi2 = $derived((y - 310) / 2);
</script>

<svelte:window bind:innerWidth={y} />
<div
	class="home mt-15 text-on-background dark:text-dark-on-background max-w-full overflow-scroll scrollbar-none"
>
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
<div class="mt-3 flex ml-4 mr-4 max-w-full flex-wrap flex-row gap-y-4">
	<div class="grid justify-center text-center basis-1/4">
		<button
			class="border-outline-variant dark:border-dark-outline-variant grid w-16 h-16 place-items-center gap-y-0 border rounded-3xl"
			title=""
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="36px"
				viewBox="0 -960 960 960"
				width="36px"
				class="fill-error dark:fill-dark-error"
				><path
					d="m435.26-391.13 163.82-105.1q13.15-8.48 13.15-23.72 0-15.23-13.15-23.82l-163.82-105.1q-14.23-9.59-29-1.23-14.77 8.37-14.77 25.46v209.28q0 17.09 14.77 25.46 14.77 8.36 29-1.23ZM162.57-220q-25.79 0-44.18-18.39T100-282.57v-474.86q0-25.79 18.39-44.18T162.57-820h634.86q25.79 0 44.18 18.39T860-757.43v474.86q0 25.79-18.39 44.18T797.43-220h-182.3v48.72q0 13.39-8.95 22.33-8.94 8.95-22.34 8.95H376.16q-13.4 0-22.34-8.95-8.95-8.94-8.95-22.33V-220h-182.3Zm0-50.26h634.86q4.62 0 8.47-3.84 3.84-3.85 3.84-8.47v-474.86q0-4.62-3.84-8.47-3.85-3.84-8.47-3.84H162.57q-4.62 0-8.47 3.84-3.84 3.85-3.84 8.47v474.86q0 4.62 3.84 8.47 3.85 3.84 8.47 3.84Zm-12.31 0v-499.48 499.48Z"
				/></svg
			>
		</button>
		<span class="text-error dark:text-dark-error text-sm">Live</span>
	</div>
	<div class="grid justify-center text-center basis-1/4">
		<button
			class="border-outline-variant dark:border-dark-outline-variant grid w-16 h-16 place-items-center gap-y-0 border rounded-3xl"
			title=""
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="36px"
				viewBox="0 -960 960 960"
				width="36px"
				class="fill-on-surface-variant dark:fill-dark-on-surface-variant"
				><path
					d="M295.73-215.73Q220-291.46 220-400q0-91.2 55.46-161.65t144.1-91.45q-22.97-4.36-44.6-13.48-21.63-9.11-38.14-25.88-27.61-27.77-36.34-65.13-8.74-37.36-7.97-76.61 18.75-3.08 36.99-1.1 18.24 1.97 32.06 12.71 53.72 9.8 88.94 52.89t35.94 100.55q13.02-36.18 34.46-67.77 21.43-31.59 48.64-58.8 7.23-7.23 17.69-7.23t17.69 7.23q7.23 7.24 7.23 17.57t-7.23 17.56q-23.1 23.36-41.2 50.05-18.11 26.7-29.98 56.36 90.72 18.8 148.49 89.98Q740-493.03 740-400q0 108.54-75.73 184.27T480-140q-108.54 0-184.27-75.73ZM628.6-251.4q61.14-61.14 61.14-148.6T628.6-548.6q-61.14-61.14-148.6-61.14T331.4-548.6q-61.14 61.14-61.14 148.6t61.14 148.6q61.14 61.14 148.6 61.14t148.6-61.14ZM480-400Z"
				/></svg
			>
		</button>
		<span class="text-on-surface-variant dark:text-dark-on-surface-variant text-sm">Buah</span>
	</div>
	<div class=" grid justify-center text-center basis-1/4">
		<button
			class="border-outline-variant dark:border-dark-outline-variant grid w-16 h-16 place-items-center gap-y-0 border rounded-3xl"
			title=""
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="36px"
				viewBox="0 -960 960 960"
				width="36px"
				class="fill-on-surface-variant dark:fill-dark-on-surface-variant"
				><path
					d="M228.36-189.63q-41.37-42.5-64.86-97.74Q140-342.61 140-400.92q0-64.03 23.4-121.85 23.4-57.82 72.45-106.87 65.31-65.31 186.88-89.45 121.58-24.14 274.19-19.52 17.76 1.43 31.73 7.61 13.96 6.18 24.84 17.05 10.87 10.87 16.7 24.62 5.83 13.74 6.83 30.61 2.67 75.33-1.68 144.61-4.34 69.29-17.3 128.85-12.96 59.57-34.88 107.82-21.91 48.25-54.9 81.18-48.47 48.85-104.68 72.55Q507.36-100 446.91-100q-62.55 0-118.99-22.82-56.43-22.82-99.56-66.81Zm85.23 1.27q28.26 18.92 62.99 28.51 34.73 9.59 70.32 9.59 49.77 0 97.46-20.12 47.69-20.13 88.31-61.67 22.39-22.46 41.02-60.37 18.63-37.91 31.33-93.8 12.7-55.88 18.32-130.59 5.61-74.7 1.79-171.34-70.8-2-139.17.78-68.37 2.78-127.92 13.46-59.55 10.68-107.46 29.55t-77.55 48.92q-43.13 43.54-62.95 91.3t-19.82 92.96q0 51.41 21.16 101.18 21.17 49.77 51.45 78.77 38.57-84.31 101.86-155.81t151.99-122.04q-77.64 67.41-128.08 144.88-50.44 77.46-75.05 175.84Zm0 0Zm0 0Z"
				/></svg
			>
		</button>
		<span class="text-on-surface-variant dark:text-dark-on-surface-variant text-sm">Sayur</span>
	</div>
	<div class="grid justify-center text-center basis-1/4">
		<button
			class="border-outline-variant dark:border-dark-outline-variant grid w-16 h-16 place-items-center gap-y-0 border rounded-3xl"
			title=""
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="36px"
				viewBox="0 -960 960 960"
				width="36px"
				class="fill-on-surface-variant dark:fill-dark-on-surface-variant"
				><path
					d="M120.26-377.69q-25.71 0-44.14-18.43t-18.43-44.14v-359.48q0-25.71 18.43-44.14t44.14-18.43h719.48q25.71 0 44.14 18.43t18.43 44.14v359.48q0 25.71-18.43 44.14t-44.14 18.43H120.26Zm0-434.36q-5.39 0-8.85 3.46t-3.46 8.85v359.48q0 5.39 3.46 8.85t8.85 3.46h719.48q5.39 0 8.85-3.46t3.46-8.85v-359.48q0-5.39-3.46-8.85t-8.85-3.46H120.26Zm691.36 542.2-659 34q-10.31.62-17.58-5.65-7.27-6.27-7.89-16.58-.61-10.31 6.16-17.57 6.77-7.27 17.07-7.89l659-34q10.31-.61 17.58 5.66 7.27 6.26 7.89 16.57.61 10.31-6.16 17.58-6.77 7.27-17.07 7.88Zm-1.62 135H150q-10.31 0-17.08-6.77-6.77-6.77-6.77-17.07 0-10.31 6.77-17.08 6.77-6.77 17.08-6.77h660q10.31 0 17.08 6.77 6.77 6.77 6.77 17.08 0 10.3-6.77 17.07T810-134.85ZM423.56-514.1q67.46 0 130.3-22.75 62.85-22.76 110.83-71.05 4.34 27.46 25.1 45.46 20.77 18 48.95 24.31 8.36 2 18.59.71 10.23-1.3 10.23-14.86v-135.44q0-13.56-10.23-14.66-10.23-1.11-18.59.89-28.87 7.29-49.7 25.09-20.84 17.81-24.76 45.89-48.98-46.42-111.08-70.9-62.09-24.49-129.59-24.49-72.4 0-130.06 21.37-57.65 21.38-108.34 73.79-1.8 1.79-4.21 10.41 0 2.1 4.21 11.07 50.69 52.41 108.34 73.79 57.66 21.37 130.01 21.37ZM107.95-812.05v384.1-384.1Z"
				/></svg
			>
		</button>
		<span class="text-on-surface-variant dark:text-dark-on-surface-variant text-sm">Lauk</span>
	</div>
	<div class="grid justify-center text-center basis-1/4">
		<button
			class="border-outline-variant dark:border-dark-outline-variant grid w-16 h-16 place-items-center gap-y-0 border rounded-3xl"
			title=""
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="36px"
				viewBox="0 -960 960 960"
				width="36px"
				class="fill-on-surface-variant dark:fill-dark-on-surface-variant"
				><path
					d="M443.23-614.87q-58.33 0-114.5 17.2-56.17 17.21-103.55 49.59l43.46 387.05q.51 4.62 3.91 7.7 3.4 3.07 8.4 3.07h398.49q5 0 8.27-3.07 3.26-3.08 4.03-7.7l45.88-413.84h-38.9q-36.82 0-67.82-5.37-31-5.36-84.36-20.84-25.23-7.13-50.99-10.46-25.76-3.33-52.32-3.33Zm-223.87 11.85q50.61-30.08 107.96-45.89 57.35-15.81 116.5-16.22 29.62 0 58.92 3.94 29.31 3.93 56.85 11.68 52.03 14.38 79.51 19.38 27.47 5 58.82 5h45.57l20.05-184.61H196.08l23.28 206.72ZM280.74-100q-24.51 0-42.22-15.6-17.72-15.59-20.13-39.81l-71.57-641.74q-2.77-25.52 14.44-44.18Q178.48-860 204.1-860h552.05q25.37 0 42.59 18.67 17.21 18.66 14.44 44.18L742-155.41q-2.41 24.22-20.13 39.81-17.72 15.6-42.23 15.6h-398.9Zm162.49-50.26H691.74h-423.1 174.59Z"
				/></svg
			>
		</button>
		<span class="text-on-surface-variant dark:text-dark-on-surface-variant text-sm">Minuman</span>
	</div>
	<div class="grid justify-center text-center basis-1/4">
		<button
			class="border-outline-variant dark:border-dark-outline-variant grid w-16 h-16 place-items-center gap-y-0 border rounded-3xl"
			title=""
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="36px"
				viewBox="0 -960 960 960"
				width="36px"
				class="fill-on-surface-variant dark:fill-dark-on-surface-variant"
				><path
					d="M336.62-140q-20.39 0-36.8-11.69-16.41-11.68-22.56-30.77l-45.18-134.57q-35.09-18.25-59.66-48.98-24.58-30.74-34.96-69.86l-22.3-89.69q-5.42-21.88 8.8-40.12 14.21-18.24 36.78-18.24h638.9q22.57 0 36.79 18.24 14.21 18.24 9.06 40.12l-22.57 89.69q-10.23 39.04-34.46 69.71-24.23 30.67-59.74 49.13l-44.95 134.18q-6.41 18.93-22.82 30.89T624.15-140H336.62Zm0-50.26h287.15q4.23 0 7.31-2.11 3.07-2.12 4.61-5.96l34.16-99.65h-378.9l33.74 99.65q1.54 3.84 4.62 5.96 3.07 2.11 7.31 2.11Zm-20.13-157.56H643.9q46.61 0 82.77-27.76 36.15-27.75 47.61-72.39l20.28-78q.77-2.83-1.28-5.26-2.05-2.44-4.87-2.44H172.64q-3.08 0-4.94 2.44-1.85 2.43-.83 5.26l19.23 78q11.05 44.64 47.23 72.39 36.17 27.76 83.16 27.76Zm468.15-236.1h-50.26v-63.34q0-26.55-18.45-44.75t-45.52-18.2q-19.74 0-37.26 10.61-17.51 10.6-27.69 30.4h-80.54l-8.07-30.13q-10.34-35.05-29.55-52.73-19.22-17.68-46.56-17.68-22.97 0-41.04 11.93-18.06 11.94-27.62 32.48l-15.49 34.36h-75.74q-22.77 0-38.61 15.51-15.83 15.51-15.83 37.94v53.6h-50.25v-53.64q0-43.19 29.57-73.43 29.58-30.24 79.6-30.24 3.9 0 14.97.37 11.06.37 23.16.14 16.26-36.46 47.57-57.87Q402.35-820 441.15-820q45.72 0 79.47 30 33.74 30 46.82 83.23 21.28-26.46 47.09-40.07 25.81-13.62 54.88-13.62 48.58 0 81.91 32.98 33.32 32.98 33.32 79.89v63.67Zm-303.85 50.25ZM336.62-190.26h-11.93 311-299.07Z"
				/></svg
			>
		</button>
		<span class="text-on-surface-variant dark:text-dark-on-surface-variant text-sm">Sembako</span>
	</div>
	<div class="grid justify-center text-center basis-1/4">
		<button
			class="border-outline-variant dark:border-dark-outline-variant grid w-16 h-16 place-items-center gap-y-0 border rounded-3xl"
			title=""
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="36px"
				viewBox="0 -960 960 960"
				width="36px"
				class="fill-on-surface-variant dark:fill-dark-on-surface-variant"
				><path
					d="M480-90q-80.67 0-151.74-30.73-71.08-30.73-123.94-83.59t-83.59-124Q90-399.45 90-479.93q0-82.12 32.55-154.88 32.55-72.75 88.26-126.89 55.7-54.15 129.75-83.75 74.06-29.6 157-24.83 20.57.54 33.16 11.54 12.59 11 15.48 31.92 5.88 66.03 50.45 109.22 44.58 43.19 112.17 50.22 15.74 2.07 24.97 11.78 9.23 9.7 11.75 27.6 3.1 38.64 27.75 68.14 24.66 29.5 59.91 43.25 19.95 9.35 28.91 23.19 8.97 13.83 6.81 34.45-4.51 75.84-37 143.2-32.49 67.36-84.81 117.55t-120.82 79.21Q557.79-90 480-90Zm0-50.26q135.59 0 232.58-93.47 96.98-93.48 107.19-233.78-53.18-20.54-84.82-59.8-31.64-39.25-38.26-91.74-81.59-9.08-137.11-64.57-55.53-55.48-62.12-136.74-75.36-4.2-140.64 22.59-65.28 26.79-113.4 74.29-48.11 47.5-75.64 111.02-27.52 63.51-27.52 132.46 0 141.35 99.19 240.55 99.2 99.19 240.55 99.19Zm.41-346.07Zm-60.44-76.44q23.9 0 40.58-16.84 16.68-16.85 16.68-40.36 0-23.9-16.76-40.58t-40.65-16.68q-23.52 0-40.28 16.76-16.77 16.76-16.77 40.65 0 23.52 16.84 40.28 16.85 16.77 40.36 16.77Zm-80 200q23.9 0 40.58-16.84 16.68-16.85 16.68-40.36 0-23.9-16.76-40.58t-40.65-16.68q-23.52 0-40.28 16.76-16.77 16.76-16.77 40.65 0 23.52 16.84 40.28 16.85 16.77 40.36 16.77ZM600-323.85q15.46 0 25.81-10.53 10.34-10.54 10.34-25.62 0-15.46-10.34-25.81-10.35-10.34-25.81-10.34-15.08 0-25.62 10.34-10.53 10.35-10.53 25.81 0 15.08 10.53 25.62 10.54 10.53 25.62 10.53Z"
				/></svg
			>
		</button>
		<span class="text-on-surface-variant dark:text-dark-on-surface-variant text-sm">Snack</span>
	</div>
	<div class="grid justify-center text-center basis-1/4">
		<button
			class="border-outline-variant dark:border-dark-outline-variant grid w-16 h-16 place-items-center gap-y-0 border rounded-3xl"
			title=""
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="36px"
				viewBox="0 -960 960 960"
				width="36px"
				class="fill-on-surface-variant dark:fill-dark-on-surface-variant"
				><path
					d="M273.67-179.86q-83.8-79.86-92.85-202.01-.82-11.82 5.7-18.98 6.51-7.15 18.55-7.15 12.16 0 18.78 7.42 6.61 7.43 7.84 18.3 8.85 100.92 78.02 166.47 69.18 65.55 170.45 65.55 101.28 0 170.29-65.55 69.01-65.55 77.86-166.47 1.23-10.87 7.84-18.3 6.62-7.42 18.44-7.42 12.21 0 18.81 7.15 6.6 7.16 5.78 18.98-9.05 122.15-93.04 202.01Q602.15-100 479.8-100q-122.34 0-206.13-79.86Zm-79.94-307.07q-8.86-8.98-8.86-21.65 0-12.68 8.98-21.53 8.98-8.86 21.66-8.86 12.67 0 21.53 8.98 8.86 8.98 8.86 21.65 0 12.67-8.98 21.53-8.98 8.86-21.66 8.86-12.67 0-21.53-8.98Zm172.31 0q-8.86-8.98-8.86-21.65 0-12.68 8.98-21.53 8.98-8.86 21.65-8.86 12.68 0 21.54 8.98t8.86 21.65q0 12.67-8.98 21.53-8.99 8.86-21.66 8.86t-21.53-8.98Zm184.61 0q-8.86-8.98-8.86-21.65 0-12.68 8.99-21.53 8.98-8.86 21.65-8.86 12.67 0 21.53 8.98 8.86 8.98 8.86 21.65 0 12.67-8.98 21.53-8.98 8.86-21.65 8.86-12.68 0-21.54-8.98Zm172.31 0q-8.86-8.98-8.86-21.65 0-12.68 8.98-21.53 8.98-8.86 21.66-8.86 12.67 0 21.53 8.98 8.86 8.98 8.86 21.65 0 12.67-8.98 21.53-8.98 8.86-21.66 8.86-12.67 0-21.53-8.98ZM279.89-593.08q-8.86-8.98-8.86-21.66 0-12.67 8.98-21.53 8.98-8.86 21.65-8.86 12.67 0 21.53 8.98 8.86 8.98 8.86 21.66 0 12.67-8.98 21.53-8.98 8.86-21.65 8.86-12.68 0-21.53-8.98Zm356.92 0q-8.86-8.98-8.86-21.66 0-12.67 8.98-21.53 8.98-8.86 21.65-8.86 12.68 0 21.53 8.98 8.86 8.98 8.86 21.66 0 12.67-8.98 21.53-8.98 8.86-21.65 8.86-12.67 0-21.53-8.98Zm-178.46-6.16q-8.86-8.98-8.86-21.65 0-12.67 8.98-21.53 8.98-8.86 21.65-8.86 12.67 0 21.53 8.98 8.86 8.98 8.86 21.65 0 12.68-8.98 21.54-8.98 8.85-21.65 8.85-12.67 0-21.53-8.98Zm-92.31-100q-8.86-8.98-8.86-21.65 0-12.67 8.98-21.53 8.98-8.86 21.65-8.86 12.68 0 21.54 8.98t8.86 21.65q0 12.68-8.98 21.54-8.99 8.85-21.66 8.85t-21.53-8.98Zm184.61 0q-8.86-8.98-8.86-21.65 0-12.67 8.99-21.53 8.98-8.86 21.65-8.86 12.67 0 21.53 8.98 8.86 8.98 8.86 21.65 0 12.68-8.98 21.54-8.98 8.85-21.65 8.85-12.68 0-21.54-8.98Zm-92.3-96.15q-8.86-8.98-8.86-21.65 0-12.68 8.98-21.53 8.98-8.86 21.65-8.86 12.67 0 21.53 8.98 8.86 8.98 8.86 21.65 0 12.67-8.98 21.53-8.98 8.86-21.65 8.86-12.67 0-21.53-8.98ZM480-408Z"
				/></svg
			>
		</button>
		<span class="text-on-surface-variant dark:text-dark-on-surface-variant text-sm">Bumbu</span>
	</div>
</div>
<div
	class="mt-4 flex justify-between rounded-4xl bg-tertiary-container dark:bg-dark-tertiary-container ml-5 mr-5 p-5"
>
	<div class="flex items-center">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height="20px"
			viewBox="0 -960 960 960"
			width="20px"
			fill="#1f1f1f"
			><path
				d="m501.38-472 70-42.92 70 42.92q4.62 2.23 9.54-.66 4.93-2.89 2.93-8.19L635-561.08l62.77-53.15q4.61-3.23 2.11-8.35-2.5-5.11-7.73-6.11l-81.22-7.12-32.32-76.11q-1.75-4.62-7.1-4.62-5.36 0-7.36 4.62l-32.31 76.11-81.22 7.12q-5.23 1-7.73 6.11-2.5 5.12 2.11 8.35l62.77 53.15-18.85 80.23q-2 5.3 2.93 8.19 4.92 2.89 9.53.66Zm-138.3 173.23q-30.31 0-47.31-17-17-17-17-47.31v-416.61q0-30.31 17-47.31 17-17 47.31-17h416.61Q810-844 827-827q17 17 17 47.31v416.61q0 30.31-17 47.31-17 17-47.31 17H363.08Zm0-52h416.61q5.39 0 8.85-3.46t3.46-8.85v-416.61q0-5.39-3.46-8.85t-8.85-3.46H363.08q-5.39 0-8.85 3.46t-3.46 8.85v416.61q0 5.39 3.46 8.85t8.85 3.46Zm208.3-220.61ZM223-168Zm21.62 50.84q-25.93 3.62-47.23-12.96-21.31-16.57-24.93-42.5l-56.07-404.76q-3.62-26.82 12.77-48.26 16.38-21.44 43.3-24.28l25.7-2.39q12.76-.84 20.3 6.39 7.54 7.23 7.54 19.69 0 10.06-5.81 17.76-5.8 7.7-15.96 8.55l-24.31 2.38q-5.38.39-8.46 4.42-3.08 4.04-2.31 9.43l53.93 403.38q.77 5.39 4.61 8.46 3.85 3.08 9.23 2.31l460.47-62.38q11.25-1.62 19.83 4.85 8.57 6.47 10.01 17.3 1.62 10.77-4.8 19.54-6.42 8.76-17.35 10.31l-460.46 62.76Z"
			/></svg
		>
		<div class="ml-2">2.500 Poin</div>
	</div>
	<div class="flex items-center">
	<svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#1f1f1f"><path d="M208.12-220.08Q176-252.17 176-298h-42.92q-11.05 0-18.53-7.42-7.47-7.42-7.47-18.38 0-10.97 7.47-18.58 7.48-7.62 18.53-7.62h56.54q13.92-25.85 39.5-41.92Q254.69-408 286-408q31.31 0 56.89 16.08 25.57 16.07 39.5 41.92h204.84l85.93-346H273.23q-11.05 0-18.52-7.42-7.48-7.42-7.48-18.38 0-10.97 7.48-18.58 7.47-7.62 18.52-7.62h425.54q14.69 0 25.04 12.43 10.34 12.43 6.11 27.96L706.46-614h33.92q15.38 0 29.15 7.18 13.76 7.19 23.7 19.74l76.46 108.47q8.85 12.84 11.15 26.42 2.31 13.57-2.3 28.04l-29.46 103.23q-2.62 9.84-11.15 16.38-8.53 6.54-19.39 6.54h-7.16q0 45.77-32.07 77.88Q747.24-188 701.43-188q-45.81 0-77.93-32.08-32.11-32.09-32.11-77.92H396q0 45.77-32.07 77.88Q331.86-188 286.05-188q-45.82 0-77.93-32.08ZM659.23-427h166.54l4.54-18.31L746.54-562h-53.85l-33.46 135Zm-64.15 44.46 5.28-21.46q5.28-21.46 13.41-52.54 4.77-17.69 7.96-33 3.19-15.31 6.19-25.92l5.29-21.46q5.28-21.46 13.41-52.54 8.12-31.08 13.41-52.54l5.28-21.46 7.85-32.54-85.93 346 7.85-32.54Zm-515.04-48q-10.86 0-18.37-7.42-7.51-7.42-7.51-18.38 0-10.97 7.45-18.58 7.46-7.62 18.48-7.62H205.5q11.02 0 18.64 7.42 7.63 7.42 7.63 18.38 0 10.97-7.46 18.59-7.46 7.61-18.48 7.61H80.04Zm72.01-132.92q-11.03 0-18.65-7.42-7.63-7.42-7.63-18.38 0-10.97 7.46-18.59 7.46-7.61 18.49-7.61h161.77q11.03 0 18.65 7.42 7.63 7.42 7.63 18.38 0 10.97-7.46 18.58-7.46 7.62-18.49 7.62H152.05ZM286-240q24.25 0 41.12-16.88Q344-273.75 344-298q0-24.25-16.88-41.12Q310.25-356 286-356q-24.25 0-41.12 16.88Q228-322.25 228-298q0 24.25 16.88 41.12Q261.75-240 286-240Zm415.39 0q24.24 0 41.12-16.88 16.88-16.87 16.88-41.12 0-24.25-16.88-41.12Q725.63-356 701.39-356q-24.25 0-41.13 16.88-16.88 16.87-16.88 41.12 0 24.25 16.88 41.12Q677.14-240 701.39-240Z"/></svg>
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
		<li class="rounded-3xl shadow-md-z4 pb-3">
			<img
				class="rounded-3xl"
				src="https://images.unsplash.com/photo-1622943495354-f49d2964094c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2FsZXxlbnwwfDJ8MHx8fDA%3D"
				alt="gambar"
			/>
			<div class="pl-2 pr-2 pt-2">
				<div class="nama text-on-surface-variant dark:text-dark-on-surface-variant">Curly Kale</div>
				<div class="harga text-primary dark:text-dark-primary font-bold">Rp. 15.000</div>
				<div class="text-xs text-on-surface-variant dark:text-dark-on-surface-variant">
					Terjual 160
				</div>
			</div>
		</li>
		<li class="shadow-md-z4 pb-3 rounded-3xl">
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
		<li class="rounded-3xl shadow-md-z4 pb-3">
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
		<li class="rounded-3xl shadow-md-z4 pb-3">
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
