<template>
    <ion-item>
        <ion-avatar slot="start">
            <img :src="imgSrc" />
        </ion-avatar>
        <ion-label>
            <h3><b>{{name}}</b></h3>
            <p v-if="location" class="flex font-light items-center">{{location}}
                <ion-icon :icon="icons.chevronForwardOut"></ion-icon>
            </p>
        </ion-label>
        <ion-icon class="text-[20px]" slot="end" :icon="icons.ellipsis" @click="$emit('dotsClicked')"></ion-icon>
    </ion-item>
</template>

<script>
export default {
    props: ["imgSrc", "name", "location"]
}
</script>
