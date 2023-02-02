<template>
  <header>
    <div class="container">
      <div class="header-main">
        <div class="left-side">
          <a href="javascript:void(0);">
            <img src="@/assets/images/red-logo.svg" alt="logo-red" @click="$router.push('/')" />
          </a>
        </div>
        <div class="right-side">
          <div class="menu-links" :class="{ menuopen: ismenuOpen }">
            <ul class="main-menu">
              <li class="menu-item" v-for="(item, index) of menuData" :key="index">
                <a href="javascript:void(0);" class="head-link" @click="item.status = !item.status">{{
                $t(`header.mainMenu.${item.key_name}`) }}</a>
                <ul class="sub-menu" v-if="item.status" v-click-outside="() => (item.status = false)">
                  <li v-for="(submenu, index) in item.subMenu" :key="index" @click="item.status = false">
                    <a @click="$router.push(submenu.page_link)">{{
                    $t(`header.subMenu.${submenu.key_name}`)
                    }}</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="menu-details">
            <div class="add-more">
              <a href="javascript:void(0);" @click="showAdd = !showAdd">
                <img src="@/assets/icons/white-plus.svg" alt="plus" class="white-image" />
                <img src="@/assets/icons/black-plus.svg" alt="plus" class="red-image" />
              </a>
              <Transition>
                <div class="link dropdown-menu fl add-dropdown" v-if="showAdd"
                  v-click-outside="() => (showAdd = false)">
                  <a @click="$router.push('/AddNewMovie/AddNewMovie')">{{
                  $t("header.addSection.movie")
                  }}</a>
                  <a href="javascript:void(0);">{{
                  $t("header.addSection.tvShows")
                  }}</a>
                  <a href="javascript:void(0);">{{
                  $t("header.addSection.webtoon")
                  }}</a>
                  <a href="javascript:void(0);">{{
                  $t("header.addSection.People")
                  }}</a>
                </div>
              </Transition>
            </div>
            <div class="search">
              <a href="javascript:void(0);" class="" @click="searchArea = !searchArea">
                <img src="@/assets/icons/white-search.svg" alt="search" class="white-image" />
                <img src="@/assets/icons/black-search.svg" alt="search" class="red-image" />
              </a>
              <Transition>
                <!-- <div class="link dropdown-search" v-if="searchArea" v-click-outside="() => (searchArea = false)"> -->
                <div class="link dropdown-search" v-if="searchArea">
                  <div class="container">
                    <form class="search-form" @submit="(e) => e.preventDefault()">
                      <input type="search" placeholder="Search for a movie,tv show,person..." v-model="searchInput"
                        @input="searchSuggetions" @keydown="directSearch($event, searchInput)"/>
                      <a href="#" @click="searchArea = false"><img src="@/assets/icons/red-close.svg" alt="close" /></a>
                    </form>
                    <ul v-if="searchSug">
                      <li v-for="(item, ind) of searchSuggestionList" :key="ind">
                        <a href="javascript:void(0);" @click="searchResult(item)" class="suggexted_title_wrap">
                          <p v-html='item.title_name.toLowerCase().replace(searchInput.toLowerCase(),`<span>` + searchInput.toLowerCase() + `</span>`)'
                            class="suggexted_title"></p>
                        </a>
                      </li>
                      <!-- <li>
                        <a href="javascript:void(0);"><span>Tom</span>as Arane</a>
                      </li> -->
                    </ul>
                  </div>
                </div>
              </Transition>
            </div>
            <div class="dropdown-lang">
              <select v-model="$i18n.locale">
                <option v-for="(lang, index) in language" :key="index" :value="lang.language_code">
                  {{ lang.language_name }}
                </option>
              </select>
            </div>
            <div class="dropdown-profile" v-if="logedInUserDetails">
              <a @click="showProfile = !showProfile">
                <a v-if="profileImage == '' || profileImage == 'null'" class="login-link">{{ userName }}</a>
                <img v-else :src="imgBaseUrl + profileImage" alt="profile" class="profile-pic" />
                <img src="@/assets/icons/down-arrow-white.svg" alt="search" class="white-image" />
                <img src="@/assets/icons/down-arrow-black.svg" alt="search" class="red-image" /></a>
              <Transition>
                <ul v-if="showProfile" v-click-outside="() => (showProfile = false)"
                  class="link link-profile dropdown-menu profile-dropdown">
                  <li @click="gotoMypgae" class="dropdown-item">
                    {{ $t("header.profileDropdown.myPage") }}
                  </li>
                  <li @click="logOut" class="dropdown-item">
                    {{ $t("header.profileDropdown.logOut") }}
                  </li>
                </ul>
              </Transition>
            </div>
            <div class="dropdown-profile" v-else>
              <a class="login-link" @click="$router.push('/login')" href="javascript:void(0);">{{ $t("button.Login")
              }}</a>
            </div>
            <a href="#" class="mob-menu" v-on:click="menuOpen"><img src="../assets/icons/mobile-menu.svg" alt="menu" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import CommonService from "@/services/CommonService";
import SearchResultService from "@/services/SearchResultService";
import headerMenuData from "@/config/headerMenuData";
import vClickOutside from "click-outside-vue3";


export default {
  name: "Header",
  inject: ["common"],
  data() {
    return {
      ismenuOpen: false,
      menuData: headerMenuData,
      language: [],
      logedInUserDetails: false,
      userName: "",
      showProfile: false,
      profileImage: "",
      imgBaseUrl: import.meta.env.VITE_IMAGE_BASE_URL,
      searchArea: false,
      showAdd: false,
      searchSug: false,
      searchInput: "",
      searchSuggestionList: [],
    };
  },

  directives: {
    clickOutside: vClickOutside.directive,
  },
  created() {
    this.CommonService = new CommonService();
    this.SearchResultService = new SearchResultService();
  },

  watch: {
    "common.state.userId": function (newVal, oldVal) {
      if (newVal && localStorage.getItem("token")) {
        this.logedInUserDetails = true;
        this.profileImage = localStorage.getItem("profileImage");
        this.userName = localStorage.getItem("uname");
      } else {
        this.logedInUserDetails = false;
      }
    },
    searchArea: function (n, o) {
      if (n == false && this.searchArea == false) {
        this.searchInput = "";
        this.searchSuggestionList = [];
      }
    },
    'currentRouteName': function (n, o) {
      if (n == false && n != o) {
        localStorage.removeItem('searchText');
        this.common.state.searchText = '';
        this.searchArea = false;
        localStorage.removeItem('menuList');
      }
    }
  },

  updated() {
    if (localStorage.getItem("token")) {
      this.logedInUserDetails = true;
      this.userName = localStorage.getItem("uname");
      this.profileImage = localStorage.getItem("profileImage");
      // this.openDropdown();
    } else {
      this.logedInUserDetails = false;
    }

    if (this.$i18n.locale == "ko") {
      this.common.state.SelectedLang = "KO";
      localStorage.setItem("selectedLang", this.common.state.SelectedLang);
    }
    if (this.$i18n.locale == "en") {
      this.common.state.SelectedLang = "EN";
      localStorage.setItem("selectedLang", this.common.state.SelectedLang);
    }
  },

  mounted() {
    //language dropdown
    this.languageDropdown();
  },

  methods: {
    menuOpen: function () {
      this.ismenuOpen = !this.ismenuOpen;
    },

    //language dropdown
    languageDropdown() {
      this.CommonService.languageDropdown()
        .then((res) => {
          if (res.status == 200) {
            this.language = res.data.results;
          }
        })
        .catch((err) => {
          return;
        });
    },

    //search suggetion list
    searchSuggetions() {
      if (this.searchInput.length) {
        this.SearchResultService.getSearchSuggetions(this.searchInput)
          .then((res) => {
            if (res.status == 200) {
              this.searchSuggestionList = res.data.results;
              this.searchSug = true;
            }
          })
          .catch((err) => {
            return;
          });
      } else {
        this.searchSuggestionList = [];
      }
    },

    searchResult(item) {
      this.searchSug = false;
      localStorage.setItem("searchText", item.title_name)
      this.common.methods.updateSearchText(item.title_name)
      this.searchInput = this.common.state.searchText;
      this.$router.push('/search-result')
    },

    directSearch(event, searchText) {
      let code = event.keyCode || event.which;
      // this.searchSuggestionList.forEach((item) => {
        if (code == 13) {
          this.searchSug = false;
          localStorage.setItem("searchText", searchText)
          this.common.methods.updateSearchText(searchText)
          this.searchInput = this.common.state.searchText;
          this.$router.push('/search-result')
        }
      // })
    },

    // log out
    logOut() {
      this.showProfile = false;
      let storedTheme = localStorage.getItem("theme-colour");
      localStorage.clear();
      localStorage.setItem("theme-colour", storedTheme);
      // this.$router.push({ name: 'Login' });
      window.location.href = "/login";
    },

    gotoMypgae() {
      this.showProfile = false;
      this.$router.push("/my-page/activity");
    },
  },
  computed: {
    currentRouteName() {
      return this.$route.name == 'SearchResult';
    }
  }
};
</script>

<style lang="scss" scoped>
.suggexted_title_wrap {
  .suggexted_title {
    text-transform: capitalize;
  }
}

.dropdown-menu {
  &.profile-dropdown {
    width: auto;
    display: block;
    cursor: pointer;

    .dropdown-item {
      white-space: nowrap;
      padding: 5px 10px;
    }
  }

  &.add-dropdown {
    display: flex;
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>