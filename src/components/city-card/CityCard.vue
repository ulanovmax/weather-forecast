<template>
	<div class="city-card">
		<div class="nav-buttons">
			<button type="button" class="nav-buttons__item active">Today</button>

			<button type="button" class="nav-buttons__item">For 5 day</button>
		</div>

		<div class="city-card__wrapper">
			<div class="city-card__info">
				<div class="city-card__main">
					<p class="city-card__date">Senin, 20 December 2021</p>

					<div class="city-card__wrapper">
						<div class="city-card__img">
							<img src="@public/images/logo.svg" alt="" />
						</div>
						<div class="city-card__heading">
							<span class="city-card__heading-temp">18º C</span>
							<h2 class="city-card__heading-name">Odesa</h2>
							<p class="city-card__heading-desc">light rain</p>
						</div>
					</div>
				</div>
				<div class="stats">
					<div class="stats__item">
						<div class="stats__item-icon">
							<span class="material-symbols-outlined"> thermostat </span>
						</div>
						<div class="stats__heading">
							<p class="stats__item-value">29º C</p>
							<p class="stats__item-title">Feels like</p>
						</div>
					</div>

					<div class="stats__item">
						<div class="stats__item-icon">
							<span class="material-symbols-outlined"> humidity_mid </span>
						</div>
						<div class="stats__heading">
							<p class="stats__item-value">80%</p>
							<p class="stats__item-title">Humidity</p>
						</div>
					</div>

					<div class="stats__item">
						<div class="stats__item-icon">
							<span class="material-symbols-outlined"> compress </span>
						</div>
						<div class="stats__heading">
							<p class="stats__item-value">1015</p>
							<p class="stats__item-title">Pressure</p>
						</div>
					</div>

					<div class="stats__item">
						<div class="stats__item-icon">
							<span class="material-symbols-outlined"> air </span>
						</div>
						<div class="stats__heading">
							<p class="stats__item-value">2.66 km/h</p>
							<p class="stats__item-title">wind</p>
						</div>
					</div>
				</div>
			</div>

			<div class="weather-board">
				<div class="board-box">
					<div class="board-box__side board-box__side--back">
						<div class="forecast-list">
							<div class="forecast-list__item" v-for="i in 5" :key="i">
								<img
									class="forecast-list__item-img"
									src="@public/images/states/partly-cloudy.svg"
									alt=""
								/>
								<h3 class="forecast-list__item-temp">20º</h3>
								<p class="forecast-list__item-day">Mon</p>
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
			<div class="switch flex justify-center items-center mx-auto mb-24">
				<label class="switch-button">
					<input type="radio" name="content" checked />
					<span class="material-symbols-outlined"> sunny </span>
				</label>
				<label class="switch-button">
					<input type="radio" name="content" />
					<span class="material-symbols-outlined"> dark_mode </span>
				</label>
			</div>

			<div class="save-checkbox">
				<input
					type="checkbox"
					id="favorite"
					name="favorite-checkbox"
					value="favorite-button"
				/>

				<label for="favorite" class="container">
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
		</div>
	</div>
</template>

<script setup></script>

<style scoped lang="scss">
@import "city-card";
</style>
