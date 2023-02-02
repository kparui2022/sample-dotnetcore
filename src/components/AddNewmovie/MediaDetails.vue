<template>
  

    <div class="media-from-details">
        <div class="page-heading-area">
            <h2>Media</h2>
        </div>

        <div class="media-tabber-area">
            <TabWrapper>
              <Tabs title="Video">
                <div class="title-area">
                    <h2>Video</h2>
                    <a href="#" class="advid-btn">Add +</a>
                </div>
                <div class="thumb-grid-area">
                    <VideoThumb />
                    <VideoThumb />
                    <VideoThumb />
                    <VideoThumb />                    
                </div>
                <a href="" class="saveBtn">Save</a>
              </Tabs>
              <Tabs title="Images">
                <div class="image-upload-show-area">
                    <div class="image-upload-area">
                        <h3>Background Image</h3>
                        <div class="img-uploadbox">
                            <div class="upload-options">
                                <label>
                                    <input type="file" class="image-upload" accept="image/*" />
                                    <span class="img-icons">
                                        <svg width="69" height="70" viewBox="0 0 69 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="34.4999" cy="34.9999" r="33.5624" stroke="white"/>
                                            <path d="M35.5 44H26.1C25.9409 44 25.7883 43.9368 25.6757 43.8243C25.5632 43.7117 25.5 43.5591 25.5 43.4V26.6C25.5 26.4409 25.5632 26.2883 25.6757 26.1757C25.7883 26.0632 25.9409 26 26.1 26H42.9C43.0591 26 43.2117 26.0632 43.3243 26.1757C43.4368 26.2883 43.5 26.4409 43.5 26.6V36" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M25.5 39L32.5 36L38 38.5M38.5 42H41.5M44.5 42H41.5M41.5 42V39M41.5 42V45M38.5 33C37.9696 33 37.4609 32.7893 37.0858 32.4142C36.7107 32.0391 36.5 31.5304 36.5 31C36.5 30.4696 36.7107 29.9609 37.0858 29.5858C37.4609 29.2107 37.9696 29 38.5 29C39.0304 29 39.5391 29.2107 39.9142 29.5858C40.2893 29.9609 40.5 30.4696 40.5 31C40.5 31.5304 40.2893 32.0391 39.9142 32.4142C39.5391 32.7893 39.0304 33 38.5 33V33Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div class="img-editbox">
                            <div class="img-display-area">
                                <img src="@/assets/images/long-img.png" />
                            </div>
                            <span class="img-icon">
                                <svg width="69" height="70" viewBox="0 0 69 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="34.4999" cy="34.9999" r="33.0624" stroke="white" stroke-width="2"/>
                                <path d="M41.7075 27.7911L41.7076 27.7912C42.3745 28.4581 42.6336 29.0162 42.7348 29.3775C42.7795 29.5368 42.7947 29.6625 42.7989 29.7479L36.8837 35.6631L36.8836 35.6631L31.1109 41.4334C31.0866 41.317 31.0477 41.172 30.9854 41.0055C30.8321 40.5959 30.5401 40.064 29.9886 39.513C29.4368 38.9612 28.905 38.6693 28.4956 38.5161C28.3269 38.453 28.1803 38.414 28.0633 38.3898L33.8377 32.6163L33.8377 32.6162L39.7534 26.7006C39.8386 26.7048 39.964 26.72 40.123 26.7645C40.4841 26.8657 41.0417 27.1248 41.7075 27.7911ZM30.6512 41.7477C30.7066 41.7465 30.7558 41.7454 30.7996 41.7445L30.7996 41.7445L30.6512 41.7477ZM27.5158 41.9903C27.7506 42.221 27.9484 42.4864 28.1025 42.7772L26.3489 43.149L26.7208 41.3954C27.0122 41.5504 27.2782 41.749 27.5097 41.9843L27.5097 41.9844L27.5158 41.9903ZM27.7542 38.8507L27.7574 38.6957L27.7574 38.6957C27.7564 38.7411 27.7554 38.7925 27.7542 38.8507Z" stroke="white"/>
                                </svg>
                            </span>
                        </div>
                        <div class="note">
                            <p>File Size:<span>Less than 25mb,</span>Image Size:<span>1920x946px,</span>File Type:<span>“jpg”,”png”,”jpeg”</span></p>
                            
                        </div>
                    </div>
                    <div class="title-area">
                        <h2>Images</h2>
                        <a href="#" class="advid-btn">Add +</a>
                    </div>
                    <div class="images-grid-area">
                        <ImageThumb />
                        <ImageThumb />
                        <ImageThumb />
                        <ImageThumb />
                    </div>
                    <a href="" class="saveBtn">Save</a>
                </div>
              </Tabs>
              <Tabs title="Poster">
                <div class="image-upload-show-area nomargin">                    
                    <div class="title-area">
                        <h2>Images</h2>
                        <a href="#" class="advid-btn">Add +</a>
                    </div>
                    <div class="poster-grid-area">
                        <PosterThumb />
                        <PosterThumb />
                        <PosterThumb />
                        <PosterThumb />
                    </div>
                    <a href="" class="saveBtn">Save</a>
                </div>
              </Tabs>
            </TabWrapper>
        </div>
    </div>    
        

        
  <div class="media-from-details">
    <div class="page-heading-area">
      <h2>Media</h2>
    </div>

    <div class="media-tabber-area">
      <TabWrapper>
        <Tabs title="Video">
          <div class="title-area">
            <h2>Video</h2>
            <a class="advid-btn" @click="isVideoModal = true">Add +</a>
          </div>
          <div class="thumb-grid-area">
            <VideoThumb />
            <VideoThumb />
            <VideoThumb />
            <VideoThumb />
          </div>
          <a href="" class="saveBtn">Save</a>
        </Tabs>
        <Tabs title="Images">
          <div class="image-upload-show-area">
            <div class="image-upload-area">
              <h3>Background Image</h3>
              <div class="img-uploadbox">
                <div class="upload-options">
                  <label>
                    <input type="file" class="image-upload" accept="image/*" />
                    <span class="img-icons">
                      <svg
                        width="69"
                        height="70"
                        viewBox="0 0 69 70"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="34.4999"
                          cy="34.9999"
                          r="33.5624"
                          stroke="white"
                        />
                        <path
                          d="M35.5 44H26.1C25.9409 44 25.7883 43.9368 25.6757 43.8243C25.5632 43.7117 25.5 43.5591 25.5 43.4V26.6C25.5 26.4409 25.5632 26.2883 25.6757 26.1757C25.7883 26.0632 25.9409 26 26.1 26H42.9C43.0591 26 43.2117 26.0632 43.3243 26.1757C43.4368 26.2883 43.5 26.4409 43.5 26.6V36"
                          stroke="white"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M25.5 39L32.5 36L38 38.5M38.5 42H41.5M44.5 42H41.5M41.5 42V39M41.5 42V45M38.5 33C37.9696 33 37.4609 32.7893 37.0858 32.4142C36.7107 32.0391 36.5 31.5304 36.5 31C36.5 30.4696 36.7107 29.9609 37.0858 29.5858C37.4609 29.2107 37.9696 29 38.5 29C39.0304 29 39.5391 29.2107 39.9142 29.5858C40.2893 29.9609 40.5 30.4696 40.5 31C40.5 31.5304 40.2893 32.0391 39.9142 32.4142C39.5391 32.7893 39.0304 33 38.5 33V33Z"
                          stroke="white"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  </label>
                </div>
              </div>
              <div class="note">
                <p>
                  File Size:<span>Less than 25mb,</span>Image
                  Size:<span>1920x946px,</span>File Type:<span
                    >“jpg”,”png”,”jpeg”</span
                  >
                </p>
              </div>
            </div>
            <div class="title-area">
              <h2>Images</h2>
              <a class="advid-btn" @click="isImageModal = true">Add +</a>
            </div>
            <div class="images-grid-area">
              <ImageThumb />
              <ImageThumb />
              <ImageThumb />
              <ImageThumb />
            </div>
            <a href="" class="saveBtn">Save</a>
          </div>
        </Tabs>
        <Tabs title="Poster">
          <div class="image-upload-show-area nomargin">
            <div class="title-area">
              <h2>Images</h2>
              <a href="#" class="advid-btn" @click="isPosterModal = true">Add +</a>
            </div>
            <div class="poster-grid-area">
              <PosterThumb />
              <PosterThumb />
              <PosterThumb />
              <PosterThumb />
            </div>
            <a href="" class="saveBtn">Save</a>
          </div>
        </Tabs>
      </TabWrapper>
    </div>
  </div>
  
  <div class="new-cast-modal">
    <PopUpModal :isModal="isVideoModal">
      <template v-slot:header>
        <h1>Add New Video</h1>
        <!-- <button @click="isVideoModal = false">
          <img src="@/assets/icons/modal-cross-icon.svg" alt="" />
        </button> -->
      </template>
      <template v-slot:body>
        <div class="cast-details">
          <div class="right">
            <div class="form-grp">
              <label for="">Video URL<span>*</span></label>
              <input type="text" placeholder="https://" v-model="video_url" />
              <p
                class="instruction"
                :class="error.isValidUrl ? 'error-url' : ''"
              >
                *Only On Youtube And Vimeo are available
              </p>
            </div>
            <div class="form-grp">
              <label for="">Video Title</label>
              <input
                type="text"
                placeholder="Enter video title"
                v-model="video_title"
              />
              <div class="add-check">
                <label for="official-trailer">
                  <input
                    type="checkbox"
                    id="official-trailer"
                    v-model="is_official_trailer"
                  />
                  <div class="checkbox">
                    <img
                      src="@/assets/icons/modal-checkbox-unchecked.svg"
                      alt=""
                      class="unchecked-icon"
                    />
                    <img
                      src="@/assets/icons/checkbox-checked.svg"
                      alt=""
                      class="checked-icon"
                    />
                  </div>
                  <p class="check-text">Add as official trailer</p>
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
            :disabled="video_url == '' || video_title == ''"
            :class="video_url == '' || video_title == '' ? 'isDisabled' : ''"
            @click="AddVideo"
          >
            Save
          </button>
          <button class="red-fill-btn" @click="isVideoModal = false">
            Cancel
          </button>
        </div>
      </template>
    </PopUpModal>
  </div> 
  
  <div class="new-cast-modal add-img-modal">
    <PopUpModal :isModal="isImageModal">
      <template v-slot:header>
        <h1>Add New Image</h1>
        <!-- <button @click="isImageModal = false">
          <img src="@/assets/icons/modal-cross-icon.svg" alt="" />
        </button> -->
      </template>
      <template v-slot:body>
        <div class="image-picker">
          <input type="file" name="" id="image-pick" />
          <label for="image-pick"
            ><h1 class="upload-img-btn">+ Upload images</h1></label
          >
        </div>
        <div class="image-grid">
          <div class="each-img">
            <img
              src="@/assets/images/modal-img-grid-img.png"
              alt=""
              class="picked-img"
            />
            <img
              src="@/assets/icons/modal-img-cross.svg"
              alt=""
              class="cross-icon"
            />
          </div>
          <div class="each-img">
            <img
              src="@/assets/images/modal-img-grid-img.png"
              alt=""
              class="picked-img"
            />
            <img
              src="@/assets/icons/modal-img-cross.svg"
              alt=""
              class="cross-icon"
            />
          </div>
          <div class="each-img">
            <img
              src="@/assets/images/modal-img-grid-img.png"
              alt=""
              class="picked-img"
            />
            <img
              src="@/assets/icons/modal-img-cross.svg"
              alt=""
              class="cross-icon"
            />
          </div>
          <div class="each-img">
            <img
              src="@/assets/images/modal-img-grid-img.png"
              alt=""
              class="picked-img"
            />
            <img
              src="@/assets/icons/modal-img-cross.svg"
              alt=""
              class="cross-icon"
            />
          </div>
          <div class="each-img">
            <img
              src="@/assets/images/modal-img-grid-img.png"
              alt=""
              class="picked-img"
            />
            <img
              src="@/assets/icons/modal-img-cross.svg"
              alt=""
              class="cross-icon"
            />
          </div>
          <div class="each-img">
            <img
              src="@/assets/images/modal-img-grid-img.png"
              alt=""
              class="picked-img"
            />
            <img
              src="@/assets/icons/modal-img-cross.svg"
              alt=""
              class="cross-icon"
            />
          </div>
        </div>
      </template>
      <template v-slot:footer>
        <div class="button-group">
          <button class="black-outline-btn">Save</button>
          <button class="red-fill-btn" @click="isImageModal = false">
            Cancel
          </button>
        </div>
      </template>
    </PopUpModal>
  </div>
  
  <div class="new-cast-modal">
    <PopUpModal :isModal="isPosterModal">
      <template v-slot:header>
        <h1>Add New Poster</h1>
        <!-- <button @click="isImageModal = false">
          <img src="@/assets/icons/modal-cross-icon.svg" alt="" />
        </button> -->
      </template>
      <template v-slot:body>
        <div class="add-poster-image">
          <div class="image-picker">
            <input type="file" name="" id="image-pick" />
            <label for="image-pick"><span class="upload-img-btn"><img src="@/assets/icons/img-upload.svg" /></span></label>
            <div class="image-show"><img src="@/assets/images/yumi-cell.png" /></div>
          </div>
          <div class="add-check">
                <label for="official-trailer">
                  <input
                    type="checkbox"
                    id="official-trailer"
                    v-model="is_official_trailer"
                  />
                  <div class="checkbox">
                    <img
                      src="@/assets/icons/modal-checkbox-unchecked.svg"
                      alt=""
                      class="unchecked-icon"
                    />
                    <img
                      src="@/assets/icons/checkbox-checked.svg"
                      alt=""
                      class="checked-icon"
                    />
                  </div>
                  <p class="check-text">Add as a main Poster</p>
                </label>
              </div>
          <span class="alert">*The main poster image would be changed if you check this</span>
        </div>
        
        
      </template>
      <template v-slot:footer>
        <div class="button-group">
          <button class="black-outline-btn"  @click="isPosterModal = false">Cancel</button>
          <button class="red-fill-btn">Add</button>
        </div>
      </template>
    </PopUpModal>
  </div>



</template>

<script>
import Tabs from "@/components/Tabs.vue";
import TabWrapper from "@/components/TabWrapper.vue";
import VideoThumb from "@/components/VideoThumb.vue";
import ImageThumb from "@/components/ImageThumb.vue";
import PosterThumb from "@/components/PosterThumb.vue";
import PopUpModal from "@/components/Modals/PopUpModal.vue";
export default {
  name: "MediaDetails",
  components: {
    Tabs,
    TabWrapper,
    VideoThumb,
    ImageThumb,
    PosterThumb,
    PopUpModal,
  },
  props: {
    site_language: {
      type: String,
    },
  },
  data() {
    return {
      toggle: false,
      hover: false,
      hover2: false,
      isVideoModal: false,
      isImageModal: false,
      isPosterModal: false,
      video_url: "",
      video_title: "",
      is_official_trailer: "",
      error: {},
      video_list: [],
    };
  },
  methods: {
    // add video
    AddVideo() {
      let youtubeid = this.matchYoutubeUrl(this.video_url);
      let vimeoId = this.validateVimeoURL(this.video_url);

      if (vimeoId != false || youtubeid != false) {
        // alert(vimeoId);
        this.error.isValidUrl = "";

        this.video_list.push({
          video_url: this.video_url,
          video_title: this.video_title,
          is_official_trailer: this.is_official_trailer == true ? "y" : "n",
        });
        this.isVideoModal = false;
        console.log(this.video_list);
        console.log(this.is_official_trailer);
      } else {
        this.error.isValidUrl = "Only On Youtube And Vimeo are available";
      }
    },

    // match youtube url
    matchYoutubeUrl(url) {
      let p =
        /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
      let matches = url.match(p);
      if (matches) {
        return matches[1];
      }
      return false;
    },

    // match vimeo url
    validateVimeoURL(url) {
      let p = /^(http\:\/\/|https\:\/\/)?(www\.)?(vimeo\.com\/)([0-9]+)$/;
      let matches = url.match(p);
      if (matches) {
        return matches[4];
      }
      return false;
    },
  },
};
</script>

<style>
.error-url {
  color: red !important;
}
</style>
