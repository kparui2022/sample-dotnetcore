<template>
  <div
    class="thumbs"
    v-click-outside="() => ((show = false), (toggle = false))"
  >
    <div class="imgs-area" @click="show = !show">
      <img src="../assets/images/imagethumb1.png" alt="img" />
    </div>
    <div class="overlay" v-if="show"></div>
    <div class="optionmenu" v-if="show">
      <span @click="toggle = !toggle"
        ><img src="../assets/icons/ovel-icon.svg" alt="play"
      /></span>
      <div class="dropstxt" v-show="toggle">
        <p>Delete</p>
      </div>
    </div>
  </div>
</template>

<script>
import vClickOutside from "click-outside-vue3";
export default {
  name: "ImageThumb",
  components: {},
  data() {
    return {
      show: false,
      toggle: false,
    };
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },
};
</script>