import { createApp } from "vue";
import App from "./App.vue";

// Styles
import "./assets/styles/style.scss";

import router from "@/router";

// Components
import VInput from "@/components/base/VInput.vue";

createApp(App).use(router).component("VInput", VInput).mount("#app");
