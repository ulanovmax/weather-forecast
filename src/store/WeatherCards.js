import { defineStore } from "pinia";
import axios from "axios";
// import { getForecast } from "@/api/forecast.service.js";
import { useForecast } from "@/store/ForecastList.js";

export const useForecastCards = defineStore("ForecastCards", {
	state: () => {
		return {
			cards: [],
			mainLoading: false,
			error: false,
			duplicate: false,
		};
	},

	actions: {
		async getWeather(city) {
			this.mainLoading = true;

			try {
				const weather = await axios.get(
					`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3e9e0c88e77a6c7b422e45d43c267061`
				);

				// If duplicate
				if (this.cards.length) {
					this.cards.forEach((card) => {
						if (card.id === weather.data.id) {
							this.duplicate = true;
						} else {
							this.duplicate = false;
						}
					});
				}

				if (!this.duplicate) {
					const store = useForecast();
					await store.getForecast(city);
					const forecast = store.formattedForecast;

					this.cards.unshift({
						main: await weather.data.main,
						weather: await weather.data.weather,
						wind: await weather.data.wind,
						id: await weather.data.id,
						name: await weather.data.name,
						forecast: forecast,
						favourite: false,
					});
				}

				this.mainLoading = false;
			} catch (err) {
				this.error = true;
				this.mainLoading = false;
				throw err.data.error;
			}
		},

		// duplicated() {
		// 	this.duplicate = true;
		// },
	},

	getters: {
		cardsList(state) {
			return state.cards.length ? state.cards.slice(0, 5) : [];
		},
		errorState(state) {
			return state.error;
		},
	},
});
