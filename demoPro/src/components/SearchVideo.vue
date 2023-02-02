<template>
  <div class="form-group search-area">
    <input
      type="search"
      class="form-control"
      v-model="search"
      @keyup="getSearchInput"
      @click="shows = !shows"
      placeholder="Search Movies"
    />
    <span class="searchBtn" @click="getSearchInput"
      ><img src="@/assets/icons/search.svg" alt=""
    /></span>
  </div>
  <div class="search-wrap-area" v-show="shows">
    <ul v-if="list !== 'no data found'">
      <li v-for="(item, i) in list" :key="i">
        <div class="tags-img">
          <img :src="item.title_poster" alt="" />
        </div>
        <span>{{ item.title_name }}</span>
        <a @click="addConnection(item)">Add +</a>
      </li>
    </ul>
    <ul v-else>
      <li>
        <span>No data found</span>
      </li>
    </ul>
  </div>
  <div class="search-tags-area">
    <div class="single-tags" v-for="(item, i) in belowList" :key="i">
      <div class="tags-img"><img :src="item.title_poster" alt="" /></div>
      <p>{{ item.title_name }}</p>
      <span class="clsBtn" @click="removeItem(item)"
        ><img src="@/assets/icons/close.svg" alt=""
      /></span>
    </div>
    <!-- <div class="single-tags">
      <div class="tags-img"><img src="@/assets/images/imgs.png" alt="" /></div>
      <p>Twenty-Five Twenty-One</p>
      <span class="clsBtn"><img src="@/assets/icons/close.svg" alt="" /></span>
    </div> -->
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "SearchVideo",
  data() {
    return {
      shows: false,
    };
  },
  props: {
    list: Array,
  },
  emits:['searchInput','connectionInput'],
  setup(props, { emit }) {
    const search = ref("");
    const belowList = ref([]);
    const connection = ref([]);

    const getSearchInput = (event) => {
      emit("searchInput", event.target.value);
    };

    const addConnection = (item) => {
      let data = belowList.value.find((f) => {
        return f.title_id == item.title_id;
      });
      if (!data) {
        belowList.value.push(item);
      }

      if (connection.value.indexOf(item.title_id) === -1) {
        connection.value.push(item.title_id);
      }

      emit("connectionInput", connection.value);
    };

    const removeItem = (item) => {
      let data = belowList.value.find((f) => {
        return f.title_id == item.title_id;
      });
      if (data) {
        belowList.value.splice(belowList.value.indexOf(item), 1);
        connection.value.splice(connection.value.indexOf(item.title_id), 1);
        emit("connectionInput", connection.value);
      }
    };

    return {
      search,
      getSearchInput,
      addConnection,
      belowList,
      removeItem,
    };
  },
};
</script>

<style>
</style>