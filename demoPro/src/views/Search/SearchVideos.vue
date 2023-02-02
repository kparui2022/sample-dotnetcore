<template>
  <div>
    <div class="filters">
      <h3>Videos</h3>
      <span>
        <a href="javascript:void(0)" @click="sortOrder"
          ><img src="../../assets/icons/filter-arrows.svg" alt="icon"
        /></a>
        <template v-for="(item, ind) of sortByData" :key="ind">
          <a
            href="javascript:void(0)"
            :class="ind == activeItem ? 'active' : ''"
            @click="sortBy(item, ind)"
            >{{ item }}</a
          >
        </template>
      </span>
    </div>
    <ul class="video-content">
      <li>
        <a href="javascript:void(0)">
          <span>
            <img
              src="/src/assets/images/v1.png"
              alt="video"
              class="video-img"
            />
            <div class="play-btn">
              <img src="/src/assets/icons/play.svg" alt="play" />
              <p>2:10</p>
            </div>
          </span>
          <h3>
            ‘Semantic Error: The Movie’ Unveils Its Release Date, Main Poster
            and Trailer
          </h3>
          <p>Movie Title</p>
          <div class="news-date">
            <p>View 13,535 <span>Jun 04.2022</span></p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { onMounted, ref } from "@vue/runtime-core";

export default {
  name: "SearchVideos",
  setup() {
    const sortByData = ref(["latest", "oldest", "popularity"]);
    const activeItem = ref(0);
    const sortOrderData = ref("desc");
    // send clicked sort by to the perent
    const sortBy = (item, i) => {
      emit("sortBy", item);
      activeItem.value = i;
    };
    // send clicked sort order to the perent
    const sortOrder = () => {
      if (sortOrderData.value == "desc") {
        sortOrderData.value = "asc";
      } else {
        sortOrderData.value = "desc";
      }
      emit("sortOrder", sortOrderData.value);
    };
    return {
      sortByData,
      sortBy,
      activeItem,
      sortOrderData,
      sortOrder,
    };
  },
};
</script>
