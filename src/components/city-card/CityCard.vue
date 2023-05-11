<template>
	<div class="city-card">
		<div class="nav-buttons">
			<button
				type="button"
				class="nav-buttons__item"
				:class="{ active: !showForecast }"
				@click="showForecast = false"
			>
				Today
			</button>

			<button
				type="button"
				class="nav-buttons__item"
				:class="{ active: showForecast }"
				@click="showForecast = true"
			>
				For 5 day
			</button>
		</div>

		<div class="city-card__wrapper">
			<div class="city-card__info">
				<div class="city-card__main">
					<p class="city-card__date">{{ formatDate() }}</p>

					<div class="city-card__wrapper">
						<div class="city-card__img">
							<img :src="weatherStates[weatherInfo[0].main]" alt="" />
						</div>
						<div class="city-card__heading">
							<span class="city-card__heading-temp">{{
								kelvToCels(mainInfo.temp)
							}}</span>
							<h2 class="city-card__heading-name">{{ city }}</h2>
							<p class="city-card__heading-desc">
								{{ weatherInfo[0].description }}
							</p>
						</div>
					</div>
				</div>

				<div class="stats">
					<div class="stats__item">
						<div class="stats__item-icon">
							<span class="material-symbols-outlined"> thermostat </span>
						</div>
						<div class="stats__heading">
							<p class="stats__item-value">
								{{ kelvToCels(mainInfo.feels_like) }}
							</p>
							<p class="stats__item-title">Feels like</p>
						</div>
					</div>

					<div class="stats__item">
						<div class="stats__item-icon">
							<span class="material-symbols-outlined"> humidity_mid </span>
						</div>
						<div class="stats__heading">
							<p class="stats__item-value">{{ mainInfo.humidity }} %</p>
							<p class="stats__item-title">Humidity</p>
						</div>
					</div>

					<div class="stats__item">
						<div class="stats__item-icon">
							<span class="material-symbols-outlined"> compress </span>
						</div>
						<div class="stats__heading">
							<p class="stats__item-value">{{ mainInfo.pressure }}</p>
							<p class="stats__item-title">Pressure</p>
						</div>
					</div>

					<div class="stats__item">
						<div class="stats__item-icon">
							<span class="material-symbols-outlined"> air </span>
						</div>
						<div class="stats__heading">
							<p class="stats__item-value">{{ windInfo.speed }} m/s</p>
							<p class="stats__item-title">wind</p>
						</div>
					</div>
				</div>
			</div>

			<div class="weather-board">
				<div class="board-box" :class="{ flipped: showForecast }">
					<div class="board-box__side board-box__side--back">
						<div class="forecast-list">
							<div
								class="forecast-list__item"
								v-for="item in forecast"
								:key="item.dt"
							>
								<img
									class="forecast-list__item-img"
									:src="weatherStates[item.weather[0].main]"
								/>
								<h3 class="forecast-list__item-temp">
									{{ kelvToCels(item.main.temp) }}
								</h3>
								<p class="forecast-list__item-day">
									{{ dayOfTheWeek(item.dt_txt) }}
								</p>
							</div>
						</div>
					</div>

					<div class="board-box__side board-box__side--front">
						<div class="city-card__graph-content">
							<img src="@public/images/Graph.svg" alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="controls">
			<div class="controls__item switch flex justify-center items-center mx-auto mb-24">
				<label class="switch-button">
					<input type="radio" :name="'city-' + city" checked />
					<span class="material-symbols-outlined"> sunny </span>
				</label>
				<label class="switch-button">
					<input type="radio" :name="'city-' + city" />
					<span class="material-symbols-outlined"> dark_mode </span>
				</label>
			</div>

			<div class="controls__item save-checkbox">
				<input type="checkbox" />

				<label class="container">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="feather feather-heart"
					>
						<path
							d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
						></path>
					</svg>
				</label>
			</div>

			<div class="controls__item controls-delete" @click="$emit('delete', true)">
				<span class="material-symbols-outlined"> delete </span>
			</div>
		</div>
	</div>
</template>

<script setup>
// Props
import { ref } from "vue";

defineProps({
	weatherInfo: {
		type: [Object, Array],
		required: true,
	},

	mainInfo: {
		type: [Object, Array],
		required: true,
	},

	windInfo: {
		type: [Object, Array],
	},

	city: {
		type: String,
		required: true,
	},

	forecast: {
		type: [Array, Object],
	},
});

// console.log(props.forecast);

// Controls
const showForecast = ref(false);

const weatherStates = {
	Thunderstorm: `${location.href}public/images/states/thunderstorm.svg`,
	Clear: `${location.href}public/images/states/clear.svg`,
	Rain: `${location.href}public/images/states/rain.svg`,
	Clouds: `${location.href}public/images/states/clouds.svg`,
};

const kelvToCels = (kelv) => Math.round(kelv - 273.15) + "°";

const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

const dayOfTheWeek = (date) => days[new Date(date).getDay()];

// Format Date
function formatDate() {
	const date = new Date();

	// prettier-ignore
	const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',];

	const dn = date.getDay();
	const dm = date.getMonth();
	const year = new Date().getFullYear();
	const day = new Date().getDate();

	return `${days[dn]}, ${day} ${monthNames[dm]} ${year}`;
}
</script>

<style scoped lang="scss">
@import "city-card";
</style>
