import { defineStore } from "pinia";

export const useFavourites = defineStore("FavouritesStore", {
	state: () => {
		return {
			favourites: [],
			duplicate: false,
		};
	},

	actions: {
		addFavourite(card) {
			card.favourite = true;
			this.favourites.unshift(card);
		},

		removeFavourite(card) {
			card.favourite = false;

			this.favourites = this.favourites.filter((fav) => fav.id !== card.id);
		},
	},

	getters: {
		favouritesList(state) {
			return state.favourites;
		},
	},
});
