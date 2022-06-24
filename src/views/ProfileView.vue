<template>
	<ion-page>
		<Z-Header :leftIcon="icons.personAdd" :rightIcon="icons.timerOut">
			<p class="flex justify-center">{{name}}
				<ion-icon :icon="icons.chevronDownOut">
			</ion-icon></p>
		</Z-Header>

		<ion-content>
			<ion-grid class="border-0 border-b border-gray-300 border-solid">
				<ion-row>
					<ion-col>
						<ion-avatar class="w-[80px] h-[80px]">
							<img :src="profilePic" />
						</ion-avatar>
					</ion-col>
					<ion-col size="9" class="ion-no-padding">
						<ion-grid>
							<ion-row>
								<ion-col class="flex flex-col items-center">
									<b>{{posts}}</b>
									<div class="m-0">posts</div> 
								</ion-col>
								<ion-col class="flex flex-col items-center">
									<b>{{followers}}</b>
									<div>followers</div> 
								</ion-col>
								<ion-col class="flex flex-col items-center">
									<b>{{following}}</b>
									<div>following</div> 
								</ion-col>
							</ion-row>
							<ion-row>
								<ion-col size="9">
									<ion-button size="small" class="w-full border border-solid rounded border-gray-300" fill="clear" strong="true" color="dark">Edit Profile</ion-button>
								</ion-col>
								<ion-col class="flex justify-center">
									<ion-button size="small" class="border border-solid rounded border-gray-300" fill="clear" strong="true" color="dark">
										<ion-icon :icon="icons.settingsOut"></ion-icon>
									</ion-button>
								</ion-col>
							</ion-row>
						</ion-grid>
					</ion-col>
				</ion-row>
			</ion-grid>

			<ion-segment mode="md" class="h-[40px]">
				<ion-segment-button value="apps" class="min-h-[42px]">
					<ion-icon :icon="icons.appsOut"></ion-icon>
				</ion-segment-button>
				<ion-segment-button value="list" class="min-h-[42px]">
					<ion-icon :icon="icons.listOut"></ion-icon>
				</ion-segment-button>
				<ion-segment-button value="persone" class="min-h-[42px]">
					<ion-icon :icon="icons.personOut"></ion-icon>
				</ion-segment-button>
				<ion-segment-button value="bookmark" class="min-h-[42px]">
					<ion-icon :icon="icons.bookmarkOut"></ion-icon>
				</ion-segment-button>
			</ion-segment>

			<ion-row>
				<ion-col v-for="thumb in thumbs" :key="thumb" size="4" class="p-[0.6px]">
					<img :src="thumb" class="h-full">
				</ion-col>
			</ion-row>
		</ion-content>
	</ion-page>
</template>

<script>
import ZHeader from "@/components/ZHeader.vue";

export default {
	components: {ZHeader},

	data() {
		return {
			name: "loganpaul",
			profilePic: process.env.VUE_APP_ORIG_ASSETS + "samples/avatars/loganpaul.jpg",
			posts: 757,
			followers: "4.6M",
			following: 151,
			thumbs:  [...Array(21)].map((obj, i) => process.env.VUE_APP_ORIG_ASSETS + "samples/thumbs/" + ((i+1) % 11) + ".jpg")
		}
	}
}
</script>