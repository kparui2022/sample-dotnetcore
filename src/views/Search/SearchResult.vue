<template>
  <section class="search-results" id="messageBody">
    <div class="container">
      <h2>Search Results</h2>
      <div class="search-main" v-if="menuList.length > 0">
        <div class="search-left stickyBox">
          <ul>
            <li v-for="(menu, index) of menuList" :key="index" :class="
              searchData.search_type.toLowerCase() ==
              menu.menu_key.toLowerCase()
                ? 'active'
                : ''
            " @click="fetchMenuData(menu)">
              <a href="javascript:void(0)">{{ menu.menu_name }} </a>
              <span>{{ menu.result_count }}</span>
            </li>
          </ul>
        </div>
        <div class="search-right">
          <transition name="search-fade">
            <SearchResultsMovies v-if="search_type == 'movies'" :moviesData="newResult ? newResult : ''"
              @sortBy="getSortBy" @sortOrder="getSortOrder" />
          </transition>
          <transition name="search-fade">
            <SearchTvShows v-if="search_type == 'tv_shows'" :tvShowData="newResult ? newResult : ''" @sortBy="getSortBy"
              @sortOrder="getSortOrder" />
          </transition>
          <transition name="search-fade">
            <SearchWebtoons v-if="search_type == 'webtoons'" />
          </transition>
          <transition name="search-fade">
            <SearchVideos v-if="search_type == 'videos'" />
          </transition>
          <transition name="search-fade">
            <SearchPeople v-if="search_type == 'people'" :peopleData="newResult ? newResult : ''" @sortBy="getSortBy"
              @sortOrder="getSortOrder" />
          </transition>
          <transition name="search-fade">
            <SearchAwards v-if="search_type == 'award'" />
          </transition>
          <transition name="search-fade">
            <SearchTag v-if="search_type == 'tags'" :tagData="newResult ? newResult : ''" @sortBy="getSortBy"
              @sortOrder="getSortOrder" />
          </transition>
          <transition name="search-fade">
            <SearchCompanies v-if="search_type == 'companies'" :companiesData="newResult ? newResult : ''"
              @sortBy="getSortBy" @sortOrder="getSortOrder" />
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SearchResultsMovies from "@/views/Search/SearchResultsMovies.vue";
import SearchWebtoons from "@/views/Search/SearchWebtoons.vue";
import SearchVideos from "@/views/Search/SearchVideos.vue";
import SearchPeople from "@/views/Search/SearchPeople.vue";
import SearchAwards from "@/views/Search/SearchAwards.vue";
import SearchTag from "@/views/Search/SearchTag.vue";
import SearchCompanies from "@/views/Search/SearchCompanies.vue";
import SearchTvShows from "@/views/Search/SearchTvShows.vue";
import SearchResultService from "@/services/SearchResultService";
import { ref } from "@vue/reactivity";
import { onMounted, watch } from "@vue/runtime-core";
import { inject } from "vue";

export default {
  name: "SearchResult",
  components: {
    SearchResultsMovies,
    SearchWebtoons,
    SearchVideos,
    SearchPeople,
    SearchAwards,
    SearchTag,
    SearchCompanies,
    SearchTvShows,
  },
  setup() {
    // decleared variabled
    const results = ref([]);
    const newResult = ref([]);
    const searchData = ref([]);
    const sort_by = ref("latest");
    const sort_order = ref("desc");
    const search_type = ref("movies");
    const page = ref(1);
    const limit = ref(10);
    const is_first = ref("yes");
    const totalRecords = ref("");
    const common = inject("common");
    const searchResultService = new SearchResultService();
    const menuList = ref([]);

    // on search text change search api call again
    watch(
      () => common.state.searchText,
      function (n, o) {
        search_type.value = "movies";
        sort_by.value = "latest";
        is_first.value = "yes";
        if ((n && n != o) || n == "")
          getSearchResult(
            sort_by.value,
            sort_order.value,
            search_type.value,
            page.value,
            limit.value,
            is_first.value
          );
      }
    );

    // get search data on load
    onMounted(() => {
      search_type.value = "movies";
      sort_by.value = "latest";
      is_first.value = "yes";
      getSearchResult(
        sort_by.value,
        sort_order.value,
        search_type.value,
        page.value,
        limit.value,
        is_first.value
      );
    });

    // search result main api
    const getSearchResult = (
      sort_by,
      sort_order,
      search_type,
      page,
      limit,
      is_first
    ) => {
      if (common.state.searchText) {
        searchResultService
          .getSearchResult(
            common.state.searchText,
            sort_by,
            sort_order,
            search_type,
            page,
            limit,
            is_first
          )
          .then((res) => {
            if (res.status == 200) {
              searchData.value = res.data;
              results.value = res.data.results;
              totalRecords.value = res.data.total_records;
              newResult.value.push(...results.value);
              if (res.data.menu_list) {
                localStorage.setItem(
                  "menuList",
                  JSON.stringify(res.data.menu_list)
                );
                menuList.value = JSON.parse(localStorage.getItem("menuList"));
              }
            }
          })
          .catch((err) => {
            return;
          });
      }
    };

    // side menu functionality based on click
    const fetchMenuData = (menu) => {
      results.value = [];
      newResult.value = [];
      page.value = 1;
      search_type.value = menu.menu_key;
      is_first.value = "no";

      if (menu.menu_key == "people") {
        sort_by.value = "birth_year";
      } else if (menu.menu_key == "tags" || menu.menu_key == "companies") {
        sort_by.value = "alphabetic";
      } else {
        sort_by.value = "latest";
      }
      getSearchResult(
        sort_by.value,
        sort_order.value,
        search_type.value,
        page.value,
        limit.value,
        is_first.value
      );
    };

    // sorting
    const getSortBy = (item) => {
      sort_by.value = item;
      results.value = [];
      newResult.value = [];
      page.value = 1;
      is_first.value = "no";

      getSearchResult(
        sort_by.value,
        sort_order.value,
        search_type.value,
        page.value,
        limit.value,
        is_first.value
      );
    };
    const getSortOrder = (item) => {
      sort_order.value = item;
      results.value = [];
      newResult.value = [];
      page.value = 1;
      is_first.value = "no";

      getSearchResult(
        sort_by.value,
        sort_order.value,
        search_type.value,
        page.value,
        limit.value,
        is_first.value
      );
    };

    // infinite scroll
    // const handleScroll = (el) => {
    //   console.log('props.page', props.page)
    //   if ((el.srcElement.offsetHeight + el.srcElement.scrollTop) >= el.srcElement.scrollHeight) {
    //     let newPage = ++props.page;
    //     console.log('newPage', newPage)
    //     emit('scroll', newPage)
    //   }
    // }
    window.onscroll = () => {
      let bottomOfWindow =
        document.documentElement.offsetHeight +
        document.documentElement.scrollTop >=
        document.documentElement.scrollHeight;
      if (bottomOfWindow && totalRecords.value > newResult.value.length) {
        is_first.value = "no";
        let newPage = ++page.value;
        // console.log('newPage', newPage)
        setTimeout(()=>{
          getSearchResult(sort_by.value, sort_order.value, search_type.value, newPage, limit.value, is_first.value);
        }, 100)
      }
    };
    return {
      searchData,
      fetchMenuData,
      search_type,
      results,
      getSortBy,
      getSortOrder,
      newResult,
      menuList,
    };
  },
};
</script>

<style lang="scss" scoped>
.search-fade-enter-active {
  transition: transform 0.4s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.4s linear;
}

.search-fade-enter-from {
  opacity: 0;
  transform: scale(0.3) translateY(-50%);
}
</style>
