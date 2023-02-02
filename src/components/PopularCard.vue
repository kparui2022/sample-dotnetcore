<template>
  <a @click="$router.push(RedirectLink)" class="list-content">
    <div class="list-img">
      <img src="@/assets/images/aw-1.png" alt="image" />
    </div>
    <div class="pop-count">
      <span>
        <h3>Jurassic World Dominion</h3>
        <div class="startxt">
          <div class="md-star">
            <img src="@/assets/icons/star.svg" alt="star" />
            <img src="@/assets/icons/star.svg" alt="star" />
            <img src="@/assets/icons/star.svg" alt="star" />
            <img src="@/assets/icons/star.svg" alt="star" />
            <img src="@/assets/icons/outline-star.svg" alt="star" />
          </div>
          <span>8.5</span>
        </div>
      </span>
    </div>

    <div class="news-date">
      <p>Jun 20, 2022 <span>67 episodes</span></p>
    </div>
  </a>
</template>


<script>
export default {
  name: "PopularCard",
  props: {
    RedirectLink: String,
  },
};
</script>