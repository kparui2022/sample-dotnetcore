<template>
    <div class="image-innr">
        <a href="#"><img :src="image.link" alt="" /></a>
    </div>
</template>

<script>
    export default {
        name: 'ImageCard',
        props:{
            image: Object
        }
    }
</script>