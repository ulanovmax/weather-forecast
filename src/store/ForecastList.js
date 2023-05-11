import { defineStore } from "pinia";
import axios from "axios";

export const useForecast = defineStore("ForecastList", {
	state: () => {
		return {
			forecast: [],
			loading: false,
		};
	},

	actions: {
		async getForecast(city) {
			try {
				const forecast = await axios.get(
					`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=3e9e0c88e77a6c7b422e45d43c267061`
				);

				this.forecast = forecast.data.list;
			} catch (err) {
				throw err.data.error;
			}
		},
	},

	getters: {
		formattedForecast(state) {
			return state.forecast.filter((element, index) => (index + 1) % 8 === 0);
		},
	},
});
