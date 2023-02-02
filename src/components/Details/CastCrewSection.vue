<template>
  <div class="lists tab-scroll moble">
    <div class="image-otr cast-crew">
      <CastCrewCard />
      <CastCrewCard />
      <CastCrewCard />
      <CastCrewCard />
      <CastCrewCard />
    </div>
    <router-link to class="more-content" @click="$emit('navigation')">
      <img
        src="@/assets/icons/right-arrow-solid.svg"
        alt="more"
        class="white-image"
      />
      <img
        src="@/assets/icons/solid-right-arrow.svg"
        alt="more"
        class="red-image"
      />
    </router-link>
  </div>
</template>


<script>
import CastCrewCard from "@/components/CastCrewCard.vue";
import { useRouter } from "vue-router";
export default {
  name: "CastCrewSection",
  components: {
    CastCrewCard,
  },
};
</script>