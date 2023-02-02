<template>
  <div class="primary-details-from">
    <div class="page-heading-area">
      <h2>Primary Details</h2>
    </div>

    <div class="login-wrap">
      <div class="box">
        <form @submit.prevent="">
          <div class="divRows">
            <div class="heads-area">
              <h3>Extenal Data</h3>
              <span @mouseover="hover = true" @mouseleave="hover = false"
                ><img src="@/assets/icons/question.svg" alt="question"
              /></span>
              <!-- <div class="hoverTxt" v-if="hover">hello</div> -->
            </div>
            <div class="div3colmns">
              <div class="form-group">
                <label>TMDB ID</label>
                <input
                  type="text"
                  v-model="tmdb_id"
                  class="form-control"
                  placeholder="607844"
                />
                <!-- <span class="error-txt">hhhh</span> -->
              </div>
              <div class="form-group">
                <label>KOBIS ID</label>
                <input
                  type="text"
                  v-model="kobis_id"
                  class="form-control"
                  placeholder="607844"
                />
                <span class="refreshBtn" @click="kobis_id = ''"
                  ><svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1V6H1.58152M16.9381 8C16.446 4.05369 13.0796 1 9 1C5.64262 1 2.76829 3.06817 1.58152 6M1.58152 6H6M17 17V12H16.4185M16.4185 12C15.2317 14.9318 12.3574 17 9 17C4.92038 17 1.55399 13.9463 1.06189 10M16.4185 12H12"
                      stroke="white"
                    />
                  </svg>
                </span>
                <!-- <span class="error-txt">hhhh</span> -->
              </div>
              <div class="form-group">
                <label>IMDB ID</label>
                <input
                  type="text"
                  v-model="imdb_id"
                  class="form-control"
                  placeholder="607844"
                />
                <span class="refreshBtn" @click="imdb_id = ''"
                  ><svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1V6H1.58152M16.9381 8C16.446 4.05369 13.0796 1 9 1C5.64262 1 2.76829 3.06817 1.58152 6M1.58152 6H6M17 17V12H16.4185M16.4185 12C15.2317 14.9318 12.3574 17 9 17C4.92038 17 1.55399 13.9463 1.06189 10M16.4185 12H12"
                      stroke="white"
                    />
                  </svg>
                </span>
                <!-- <span class="error-txt">hhhh</span> -->
              </div>
            </div>
          </div>
          <div class="divRows">
            <h3>Title <span>*</span></h3>
            <div class="div1colmns">
              <div class="form-group">
                <input
                  v-model="title_name"
                  type="text"
                  class="form-control"
                  placeholder="Type Movie Title"
                />
                <span v-if="error.title_name" class="error-txt">{{ error.title_name}}</span>
              </div>
              <div class="text-hint" v-if="relation_id">
                <p>TMDB : Move title</p>
                <p>KOBIS : Movie tItle</p>
              </div>
            </div>
          </div>
          <div class="divRows">
            <div class="heads-area">
              <h3>AKA</h3>
              <span @mouseover="hover2 = true" @mouseleave="hover2 = false"
                ><img src="@/assets/icons/question.svg" alt="question"
              /></span>
              <!-- <div class="hoverTxt" v-if="hover2">hello</div> -->
            </div>
            <div class="div1colmns">
              <div class="form-group">
                <input
                  v-model="aka"
                  type="text"
                  class="form-control"
                  placeholder="Type Movie AKA"
                />
                <!-- <span class="error-txt">hhhh</span> -->
              </div>
              <div class="text-hint" v-if="relation_id">
                <p>TMDB : Move title</p>
                <p>KOBIS : Movie tItle</p>
              </div>
            </div>
          </div>
          <div class="divRows">
            <h3>Summary</h3>
            <div class="div1colmns">
              <div class="form-group">
                <textarea
                  @keyup="countdown"
                  v-model="summary"
                  rows="5"
                  class="form-control"
                  placeholder="Type Movie Summary "
                  maxlength="230"
                ></textarea>
                <span class="numbers">{{ remainingCount }}/230</span>
              </div>
              <div class="text-hint" v-if="relation_id">
                <p>
                  TMDB :
                  TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText
                </p>
                <p>
                  KOBIS :
                  TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText
                </p>
              </div>
            </div>
          </div>
          <div class="divRows">
            <h3>Plot</h3>
            <div class="div1colmns">
              <div class="form-group">
                <textarea
                  @keyup="countdown"
                  v-model="plot"
                  rows="5"
                  class="form-control"
                  placeholder="Type Plot Summary"
                  maxlength="230"
                ></textarea>
                <span class="numbers">{{ remainingCount2 }}/230</span>
              </div>
              <div class="text-hint" v-if="relation_id">
                <p>
                  TMDB :
                  TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText
                </p>
                <p>
                  KOBIS :
                  TextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextTextText
                </p>
              </div>
            </div>
          </div>
          <div class="divRows">
            <h3>Official Site</h3>
            <div class="div1colmns">
              <div class="form-group">
                <input
                  type="text"
                  v-model="official_site"
                  class="form-control"
                  placeholder="http//"
                />
                <!-- <span class="error-txt">hhhh</span> -->
              </div>
              <div class="text-hint" v-if="relation_id">
                <p>TMDB : http//</p>
                <p>KOBIS : http//</p>
              </div>
            </div>
          </div>
          <div class="divRows">
            <h3>AKA</h3>
            <div class="div1colmns">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter AKA & separate with comma(A,B,C)"
                />
                <!-- <span class="error-txt">hhhh</span> -->
              </div>
            </div>
          </div>
          <div class="divRows">
            <h3>Search Keyword</h3>
            <div class="div1colmns">
              <div class="form-group">
                <input
                  v-model="search_keyword"
                  type="text"
                  class="form-control"
                  placeholder="Enter keyword & separate with comma(A,B,C)"
                />
                <!-- <span class="error-txt">hhhh</span> -->
              </div>
            </div>
          </div>
          <div class="divRows">
            <h3>New Search Keyword</h3>
            <div class="div1colmns">
              <div class="form-group">
                <input
                  v-model="news_search_keyword"
                  type="text"
                  class="form-control"
                  placeholder="Enter keyword & separate with comma(A,B,C)"
                />
                <!-- <span class="error-txt">hhhh</span> -->
              </div>
            </div>
          </div>

          <div class="divider"></div>

          <div class="divRows">
            <h3>Status</h3>
            <div class="div1colmns">
              <div class="form-group">
                <select class="form-control" v-model="title_status">
                  <option
                    v-for="(value, name, index) in statusList"
                    :key="index"
                    :value="name"
                  >
                    {{ value }}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div class="divRows">
            <h3>Release Date</h3>
            <div class="div1colmns">
              <Calender @date="getRealeaseDate" input_date="" />
            </div>
          </div>
          <div class="divRows">
            <h3>Re Release <span>*</span></h3>
            <div class="div2colmns gaps">
              <div class="radioBtn">
                <input
                  type="radio"
                  v-model="is_rerelease"
                  id="yes"
                  value="1"
                  name="radio-group"
                />
                <label for="yes">Yes</label>
              </div>
              <div class="radioBtn">
                <input
                  type="radio"
                  v-model="is_rerelease"
                  id="no"
                  value="0"
                  name="radio-group"
                />
                <label for="no">No</label>
              </div>
            </div>
            <template v-if="is_rerelease == 1">
              <div class="div2colmns smgap mar18">
                <Calender @date="getreRealeaseDate($event, 0)" input_date="" />
                <button @click="addreReleaseDate()" class="addBtn">+</button>
              </div>
              <div
                class="div2colmns smgap"
                v-for="(input, k) in input_re_release"
                :key="k"
              >
                <Calender
                  @date="getreRealeaseDate($event, k + 1)"
                  :input_date="input.date"
                />
                <button @click="removereReleaseDate(k)" class="minusBtn">
                  -
                </button>
              </div>
            </template>
          </div>
          <div class="divRows">
            <h3>Footfalls</h3>
            <div class="div1colmns">
              <div class="form-group">
                <input
                  v-model="footfalls"
                  type="text"
                  class="form-control"
                  placeholder="Type Footfall No."
                />
                <!-- <span class="error-txt">hhhh</span> -->
              </div>
            </div>
          </div>
          <div class="divRows">
            <h3>Runtime</h3>
            <div class="div1colmns">
              <div class="form-group">
                <input
                  v-model="runtime"
                  type="text"
                  class="form-control"
                  placeholder="Type Runtime"
                />
                <!-- <span class="error-txt">hhhh</span> -->
              </div>
            </div>
          </div>
          <div class="divRows">
            <h3>Certificatoin</h3>
            <div class="div1colmns">
              <div class="form-group">
                <select class="form-control" v-model="certification">
                  <option value="" disabled>Choose Certification</option>
                  <option
                    v-for="(value, name, index) in certificationList"
                    :key="index"
                    :value="name"
                  >
                    {{ value }}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div class="divRows">
            <h3>Language</h3>
            <div class="div1colmns">
              <div class="form-group">
                <input
                  v-model="language"
                  type="text"
                  class="form-control"
                  placeholder="Type Language"
                />
                <!-- <span class="error-txt">hhhh</span> -->
              </div>
            </div>
          </div>
          <div class="divRows">
            <h3>Country</h3>
            <div class="div1colmns nomar">
              <div class="form-group">
                <select class="form-control" @change="chooseCountry">
                  <option disabled selected>Choose Country</option>
                  <option
                    v-for="(country, index) in countryList"
                    :key="index"
                    :value="country.id"
                  >
                    {{ country.country_name }}
                  </option>
                </select>
              </div>
              <div class="country-list">
                <div
                  class="count-list-tag"
                  v-for="(item, i) in countryBelowList"
                  :key="i"
                >
                  {{ item.country_name }}
                  <span class="corss" @click="removeCountry(item)"
                    ><img src="@/assets/icons/close.svg"
                  /></span>
                </div>
              </div>
            </div>
          </div>
          <div class="divRows">
            <h3>Original Work</h3>
            <div class="div4colmns">
              <div class="form-group">
                <select
                  class="form-control"
                  @change="getOriginalWorkInput($event, 'type', 0)"
                >
                  <option>Choose</option>
                  <option
                    v-for="(value, name, index) in originalWorkList"
                    :key="index"
                    :value="value"
                  >
                    {{ value }}
                  </option>
                </select>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Title"
                  @change="getOriginalWorkInput($event, 'title', 0)"
                />
              </div>
              <div class="form-group">
                <input
                  @change="getOriginalWorkInput($event, 'original_artist', 0)"
                  type="text"
                  class="form-control"
                  placeholder="Original Artist"
                />
                <!-- <span class="error-txt">hhhh</span> -->
              </div>
              <button @click="addOriginalWork()" class="addBtn">+</button>
            </div>
            <div
              class="div4colmns"
              v-for="(input, k) in multipleAddOriginalList"
              :key="k"
            >
              <div class="form-group">
                <select
                  class="form-control"
                  @change="getOriginalWorkInput($event, 'type', k + 1)"
                >
                  <option value="" selected disabled>Choose</option>
                  <option
                    v-for="(value, name, index) in originalWorkList"
                    :key="index"
                    :value="value"
                    :selected="input.type == value"
                  >
                    {{ value }}
                  </option>
                </select>
              </div>
              <div class="form-group">
                <input
                  :value="input.title"
                  type="text"
                  class="form-control"
                  placeholder="Title"
                  @change="getOriginalWorkInput($event, 'title', k + 1)"
                />
              </div>
              <div class="form-group">
                <input
                  :value="input.original_artist"
                  @change="
                    getOriginalWorkInput($event, 'original_artist', k + 1)
                  "
                  type="text"
                  class="form-control"
                  placeholder="Original Artist"
                />
                <!-- <span class="error-txt">hhhh</span> -->
              </div>
              <button @click="removeOriginalWork(k)" class="addBtn">-</button>
            </div>
          </div>

          <div class="divider"></div>

          <div class="divRows">
            <h3>Watch</h3>
            <div class="div1colmns">
              <div class="togglewatch-area">
                <label>Stram</label>
                <WatchStream
                  :ottList="ottList"
                  @watchInput="getWatchStreamList"
                  selectText="Select Stream"
                />
              </div>
            </div>
          </div>
          <div class="divRows">
            <div class="div1colmns">
              <div class="togglewatch-area">
                <label>Rent</label>
                <WatchStream
                  :ottList="ottList"
                  @watchInput="getWatchRentList"
                  selectText="Select Rent"
                />
              </div>
            </div>
          </div>
          <div class="divRows">
            <div class="div1colmns">
              <div class="togglewatch-area">
                <label>Buy</label>
                <WatchStream
                  :ottList="ottList"
                  @watchInput="getWatchBuyList"
                  selectText="Select Buy"
                />
              </div>
            </div>
          </div>
          <div class="divRows">
            <h3>Connections</h3>
            <div class="div1colmns nogap">
              <SearchVideo
                @searchInput="getConnectionSearch"
                :list="connectionSearchList"
                @connectionInput="getConnectionInput"
              />
            </div>
          </div>
          <div class="divRows">
            <h3>Series</h3>
            <div class="div1colmns nogap">
              <SearchVideo
                @searchInput="getSeriesSearch"
                :list="seriesSearchList"
                @connectionInput="getSeriesInput"
              />
            </div>
          </div>
          <div class="divRows">
            <a @click="savePrimaryDetails" class="saveBtn">Save</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Calender from "@/components/Calender.vue";
import SearchVideo from "@/components/SearchVideo.vue";
import AddNewMovieService from "@/services/AddNewMovieService";
import { computed, ref } from "@vue/reactivity";
import { onMounted, watch } from "@vue/runtime-core";
import WatchStream from "@/components/AddNewmovie/WatchStream.vue";
import { useRoute,useRouter } from "vue-router";
export default {
  name: "PrimaryDetails",
  components: {
    Calender,
    SearchVideo,
    WatchStream,
  },
  data() {
    return {
      toggle: false,
      hover: false,
      hover2: false,
    };
  },
  props: {
    site_language: {
      type: String,
    },
  },
  setup(props, { emit }) {
    const route = useRoute();
    const router = useRouter();
    const search_type = ref("movie");
    const statusList = ref([]);
    const title_status = ref("");
    const certificationList = ref([]);
    const certification = ref("");
    const user_id = ref(localStorage.getItem("uid"));
    const relation_id = route.params.id;
    const tmdb_id = ref("");
    const kobis_id = ref("");
    const imdb_id = ref("");
    const title_name = ref("");
    const aka = ref("");
    const summary = ref("");
    const plot = ref("");
    const official_site = ref("");
    const search_keyword = ref("");
    const news_search_keyword = ref("");
    const release_date = ref("");
    const is_rerelease = ref("1");
    const re_release = ref([]);
    const footfalls = ref("");
    const runtime = ref("");
    const language = ref("");
    const input_re_release = ref([]);
    const remainingCount = ref(0);
    const remainingCount2 = ref(0);
    const connectionSearchInput = ref("");
    const connectionSearchList = ref([]);
    const connection = ref([]);
    const ottList = ref([]);
    const seriesSearchInput = ref("");
    const series = ref([]);
    const seriesSearchList =ref([])
    const watch_on_stream = ref([]);
    const watch_on_rent = ref([]);
    const watch_on_buy = ref([]);
    const originalWorkList = ref([]);
    const multipleAddOriginalList = ref([]);
    const originalInputData = ref([]);
    const countryList = ref([]);
    const country = ref([]);
    const countryBelowList = ref([]);
    const error = ref({});
    const addNewMovieService = new AddNewMovieService();

    // on language change
    watch(
      () => props.site_language,
      function (n, o) {
        if (n && n != o) getStreamList();
      }
    );

    onMounted(() => {
      titleStatusDropdown();
      crtificationDropdown();
      getStreamList();
      getOriginalWorkList();
      getCountryList();
    });

    // title status dropdown
    const titleStatusDropdown = () => {
      addNewMovieService
        .getStatusList(search_type.value)
        .then((res) => {
          if (res.status == 200) {
            statusList.value = res.data.status_list;
            title_status.value = Object.keys(statusList.value)[0];
          }
        })
        .catch((err) => {
          return;
        });
    };

    // cirtification dropdown
    const crtificationDropdown = () => {
      addNewMovieService
        .getCertificationList(search_type.value)
        .then((res) => {
          if (res.status == 200) {
            certificationList.value = res.data.certification_list;
          }
        })
        .catch((err) => {
          return;
        });
    };

    // orinal work dropdown
    const getOriginalWorkList = () => {
      addNewMovieService
        .getOriginalWorkList()
        .then((res) => {
          if (res.status == 200) {
            originalWorkList.value = res.data.original_work_type_list;
          }
        })
        .catch((err) => {
          return;
        });
    };

    // country dropdown
    const getCountryList = () => {
      addNewMovieService
        .getCountryList()
        .then((res) => {
          if (res.status == 200) {
            countryList.value = res.data.results;
          }
        })
        .catch((err) => {
          return;
        });
    };

    const chooseCountry = (event) => {
      let data = countryBelowList.value.find((f) => {
        return f.id == event.target.value;
      });
      if (!data) {
        countryBelowList.value.push({
          id: event.target.value,
          country_name:
            event.target.options[event.target.options.selectedIndex].text,
        });
      }

      if (country.value.indexOf(event.target.value) === -1) {
        country.value.push(event.target.value);
        console.log(country.value);
      }
    };

    const removeCountry = (item) => {
      let data = countryBelowList.value.find((f) => {
        return f.id == item.id;
      });
      if (data) {
        countryBelowList.value.splice(countryBelowList.value.indexOf(item), 1);
        country.value.splice(country.value.indexOf(item.id), 1);
        console.log(country.value);
      }
    };

    // connection search
    const connectionSearch = () => {
      addNewMovieService
        .getConnectionList(connectionSearchInput.value, search_type.value)
        .then((res) => {
          if (res.status == 200) {
            connectionSearchList.value = res.data.results;
          }
        })
        .catch((err) => {
          return;
        });
    };

    // connection search input
    const getConnectionSearch = (input) => {
      connectionSearchInput.value = input;
      if (connectionSearchInput.value == "") {
        connectionSearchList.value = [];
      } else {
        connectionSearch();
      }
    };

    // series search input
    const getSeriesSearch = (input) => {
      seriesSearchInput.value = input;
      if (seriesSearchInput.value == "") {
        connectionSearchList.value = [];
      } else {
        seriesSearch();
      }
    };

    // series search
    const seriesSearch = () => {
      addNewMovieService
        .getConnectionList(seriesSearchInput.value, search_type.value)
        .then((res) => {
          if (res.status == 200) {
            seriesSearchList.value = res.data.results;
          }
        })
        .catch((err) => {
          return;
        });
    };

    // text area countdown
    const countdown = () => {
      remainingCount.value = summary.value.length;
      remainingCount2.value = plot.value.length;
    };

    // get release date
    const getRealeaseDate = (date) => {
      release_date.value = date;
    };

    // get re release date
    const getreRealeaseDate = (getdate, k) => {
      re_release.value.splice(k, 1);
      re_release.value.push(getdate);
      let data = input_re_release.value.find((item) => {
        return item.id == k;
      });
      if (data) {
        data.date = getdate;
      }
    };

    // multiple add re release data
    const addreReleaseDate = () => {
      let index;
      if (input_re_release.value.length > 0) {
        index = input_re_release.value.length + 1;
      } else {
        index = 1;
      }
      input_re_release.value.push({ date: "", id: index });
    };

    // remove re release data
    const removereReleaseDate = (index) => {
      input_re_release.value.splice(index, 1);
      re_release.value.splice(index, 1);
    };

    // multiple add original data
    const addOriginalWork = () => {
      let index;
      if (multipleAddOriginalList.value.length > 0) {
        index = multipleAddOriginalList.value.length + 1;
      } else {
        index = 1;
      }
      multipleAddOriginalList.value.push({
        type: "",
        title: "",
        original_artist: "",
        id: index,
      });
    };

    const getOriginalWorkInput = (event, key, k) => {
      if (originalInputData.value.length > 0) {
        if (originalInputData.value[k]) {
          originalInputData.value[k][key] = event.target.value;
        } else {
          originalInputData.value.push({
            type: "",
            title: "",
            original_artist: "",
          });
          originalInputData.value[k][key] = event.target.value;
        }
      } else {
        originalInputData.value.push({
          type: "",
          title: "",
          original_artist: "",
        });
        originalInputData.value[k][key] = event.target.value;
      }

      let data = multipleAddOriginalList.value.find((item) => {
        return item.id == k;
      });
      if (data) {
        data[key] = event.target.value;
      }
    };

    // remove original data
    const removeOriginalWork = (index) => {
      multipleAddOriginalList.value.splice(index, 1);
      originalInputData.value.splice(index + 1, 1);
    };

    //connection input
    const getConnectionInput = (id) => {
      connection.value = id;
    };

    //series input
    const getSeriesInput = (id) => {
      series.value = id;
    };

    // ott service provider list
    const getStreamList = () => {
      addNewMovieService
        .getServiceProviderList(props.site_language)
        .then((res) => {
          if (res.status == 200) {
            ottList.value = res.data.results;
          }
        })
        .catch((err) => {
          return;
        });
    };

    //watch stream input
    const getWatchStreamList = (val) => {
      watch_on_stream.value = val;
    };

    //watch rent input
    const getWatchRentList = (val) => {
      watch_on_rent.value = val;
    };

    //watch buy input
    const getWatchBuyList = (val) => {
      watch_on_buy.value = val;
    };

    // save primary details
    const savePrimaryDetails = () => {
      if(title_name.value == "") {
        error.value.title_name = "This is required input"
        return true;
      }
      let credentails = {
        // user_id: user_id.value,
        relation_id: relation_id.value,
        site_language: props.site_language,
        tmdb_id: tmdb_id.value,
        kobis_id: kobis_id.value,
        imdb_id: imdb_id.value,
        name: title_name.value,
        aka: aka.value,
        summary: summary.value,
        plot: plot.value,
        official_site: official_site.value,
        search_keyword: search_keyword.value,
        news_search_keyword: news_search_keyword.value,
        title_status: title_status.value,
        release_date: release_date.value,
        is_rerelease: is_rerelease.value,
        re_release: is_rerelease.value == 1 ? re_release.value : [],
        footfalls: footfalls.value,
        runtime: runtime.value,
        certification: certification.value,
        language: language.value,
        country: country.value,
        original_work: originalInputData.value,
        watch_on_stream: watch_on_stream.value,
        watch_on_rent: watch_on_rent.value,
        watch_on_buy: watch_on_buy.value,
        connections: connection.value,
        series: series.value,
      };
      console.log(credentails);


      addNewMovieService
        .addPrimaryDetails(credentails)
        .then((res) => {
          if (res.status == 200) {
            emit("movieMenudata", 'media');
            localStorage.setItem('draft_request_id',res.data.data[0].draft_request_id);
          }
        })
        .catch((err) => {
          return;
        });
    };

    // return all data
    return {
      statusList,
      certificationList,
      title_status,
      certification,
      savePrimaryDetails,
      tmdb_id,
      kobis_id,
      imdb_id,
      title_name,
      aka,
      summary,
      plot,
      official_site,
      search_keyword,
      news_search_keyword,
      release_date,
      getRealeaseDate,
      is_rerelease,
      re_release,
      footfalls,
      runtime,
      language,
      addreReleaseDate,
      input_re_release,
      removereReleaseDate,
      getreRealeaseDate,
      remainingCount,
      countdown,
      remainingCount2,
      getConnectionSearch,
      connectionSearchList,
      getConnectionInput,
      ottList,
      getSeriesInput,
      getWatchStreamList,
      relation_id,
      originalWorkList,
      addOriginalWork,
      multipleAddOriginalList,
      removeOriginalWork,
      getOriginalWorkInput,
      getWatchRentList,
      getWatchBuyList,
      countryList,
      chooseCountry,
      countryBelowList,
      removeCountry,
      getSeriesSearch,
      seriesSearchList,
      error
    };
  },
};
</script>

<style></style>
