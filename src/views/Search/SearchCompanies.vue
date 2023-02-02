<template>
  <div>
    <div class="filters tag-filter">
      <h3>Companies</h3>
      <span>
        <a href="javascript:void(0)" @click="sortOrder"><img src="../../assets/icons/filter-arrows.svg"
            alt="icon" /></a>
        <template v-for="(item, ind) of sortByData" :key="ind">
          <a href="javascript:void(0)" :class="ind == activeItem ? 'active' : ''" @click="sortBy(item.key, ind)">{{
              item.title
          }}</a>
        </template>
      </span>
    </div>
    <div class="search-no-data" v-if="companiesData.length < 1 && showData == true">
      No Data
    </div>
    <ul class="search-list tag-list" v-else>
      <li v-for="(item, ind) of companiesData" :key="ind">
        <a href="javascript:void(0)" @click="openModal(item)">{{ item.name }}</a>
      </li>
    </ul>

    <!-- modal -->
    <div class="company-details-modal">
      <PopUpModal :isModal="isModal">
        <template v-slot:header>
          <h1>companyName</h1>
          <button @click="isModal = false">
            <img src="@/assets/icons/modal-cross-icon.svg" alt="" />
          </button>
        </template>
        <template v-slot:body>
          <div class="modal-tab-wrapper">
            <TabWrapper @selectedTab="tabChange">
              <Tabs title="Information">
                <div class="content-wrapper kkkk" @scroll="infoScroll">
                  <div class="company-details">
                    <div class="each-detail">
                      <h1>Code</h1>
                      <p>{{ companyData.agency_code }}</p>
                    </div>
                    <div class="each-detail">
                      <h1>A.K.A</h1>
                      <p>{{ companyData.aka }}</p>
                    </div>
                    <div class="each-detail">
                      <h1>Address</h1>
                      <p>{{ companyData.address }}</p>
                    </div>
                    <div class="each-detail">
                      <h1>TEL</h1>
                      <p>{{ companyData.tel }}</p>
                    </div>
                    <div class="each-detail">
                      <h1>FAX</h1>
                      <p>{{ companyData.fax }}</p>
                    </div>
                    <div class="each-detail">
                      <h1>E-mail</h1>
                      <p>{{ companyData.email }}</p>
                    </div>
                    <div class="each-detail">
                      <h1>Offical Site</h1>
                      <p>{{ companyData.official_site }}</p>
                    </div>
                    <div class="each-detail">
                      <h1>Social Media</h1>
                      <div class="icon-wrapper">
                        <a :href="companyData.youtube_link"><img src="@/assets/icons/Youtube.svg" alt="" /></a>
                        <a :href="companyData.instagram_link"><img src="@/assets/icons/Instagram.svg" alt="" /></a>
                        <a :href="companyData.facebook_link"><img src="@/assets/icons/Facebook.svg" alt="" /></a>
                        <a :href="companyData.twitter_link"><img src="@/assets/icons/Twitter.svg" alt="" /></a>
                      </div>
                    </div>
                  </div>
                  <div class="manager-list">
                    <h1>Manager list</h1>
                    <div class="list-wrapper">
                      <div class="each-manager" v-for="(item, index) of managerLists" :key="index">
                        <h1>{{ item.name }}</h1>
                        <div class="details">
                          <div class="contact">
                            <span>{{ item.email }}</span>
                            <div class="bullet"></div>
                            <span>{{ item.phone_number }}</span>
                          </div>
                          <div>
                            <span>Artist : </span>
                            <span v-for="(data, i) of item.artist_list" :key="i">{{ data.name }}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Tabs>
              <Tabs title="Artist">
                <div class="content-wrapper" @scroll="artistScroll">
                  <div class="image-grid">
                    <div class="image-card" v-for="(item, index) of artistList" :key="index">
                      <img :src="item.profile_picture" alt="" />
                      <p>{{ item.name }}</p>
                    </div>
                  </div>
                </div>
              </Tabs>
            </TabWrapper>
          </div>
        </template>
        <template v-slot:footer>
          <button>Request Modify</button>
        </template>
      </PopUpModal>
    </div>
  </div>
</template>

<script>
import { onMounted, ref, watch } from "@vue/runtime-core";
import moment from "moment";
import PopUpModal from "@/components/Modals/PopUpModal.vue";
import TabWrapper from "@/components/TabWrapper.vue";
import Tabs from "@/components/Tabs.vue";
import SearchResultService from "@/services/SearchResultService";

export default {
  name: "SearchCompanies",
  props: {
    companiesData: {
      type: Array,
    },
  },
  components: {
    PopUpModal,
    TabWrapper,
    Tabs,
  },
  emits: ["sortBy", "sortOrder"],

  setup({ emit }) {
    const sortByData = ref([
      { title: "Alphabetical order", key: "alphabetic" },
    ]);
    const activeItem = ref(0);
    const sortOrderData = ref("desc");
    const showData = ref(false);
    const isModal = ref(false);
    const company_id = ref("");
    const type = ref("information");
    const page = ref(1);
    const limit = ref(10);
    const companyData = ref('')
    const artistList = ref([])
    const managerLists = ref([])
    const artistRecords = ref('')
    const infoRecords = ref('')
    const searchResultService = new SearchResultService();

    // fetching prpost data here from perent
    onMounted(() => {
      setTimeout(() => {
        showData.value = true;
      }, 300);
    });
    watch(
      () => isModal.value,
      function (n, o) {
        if (isModal.value == false) {
          page.value = 1
          artistList.value = []
          managerLists.value = []
        }
      }
    );
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
        sortOrderData.value = "asc";
      }
      emit("sortOrder", sortOrderData.value);
    };

    // open modal
    const openModal = (item) => {
      company_id.value = item.id
      isModal.value = true;
      companyDetails(company_id.value, type.value, page.value, limit.value);
    };
    // company details API

    const companyDetails = (company_id, type, page, limit) => {
      if (company_id) {
        searchResultService
          .getCompanyDetails(company_id, type, page, limit)
          .then((res) => {
            if (res.status == 200) {
              companyData.value = res.data
              if (type == 'artist') {
                artistRecords.value = res.data.total_records
                let arr = res.data.artist
                artistList.value.push(...arr)
              }
              if (type == 'information') {
                infoRecords.value = res.data.total_records
                let arr = res.data.manager_lists
                managerLists.value.push(...arr)
              }
            }
          })
          .catch((err) => {
            return;
          });
      }
    };

    // tab change
    const tabChange = (tabTitle) => {
      artistList.value = []
      managerLists.value = []
      page.value = 1
      if (tabTitle.toLowerCase() == 'artist') {
        let artistType = 'artist'
        companyDetails(company_id.value, artistType, page.value, limit.value);
      }
      else {
        companyDetails(company_id.value, type.value, page.value, limit.value);
      }
    }

    // infinite scroll

    const artistScroll = (el) => {
      if (el.srcElement.offsetHeight + el.srcElement.scrollTop >= el.srcElement.scrollHeight && artistRecords.value > artistList.value.length) {
        let newPage = ++page.value;
        let artistType = 'artist'
        companyDetails(company_id.value, artistType, newPage, limit.value);
      }
    }
    const infoScroll = (el) => {
      if (el.srcElement.offsetHeight + el.srcElement.scrollTop >= el.srcElement.scrollHeight && infoRecords.value > managerLists.value.length) {
        let newPage = ++page.value;
        let infoType = 'information'
        companyDetails(company_id.value, infoType, newPage, limit.value);
      }
    }

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
      isModal,
      openModal,
      companyData,
      tabChange,
      artistList,
      managerLists,
      artistScroll,
      infoScroll
    };
  },
};
</script>
