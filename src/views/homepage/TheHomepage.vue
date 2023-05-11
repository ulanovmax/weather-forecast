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

			<search-form @select="store.getWeather"></search-form>
		</div>
	</section>

	<confirm-popup :is-open="confirmDelete" @close="confirmDelete = false"></confirm-popup>

	<section class="weather-info">
		<div class="cont">
			<v-loader v-if="store.loading"></v-loader>

			<div class="cards-list" v-else>
				<city-card
					v-for="card in store.cardsList"
					:key="card.id"
					:weather-info="card.weather"
					:main-info="card.main"
					:wind-info="card.wind"
					:city="card.name"
					@delete="showConfirm"
				></city-card>
			</div>
		</div>
	</section>
</template>

<script setup>
import CityCard from "@/components/city-card/CityCard.vue";
import SearchForm from "@/components/search-form/SearchForm.vue";
import ConfirmPopup from "@/components/popup/ConfirmPopup.vue";

import { useForecastCards } from "@/store/ForecastCards.js";
import { ref } from "vue";
// import { storeToRefs } from "pinia";

// const limit = 5;

const store = useForecastCards();
const confirmDelete = ref(false);

function showConfirm(bool) {
	confirmDelete.value = bool;
}

// function test(v) {
// 	console.log(v);
// }
</script>

<style scoped lang="scss">
@import "homepage";
</style>
