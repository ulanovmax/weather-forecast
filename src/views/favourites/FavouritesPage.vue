<template>
	<section class="hero-screen">
		<div class="cont">
			<div class="hero-screen__heading">
				<h2 class="hero-screen__heading-title">Favourites</h2>
			</div>
		</div>
	</section>

	<section class="favourites-section">
		<div class="cont">
			<div class="favourites-list">
				<!--				<city-card v-for="i in 5" :key="i"></city-card>-->
			</div>
		</div>
	</section>
</template>

<script setup>
// import CityCard from "@/components/city-card/CityCard.vue";
</script>

<style scoped lang="scss">
.hero-screen {
	padding-top: 80px;

	h2 {
		margin-bottom: 40px;
	}
}
</style>
