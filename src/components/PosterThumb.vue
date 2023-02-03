<template>
    <div class="thumbs" v-click-outside="() => (shows = false,shows=false)">
        <div class="imgs-area" @click='shows = !shows'>
            <img src="../assets/images/aw-7.png" alt="img">
            <span class="defaults"><img src="../assets/icons/img-tags.svg"/></span>
        </div>
        <div class="overlay" v-if="shows"></div>
        <div class="optionmenu" v-if="shows">
            <span @click='toggle = !toggle'><img src="../assets/icons/ovel-icon.svg" alt="play"></span>
            <div class="dropstxt" v-show='toggle'>
                <p>Set as main poster</p>
                <p>Delete</p>
            </div>
        </div>
    </div>    
</template>

<script>
import vClickOutside from "click-outside-vue3";
    export default {
        name: 'PosterThumb',
        components: {
            
        },  
        data () {
        return {
            shows: false,
            toggle: false
        }
        },
        directives: {
            clickOutside: vClickOutside.directive,
        },
    }
</script>