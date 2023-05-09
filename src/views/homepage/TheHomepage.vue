<template>
	<section class="hero-screen">
		<div class="cont">
			<div class="hero-screen__heading">
				<h1 class="hero-screen__heading-title">Weatherly</h1>
				<p class="hero-screen__heading-text">
					A simple and elegant app that shows you the current weather and forecasts for
					any location.
				</p>
			</div>

			<div class="search-block">
				<v-input
					v-model="searchValue"
					:icon-name="'search'"
					placeholder="Search your city"
				></v-input>
			</div>
		</div>
	</section>

	<section class="weather-info">
		<div class="cont">
			<div class="city-card">
				<div class="nav-buttons">
					<button type="button" class="nav-buttons__item active">Today</button>

					<button type="button" class="nav-buttons__item">For 5 day</button>
				</div>
				<div class="city-card__wrapper">
					<p class="city-card__date">Senin, 20 December 2021</p>
				</div>

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

				<div class="stats">
					<div class="stats__item"></div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import { ref } from "vue";

const searchValue = ref("");
</script>

<style scoped lang="scss">
@import "homepage";

.city-card {
	padding: 30px;
	border-radius: 24px;
	background: rgb(255 255 255 / 20%);
	backdrop-filter: blur(15px);
	position: relative;

	.nav-buttons {
		display: flex;
		align-items: center;
		margin-bottom: 20px;

		&__item {
			color: var(--white);
			padding: 8px;
			border-radius: 8px;
			font-size: 16px;
			font-family: var(--font-main);
			transition: 0.3s ease;
			background: rgba(18, 24, 41, 0.5);
			font-weight: 600;
			cursor: pointer;

			&.active {
				background: var(--grey);
			}

			&:not(:last-of-type) {
				margin-right: 10px;
			}
		}
	}

	&__wrapper {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 20px;
	}

	&__img {
		width: 120px;

		img {
			width: 100%;
			height: 100%;
			object-fit: contain;
		}
	}

	&__heading {
		&-temp {
			margin-bottom: 8px;
			font-size: 24px;
		}
	}

	.save-checkbox {
		position: absolute;
		right: 30px;
		top: 30px;
	}
}

label {
	background-color: var(--white);
	display: flex;
	align-items: center;
	gap: 14px;
	padding: 10px;
	cursor: pointer;
	user-select: none;
	border-radius: 10px;
	box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
	color: #ff7171;
}

input {
	display: none;
}

input:checked + label svg {
	fill: #ff7171;
	stroke: #ff7171;
	animation: heartButton 1s;
}

@keyframes heartButton {
	0% {
		transform: scale(1);
	}

	25% {
		transform: scale(1.3);
	}

	50% {
		transform: scale(1);
	}

	75% {
		transform: scale(1.3);
	}

	100% {
		transform: scale(1);
	}
}
</style>
