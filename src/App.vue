<template>
  <div :class="[currentTheme]">
    <div class="body">
      <!-- header -->
      <Header />
      <!-- <HeaderBeforeLogin /> -->
      <!-- body -->
      <!-- <RouterView /> -->
      <div class="innr-sec-wrapper">
          <router-view :key="$route.path" v-slot="{ Component }">
            <transition name="route" mode="out-in">
              <component :is="Component" />
            </transition>
          </router-view>
      </div>
      <!-- body -->
      <!-- Footer -->
      <Footer @on-current-theme-change="setTheme" />
    </div>
  </div>
</template>

<script>
// import { RouterLink, RouterView } from "vue-router";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { provide } from "vue";
import { inject } from "vue";
import common from "./store/common";
// import HeaderBeforeLogin from "@/components/HeaderBeforeLogin.vue";
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    // HeaderBeforeLogin
},
  
  data() {
    return {
      currentTheme: "theme-dark"
    };
  },
  setup() {
    provide("common", common);
  },
  methods: {
    setTheme(newTheme) {
      this.currentTheme = newTheme;
    }
  }
 

}

</script>

<style lang="scss">
@import "@/assets/styles/style.scss";
</style>