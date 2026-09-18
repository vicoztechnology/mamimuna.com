<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';
	let { children } = $props();
	import { onNavigate } from '$app/navigation';
	import { page, navigating } from '$app/state';
	import logo from '$lib/assets/logo40.png';
	// import function to register Swiper custom elements

	import { preparePageTransition } from '$lib/page-transiton';

	preparePageTransition();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div
	class="app-bar z-10 fixed w-full dark:bg-dark-surface bg-surface flex items-center justify-between top-0 pt-2"
>
	{#if page.url.pathname === '/'}
		<a href="/" class="ml-2" title="tombol menu">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				height="24px"
				viewBox="0 -960 960 960"
				width="24px"
				class="fill-on-background dark:fill-dark-on-background"
				><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg
			>
			<!--<img src={logo} alt="logo mamimuna" />-->
		</a>
	{/if}

	<form class="flex items-center rounded-full w-full mr-5" data-sveltekit-keepfocus>
		<label for="voice-search" class="sr-only">Search</label>

		<div class="relative w-full rounded-full">
			<div class="absolute inset-y-0 flex items-center ps-4">
				{#if page.url.pathname === '/'}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="24px"
						viewBox="0 -960 960 960"
						width="24px"
						class="fill-on-surface-variant dark:fill-dark-on-surface-variant ml-3"
						><path
							d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"
						/></svg
					>
					<!--
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="24px"
						viewBox="0 -960 960 960"
						width="24px"
						class="fill-on-surface-variant dark:fill-dark-on-surface-variant ml-3"
						><path
							d="M380.77-335.39q-102.46 0-173.54-71.07-71.07-71.08-71.07-173.54t71.07-173.54q71.08-71.07 173.54-71.07t173.54 71.07q71.07 71.08 71.07 173.54 0 42.85-14.38 81.85-14.39 39-38.39 67.84l230.16 230.16q8.31 8.3 8.5 20.88.19 12.58-8.5 21.27t-21.08 8.69q-12.38 0-21.07-8.69L530.46-388.16q-30 24.77-69 38.77-39 14-80.69 14Zm0-59.99q77.31 0 130.96-53.66 53.66-53.65 53.66-130.96t-53.66-130.96q-53.65-53.66-130.96-53.66t-130.96 53.66Q196.15-657.31 196.15-580t53.66 130.96q53.65 53.66 130.96 53.66Z"
						/></svg
					>
						-->
				{:else}
					<a href="/" title="tombol kembali">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="24px"
							viewBox="0 -960 960 960"
							width="24px"
							class="fill-on-background dark:fill-dark-on-background ml-2"
							><path
								d="m294.92-450 206.77 206.77q8.92 8.92 8.81 20.88-.12 11.96-9.42 21.27-9.31 8.69-21.08 9-11.77.31-21.08-9L205.31-454.69q-5.62-5.62-7.92-11.85-2.31-6.23-2.31-13.46t2.31-13.46q2.3-6.23 7.92-11.85l253.61-253.61q8.31-8.31 20.58-8.5 12.27-.19 21.58 8.5 9.3 9.31 9.3 21.38 0 12.08-9.3 21.39L294.92-510H750q12.77 0 21.38 8.62Q780-492.77 780-480t-8.62 21.38Q762.77-450 750-450H294.92Z"
							/></svg
						>
					</a>
				{/if}
			</div>
			<a href="/cari" aria-label="cari">
				<input
					type="text"
					id="voice-search"
					class=" pl-12 w-full dark:text-dark-on-surface-variant dark:bg-dark-surface-container-high border-none focus:outline-none focus:ring-0 rounded-full block ps-9 pe-3 py-2.5 bg-surface-container-high text-on-surface-variant text-base rounded-base placeholder:text-body ml-3"
					placeholder="Cari..."
					required
				/>
			</a>
			{#if page.url.pathname === '/'}
				<a href="/" title="tombol close" class="absolute inset-y-0 end-0 flex items-center pe-1">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="24px"
						viewBox="0 -960 960 960"
						width="24px"
						class="fill-on-surface-variant dark:fill-dark-on-surface-variant"
						><path
							d="M395-435q-35-35-35-85v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q0 50-35 85t-85 35q-50 0-85-35Zm45 315v-123q-104-14-172-93t-68-184h80q0 83 58.5 141.5T480-320q83 0 141.5-58.5T680-520h80q0 105-68 184t-172 93v123h-80Z"
						/></svg
					>
					<!--
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
						-->
				</a>
			{:else}
				<a href="/" title="tombol close" class="absolute inset-y-0 end-0 flex items-center pe-1">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="24px"
						viewBox="0 -960 960 960"
						width="24px"
						class="fill-on-background dark:fill-dark-on-background"
						><path
							d="M480-437.85 277.08-234.92q-8.31 8.3-20.89 8.5-12.57.19-21.27-8.5-8.69-8.7-8.69-21.08 0-12.38 8.69-21.08L437.85-480 234.92-682.92q-8.3-8.31-8.5-20.89-.19-12.57 8.5-21.27 8.7-8.69 21.08-8.69 12.38 0 21.08 8.69L480-522.15l202.92-202.93q8.31-8.3 20.89-8.5 12.57-.19 21.27 8.5 8.69 8.7 8.69 21.08 0 12.38-8.69 21.08L522.15-480l202.93 202.92q8.3 8.31 8.5 20.89.19 12.57-8.5 21.27-8.7 8.69-21.08 8.69-12.38 0-21.08-8.69L480-437.85Z"
						/></svg
					>
				</a>
			{/if}
		</div>
	</form>
	{#if page.url.pathname === '/'}
		<button
			class="mr-2 text-on-secondary-container dark:text-dark-on-secondary-container bg-secondary-container dark:bg-dark-secondary-container text-sm p-2.5 rounded-full"
		>
			Daftar
		</button>
	{/if}
</div>

{@render children()}

<div
	class="pt-2 text-sm nav-buttom bottom-0 flex-row fixed w-full dark:bg-dark-surface bg-surface flex items-center justify-around"
>
	<div class="justify-items-center">
		<a
			href="/"
			aria-current={page.url.pathname === '/'}
			aria-label="home"
			class="text-center flex flex-col justify-items-center"
		>
			<div class="pl-3 pr-3 pt-1 pb-1 rounded-4xl my-icon">
				<div
					class="{page.url.pathname === '/'
						? 'bg-secondary-container dark:bg-dark-secondary-container'
						: ''} pl-3 pr-3 pt-1 pb-1 rounded-4xl"
				>
					{#if page.url.pathname === '/'}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="24px"
							viewBox="0 -960 960 960"
							width="24px"
							class="fill-on-secondary-container dark:fill-dark-on-secondary-container"
							><path
								d="M180-200v-353.85q0-17.17 7.68-32.53 7.69-15.37 21.24-25.31l227.7-171.54q18.95-14.46 43.32-14.46t43.44 14.46l227.7 171.54q13.55 9.94 21.24 25.31 7.68 15.36 7.68 32.53V-200q0 24.54-17.73 42.27Q744.54-140 720-140H592.31q-15.37 0-25.76-10.4-10.4-10.39-10.4-25.76v-195.38q0-15.36-10.39-25.76-10.39-10.39-25.76-10.39h-80q-15.37 0-25.76 10.39-10.39 10.4-10.39 25.76v195.38q0 15.37-10.4 25.76-10.39 10.4-25.76 10.4H240q-24.54 0-42.27-17.73Q180-175.46 180-200Z"
							/></svg
						>
					{:else}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="24px"
							viewBox="0 -960 960 960"
							width="24px"
							class="fill-on-secondary-container dark:fill-dark-on-secondary-container"
							><path
								d="M240-200h133.85v-201.54q0-15.36 10.39-25.76 10.4-10.39 25.76-10.39h140q15.36 0 25.76 10.39 10.39 10.4 10.39 25.76V-200H720v-353.85q0-3.07-1.35-5.57-1.34-2.5-3.65-4.43L487.31-735q-3.08-2.69-7.31-2.69-4.23 0-7.31 2.69L245-563.85q-2.31 1.93-3.65 4.43-1.35 2.5-1.35 5.57V-200Zm-60 0v-353.85q0-17.17 7.68-32.53 7.69-15.37 21.24-25.31l227.7-171.54q18.95-14.46 43.32-14.46t43.44 14.46l227.7 171.54q13.55 9.94 21.24 25.31 7.68 15.36 7.68 32.53V-200q0 24.54-17.73 42.27Q744.54-140 720-140H562.31q-15.37 0-25.76-10.4-10.4-10.39-10.4-25.76v-201.53h-92.3v201.53q0 15.37-10.4 25.76-10.39 10.4-25.76 10.4H240q-24.54 0-42.27-17.73Q180-175.46 180-200Zm300-269.23Z"
							/></svg
						>
					{/if}
				</div>
			</div>
			<div
				class="text-on-surface dark:text-dark-on-surface {page.url.pathname === '/'
					? 'font-bold'
					: 'font-normal'} font-bold"
			>
				Home
			</div>
		</a>
	</div>

	<div class="justify-items-center">
		<a
			href="/live"
			aria-current={page.url.pathname === '/live'}
			aria-label="live"
			class="text-center"
		>
			<div class="pl-3 pr-3 pt-1 pb-1 rounded-4xl">
				<div
					class=" {page.url.pathname === '/live'
						? 'bg-secondary-container dark:bg-dark-secondary-container'
						: ''} pl-3 pr-3 pt-1 pb-1 rounded-4xl"
				>
					{#if page.url.pathname === '/live'}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="24px"
							viewBox="0 -960 960 960"
							width="24px"
							class="fill-on-surface-variant dark:fill-dark-on-surface-variant"
							><path
								d="M441.62-391.54 598-491.77q15.31-10.08 15.31-28.23T598-548.23L441.62-648.46q-16.54-11.08-34.08-1.81T390-620.85v201.7q0 20.15 17.54 29.42 17.54 9.27 34.08-1.81ZM172.31-220Q142-220 121-241q-21-21-21-51.31v-455.38Q100-778 121-799q21-21 51.31-21h615.38Q818-820 839-799q21 21 21 51.31v455.38Q860-262 839-241q-21 21-51.31 21H620v43.84q0 15.47-10.35 25.81Q599.31-140 583.84-140H376.16q-15.47 0-25.81-10.35Q340-160.69 340-176.16V-220H172.31Z"
							/></svg
						>
					{:else}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="24px"
							viewBox="0 -960 960 960"
							width="24px"
							class="fill-on-surface-variant dark:fill-dark-on-surface-variant"
							><path
								d="M441.62-391.54 598-491.77q15.31-10.08 15.31-28.23T598-548.23L441.62-648.46q-16.54-11.08-34.08-1.81T390-620.85v201.7q0 20.15 17.54 29.42 17.54 9.27 34.08-1.81ZM172.31-220Q142-220 121-241q-21-21-21-51.31v-455.38Q100-778 121-799q21-21 51.31-21h615.38Q818-820 839-799q21 21 21 51.31v455.38Q860-262 839-241q-21 21-51.31 21H620v43.84q0 15.47-10.35 25.81Q599.31-140 583.84-140H376.16q-15.47 0-25.81-10.35Q340-160.69 340-176.16V-220H172.31Zm0-60h615.38q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-455.38q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H172.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v455.38q0 4.62 3.85 8.46 3.84 3.85 8.46 3.85ZM160-280v-480 480Z"
							/></svg
						>
					{/if}
				</div>
			</div>
			<div
				class="text-on-surface dark:text-dark-on-surface {page.url.pathname === '/live'
					? 'font-bold'
					: 'font-normal'}"
			>
				Live
			</div>
		</a>
	</div>
	<div class="justify-items-center">
		<a
			href="/notifikasi"
			aria-current={page.url.pathname === '/notifikasi'}
			aria-label="live"
			class="text-center"
		>
			<div class="pl-3 pr-3 pt-1 pb-1 rounded-4xl">
				<div
					class=" {page.url.pathname === '/notifikasi'
						? 'bg-secondary-container dark:bg-dark-secondary-container'
						: ''} pl-3 pr-3 pt-1 pb-1 rounded-4xl"
				>
					{#if page.url.pathname === '/notifikasi'}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="24px"
							viewBox="0 -960 960 960"
							width="24px"
							class="fill-on-surface-variant dark:fill-dark-on-surface-variant"
							><path
								d="M210-204.62q-12.75 0-21.37-8.62-8.63-8.63-8.63-21.39 0-12.75 8.63-21.37 8.62-8.61 21.37-8.61h42.31v-298.47q0-80.69 49.81-142.69 49.8-62 127.88-79.31V-810q0-20.83 14.57-35.42Q459.14-860 479.95-860q20.82 0 35.43 14.58Q530-830.83 530-810v24.92q78.08 17.31 127.88 79.31 49.81 62 49.81 142.69v298.47H750q12.75 0 21.37 8.62 8.63 8.63 8.63 21.39 0 12.75-8.63 21.37-8.62 8.61-21.37 8.61H210ZM479.93-92.31q-29.85 0-51.04-21.24-21.2-21.24-21.2-51.07h144.62q0 29.93-21.26 51.12-21.26 21.19-51.12 21.19Z"
							/></svg
						>
					{:else}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="24px"
							viewBox="0 -960 960 960"
							width="24px"
							class="fill-on-surface-variant dark:fill-dark-on-surface-variant"
							><path
								d="M210-204.62q-12.75 0-21.37-8.62-8.63-8.63-8.63-21.39 0-12.75 8.63-21.37 8.62-8.61 21.37-8.61h42.31v-298.47q0-80.69 49.81-142.69 49.8-62 127.88-79.31V-810q0-20.83 14.57-35.42Q459.14-860 479.95-860q20.82 0 35.43 14.58Q530-830.83 530-810v24.92q78.08 17.31 127.88 79.31 49.81 62 49.81 142.69v298.47H750q12.75 0 21.37 8.62 8.63 8.63 8.63 21.39 0 12.75-8.63 21.37-8.62 8.61-21.37 8.61H210Zm270-293.07Zm-.07 405.38q-29.85 0-51.04-21.24-21.2-21.24-21.2-51.07h144.62q0 29.93-21.26 51.12-21.26 21.19-51.12 21.19Zm-167.62-172.3h335.38v-298.47q0-69.46-49.11-118.57-49.12-49.12-118.58-49.12-69.46 0-118.58 49.12-49.11 49.11-49.11 118.57v298.47Z"
							/></svg
						>
					{/if}
				</div>
			</div>
			<div
				class="text-on-surface dark:text-dark-on-surface {page.url.pathname === '/notifikasi'
					? 'font-bold'
					: 'font-normal'}"
			>
				Notifikasi
			</div>
		</a>
	</div>

	<div class="justify-items-center">
		<a
			href="/chat"
			aria-current={page.url.pathname === '/chat'}
			aria-label="chat"
			class="text-center"
		>
			<div class="pl-3 pr-3 pt-1 pb-1 rounded-4xl">
				<div
					class="{page.url.pathname === '/chat'
						? 'bg-secondary-container dark:bg-dark-secondary-container'
						: ''} pl-3 pr-3 pt-1 pb-1 rounded-4xl"
				>
					{#if page.url.pathname === '/chat'}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="24px"
							viewBox="0 -960 960 960"
							width="24px"
							class="fill-on-surface-variant dark:fill-dark-on-surface-variant"
							><path
								d="m241.54-260-80.08 80.07q-17.07 17.08-39.27 7.68-22.19-9.41-22.19-33.6v-581.84Q100-818 121-839q21-21 51.31-21h615.38Q818-860 839-839q21 21 21 51.31v455.38Q860-302 839-281q-21 21-51.31 21H241.54ZM280-410h240q12.75 0 21.37-8.63 8.63-8.63 8.63-21.38 0-12.76-8.63-21.37Q532.75-470 520-470H280q-12.75 0-21.37 8.63-8.63 8.63-8.63 21.38 0 12.76 8.63 21.37Q267.25-410 280-410Zm0-120h400q12.75 0 21.37-8.63 8.63-8.63 8.63-21.38 0-12.76-8.63-21.37Q692.75-590 680-590H280q-12.75 0-21.37 8.63-8.63 8.63-8.63 21.38 0 12.76 8.63 21.37Q267.25-530 280-530Zm0-120h400q12.75 0 21.37-8.63 8.63-8.63 8.63-21.38 0-12.76-8.63-21.37Q692.75-710 680-710H280q-12.75 0-21.37 8.63-8.63 8.63-8.63 21.38 0 12.76 8.63 21.37Q267.25-650 280-650Z"
							/></svg
						>
					{:else}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							height="24px"
							viewBox="0 -960 960 960"
							width="24px"
							class="fill-on-surface-variant dark:fill-dark-on-surface-variant"
							><path
								d="m241.54-260-80.08 80.07q-17.07 17.08-39.27 7.74Q100-181.54 100-205.85v-581.84Q100-818 121-839q21-21 51.31-21h615.38Q818-860 839-839q21 21 21 51.31v455.38Q860-302 839-281q-21 21-51.31 21H241.54ZM216-320h571.69q4.62 0 8.46-3.85 3.85-3.84 3.85-8.46v-455.38q0-4.62-3.85-8.46-3.84-3.85-8.46-3.85H172.31q-4.62 0-8.46 3.85-3.85 3.84-3.85 8.46v523.08L216-320Zm-56 0v-480 480Zm120-90h240q12.77 0 21.38-8.62Q550-427.23 550-440t-8.62-21.38Q532.77-470 520-470H280q-12.77 0-21.38 8.62Q250-452.77 250-440t8.62 21.38Q267.23-410 280-410Zm0-120h400q12.77 0 21.38-8.62Q710-547.23 710-560t-8.62-21.38Q692.77-590 680-590H280q-12.77 0-21.38 8.62Q250-572.77 250-560t8.62 21.38Q267.23-530 280-530Zm0-120h400q12.77 0 21.38-8.62Q710-667.23 710-680t-8.62-21.38Q692.77-710 680-710H280q-12.77 0-21.38 8.62Q250-692.77 250-680t8.62 21.38Q267.23-650 280-650Z"
							/></svg
						>
					{/if}
				</div>
			</div>
			<div
				class="text-on-surface dark:text-dark-on-surface {page.url.pathname === '/chat'
					? 'font-bold'
					: 'font-normal'}"
			>
				Chat
			</div>
		</a>
	</div>
</div>
