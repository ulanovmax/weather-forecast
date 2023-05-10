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

createApp(App).use(router).use(pinia).component("VInput", VInput).mount("#app");
