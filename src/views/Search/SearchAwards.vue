<template>
  <div>
    <div class="filters">
      <h3>Awards</h3>
    </div>
    <ul class="search-list">
      <li>
        <AwardCard />
      </li>
    </ul>
  </div>
</template>

<script>
import AwardCard from "@/components/Search/AwardCard.vue";
export default {
  name: "SearchAwards",
  components: { AwardCard },
};
</script>
