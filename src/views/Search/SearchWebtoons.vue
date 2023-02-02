<template>
  <div>
    <div class="filters">
      <h3>Webtoons</h3>
      <span>
        <a href="javascript:void(0)"
          ><img src="../../assets/icons/filter-arrows.svg" alt="icon"
        /></a>
        <template v-for="(item, ind) in sortData" :key="ind">
          <a href="javascript:void(0)" class="active">{{ item }}</a>
        </template>
      </span>
    </div>
    <ul class="search-list">
      <li>
        <a href="javascript:void(0)">
          <img src="@/assets/images/tom.png" alt="image" />
          <div class="main-dta">
            <span>
              <h4>Tom & Jerry</h4>
              <p>June 10. 2021</p>
            </span>
            <div class="status">
              <span>On Going</span>
              <p>Every Wed,Sat</p>
            </div>
            <div class="p-content">
              <p>
                Tom the cat and Jerry the mouse get kicked out of their home and
                relocate to a fancy New York hotel, where a scrappy employee
                named Kayla will lose her job if she can’t evict Jerry before a
                high-class wedding at the hotel. Her solution? Hiring Tom to get
                rid of the pesky mouse.
              </p>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
export default {
  name: "SearchWebtoons",
  props: {
    webToonsData: {
      type: Array,
    },
  },

  setup({ webToonsData }) {
    onMounted(() => {
      console.log("webToonsData", webToonsData);
    });
    return {};
  },
};
</script>
