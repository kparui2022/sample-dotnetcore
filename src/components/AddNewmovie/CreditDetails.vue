<template>
  <div class="credit-from-details">
    <div class="page-heading-area">
      <h2>Credit</h2>
    </div>

    <div class="credit-tabber-area">
      <TabWrapper @selectedTab="getTabName">
        <Tabs title="Cast">
          <div class="credit-cast-area">
            <div class="login-wrap">
              <div class="box">
                <div class="form-group search-area">
                  <input
                    type="text"
                    v-model="search_text"
                    class="form-control"
                    @keyup="getCreditList"
                    @click="shows = !shows"
                    placeholder="Search Movies"
                  />
                  <span class="searchBtn" @click="getCreditList">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.60039 2.67979C4.94942 2.67979 2.80039 4.82882 2.80039 7.47979C2.80039 10.1308 4.94942 12.2798 7.60039 12.2798C10.2514 12.2798 12.4004 10.1308 12.4004 7.47979C12.4004 4.82882 10.2514 2.67979 7.60039 2.67979ZM0.400391 7.47979C0.400391 3.50334 3.62394 0.279785 7.60039 0.279785C11.5768 0.279785 14.8004 3.50334 14.8004 7.47979C14.8004 9.03478 14.3074 10.4746 13.4693 11.6516L19.2489 17.4313C19.7175 17.8999 19.7175 18.6597 19.2489 19.1283C18.7803 19.5969 18.0205 19.5969 17.5519 19.1283L11.7722 13.3487C10.5953 14.1868 9.15539 14.6798 7.60039 14.6798C3.62394 14.6798 0.400391 11.4562 0.400391 7.47979Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </div>
                <div class="search-wrap-area" v-show="shows">
                  <ul v-if="creditList.length > 0">
                    <li v-for="(item, index) in creditList" :key="index">
                      <div class="tags-img">
                        <img :src="item.people_poster" alt="" />
                      </div>
                      <span>{{ item.people_name }}</span>
                      <a @click="AddInfoModal(item)">Add +</a>
                    </li>
                  </ul>
                  <ul v-else>
                    <li>
                      <span>Not found</span>
                      <a @click="isCreateInfoModal = true">Create +</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="credit-list-area">
              <div
                class="single-credit-list"
                v-for="(cast, i) in castRequestList"
                :key="i"
              >
                <div class="divrow">
                  <span class="icons">
                    <svg
                      width="18"
                      height="12"
                      viewBox="0 0 18 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <div class="thumbimg">
                    <img :src="cast.poster" />
                  </div>
                  <h3>{{ cast.cast_name }}</h3>
                </div>
                <div class="divrow center">
                  <p>{{ cast.character_name }}</p>
                </div>
                <div class="divrow center">
                  <p>{{ cast.job }}</p>
                </div>
                <div class="divrow center">
                  <a href="" class="gustBtn" v-if="cast.is_guest == 'y'"
                    >Guest</a
                  >
                </div>
                <div class="divrow actions">
                  <a @click="AddInfoModal(cast)">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.688 1.4033C12.4914 0.59994 13.7939 0.59994 14.5973 1.4033C15.4006 2.20667 15.4006 3.50918 14.5973 4.31254L13.7817 5.12809L10.8725 2.21885L11.688 1.4033Z"
                        fill="white"
                      />
                      <path
                        d="M9.41788 3.67347L0.799805 12.2915V15.2008H3.70904L12.3271 6.58271L9.41788 3.67347Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                  <a @click="removeInfoModal(cast)">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.2997 0.70875C12.9097 0.31875 12.2797 0.31875 11.8897 0.70875L6.99973 5.58875L2.10973 0.69875C1.71973 0.30875 1.08973 0.30875 0.699727 0.69875C0.309727 1.08875 0.309727 1.71875 0.699727 2.10875L5.58973 6.99875L0.699727 11.8887C0.309727 12.2787 0.309727 12.9087 0.699727 13.2987C1.08973 13.6887 1.71973 13.6887 2.10973 13.2987L6.99973 8.40875L11.8897 13.2987C12.2797 13.6887 12.9097 13.6887 13.2997 13.2987C13.6897 12.9087 13.6897 12.2787 13.2997 11.8887L8.40973 6.99875L13.2997 2.10875C13.6797 1.72875 13.6797 1.08875 13.2997 0.70875Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <a @click="addCreditDetails" class="saveBtn">Save</a>
        </Tabs>

        <Tabs title="Crew">
          <div class="credit-crew-area">
            <div class="login-wrap">
              <div class="box">
                <div class="form-group search-area">
                  <input
                    type="text"
                    v-model="search_crew_text"
                    class="form-control"
                    @keyup="getCreditCrewList"
                    @click="shows1 = !shows1"
                    placeholder="Search Movies"
                  />
                  <span class="searchBtn" @click="getCreditCrewList">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.60039 2.67979C4.94942 2.67979 2.80039 4.82882 2.80039 7.47979C2.80039 10.1308 4.94942 12.2798 7.60039 12.2798C10.2514 12.2798 12.4004 10.1308 12.4004 7.47979C12.4004 4.82882 10.2514 2.67979 7.60039 2.67979ZM0.400391 7.47979C0.400391 3.50334 3.62394 0.279785 7.60039 0.279785C11.5768 0.279785 14.8004 3.50334 14.8004 7.47979C14.8004 9.03478 14.3074 10.4746 13.4693 11.6516L19.2489 17.4313C19.7175 17.8999 19.7175 18.6597 19.2489 19.1283C18.7803 19.5969 18.0205 19.5969 17.5519 19.1283L11.7722 13.3487C10.5953 14.1868 9.15539 14.6798 7.60039 14.6798C3.62394 14.6798 0.400391 11.4562 0.400391 7.47979Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </div>
                <div class="search-wrap-area" v-show="shows1">
                  <ul v-if="crewList.length > 0">
                    <li v-for="(item, index) in crewList" :key="index">
                      <div class="tags-img">
                        <img :src="item.people_poster" alt="" />
                      </div>
                      <span>{{ item.people_name }}</span>
                      <a @click="AddCrewInfoModal(item)">Add +</a>
                    </li>
                  </ul>
                  <ul v-else>
                    <li>
                      <span>Not found</span>
                      <a @click="isCrewCreateInfoModal = true">Create +</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="credit-list-area">
              <div
                class="single-credit-list"
                v-for="(crew, i) in crewRequestList"
                :key="i"
              >
                <div class="divrow">
                  <span class="icons">
                    <svg
                      width="18"
                      height="12"
                      viewBox="0 0 18 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <div class="thumbimg">
                    <img :src="crew.poster" />
                  </div>
                  <h3>{{ crew.cast_name }}</h3>
                </div>
                <div class="divrow center"><p></p></div>
                <div class="divrow center">
                  <p>{{ crew.job }}</p>
                </div>
                <div class="divrow center"></div>
                <div class="divrow actions">
                  <a @click="AddCrewInfoModal(crew)">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.688 1.4033C12.4914 0.59994 13.7939 0.59994 14.5973 1.4033C15.4006 2.20667 15.4006 3.50918 14.5973 4.31254L13.7817 5.12809L10.8725 2.21885L11.688 1.4033Z"
                        fill="white"
                      />
                      <path
                        d="M9.41788 3.67347L0.799805 12.2915V15.2008H3.70904L12.3271 6.58271L9.41788 3.67347Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                  <a @click="removeCrewInfoModal(crew)">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.2997 0.70875C12.9097 0.31875 12.2797 0.31875 11.8897 0.70875L6.99973 5.58875L2.10973 0.69875C1.71973 0.30875 1.08973 0.30875 0.699727 0.69875C0.309727 1.08875 0.309727 1.71875 0.699727 2.10875L5.58973 6.99875L0.699727 11.8887C0.309727 12.2787 0.309727 12.9087 0.699727 13.2987C1.08973 13.6887 1.71973 13.6887 2.10973 13.2987L6.99973 8.40875L11.8897 13.2987C12.2797 13.6887 12.9097 13.6887 13.2997 13.2987C13.6897 12.9087 13.6897 12.2787 13.2997 11.8887L8.40973 6.99875L13.2997 2.10875C13.6797 1.72875 13.6797 1.08875 13.2997 0.70875Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <a @click="addCreditDetails" class="saveBtn">Save</a>
          </div>
        </Tabs>
      </TabWrapper>
    </div>
  </div>

  <div class="new-cast-modal">
    <!-- add info modal -->
    <PopUpModal :isModal="isAddInfoModal">
      <template v-slot:header>
        <h1>Add Information</h1>
        <!-- <button @click="isAddInfoModal = false">
          <img src="@/assets/icons/modal-cross-icon.svg" alt="" />
        </button> -->
      </template>
      <template v-slot:body>
        <div class="cast-details">
          <img
            v-if="people"
            :src="people.people_poster || people.poster"
            alt=""
            class="cast-img"
          />
          <div class="right">
            <div class="form-grp">
              <label for="">Job Title</label>
              <select v-model="job">
                <option value="" selected disabled>Select Job Title</option>
                <option
                  :value="job.department_name"
                  v-for="(job, index) in jobTitleList"
                  :key="index"
                >
                  {{ job.department_name }}
                </option>
              </select>
            </div>
            <div class="form-grp">
              <label for="">Charecter Name</label>
              <input
                type="text"
                v-model="character_name"
                placeholder="Enter Cahrecter Name"
              />
            </div>
            <div class="form-grp">
              <label for="">Guest</label>
              <div class="radio-grp">
                <label for="yes">
                  <div class="check-circle">
                    <input
                      type="radio"
                      name="each-radio-movie"
                      v-model="is_guest"
                      id="yes"
                      value="y"
                    />
                    <div class="radio-circle">
                      <div class="inner-circle"></div>
                    </div>
                    <span>Yes</span>
                  </div>
                </label>
                <label for="no">
                  <div class="check-circle">
                    <input
                      type="radio"
                      name="each-radio-movie"
                      v-model="is_guest"
                      id="no"
                      value="n"
                    />
                    <div class="radio-circle">
                      <div class="inner-circle"></div>
                    </div>
                    <span>No</span>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template v-slot:footer>
        <div class="button-group">
          <button
            class="black-outline-btn"
            :disabled="character_name == '' || job == '' || is_guest == ''"
            :class="
              character_name == '' || job == '' || is_guest == ''
                ? 'isDisabled'
                : ''
            "
            @click="addCastInformation"
          >
            Save
          </button>
          <button
            class="red-fill-btn"
            @click="
              (isAddInfoModal = false),
                (job = ''),
                (character_name = ''),
                (is_guest = '')
            "
          >
            Cancel
          </button>
        </div>
      </template>
    </PopUpModal>

    <!-- create info modal -->
    <PopUpModal :isModal="isCreateInfoModal">
      <template v-slot:header>
        <h1>Add Information</h1>
        <!-- <button @click="isCreateInfoModal = false">
          <img src="@/assets/icons/modal-cross-icon.svg" alt="" />
        </button> -->
      </template>
      <template v-slot:body>
        <div class="cast-details">
          <div class="img-picker">
            <input type="file" v-on:change="onFileChange" id="img-picker-1" />
            <label for="img-picker-1"
              ><img
                src="@/assets/images/no-image-view.png"
                alt=""
                class="cast-img"
                v-if="!url" />
              <img :src="url" alt="" class="cast-img" v-if="url"
            /></label>
          </div>
          <div class="right">
            <div class="form-grp">
              <label for="">Cast Name</label>
              <input
                type="text"
                v-model="cast_name"
                placeholder="Enter Cast Name"
              />
            </div>
            <div class="form-grp">
              <label for="">Job Title</label>
              <select v-model="job">
                <option value="" selected disabled>Select Job Title</option>
                <option
                  :value="job.department_id"
                  v-for="(job, index) in jobTitleList"
                  :key="index"
                >
                  {{ job.department_name }}
                </option>
              </select>
            </div>
            <div class="form-grp">
              <label for="">Charecter Name</label>
              <input
                v-model="character_name"
                type="text"
                name=""
                id=""
                placeholder="Enter Cahrecter Name"
              />
            </div>
            <div class="form-grp">
              <label for="">Guest</label>
              <div class="radio-grp">
                <label for="yes">
                  <div class="check-circle">
                    <input
                      type="radio"
                      name="each-radio-movie"
                      id="yes"
                      v-model="is_guest"
                      value="y"
                    />
                    <div class="radio-circle">
                      <div class="inner-circle"></div>
                    </div>
                    <span>Yes</span>
                  </div>
                </label>
                <label for="no">
                  <div class="check-circle">
                    <input
                      type="radio"
                      name="each-radio-movie"
                      id="no"
                      v-model="is_guest"
                      value="n"
                    />
                    <div class="radio-circle">
                      <div class="inner-circle"></div>
                    </div>
                    <span>No</span>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template v-slot:footer>
        <div class="button-group">
          <button class="black-outline-btn">Save</button>
          <button
            class="red-fill-btn"
            @click="
              (isCreateInfoModal = false),
                (job = ''),
                (character_name = ''),
                (is_guest = ''),
                (url = ''),
                (cast_name = '')
            "
          >
            Cancel
          </button>
        </div>
      </template>
    </PopUpModal>

    <!-- crew info modal -->
    <PopUpModal :isModal="isCrewInfoModal">
      <template v-slot:header>
        <h1>Add Information</h1>
        <!-- <button @click="isCrewInfoModal = false">
          <img src="@/assets/icons/modal-cross-icon.svg" alt="" />
        </button> -->
      </template>
      <template v-slot:body>
        <div class="cast-details">
          <img
            :src="people.people_poster || people.poster"
            alt=""
            class="cast-img"
          />
          <div class="right">
            <div class="form-grp">
              <label for="">Job Title</label>
              <select v-model="job">
                <option value="" selected disabled>Select Job Title</option>
                <option
                  :value="job.department_name"
                  v-for="(job, index) in jobTitleList"
                  :key="index"
                >
                  {{ job.department_name }}
                </option>
              </select>
            </div>
          </div>
        </div>
      </template>
      <template v-slot:footer>
        <div class="button-group">
          <button
            class="black-outline-btn"
            :disabled="job == ''"
            :class="job == '' ? 'isDisabled' : ''"
            @click="addCrewInformation"
          >
            Save
          </button>
          <button
            class="red-fill-btn"
            @click="
              (isCrewInfoModal = false),
                (job = ''),
                (character_name = ''),
                (is_guest = '')
            "
          >
            Cancel
          </button>
        </div>
      </template>
    </PopUpModal>

    <!-- crew create info modal -->
    <PopUpModal :isModal="isCrewCreateInfoModal">
      <template v-slot:header>
        <h1>Add Information</h1>
        <!-- <button @click="isCrewCreateInfoModal = false">
          <img src="@/assets/icons/modal-cross-icon.svg" alt="" />
        </button> -->
      </template>
      <template v-slot:body>
        <div class="cast-details">
          <div class="img-picker">
            <input type="file" v-on:change="onFileChange" id="img-picker-1" />
            <label for="img-picker-1"
              ><img
                v-if="!url"
                src="@/assets/images/no-image-view.png"
                alt=""
                class="cast-img" />
              <img :src="url" alt="" class="cast-img" v-if="url"
            /></label>
          </div>
          <div class="right">
            <div class="form-grp">
              <label for="">Cast Name</label>
              <input type="text" name="" id="" placeholder="Enter Cast Name" />
            </div>
            <div class="form-grp">
              <label for="">Job Title</label>
              <select>
                <option value="" selected disabled>Select Job Title</option>
                <option
                  :value="job.department_id"
                  v-for="(job, index) in jobTitleList"
                  :key="index"
                >
                  {{ job.department_name }}
                </option>
              </select>
            </div>
          </div>
        </div>
      </template>
      <template v-slot:footer>
        <div class="button-group">
          <button class="black-outline-btn">Save</button>
          <button
            class="red-fill-btn"
            @click="
              (isCrewCreateInfoModal = false), (job = ''), (cast_name = '')
            "
          >
            Cancel
          </button>
        </div>
      </template>
    </PopUpModal>
  </div>
</template>

<script>
import Tabs from "@/components/Tabs.vue";
import TabWrapper from "@/components/TabWrapper.vue";
import AddNewMovieService from "@/services/AddNewMovieService";
import { ref } from "@vue/reactivity";
import { onMounted, watch } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import PopUpModal from "@/components/Modals/PopUpModal.vue";
export default {
  name: "CreditDetails",
  components: {
    Tabs,
    TabWrapper,
    PopUpModal,
  },
  data() {
    return {};
  },
  props: {
    site_language: {
      type: String,
    },
  },
  setup(props, { emit }) {
    const addNewMovieService = new AddNewMovieService();
    const search_text = ref("");
    const creditList = ref([]);
    const search_crew_text = ref("");
    const crewList = ref([]);
    const jobTitleList = ref([]);
    const draft_credit_id = ref("");
    const cast_details = ref([]);
    const people_id = ref("");
    const isAddInfoModal = ref(false);
    const job = ref("");
    const character_name = ref("");
    const is_guest = ref("");
    const people = ref([]);
    const credit_type = ref("cast");
    const castRequestList = ref([]);
    const crewRequestList = ref([]);
    const cast_name = ref("");
    const shows = ref(false);
    const shows1 = ref(false);
    const crew_details = ref([]);
    const isCrewInfoModal = ref(false);
    const isCreateInfoModal = ref(false);
    const isCrewCreateInfoModal = ref(false);
    const file = ref("");
    const url = ref("");

    // on language change
    watch(
      () => props.site_language,
      function (n, o) {
        if (n && n != o) creditJobTitleList();
      }
    );

    onMounted(() => {
      creditJobTitleList();
      creditCastRequestList();
      creditCrewRequestList();
    });

    // cast request list
    const creditCastRequestList = () => {
      addNewMovieService
        .creditRequestList(
          localStorage.getItem("draft_request_id"),
          props.site_language,
          "movie",
          "cast"
        )
        .then((res) => {
          if (res.status == 200) {
            castRequestList.value = res.data.cast_details;

            for (let i = 0; i < castRequestList.value.length; i++) {
              castRequestList.value[i]["id"] = i + 1;

              cast_details.value.push({
                id: i + 1,
                people_id: castRequestList.value[i].people_id,
                character_name: castRequestList.value[i].character_name,
                job: castRequestList.value[i].job,
                is_guest: castRequestList.value[i].is_guest,
              });
            }
          }
        })
        .catch((err) => {
          return;
        });
    };

    // crew request list
    const creditCrewRequestList = () => {
      addNewMovieService
        .creditRequestList(
          localStorage.getItem("draft_request_id"),
          props.site_language,
          "movie",
          "crew"
        )
        .then((res) => {
          if (res.status == 200) {
            crewRequestList.value = res.data.crew_details;
            for (let j = 0; j < crewRequestList.value.length; j++) {
              crewRequestList.value[j]["id"] = j + 1;
              crew_details.value.push({
                id: j + 1,
                people_id: crewRequestList.value[j].people_id,
                job: crewRequestList.value[j].job,
              });
            }
          }
        })
        .catch((err) => {
          return;
        });
    };

    // cast search list
    const getCreditList = () => {
      addNewMovieService
        .creditPeopleSearchList(props.site_language, search_text.value)
        .then((res) => {
          if (res.status == 200) {
            creditList.value = res.data.results;
          }
        })
        .catch((err) => {
          return;
        });
    };

    // crew search list
    const getCreditCrewList = () => {
      addNewMovieService
        .creditPeopleSearchList(props.site_language, search_crew_text.value)
        .then((res) => {
          if (res.status == 200) {
            crewList.value = res.data.results;
          }
        })
        .catch((err) => {
          return;
        });
    };

    // job title list
    const creditJobTitleList = () => {
      addNewMovieService
        .creditJobTitleList(props.site_language)
        .then((res) => {
          if (res.status == 200) {
            jobTitleList.value = res.data.results;
          }
        })
        .catch((err) => {
          return;
        });
    };

    const AddInfoModal = (item) => {
      isAddInfoModal.value = true;
      people_id.value = item.people_id;
      people.value = item;
      character_name.value = item.character_name;
      job.value = item.job ? item.job : "";
      is_guest.value = item.is_guest ? item.is_guest : "";
    };
    const AddCrewInfoModal = (item) => {
      isCrewInfoModal.value = true;
      people_id.value = item.people_id;
      people.value = item;
      job.value = item.job ? item.job : "";
    };

    //remove cast info
    const removeInfoModal = (item) => {
      people.value = item;
      let castData = castRequestList.value.find((item) => {
        return item.id == people.value.id;
      });
      if (castData) {
        castRequestList.value.splice(castRequestList.value.indexOf(item), 1);
      }
      let castDetailsData = cast_details.value.find((item) => {
        return item.id == people.value.id;
      });
      if (castDetailsData) {
        cast_details.value.splice(
          cast_details.value.indexOf(castDetailsData),
          1
        );
      }
      console.log(cast_details.value);
    };

    // add cast info
    const addCastInformation = () => {
      if (
        character_name.value == "" ||
        job.value == "" ||
        is_guest.value == ""
      ) {
        return true;
      }

      let castData = castRequestList.value.find((item) => {
        return (
          (item.people_id == people_id.value &&
            item.character_name == character_name.value) ||
          (item.people_id == people_id.value && item.job == job.value)
        );
      });

      if (castData) {
        castData.job = job.value;
        castData.character_name = character_name.value;
        castData.is_guest = is_guest.value;
      } else {
        castRequestList.value.push({
          people_id: people_id.value,
          character_name: character_name.value,
          job: job.value,
          is_guest: is_guest.value,
          cast_name: people.value.people_name || people.value.cast_name,
          poster: people.value.people_poster || people.value.poster,
          id: castRequestList.value.length + 1,
        });
      }

      let castDetailsData = cast_details.value.find((item) => {
        return (
          (item.people_id == people_id.value &&
            item.character_name == character_name.value) ||
          (item.people_id == people_id.value && item.job == job.value)
        );
      });

      if (castDetailsData) {
        castDetailsData.job = job.value;
        castDetailsData.character_name = character_name.value;
        castDetailsData.is_guest = is_guest.value;
      } else {
        cast_details.value.push({
          people_id: people_id.value,
          character_name: character_name.value,
          job: job.value,
          is_guest: is_guest.value,
          id: cast_details.value.length + 1,
        });
      }

      isAddInfoModal.value = false;
      shows.value = false;
      character_name.value = "";
      job.value = "";
      is_guest.value = "";
      people_id.value = "";
      console.log(cast_details.value);
      console.log(castRequestList.value);
    };

    //remove crew info
    const removeCrewInfoModal = (item) => {
      people.value = item;
      let crewData = crewRequestList.value.find((item) => {
        return item.id == people.value.id;
      });
      if (crewData) {
        crewRequestList.value.splice(crewRequestList.value.indexOf(item), 1);
      }
      let crewDetailsData = crew_details.value.find((item) => {
        return item.id == people.value.id;
      });
      if (crewDetailsData) {
        crew_details.value.splice(
          crew_details.value.indexOf(crewDetailsData),
          1
        );
      }
      console.log(crew_details.value);
    };

    // add crew info
    const addCrewInformation = () => {
      if (job.value == "") {
        return true;
      }

      let crewData = crewRequestList.value.find((item) => {
        return item.people_id == people_id.value && item.job == job.value;
      });
      if (crewData) {
        crewData.job = job.value;
      } else {
        crewRequestList.value.push({
          people_id: people_id.value,
          job: job.value,
          cast_name: people.value.people_name || people.value.cast_name,
          poster: people.value.people_poster || people.value.poster,
          id: crewRequestList.value.length + 1,
        });
      }

      let crewDetailsData = crew_details.value.find((item) => {
        return item.people_id == people_id.value && item.job == job.value;
      });

      if (crewDetailsData) {
        crewDetailsData.job = job.value;
      } else {
        crew_details.value.push({
          people_id: people_id.value,
          job: job.value,
          id: crew_details.value.length + 1,
        });
      }

      isCrewInfoModal.value = false;
      shows1.value = false;
      character_name.value = "";
      job.value = "";
      is_guest.value = "";
      people_id.value = "";

      console.log(crew_details.value);
    };

    // add details
    const addCreditDetails = () => {
      let credentials = {
        draft_request_id: localStorage.getItem("draft_request_id"),
        draft_credit_id: localStorage.getItem("draft_credit_id"),
        title_type: "movie",
        site_language: props.site_language,
        cast_details: cast_details.value,
        crew_details: crew_details.value,
      };

      addNewMovieService
        .addCreditDetails(credentials)
        .then((res) => {
          if (res.status == 200) {
            console.log(res.data.data[0].draft_credit_id);
            localStorage.setItem(
              "draft_credit_id",
              res.data.data[0].draft_credit_id
            );
            creditCastRequestList();
            creditCrewRequestList();
          }
        })
        .catch((err) => {
          return;
        });
    };

    const onFileChange = (e) => {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      file.value = files[0];
      let fileSize = e.target.files[0].size;
      let allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
      if (!allowedExtensions.exec(file.value.name)) {
        // this.errorMsg = "jpg, jpeg, png 파일만 업로드 가능합니다";
        url.value = "";
        return false;
      } else if (fileSize > 1024 * 1024 * 20) {
        // this.errorMsg = "업로드 파일 용량은 최대 20mb입니다";
        url.value = "";
        return false;
      } else if (allowedExtensions.exec(file.value.name)) {
        // this.errorMsg = "";
        let fileName = file.value.name;
        url.value = URL.createObjectURL(e.target.files[0]);
      }
      // this.errorMsg = "";
    };

    //tab change
    const getTabName = (tab) => {
      // if (tab == "Cast") {
      //   credit_type.value = "cast";
      //   creditCastRequestList();
      // }
      // if (tab == "Crew") {
      //   credit_type.value = "crew";
      //   creditCastRequestList();
      // }
    };

    return {
      search_text,
      getCreditList,
      creditList,
      search_crew_text,
      getCreditCrewList,
      crewList,
      jobTitleList,
      addCastInformation,
      AddInfoModal,
      isAddInfoModal,
      job,
      character_name,
      is_guest,
      people,
      getTabName,
      castRequestList,
      crewRequestList,
      shows,
      shows1,
      addCreditDetails,
      isCrewInfoModal,
      AddCrewInfoModal,
      addCrewInformation,
      removeInfoModal,
      removeCrewInfoModal,
      isCreateInfoModal,
      isCrewCreateInfoModal,
      cast_name,
      onFileChange,
      url,
    };
  },
};
</script>

<style></style>
