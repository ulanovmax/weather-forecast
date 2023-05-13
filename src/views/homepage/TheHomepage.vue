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

			<p class="ip-mess" v-if="notFoundIp">
				Sorry, we didn't find your city, but you still can search it 👇
			</p>
			<search-form></search-form>
		</div>
	</section>

	<section class="weather-info">
		<div class="cont">
			<v-loader v-if="weatherStore.mainLoading"></v-loader>

			<div class="cards-list" v-else>
				<city-card
					v-for="card in weatherStore.cards"
					:key="card.id"
					:card-info="card"
					@delete="tryToRemove(card)"
				></city-card>
			</div>
		</div>
	</section>

	<v-popup
		:is-open="showConfirm"
		@close="showConfirm = false"
		@delete="confirmed = true"
	></v-popup>

	<v-popup
		class="limit-popup"
		:is-open="weatherStore.limitExceeded"
		@close="weatherStore.limitExceeded = false"
	>
		<h3>You can add maximum {{ weatherStore.limit }} cards</h3>

		<p>Remove one of the current to add new</p>

		<template #actions="{ close }">
			<button type="button" class="btn" @click="close">Ok</button>
		</template>
	</v-popup>
</template>

<script setup>
import CityCard from "@/components/city-card/CityCard.vue";
import SearchForm from "@/components/search-form/SearchForm.vue";
import TheClouds from "@/components/animation/TheClouds.vue";
import VPopup from "@/components/popup/VPopup.vue";

import { onMounted, ref, watch } from "vue";

import { useWeatherCards } from "@/store/WeatherCards.js";
import { loadIpAddress } from "@/api/ip.service.js";

const notFoundIp = ref(false);

// Store weather
const weatherStore = useWeatherCards();

onMounted(() => {
	if (!weatherStore.cards.length) {
		loadIpAddress()
			.then((res) => useWeatherCards().getWeather(res.city))
			.catch(() => (notFoundIp.value = true));
	}
});

const showConfirm = ref(false);
const confirmed = ref(false);

const cardToRemove = ref();

function tryToRemove(card) {
	showConfirm.value = true;
	cardToRemove.value = card;
}

watch(confirmed, (bool) => {
	if (bool) {
		weatherStore.removeCard(cardToRemove.value);
		showConfirm.value = false;
		confirmed.value = false;
	}
});
</script>

<style scoped lang="scss">
@import "homepage";
</style>
