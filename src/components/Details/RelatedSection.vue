<template>
    <div class="lists tab-scroll">
        <div class="outerside">
            <CardOne />
            <CardOne />
            <CardOne />
        </div>
        <a href="#" class="more-content more-ct">
            <img src="@/assets/icons/right-arrow-solid.svg" alt="more" class="white-image">
            <img src="@/assets/icons/solid-right-arrow.svg" alt="more" class="red-image">
        </a>
    </div>
</template>


<script>
    import CardOne from "@/components/CardOne.vue";
    export default {
        name: 'RelatedSection',
        components: {
            CardOne,
        },
    }
</script>