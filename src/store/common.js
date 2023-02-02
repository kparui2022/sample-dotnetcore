import { reactive } from "vue";
// import VueCookies from "vue3-cookies";

// const cookies = useCookies();

const state = reactive({
  userId: localStorage.getItem("uid") ? localStorage.getItem("uid") : "",
  name: "",
  myIP: "",
  SelectedLang: "",
  searchText: localStorage.getItem("searchText") ? localStorage.getItem("searchText") : '',
});

const methods = {
  async getData() {
    console.log("getData");
  },
  updateSearchText(newSearchtext){
    state.searchText = newSearchtext
  }
};

export default {
  state,
  methods,
};
