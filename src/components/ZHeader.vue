<template>
	<ion-header>
		<ion-toolbar color="light">
			<ion-icon v-if="leftIcon" slot="start" :icon="leftIcon" @click="$emit('leftIconClicked')"></ion-icon>
			<ion-title>
				<slot></slot>
			</ion-title>
			<slot name="toolbar"></slot>
			<ion-icon v-if="rightIcon" slot="end" :icon="rightIcon" @click="$emit('endIconClicked')"></ion-icon>
		</ion-toolbar>
	</ion-header>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			default: ""
		},

		titleImg: {
			type: String,
			default: ""
		},

		leftIcon: {
			type: String,
		},

		rightIcon: {
			type: String,
		}
	}
}
</script>

<style lang="scss" scoped>
ion-toolbar {
	// height: 54px !important;
	// max-height: 54px !important;
	// min-height: 54px !important;
	--padding-start: 10px;
	--padding-end: 10px;
	--padding-top: 0px;
	--padding-bottom: 0px;

	ion-icon {
		width: 36px;
		height: 32px;
		transition: 0.1s;

		&:active {
			filter: contrast(5%);
		}
	}
}
</style>