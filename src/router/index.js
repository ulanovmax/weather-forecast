import { createRouter, createWebHistory } from "vue-router";

import TheHomepage from "@/views/homepage/TheHomepage.vue";
import FavouritesPage from "@/views/favourites/FavouritesPage.vue";

const routes = [
	{ path: "/", name: "home", component: TheHomepage },
	{
		path: "/favourites",
		name: "favourites",
		component: FavouritesPage,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
