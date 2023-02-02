<template>
  <a @click="$router.push(RedirectLink)">
    <figure><img src="@/assets/images/award1.png" alt="award" /></figure>
    <div class="award-right-content">
      <h3>
        Busan International Film Festival Busan International Film Festival
      </h3>
      <div class="award-detail">
        <div class="inner">
          <span>Founded</span>
          <p>Jun 20, 2022</p>
        </div>
        <div class="inner">
          <span>Location</span>
          <p>Korea, Busan</p>
        </div>
        <div class="inner">
          <span>Website</span>
          <p>https://www.docville.be/en</p>
        </div>
      </div>
    </div>
  </a>
</template>


<script>
export default {
  name: "AwardsCard",
  props: {
    RedirectLink: String,
  },
};
</script>