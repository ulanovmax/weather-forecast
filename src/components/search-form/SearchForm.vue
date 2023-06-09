<template>
	<form class="search-block">
		<v-input
			v-model="searchValue"
			placeholder="Search your city"
			icon-name="search"
			:not-found="notFound"
			:duplicate="isDuplicate"
			:not-exist="notExist"
			@keydown="show"
			@focusout="hoverDropdown ? (showDropdown = true) : (showDropdown = false)"
		></v-input>

		<div
			class="dropdown"
			@mouseenter="hoverDropdown = true"
			@mouseleave="hoverDropdown = false"
			v-if="showDropdown"
		>
			<ul class="dropdown__list">
				<li
					class="dropdown__list-item"
					@click="selectCity(city)"
					v-for="(city, i) in filteredDropdown"
					:key="i"
				>
					<p>{{ city }}</p>

					<span class="material-symbols-outlined"> location_on </span>
				</li>
			</ul>
		</div>
	</form>
</template>

<script setup>
import { useLocations } from "@/store/LocationsStore.js";
import { computed, ref, watch } from "vue";
import { useWeatherCards } from "@/store/WeatherCards.js";

// Store locations
const store = useLocations();

store.loadLocations();

// Store weather
const weatherStore = useWeatherCards();

// Toggle dropdown
let showDropdown = ref(false);
let hoverDropdown = ref(false);

// Search form
const searchValue = ref("");

// Errors
const notFound = ref(false);
const notExist = ref(false);
const isDuplicate = ref(false);

function show() {
	showDropdown.value = true;

	notFound.value = false;
	notExist.value = false;
	isDuplicate.value = false;
}

const filteredDropdown = computed(() => {
	return searchValue.value
		? store.citiesStore
				.filter((location) => {
					return location.toLowerCase().includes(searchValue.value.toLowerCase());
				})
				.splice(0, 5)
		: [];
});

watch(searchValue, () => {
	if (!filteredDropdown.value.length && searchValue.value) {
		notFound.value = true;
	} else {
		notFound.value = false;
	}
});

function selectCity(city) {
	showDropdown.value = false;
	searchValue.value = "";

	if (weatherStore.cards.length !== weatherStore.limit) {
		weatherStore
			.getWeather(city)
			.then(() => (isDuplicate.value = weatherStore.duplicate))
			.catch(() => (notExist.value = weatherStore.error));
	} else {
		weatherStore.limitExceeded = true;
	}
}
</script>

<style scoped lang="scss">
@import "search-form";
</style>
