<template>
	<ion-page>
		<ion-header>
			<ion-toolbar color="light" class="ion-no-padding">
				<ion-segment mode="md" value="You">
					<ion-segment-button value="following">
						<ion-label>Following</ion-label>
					</ion-segment-button>
					<ion-segment-button value="You">
						<ion-label>You</ion-label>
					</ion-segment-button>
				</ion-segment>
			</ion-toolbar>
		</ion-header>

		<ion-content>
			<ion-list>
				<ion-item v-for="message in messages" :key="message">
					<ion-avatar slot="start">
						<img :src="message.imgSrc" />
					</ion-avatar>
					<p class="my-2 text-sm">
						<span v-html="message.text"></span>
						<span class="ion-text">&nbsp;{{message.distance}}m</span>
					</p>
				</ion-item>
			</ion-list>
		</ion-content>
	</ion-page>
</template>

<script>
export default {
	mounted() {
		for (let i = 0; i < 25; i++) { //Mock data generator
			const message = this.messages[i % this.messages.length];
			message.distance = Math.round(Math.random() * 100 + 1);
			this.messages.push(message);
		}
	},

	data() {
		return {
			messages: [
				{
					text: "<b>mateklemp</b> compented on <b>bhadbhabie</b> and <b>4 others</b>.", 
					imgSrc: this.assets("avatars/mateklemp.jpg"),
					distance: 64
				},
				{
					text: "<b>mateklemp</b> compented on <b>bhadbhabie</b> and <b>6 others</b>.", 
					imgSrc: this.assets("avatars/teamklemp.jpg"),
					distance: 64
				},
				{
					text: "<b>mateklemp</b> compented on <b>bhadbhabie</b> and <b>2 others</b>.", 
					imgSrc: this.assets("avatars/bhadbhabie.jpg"),
					distance: 64
				},
				{
					text: "<b>mateklemp</b> compented on <b>bhadbhabie</b> and <b>6 others</b>.",  
					imgSrc: this.assets("avatars/loganpaul.jpg"),
					distance: 64
				},
				{
					text: "<b>mateklemp</b> compented on <b>bhadbhabie</b> and <b>2 others</b>.",  
					imgSrc: this.assets("avatars/lenkamie.jpg"),
					distance: 64
				},
				{
					text: "<b>mateklemp</b> compented on <b>bhadbhabie</b> and <b>2 others</b>.",  
					imgSrc: this.assets("avatars/elonmusk.jpg"),
					distance: 64
				},
				{
					text: "<b>mateklemp</b> compented on <b>bhadbhabie</b> and <b>2 others</b>.",  
					imgSrc: this.assets("avatars/expl0ited_.jpg"),
					distance: 64
				}
			]
		}
	}
}
</script>