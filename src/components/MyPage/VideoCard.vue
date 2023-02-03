<template>
    <a href="#" class="media-innr">
        <div class="media-pic">
            <figure class="img"><img :src="video?.link" alt="" /></figure>
            <p><span><img src="@/assets/icons/play-btn.svg" alt="" /></span> 3:10</p>    
        </div>
        <h5>{{video?.title}}</h5>
    </a>
</template>



<script>
    export default {
        name: 'VideoCard',
        props:{
            video: Object,
        }
    }
</script>