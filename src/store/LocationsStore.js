import { defineStore } from "pinia";
import axios from "axios";

export const useLocations = defineStore("LocationsStore", {
	state: () => {
		return {
			cities: [],
		};
	},

	actions: {
		async loadLocations() {
			try {
				const locations = await axios.get("https://countriesnow.space/api/v0.1/countries");

				this.cities = locations.data;
			} catch (err) {
				throw err.data.error;
			}
		},
	},

	getters: {
		citiesStore(state) {
			return state.cities.data.map((location) => location.cities).flat(Infinity);
		},
	},
});
