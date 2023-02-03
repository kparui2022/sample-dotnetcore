<template>
  <div>
    <div class="filters tag-filter">
      <h3>Tags</h3>
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
    <div class="search-no-data" v-if="tagData.length < 1 && showData == true">
      No Data
    </div>
    <ul class="search-list tag-list search-scroll" v-else>
      <li v-for="(item, ind) of tagData" :key="ind">
        <a
          href="javascript:void(0)"
          @click="
            $router.push({
              name: 'TagDetail',
              params: { id: item.id, tagname: item.title },
            })
          "
          >{{ item.title }}</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
import { onMounted, ref } from "@vue/runtime-core";
import moment from "moment";

export default {
  name: "SearchTag",
  props: {
    tagData: {
      type: Array,
    },
  },
  emits: ["sortBy", "sortOrder"],

  setup(props, { emit }) {
    const sortByData = ref([
      { title: "Alphabetical order", key: "alphabetic" },
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
