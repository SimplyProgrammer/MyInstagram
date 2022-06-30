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
					imgSrc: this.assets("avatars/mateklemp.jpg")
				},
				{
					imgSrc: this.assets("avatars/teamklemp.jpg"),
					name: "teamklemp"
				},
				{
					name: "bhadbhabie", 
					imgSrc: this.assets("avatars/bhadbhabie.jpg")
				},
				{
					name: "loganpaul", 
					imgSrc: this.assets("avatars/loganpaul.jpg")
				},
				{
					name: "lenkamie", 
					imgSrc: this.assets("avatars/lenkamie.jpg"),
				},
				{
					name: "elonmusk", 
					imgSrc: this.assets("avatars/elonmusk.jpg")
				},
				{
					name: "expl0ited", 
					imgSrc: this.assets("avatars/expl0ited_.jpg"),
				}
			]
		}
	}
}
</script>