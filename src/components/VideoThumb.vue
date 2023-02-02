<template>
    <div class="video-thumb" v-click-outside="() => (show = false,toggle=false)">
        <div class="vidthumb">
            <div class="vidposter" @click='show = !show'>
                <img src="../assets/images/h1.png" alt="video" class="video-img"/>
                <span class="defaults"><img src="../assets/icons/vid-tags.svg"/></span>
                <div class="play-btn">
                    <img src="../assets/icons/play.svg" alt="play">
                    <p>2:10</p>
                </div>
            </div>
            <div class="overlay" v-if="show"></div>
            <div class="optionmenu" v-if="show">
                <span  @click='toggle = !toggle'><img src="../assets/icons/ovel-icon.svg" alt="play"></span>
                <div class="dropstxt" v-show='toggle'>
                    <span>Set as official trailer</span>
                    <span>Delete</span>
                </div>
            </div>
        </div>
        <p>Title Title Title Title Title Title Title Title... </p>
    </div>
</template>

<script>
import vClickOutside from "click-outside-vue3";

    export default {
        name: 'VideoThumb',
        components: {            
        },  
        data () {
            return {
                show: false,
                toggle: false
            }
        },
        directives: {
            clickOutside: vClickOutside.directive,
        },
    }
</script>