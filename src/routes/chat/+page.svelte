<script>
	// import function to register Swiper custom elements
	import { register } from 'swiper/element/bundle';
	// register Swiper custom elements
	register();
</script>

<div class="top-level w-full top-17 bottom-17 fixed overflow-y-scroll">
	<swiper-container slides-per-view="auto">
		<swiper-slide >
			<img
				class="rounded-4xl object-cover "
				src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="carousel 1"
			/>
		</swiper-slide>
		<swiper-slide>Slide 2</swiper-slide>
		<swiper-slide>Slide 3</swiper-slide>
		...
	</swiper-container>
</div>

<style>
swiper-slide {
	width: 80% !important;
}
</style>
