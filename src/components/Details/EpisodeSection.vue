<template>
    <div class="lists episode-list tab-scroll">
        <div class="outerside">
            <ImageTextCard />
            <ImageTextCard />
            <ImageTextCard />
        </div>
        <a href="#" class="more-content more-ct">
            <img src="@/assets/icons/right-arrow-solid.svg" alt="more"
                class="white-image">
            <img src="@/assets/icons/solid-right-arrow.svg" alt="more"
                class="red-image">
        </a>
    </div>
</template>


<script>
import ImageTextCard from '@/components/ImageTextCard.vue';
    export default {
    name: "EpisodeSection",
    components: { ImageTextCard }
}
</script>
