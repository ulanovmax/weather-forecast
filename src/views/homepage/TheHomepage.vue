<template>
	<section class="hero-screen">
		<div class="cont">
			<div class="hero-screen__wrap">
				<div class="hero-screen__heading">
					<h1 class="hero-screen__heading-title">Weatherly</h1>
					<p class="hero-screen__heading-text">
						A simple and elegant app that shows you the current weather and forecasts
						for any location.
					</p>
				</div>

				<the-clouds></the-clouds>
			</div>

			<search-form></search-form>
		</div>
	</section>

	<section class="weather-info">
		<div class="cont">
			<v-loader v-if="weatherStore.mainLoading"></v-loader>

			<div class="cards-list" v-else>
				<city-card
					v-for="card in weatherStore.cardsList"
					:key="card.id"
					:card-info="card"
				></city-card>
			</div>
		</div>
	</section>

	<confirm-popup :is-open="showConfirm" @close="showConfirm = false"></confirm-popup>
</template>

<script setup>
import CityCard from "@/components/city-card/CityCard.vue";
import SearchForm from "@/components/search-form/SearchForm.vue";
import ConfirmPopup from "@/components/popup/ConfirmPopup.vue";
import TheClouds from "@/components/animation/TheClouds.vue";

import { ref } from "vue";

import { useForecastCards } from "@/store/WeatherCards.js";

// Store weather
const weatherStore = useForecastCards();
// import { useFavourites } from "@/store/FavouritesStore.js";

// const limit = 5;

// const favStore = useFavourites();

const showConfirm = ref(false);

// function showConfirmMessage(card) {
// 	showConfirm.value = true;
// }

// function test(v) {
// 	console.log(v);
// }
</script>

<style scoped lang="scss">
@import "homepage";
</style>
