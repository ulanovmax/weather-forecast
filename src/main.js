import { createApp, watch } from "vue";
import App from "./App.vue";

// Styles
import "./assets/styles/style.scss";

import router from "@/router";

// Pinia
import { createPinia } from "pinia";
const pinia = createPinia();

// Components
import VInput from "@/components/base/VInput.vue";
import VLoader from "@/components/loader/VLoader.vue";

createApp(App)
	.use(router)
	.use(pinia)
	.component("VInput", VInput)
	.component("VLoader", VLoader)
	.mount("#app");

// Local storage
watch(
	pinia.state,
	(state) => {
		if (state.WeatherCards) {
			localStorage.setItem("cards", JSON.stringify(state.WeatherCards.cards));
		}

		if (state.FavouritesStore) {
			localStorage.setItem("favourites", JSON.stringify(state.FavouritesStore.favourites));
		}
	},
	{ deep: true }
);
