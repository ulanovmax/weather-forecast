import { defineStore } from "pinia";

export const useFavourites = defineStore("FavouritesStore", {
	state: () => {
		let favourites = [];

		if (localStorage.getItem("favourites")) {
			favourites = JSON.parse(localStorage.getItem("favourites"));
		}

		return {
			favourites,
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
