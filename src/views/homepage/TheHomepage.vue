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

			<div class="search-block">
				<v-input
					v-model="searchValue"
					:icon-name="'search'"
					placeholder="Search your city"
				></v-input>

				<div class="dropdown" v-show="false">
					<ul class="dropdown__list">
						<li class="dropdown__list-item" v-for="i in 5" :key="i">
							<p>Odesa</p>

							<span class="material-symbols-outlined"> location_on </span>
						</li>
					</ul>
				</div>
			</div>
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
import { ref } from "vue";

const searchValue = ref("");
</script>

<style scoped lang="scss">
@import "homepage";
</style>
