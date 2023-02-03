<template>
  <div>
    <div class="filters">
      <h3>People</h3>
      <span>
        <a href="javascript:void(0)" @click="sortOrder"
          ><img src="../../assets/icons/filter-arrows.svg" alt="icon"
        /></a>
        <template v-for="(item, ind) of sortByData" :key="ind">
          <a
            href="javascript:void(0)"
            :class="ind == activeItem ? 'active' : ''"
            @click="sortBy(item.key, ind)"
            >{{ item.title }}</a
          >
        </template>
      </span>
    </div>
    <div
      class="search-no-data"
      v-if="peopleData.length < 1 && showData == true"
    >
      No Data
    </div>
    <ul class="search-list search-video" v-else>
      <li v-for="(item, ind) of peopleData" :key="ind">
        <a href="javascript:void(0)">
          <img src="@/assets/images/p1.png" alt="image" />
          <div class="main-dta">
            <span>
              <h4>
                {{ item.people_name }} <span>{{ item.known_for }}</span>
              </h4>
              <p>{{ dateformat(item.birth_date) }} ~</p>
            </span>
            <div class="p-content">
              <ul>
                <li v-for="(data, i) of item.work_list" :key="i">
                  <p>{{ data.title_name }}</p>
                </li>
              </ul>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { onMounted, ref } from "@vue/runtime-core";
import moment from "moment";

export default {
  name: "SearchPeople",
  props: {
    peopleData: {
      type: Array,
    },
  },
  emits: ["sortBy", "sortOrder"],

  setup(props, { emit }) {
    const sortByData = ref([
      { title: "Birth year", key: "birth_year" },
      { title: "Popularity", key: "popularity" },
    ]);
    const activeItem = ref(0);
    const sortOrderData = ref("desc");
    const showData = ref(false);

    // fetching prpost data here from perent
    onMounted(() => {
      setTimeout(() => {
        showData.value = true;
      }, 300);
    });
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

    // date format
    const dateformat = (value) => {
      if (value) {
        return moment.utc(value).format("ll");
      }
    };

    return {
      sortByData,
      sortBy,
      activeItem,
      sortOrderData,
      sortOrder,
      dateformat,
      showData,
    };
  },
};
</script>
