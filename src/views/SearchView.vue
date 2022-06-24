<template>
	<ion-page>
		<Z-Header class="ion-no-border">
			<template #toolbar>
				<ion-searchbar placeholder="Search" class="p-0"></ion-searchbar>
			</template>
		</Z-Header>
		<ion-content>
			<A-Profiles-Scroll class="text-sm pt-3 bg-[#fbfafa] border-0 border-b border-gray-300 border-solid" :avatars="profiles"/>
		</ion-content>
	</ion-page>
</template>

<script>
import ZHeader from "@/components/ZHeader.vue";
import AProfilesScroll from "@/components/AProfilesScroll.vue";

export default {
	components: {ZHeader, AProfilesScroll},

	data() {
		return {
			profiles: [
				{
					name: "mateklemp", 
					imgSrc: process.env.VUE_APP_ORIG_ASSETS + "samples/avatars/mateklemp.jpg"
				},
				{
					imgSrc: process.env.VUE_APP_ORIG_ASSETS + "samples/avatars/teamklemp.jpg",
					name: "teamklemp"
				},
				{
					name: "bhadbhabie", 
					imgSrc: process.env.VUE_APP_ORIG_ASSETS + "samples/avatars/bhadbhabie.jpg"
				},
				{
					name: "loganpaul", 
					imgSrc: process.env.VUE_APP_ORIG_ASSETS + "samples/avatars/loganpaul.jpg"
				},
				{
					name: "lenkamie", 
					imgSrc: process.env.VUE_APP_ORIG_ASSETS + "samples/avatars/lenkamie.jpg",
				},
				{
					name: "elonmusk", 
					imgSrc: process.env.VUE_APP_ORIG_ASSETS + "samples/avatars/elonmusk.jpg"
				},
				{
					name: "expl0ited", 
					imgSrc: process.env.VUE_APP_ORIG_ASSETS + "samples/avatars/expl0ited_.jpg",
				}
			]
		}
	}
}
</script>