import { defineStore } from "pinia";
import axios from "axios";

export const useForecastCards = defineStore("ForecastCards", {
	state: () => {
		return {
			cards: [],
			loading: false,
		};
	},

	actions: {
		async getWeather(city) {
			this.loading = true;

			try {
				const forecast = await axios.get(
					`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3e9e0c88e77a6c7b422e45d43c267061`
				);

				this.cards.push({
					main: await forecast.data.main,
					weather: await forecast.data.weather,
					wind: await forecast.data.wind,
					id: await forecast.data.id,
					name: await forecast.data.name,
				});

				console.log(forecast.data);

				this.loading = false;
			} catch (err) {
				throw err.data.error;
			}
		},
	},

	getters: {
		cardsList(state) {
			return state.cards.length ? state.cards.slice(0, 5) : [];
		},
	},
});
