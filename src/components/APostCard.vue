<template>
    <ZProfileCard :imgSrc="imgSrc" :name="name" :location="location" />
    <img :src="posts[0].imgSrc" class="w-full"/>
    <div class="m-4 font-light text-sm">
        <ion-item class="ion-no-padding ion-inner-p-0 text-lg" lines="none">
            <ion-icon class="mr-2" :icon="icons.heartOut"></ion-icon>
            <ion-icon class="mr-2" :icon="icons.chatBubbleOut"></ion-icon>
            <ion-icon class="mr-2" :icon="icons.paperPlaneOut"></ion-icon>
            <ion-icon slot="end" :icon="icons.bookmarkOut"></ion-icon>
        </ion-item>
        <p v-html="posts[0].likedBy"></p>
        <p>
            <b>{{name}}</b>
            {{posts[0].text}}
            <a v-for="tag in posts[0].tags" :key="tag" href="#">{{tag}}&nbsp;</a>
        </p>
        <p class="ion-text text-xs">{{posts[0].postTime}} · <span class="text-black">SEE TRANSLATION</span></p>
    </div>
</template>

<script>
import ZProfileCard from "@/components/ZProfileCard.vue";

export default {
    components: {ZProfileCard},

    props: {
        imgSrc: {
            type: String
        }, 

        name: {
            type: String
        }, 

        location: {
            type: String
        },

        posts: {
            type: Array
        }
    }
}
</script>
