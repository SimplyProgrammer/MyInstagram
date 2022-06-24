import { createRouter, createWebHistory } from "@ionic/vue-router";
import TabsNavigator from "../views/TabsNavigator.vue";
import HomeView from "../views/HomeView.vue"
import SearchView from "../views/SearchView.vue"
import CameraView from "../views/CameraView.vue"
import FollowersView from "../views/FollowersView.vue"
import ProfileView from "../views/ProfileView.vue"
import NotFound from "../views/NotFound.vue"

const routes = [
	{
		path: "",
		redirect: "/home"
	},
	{
		path: "",
		component: TabsNavigator,
		children: [
			{
				path: "/home",
				name: "HomeView",
				component: HomeView
			},
			{
				path: "/search",
				name: "SearchView",
				component: SearchView
			},
			{
				path: "/camera",
				name: "CameraView",
				component: CameraView
			},
			{
				path: "/followers",
				name: "FollowersView",
				component: FollowersView
			},
			{
				path: "/profile",
				name: "ProfileView",
				component: ProfileView
			},
			{
				path: "/:catchAll(.*)",
				name: "NotFound",
				component: NotFound
			}
		]
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

export default router
