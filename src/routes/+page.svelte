<script>
let y = $state(0);
let lebar = $derived(y - 70);
let tinggi = $derived((y - 70) / 2);
let lebar2 = $derived(y - 310);
let tinggi2 = $derived((y - 310) / 2);
</script>
<svelte:window bind:innerWidth={y} />
<div class="home mt-13 text-on-background dark:text-dark-on-background max-w-full overflow-scroll">
	<div class="flex m-2 gap-2">
		<img width={lebar} height={tinggi} class="rounded-3xl" src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="carousel 1"/>
		<img width={lebar2} height={tinggi2} class="rounded-3xl object-cover" src="https://images.unsplash.com/photo-1603569283847-aa295f0d016a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8anVpY2V8ZW58MHwwfDB8fHww" alt="carousel 1"/>
		
	</div>
</div>
