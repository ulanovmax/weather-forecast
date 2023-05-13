import { defineStore } from "pinia";
import axios from "axios";

export const useForecast = defineStore("ForecastList", {
	state: () => {
		return {
			forecastList: [],
			loading: false,
		};
	},

	actions: {
		async getForecast(city) {
			this.loading = true;

			try {
				const forecast = await axios.get(
					`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=3e9e0c88e77a6c7b422e45d43c267061`
				);

				const filteredForecast = [];

				for (let i = 0; i < forecast.data.list.length; i += 8) {
					const dayForecast = forecast.data.list.slice(i, i + 8).map((item) => {
						return {
							temp: item.main.temp,
							dt: item.dt_txt,
							state: item.weather[0].main,
						};
					});

					/* prettier-ignore */
					const dayAverage = dayForecast.reduce((acc, curr) => acc + curr.temp, 0) / dayForecast.length;

					filteredForecast.push({
						average: dayAverage,
						dt: dayForecast[0].dt,
						state: dayForecast[0].state,
					});

					this.forecastList = filteredForecast;

					this.loading = false;
				}
			} catch (err) {
				throw err.data.error;
			}
		},
	},
});
