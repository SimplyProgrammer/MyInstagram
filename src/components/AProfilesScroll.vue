<template>
    <div class="flex overflow-x-visible overflow-y-hidden">
        <div v-for="avatar in avatars" :key="avatar" class="flex flex-col items-center px-3">
            <ion-avatar class="w-[68px] h-[68px] border border-solid ion-text p-[3px]">
                <img :src="avatar.imgSrc"/>
            </ion-avatar>
            <p class="ion-text my-2">{{avatar.name}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        avatars: {
            type: Array
        }
    }
}
</script>
