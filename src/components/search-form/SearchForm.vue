<template>
	<form class="search-block">
		<v-input
			v-model="searchValue"
			:icon-name="'search'"
			:error="warning"
			placeholder="Search your city"
			@keydown="showDropdown = true"
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

const emits = defineEmits({
	select(city) {
		return typeof city === "string";
	},
});

// Store locations
const store = useLocations();

store.loadLocations();

// Toggle dropdown
const showDropdown = ref(false);
const hoverDropdown = ref(false);

// Search form
const searchValue = ref("");
const warning = ref(false);

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
		warning.value = true;
	} else {
		warning.value = false;
	}
});

function selectCity(city) {
	showDropdown.value = false;
	emits("select", city);
}
</script>

<style scoped lang="scss">
@import "search-form";
</style>
