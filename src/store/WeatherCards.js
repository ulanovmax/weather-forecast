import { defineStore } from "pinia";
import axios from "axios";
import { useForecast } from "@/store/ForecastList.js";

export const useWeatherCards = defineStore("ForecastCards", {
	state: () => {
		return {
			cards: [],
			mainLoading: false,
			error: false,
			duplicate: false,
			limit: 5,
			limitExceeded: false,
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
					const forecast = store.forecastList;

					console.log(forecast);

					this.cards.unshift({
						main: await weather.data.main,
						weather: await weather.data.weather,
						wind: await weather.data.wind,
						id: await weather.data.id,
						name: await weather.data.name,
						forecast,
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

		removeCard(card) {
			this.cards = this.cards.filter((curr) => curr.id !== card.id);
		},
	},
});
