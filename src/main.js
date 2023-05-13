import { createApp } from "vue";
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

// import FusionCharts from "fusioncharts";

// register VueFusionCharts component

createApp(App)
	.use(router)
	.use(pinia)
	.component("VInput", VInput)
	.component("VLoader", VLoader)
	.mount("#app");
