<template>
  <div class="add-new-movie-form">
    <div class="new-container">
      <div class="page-heads-area">
        <h1 class="heading">Add New - Movie</h1>
        <div class="filter-section">
          <div class="select-option">
            <select class="select-style">
              <option>English</option>
              <option>Korean</option>
            </select>
          </div>
        </div>
      </div>

      <div class="mypage-wrapper">
        <LeftMenuPanel />
        <div class="mypage-rght">
          <div class="primary-details-from" style="display: none">
            <div class="page-heading-area">
              <h2>Season</h2>
            </div>

            <div class="login-wrap">
              <div class="custom-table-wrapper">
                <div class="custom-table tv-show-table">
                  <div class="table-head">
                    <div class="table-head-row">
                      <div class="table-head-cell">Season No.</div>
                      <div class="table-head-cell">Season Name</div>
                      <div class="table-head-cell">No. Of Episodes</div>
                      <div class="table-head-cell">Release Date</div>
                    </div>
                  </div>
                  <div class="table-body">
                    <div class="table-body-row">
                      <div class="table-body-cell">
                        <span class="cell-name">Season No.</span>Season 01
                      </div>
                      <div class="table-body-cell">
                        <span class="cell-name">Season Name</span>Season Title
                      </div>
                      <div class="table-body-cell">
                        <span class="cell-name">No. Of Episodes</span>10
                      </div>
                      <div class="table-body-cell">
                        <span class="cell-name">Release Date</span>January 10,
                        2022
                      </div>
                    </div>
                    <div class="table-body-row">
                      <div class="table-body-cell">
                        <span class="cell-name">Season No.</span>Season 01
                      </div>
                      <div class="table-body-cell">
                        <span class="cell-name">Season Name</span>Season Title
                      </div>
                      <div class="table-body-cell">
                        <span class="cell-name">No. Of Episodes</span>10
                      </div>
                      <div class="table-body-cell">
                        <span class="cell-name">Release Date</span>January 10,
                        2022
                      </div>
                    </div>
                    <div class="table-body-row">
                      <div class="table-body-cell">
                        <span class="cell-name">Season No.</span>Season 01
                      </div>
                      <div class="table-body-cell">
                        <span class="cell-name">Season Name</span>Season Title
                      </div>
                      <div class="table-body-cell">
                        <span class="cell-name">No. Of Episodes</span>10
                      </div>
                      <div class="table-body-cell">
                        <span class="cell-name">Release Date</span>January 10,
                        2022
                      </div>
                    </div>
                    <div class="table-body-row">
                      <div class="table-body-cell">
                        <span class="cell-name">Season No.</span>Season 01
                      </div>
                      <div class="table-body-cell">
                        <span class="cell-name">Season Name</span>Season Title
                      </div>
                      <div class="table-body-cell">
                        <span class="cell-name">No. Of Episodes</span>10
                      </div>
                      <div class="table-body-cell">
                        <span class="cell-name">Release Date</span>January 10,
                        2022
                      </div>
                    </div>
                    <div class="table-body-row">
                      <div class="table-body-cell">
                        <span class="cell-name">Season No.</span>Season 01
                      </div>
                      <div class="table-body-cell">
                        <span class="cell-name">Season Name</span>Season Title
                      </div>
                      <div class="table-body-cell">
                        <span class="cell-name">No. Of Episodes</span>10
                      </div>
                      <div class="table-body-cell">
                        <span class="cell-name">Release Date</span>January 10,
                        2022
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button class="add-season-btn">+ Add New Season</button>
              <button class="save-button">Save</button>
            </div>
          </div>
          <div class="primary-details-from" style="display: none">
            <div class="page-heading-area">
              <h2>Add New Season</h2>
            </div>

            <div class="login-wrap">
              <div class="box">
                <form @submit.prevent="">
                  <div class="divRows">
                    <h3>Season No.</h3>
                    <div class="div1colmns">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Season Number"
                        />
                        <!-- <span class="error-txt">hhhh</span> -->
                        <p class="instruction-text">
                          * Please enter '0' if this season is not a regular
                          season.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="divRows">
                    <div class="heads-area">
                      <h3>Season Name</h3>
                    </div>
                    <div class="div1colmns">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Season Title"
                        />
                        <!-- <span class="error-txt">hhhh</span> -->
                      </div>
                      <div class="text-hint">
                        <p>TMDB : Tv Show Title</p>
                      </div>
                    </div>
                  </div>
                  <div class="divRows">
                    <h3>Display Image</h3>
                    <div class="div1colmns">
                      <div class="form-group image-uploader">
                        <input
                          type="file"
                          id="img-upload"
                          class="form-control"
                          placeholder="Season Title"
                        />
                        <p class="file-name">Image name</p>
                        <label for="img-upload" class="file-pick-btn"
                          >Choose Image</label
                        >
                      </div>
                      <div class="img-display">
                        <img
                          src="@/assets/images/file-picker-img-display.png"
                          alt=""
                          class="img-preview"
                        />
                        <img
                          src="@/assets/icons/file-picker-cross-icon.svg"
                          alt=""
                          class="cross-icon"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="divRows">
                    <h3>Release Date</h3>
                    <div class="div1colmns two-calender">
                      <Calender />
                      <span>-</span>
                      <Calender />
                    </div>
                  </div>
                  <div class="divRows">
                    <h3>Number of Total Episode</h3>
                    <div class="div1colmns">
                      <div class="form-group">
                        <div class="number-input">
                          <button
                            onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                            class="minus"
                          ></button>
                          <input
                            class="quantity form-control"
                            min="0"
                            name="quantity"
                            value="1"
                            type="number"
                          />
                          <button
                            onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                            class="plus"
                          ></button>
                        </div>
                        <!-- <span class="error-txt">hhhh</span> -->
                      </div>
                    </div>
                  </div>
                  <div class="divRows">
                    <h3>Search Keyword</h3>
                    <div class="div1colmns">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Type Keyword"
                        />
                        <!-- <span class="error-txt">hhhh</span> -->
                      </div>
                    </div>
                  </div>
                  <div class="divRows">
                    <h3>Plot</h3>
                    <div class="div1colmns">
                      <div class="form-group">
                        <textarea
                          rows="5"
                          class="form-control"
                          placeholder="Type Plot Summary"
                        ></textarea>
                        <span class="numbers">120/230</span>
                      </div>
                      <div class="text-hint">
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
                    <div class="heads-area">
                      <h3>AKA</h3>
                      <span
                        @mouseover="hover2 = true"
                        @mouseleave="hover2 = false"
                        ><img src="@/assets/icons/question.svg" alt="question"
                      /></span>
                      <div class="hoverTxt" v-if="hover2">hello</div>
                    </div>
                    <div class="div1colmns">
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control"
                          placeholder="Type Movie AKA"
                        />
                        <!-- <span class="error-txt">hhhh</span> -->
                      </div>
                      <div class="text-hint">
                        <p>TMDB : Move title</p>
                      </div>
                    </div>
                  </div>
                  <div class="divRows">
                    <h3>Channel</h3>
                    <div class="div1colmns">
                      <div class="form-group">
                        <VueMultiselect
                          v-model="value"
                          :multiple="true"
                          :close-on-select="true"
                          :options="options"
                        ></VueMultiselect>
                        <!-- <span class="error-txt">hhhh</span> -->
                      </div>
                    </div>
                  </div>
                  <div class="divRows">
                    <h3>News search Keyword</h3>
                    <div class="div1colmns">
                      <div class="form-group">
                        <input
                          type="email"
                          class="form-control"
                          placeholder="News search Keyword"
                        />
                        <!-- <span class="error-txt">hhhh</span> -->
                      </div>
                    </div>
                  </div>
                  <div class="divider"></div>
                  <div class="divRows">
                    <h3>Watch</h3>
                    <div class="div1colmns">
                      <div class="togglewatch-area">
                        <label>Stram</label>
                        <div class="togglesdrop" @click="toggle = !toggle">
                          <p>Select Stream</p>
                          <span
                            ><img
                              src="@/assets/icons/arrow-down2.svg"
                              alt="leftimg"
                          /></span>
                        </div>
                        <div class="watch-list-area" v-show="toggle">
                          <ul>
                            <li>
                              <span>Netflix</span>
                              <a href="">Add +</a>
                            </li>
                            <li>
                              <span>Amazon Prime Video</span>
                              <a href="">Add +</a>
                            </li>
                            <li>
                              <span>Apple iTunes</span>
                              <a href="">Add +</a>
                            </li>
                            <li>
                              <span>Google Play Movies</span>
                              <a href="">Add +</a>
                            </li>
                            <li>
                              <span>Sun Nxt</span>
                              <a href="">Add +</a>
                            </li>
                            <li>
                              <span>Wavve</span>
                              <a href="">Add +</a>
                            </li>
                            <li>
                              <span>Watcha</span>
                              <a href="">Add +</a>
                            </li>
                            <li>
                              <span>Naver Store</span>
                              <a href="">Add +</a>
                            </li>
                            <li>
                              <span>GuideDoc</span>
                              <a href="">Add +</a>
                            </li>

                            <li>
                              <span>Netflix</span>
                              <a href="">Add +</a>
                            </li>
                            <li>
                              <span>Amazon Prime Video</span>
                              <a href="">Add +</a>
                            </li>
                            <li>
                              <span>Apple iTunes</span>
                              <a href="">Add +</a>
                            </li>
                            <li>
                              <span>Google Play Movies</span>
                              <a href="">Add +</a>
                            </li>
                            <li>
                              <span>Sun Nxt</span>
                              <a href="">Add +</a>
                            </li>
                            <li>
                              <span>Wavve</span>
                              <a href="">Add +</a>
                            </li>
                            <li>
                              <span>Watcha</span>
                              <a href="">Add +</a>
                            </li>
                            <li>
                              <span>Naver Store</span>
                              <a href="">Add +</a>
                            </li>
                            <li>
                              <span>GuideDoc</span>
                              <a href="">Add +</a>
                            </li>
                          </ul>
                        </div>
                        <div class="selectTags-area">
                          <div class="watchTags">
                            <div class="icon-txt">
                              <img src="@/assets/images/icon1.png" />
                              <span>Netflix</span>
                            </div>
                            <div class="corss">
                              <img src="@/assets/icons/close.svg" />
                            </div>
                          </div>
                          <div class="watchTags">
                            <div class="icon-txt">
                              <img src="@/assets/images/icon2.png" />
                              <span>Netflix</span>
                            </div>
                            <div class="corss">
                              <img src="@/assets/icons/close.svg" />
                            </div>
                          </div>
                          <div class="watchTags">
                            <div class="icon-txt">
                              <img src="@/assets/images/icon3.png" />
                              <span>Netflix</span>
                            </div>
                            <div class="corss">
                              <img src="@/assets/icons/close.svg" />
                            </div>
                          </div>
                          <div class="watchTags">
                            <div class="icon-txt">
                              <img src="@/assets/images/icon4.png" />
                              <span>Netflix</span>
                            </div>
                            <div class="corss">
                              <img src="@/assets/icons/close.svg" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="divRows">
                    <div class="div1colmns">
                      <div class="form-group">
                        <label>Rent</label>
                        <select class="form-control">
                          <option>Select Rent</option>
                          <option>2</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="divRows">
                    <div class="div1colmns">
                      <div class="form-group">
                        <label>Buy</label>
                        <select class="form-control">
                          <option>Select OTT Provider</option>
                          <option>2</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="divRows">
                    <h3>Connections</h3>
                    <div class="div1colmns nogap">
                      <SearchVideo />
                    </div>
                  </div>
                  <div class="btn-grp">
                    <a href="" class="saveBtn">Save</a>
                    <button class="delete-btn">Delete</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="primary-details-from">
            <div class="page-heading-area bb-0">
              <h2>Episode</h2>
            </div>
            <div class="search-episode">
              <div class="search-form">
                <div class="select-option">
                  <select class="select-style">
                    <option>Season</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
                <div class="search-field">
                  <input
                    type="text"
                    placeholder="Search Episode in Season 01"
                    class=""
                  />
                  <button class="search-btn">
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
                  </button>
                </div>
              </div>
            </div>
            <div class="episode-list">
              <ul class="list-wrapper">
                <li class="episode-card">
                  <div class="close-cross">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_4676_112527)">
                        <path
                          d="M12.2005 3.80714C11.9405 3.54714 11.5205 3.54714 11.2605 3.80714L8.00047 7.06047L4.74047 3.80047C4.48047 3.54047 4.06047 3.54047 3.80047 3.80047C3.54047 4.06047 3.54047 4.48047 3.80047 4.74047L7.06047 8.00047L3.80047 11.2605C3.54047 11.5205 3.54047 11.9405 3.80047 12.2005C4.06047 12.4605 4.48047 12.4605 4.74047 12.2005L8.00047 8.94047L11.2605 12.2005C11.5205 12.4605 11.9405 12.4605 12.2005 12.2005C12.4605 11.9405 12.4605 11.5205 12.2005 11.2605L8.94047 8.00047L12.2005 4.74047C12.4538 4.48714 12.4538 4.06047 12.2005 3.80714Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_4676_112527">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div class="left-icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_4676_112514)">
                        <path
                          d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_4676_112514">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div class="right-content">
                    <img
                      src="@/assets/images/episode-img.png"
                      alt=""
                      class="card-img"
                    />
                    <div class="episode-details">
                      <span class="episode-no">Episode 01</span>
                      <h1 class="episode-title">Episode Title Goes Here</h1>
                      <h3 class="release-date">January 10, 2022</h3>
                      <p class="episode-summary">
                        Summary textSummary textSummary textSummary textSummary
                        textSummary textSummary text Summary textSummary
                        textSummary textSummary textSummary textSummary
                        textSummary textSummary text.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LeftMenuPanel from "@/components/LeftMenuPanel.vue";
import SearchVideo from "@/components/SearchVideo.vue";
import Calender from "@/components/Calender.vue";
import VueMultiselect from "vue-multiselect";
export default {
  name: "AddTVDetails",
  components: {
    LeftMenuPanel,
    SearchVideo,
    Calender,
    VueMultiselect,
  },
  data() {
    return {
      value: [],
      hover2: false,
      selected: null,
      options: ["list", "of", "options"],
    };
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
