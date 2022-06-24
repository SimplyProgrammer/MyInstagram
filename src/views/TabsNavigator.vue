<template>
	<ion-tabs>
		<ion-router-outlet></ion-router-outlet>
		<ion-tab-bar slot="bottom" @ionTabsDidChange="onTabChange">
			<ion-tab-button tab="home" href="/home">
				<ion-icon :icon="icons.home"></ion-icon>
			</ion-tab-button>
			<ion-tab-button tab="search" href="/search">
				<ion-icon :icon="icons.search"></ion-icon>
			</ion-tab-button>
			<ion-tab-button tab="camera" href="/camera">
				<ion-icon :icon="icons.addCircle"></ion-icon>
			</ion-tab-button>
			<ion-tab-button tab="followers" href="/followers">
				<ion-icon :icon="icons.heart"></ion-icon>
			</ion-tab-button>
			<ion-tab-button tab="profile" href="/profile">
				<ion-icon :icon="icons.person"></ion-icon>
			</ion-tab-button>
		</ion-tab-bar>
	</ion-tabs>
</template>

<script>
export default {
	methods: {
		onTabChange(ev) {
			console.log(ev);
		}
	}
}
</script>