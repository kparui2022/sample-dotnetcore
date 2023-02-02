<template>
  <a @click="$router.push(RedirectLink)" class="image-innr">
    <figure class="hgt">
      <img :src="poster.link" alt="" />
    </figure>
    <slot/>
  </a>
</template>


<script>
export default {
  name: "PosterCard",
  props: {
    RedirectLink: String,
    poster: Object,
  },
};
</script>