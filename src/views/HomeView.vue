<template>
	 <ion-page>
		<Z-Header :leftIcon="icons.cameraOut" :rightIcon="icons.paperPlaneOut" ref="header">
			<img class="w-[120px]" :src="assets('instagram-logo.png')">
		</Z-Header>

		<ion-content>
			<ion-refresher slot="fixed" @ionRefresh="refresh">
				<ion-refresher-content></ion-refresher-content>
			</ion-refresher>

			<section id="stories" class="bg-[#fbfafa]">
				<ion-item class="text-sm mb-1" lines="none" color="light">
					<ion-label slot="start" class="font-bold">Stories</ion-label>
					<ion-label slot="end" class="flex items-center" color="medium">
						<ion-icon :icon="icons.caretFor"></ion-icon>
						Watch All
					</ion-label>
				</ion-item>
				
				<A-Profiles-Scroll class="text-sm border-0 border-b border-gray-300 border-solid" :avatars="profilesOriginal"/>
			</section>

			<section v-for="profile in profiles" :key="profile" :id="profile.name">
				<A-Post-Card v-if="profile.posts" v-bind="profile" />
			</section>
		</ion-content> 
	</ion-page>
</template>

<script>
import ZHeader from "@/components/ZHeader.vue";
import AProfilesScroll from "@/components/AProfilesScroll.vue";
import APostCard from "@/components/APostCard.vue";

export default {
	components: {ZHeader, AProfilesScroll, APostCard},

	methods: {
		refresh(e) {
			setTimeout(() => {
				for (var i = this.profiles.length - 1; i > 0; i--) { //Shufle to pretend refresh
					var j = Math.floor(Math.random() * (i + 1));
					var temp = this.profiles[i];
					this.profiles[i] = this.profiles[j];
					this.profiles[j] = temp;
				}
				if (e && e.target)
					e.target.complete();
			}, 500);
		}
	},

	mounted() {
		this.profilesOriginal = [...this.profiles];
		this.refresh();
	},

	data() {
		return {
			profilesOriginal: [], //For mock data purposes only...
			profiles: [
				{
					name: "mateklemp", 
					imgSrc: this.assets("avatars/mateklemp.jpg"),
					posts: [
						{
							imgSrc: this.assets("posts/mateklemp.jpg"),
							likedBy: "Liked by <b>mateklemp</b> and <b>22 others</b>",
							text: "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.",
							tags: ["#homolka", "@chatahomolka"],
							postTime: "1 DAY AGO"
						}
					]
				},
				{
					imgSrc: this.assets("avatars/teamklemp.jpg"),
					name: "teamklemp", 
					location: "Homolka",
					posts: [
						{
							imgSrc: this.assets("posts/teamklemp.jpg"),
							likedBy: "Liked by <b>mateklemp</b> and <b>22 others</b>",
							text: "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.",
							tags: ["#homolka", "@chatahomolka"],
							postTime: "1 DAY AGO"
						}
					]
				},
				{
					name: "bhadbhabie", 
					imgSrc: this.assets("avatars/bhadbhabie.jpg"),
					location: "Melrose Avenue",
					posts: [
						{
							imgSrc: this.assets("posts/bhadbhabie.jpg"),
							likedBy: "Liked by <b>mateklemp</b> and <b>22 others</b>",
							text: "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.",
							tags: ["#homolka", "@chatahomolka"],
							postTime: "1 DAY AGO"
						}
					]
				},
				{
					name: "loganpaul", 
					imgSrc: this.assets("avatars/loganpaul.jpg"),
					location: "Dubai, United Arab Emirates",
					posts: [
						{
							imgSrc: this.assets("posts/loganpaul.jpg"),
							likedBy: "Liked by <b>mateklemp</b> and <b>22 others</b>",
							text: "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.",
							tags: ["#homolka", "@chatahomolka"],
							postTime: "1 DAY AGO"
						}
					]
				},
				{
					name: "lenkamie", 
					imgSrc: this.assets("avatars/lenkamie.jpg"),
				},
				{
					name: "elonmusk", 
					imgSrc: this.assets("avatars/elonmusk.jpg"),
					posts: [
						{
							imgSrc: this.assets("posts/elonmusk.jpg"), 
							likedBy: "Liked by <b>mateklemp</b> and <b>22 others</b>",
							text: "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.",
							tags: ["#homolka", "@chatahomolka"],
							postTime: "1 DAY AGO"
						}
					]
				},
				{
					name: "expl0ited", 
					imgSrc: this.assets("avatars/expl0ited_.jpg"),
					location: "Bratislava",
					posts: [
						{
							imgSrc: this.assets("posts/expl0ited_.jpg"),
							likedBy: "Liked by <b>mateklemp</b> and <b>22 others</b>",
							text: "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.",
							tags: ["#homolka", "@chatahomolka"],
							postTime: "1 DAY AGO"
						}
					]
				},
			]
		}
	}
}
</script>

<style lang="scss" scoped>
</style>