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
			<div class="favourites-list" v-if="favStore.favouritesList.length">
				<city-card
					v-for="card in favStore.favouritesList"
					:key="card.id"
					:card-info="card"
					:hide-delete="true"
					@add-to-favourite="favStore.addFavourite(card)"
					@remove-favourite="favStore.removeFavourite(card)"
				></city-card>
			</div>

			<h3 v-else>No favourites</h3>
		</div>
	</section>
</template>

<script setup>
import CityCard from "@/components/city-card/CityCard.vue";
import { useFavourites } from "@/store/FavouritesStore.js";

// Favourites Store
const favStore = useFavourites();
</script>

<style scoped lang="scss">
.hero-screen {
	padding-top: 80px;

	h2 {
		margin-bottom: 40px;

		@media screen and (max-width: 415px) {
			text-align: center;
		}
	}
}

.favourites-section {
	padding-bottom: 80px;

	h3 {
		@media screen and (max-width: 415px) {
			text-align: center;
		}
	}
}
</style>
