<template>
	<section class="hero-screen">
		<div class="cont">
			<div class="hero-screen__heading">
				<h1 class="hero-screen__heading-title">Weatherly</h1>
				<p class="hero-screen__heading-text">
					A simple and elegant app that shows you the current weather and forecasts for
					any location.
				</p>
			</div>

			<search-form></search-form>
		</div>
	</section>

	<section class="weather-info">
		<div class="cont">
			<city-card></city-card>
		</div>
	</section>
</template>

<script setup>
import CityCard from "@/components/city-card/CityCard.vue";
import SearchForm from "@/components/search-form/SearchForm.vue";
</script>

<style scoped lang="scss">
@import "homepage";
</style>
