<template>
  <div class="add-new-movie-form">
    <div class="new-container">
      <div class="page-heads-area">
        <h1 class="heading">Add New - Movie</h1>
        <div class="filter-section">
          <div class="select-option">
            <select class="select-style" v-model="language">
              <option
                v-for="(lang, index) in languageList"
                :key="index"
                :value="lang.language_code"
              >
                {{ lang.language_name }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div class="mypage-wrapper">
        <LeftMenuPanel @movieMenudata="getMenudata" :selectedMenu="menu" />
        <div class="mypage-rght">
          <PrimaryDetails @movieMenudata="getMenudata"
            :site_language="language"
            v-if="languageList.length > 0 && menu == 'primary'"
          />
          <MediaDetails
            :site_language="language"
            v-if="languageList.length > 0 && menu == 'media'"
          />
          <CreditDetails
            :site_language="language"
            v-if="languageList.length > 0 && menu == 'credit'"
          />
          <TagsDetails
            :site_language="language"
            v-if="languageList.length > 0 && menu == 'tags'"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftMenuPanel from "@/components/LeftMenuPanel.vue";
import PrimaryDetails from "@/components/AddNewmovie/PrimaryDetails.vue";
import MediaDetails from "@/components/AddNewmovie/MediaDetails.vue";
import CreditDetails from "@/components/AddNewmovie/CreditDetails.vue";
import TagsDetails from "@/components/AddNewmovie/TagsDetails.vue";
import CommonService from "@/services/CommonService";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { useRoute,useRouter } from "vue-router";
export default {
  name: "AddMovieForm",
  components: {
    LeftMenuPanel,
    PrimaryDetails,
    MediaDetails,
    CreditDetails,
    TagsDetails
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const languageList = ref([]);
    const language = ref("");
    const commonService = new CommonService();
    const menu = ref("primary");

    //language dropdown
    const languageDropdown = () => {
      commonService
        .languageDropdown()
        .then((res) => {
          if (res.status == 200) {
            languageList.value = res.data.results;
            language.value = languageList.value[0].language_code;
          }
        })
        .catch((err) => {
          return;
        });
    };

    languageDropdown();

    const getMenudata = (val) => {
      menu.value = val;
    };

    // return all data
    return {
      languageList,
      language,
      getMenudata,
      menu,
    };
  },
};
</script>

<style></style>
