<template>
  <BannerCardTwo
  :bannerInfo="{
    imgUrl:posterImage,
    link:'MoviesDetails',
    id:$route.params.id
    }"
  >
    <h3>{{title}}</h3>
  </BannerCardTwo>
  <div class="container">
    <div class="movies-media">
      <div class="mypage-rght">
        <div class="media-heading">
          <h2>Media</h2>
          <button class="edit-button" @click="toAddMediaVideo">Edit</button>
        </div>

        <div class="tab-outr">
          <TabWrapper>
            <Tabs title="video(12)">
              <div class="media-otr">
                <template v-for="(video, index) in videos" :key="index">
                  <VideoCard :video="video" />
                </template>

                <!-- <a href="#" class="media-innr">
                                        <div class="media-pic">
                                            <figure class="img"><img src="@/assets/images/media1.jpg" alt="" /></figure>
                                            <p><span><img src="@/assets/icons/play-btn.svg" alt="" /></span> 3:10</p>    
                                        </div>
                                        <h5>Title Title Title Title Title Title Titl... </h5>
                                    </a>
                                    <a href="#" class="media-innr">
                                        <div class="media-pic">
                                            <figure class="img"><img src="@/assets/images/media2.jpg" alt="" /></figure>
                                            <p><span><img src="@/assets/icons/play-btn.svg" alt="" /></span> 3:10</p> 
                                        </div>
                                        <h5>Title Title Title Title Title Title Titl... </h5>
                                    </a>
                                    <a href="#" class="media-innr">
                                        <div class="media-pic">
                                            <figure class="img"><img src="@/assets/images/media3.jpg" alt="" /></figure>
                                            <p><span><img src="@/assets/icons/play-btn.svg" alt="" /></span> 3:10</p>       
                                        </div>
                                        <h5>Title Title Title Title Title Title Titl... </h5>
                                    </a>
                                    <a href="#" class="media-innr">
                                        <div class="media-pic">
                                            <figure class="img"><img src="@/assets/images/media4.jpg" alt="" /></figure>
                                            <p><span><img src="@/assets/icons/play-btn.svg" alt="" /></span> 3:10</p>       
                                        </div>
                                        <h5>Title Title Title Title Title Title Titl... </h5>
                                    </a>
                                    <a href="#" class="media-innr">
                                        <div class="media-pic">
                                            <figure class="img"><img src="@/assets/images/media5.jpg" alt="" /></figure>
                                            <p><span><img src="@/assets/icons/play-btn.svg" alt="" /></span> 3:10</p>      
                                        </div>
                                        <h5>Title Title Title Title Title Title Titl... </h5>
                                    </a>
                                    <a href="#" class="media-innr">
                                        <div class="media-pic">
                                            <figure class="img"><img src="@/assets/images/media6.jpg" alt="" /></figure>
                                            <p><span><img src="@/assets/icons/play-btn.svg" alt="" /></span> 3:10</p>      
                                        </div>
                                        <h5>Title Title Title Title Title Title Titl... </h5>
                                    </a>
                                    <a href="#" class="media-innr">
                                        <div class="media-pic">
                                            <figure class="img"><img src="@/assets/images/media7.jpg" alt="" /></figure>
                                            <p><span><img src="@/assets/icons/play-btn.svg" alt="" /></span> 3:10</p>       
                                        </div>
                                        <h5>Title Title Title Title Title Title Titl... </h5>
                                    </a>
                                    <a href="#" class="media-innr">
                                        <div class="media-pic">
                                            <figure class="img"><img src="@/assets/images/media8.jpg" alt="" /></figure>
                                            <p><span><img src="@/assets/icons/play-btn.svg" alt="" /></span> 3:10</p>    
                                        </div>
                                        <h5>Title Title Title Title Title Title Titl... </h5>
                                    </a>
                                    <a href="#" class="media-innr">
                                        <div class="media-pic">
                                            <figure class="img"><img src="@/assets/images/media9.jpg" alt="" /></figure>
                                            <p><span><img src="@/assets/icons/play-btn.svg" alt="" /></span> 3:10</p>      
                                        </div>
                                        <h5>Title Title Title Title Title Title Titl... </h5>
                                    </a>
                                    <a href="#" class="media-innr">
                                        <div class="media-pic">
                                            <figure class="img"><img src="@/assets/images/media10.jpg" alt="" /></figure>
                                            <p><span><img src="@/assets/icons/play-btn.svg" alt="" /></span> 3:10</p>      
                                        </div>
                                        <h5>Title Title Title Title Title Title Titl... </h5>
                                    </a>
                                    <a href="#" class="media-innr">
                                        <div class="media-pic">
                                            <figure class="img"><img src="@/assets/images/media11.jpg" alt="" /></figure>
                                            <p><span><img src="@/assets/icons/play-btn.svg" alt="" /></span> 3:10</p>      
                                        </div>
                                        <h5>Title Title Title Title Title Title Titl... </h5>
                                    </a>
                                    <a href="#" class="media-innr">
                                        <div class="media-pic">
                                            <figure class="img"><img src="@/assets/images/media12.jpg" alt="" /></figure>
                                            <p><span><img src="@/assets/icons/play-btn.svg" alt="" /></span> 3:10</p>     
                                        </div>
                                        <h5>Title Title Title Title Title Title Titl... </h5>
                                    </a>
                                     -->
              </div>
            </Tabs>
            <Tabs title="Image (12)">
              <div class="image-otr">
                <template v-for="(image, index) in images" :key="index">
                  <ImageCard :image="image" />
                </template>

                <!-- <div class="image-innr">
                                        <a href="#"><img src="@/assets/images/img1.jpg" alt="" /></a>
                                    </div>
                                    <div class="image-innr">
                                        <a href="#"><img src="@/assets/images/img2.jpg" alt="" /></a>
                                    </div>
                                    <div class="image-innr">
                                        <a href="#"><img src="@/assets/images/img3.jpg" alt="" /></a>
                                    </div>
                                    <div class="image-innr">
                                        <a href="#"><img src="@/assets/images/img4.jpg" alt="" /></a>
                                    </div>
                                    <div class="image-innr">
                                        <a href="#"><img src="@/assets/images/img5.jpg" alt="" /></a>
                                    </div>
                                    <div class="image-innr">
                                        <a href="#"><img src="@/assets/images/img6.jpg" alt="" /></a>
                                    </div>

                                    <div class="image-innr">
                                        <a href="#"><img src="@/assets/images/img7.jpg" alt="" /></a>
                                    </div>
                                    <div class="image-innr">
                                        <a href="#"><img src="@/assets/images/img8.jpg" alt="" /></a>
                                    </div>
                                    <div class="image-innr">
                                        <a href="#"><img src="@/assets/images/img9.jpg" alt="" /></a>
                                    </div>
                                    <div class="image-innr">
                                        <a href="#"><img src="@/assets/images/img10.jpg" alt="" /></a>
                                    </div>
                                    <div class="image-innr">
                                        <a href="#"><img src="@/assets/images/img11.jpg" alt="" /></a>
                                    </div>
                                    <div class="image-innr">
                                        <a href="#"><img src="@/assets/images/img12.jpg" alt="" /></a>
                                    </div>

                                    <div class="image-innr">
                                        <a href="#"><img src="@/assets/images/img13.jpg" alt="" /></a>
                                    </div>
                                    <div class="image-innr">
                                        <a href="#"><img src="@/assets/images/img14.jpg" alt="" /></a>
                                    </div>
                                    <div class="image-innr">
                                        <a href="#"><img src="@/assets/images/img15.jpg" alt="" /></a>
                                    </div>
                                    <div class="image-innr">
                                        <a href="#"><img src="@/assets/images/img16.jpg" alt="" /></a>
                                    </div>
                                    <div class="image-innr">
                                        <a href="#"><img src="@/assets/images/img17.jpg" alt="" /></a>
                                    </div>
                                    <div class="image-innr">
                                        <a href="#"><img src="@/assets/images/img18.jpg" alt="" /></a>
                                    </div>

                                    <div class="image-innr">
                                        <a href="#"><img src="@/assets/images/img19.jpg" alt="" /></a>
                                    </div>
                                    <div class="image-innr">
                                        <a href="#"><img src="@/assets/images/img20.jpg" alt="" /></a>
                                    </div>
                                    <div class="image-innr">
                                        <a href="#"><img src="@/assets/images/img21.jpg" alt="" /></a>
                                    </div>
                                    <div class="image-innr">
                                        <a href="#"><img src="@/assets/images/img22.jpg" alt="" /></a>
                                    </div>
                                    <div class="image-innr">
                                        <a href="#"><img src="@/assets/images/img23.jpg" alt="" /></a>
                                    </div>
                                    <div class="image-innr">
                                        <a href="#"><img src="@/assets/images/img24.jpg" alt="" /></a>
                                    </div> -->
              </div>
            </Tabs>
            <Tabs title="Poster(12)">
              <div class="image-otr">
                <template v-for="(poster, index) in posters" :key="index">
                  <PosterCard :poster="poster" />
                </template>

                <!-- <a href="#" class="image-innr">
                                        <figure class="hgt"><img src="@/assets/images/poster1.jpg" alt="" /></figure>
                                        <p>Marvel Studios:...</p>
                                    </a>
                                    <a href="#" class="image-innr">
                                        <figure class="hgt"><img src="@/assets/images/poster2.jpg" alt="" /></figure>
                                        <p>The Courier</p>
                                    </a>
                                    <a href="#" class="image-innr">
                                        <figure class="hgt"><img src="@/assets/images/poster3.jpg" alt="" /></figure>
                                        <p>The Mauritanian</p>
                                    </a>
                                    <a href="#" class="image-innr">
                                        <figure class="hgt"><img src="@/assets/images/poster4.jpg" alt="" /></figure>
                                        <p>The Electrical Life o...</p>
                                    </a>
                                    <a href="#" class="image-innr">
                                        <figure class="hgt"><img src="@/assets/images/poster5.jpg" alt="" /></figure>
                                        <p>The Power of the Dog</p>
                                    </a>
                                    <a href="#" class="image-innr">
                                        <figure class="hgt"><img src="@/assets/images/poster6.jpg" alt="" /></figure>
                                        <p>Spider-Man: No...</p>
                                    </a>

                                    <a href="#" class="image-innr">
                                        <figure class="hgt"><img src="@/assets/images/poster7.jpg" alt="" /></figure>
                                        <p>Marvel Studios:...</p>
                                    </a>
                                    <a href="#" class="image-innr">
                                        <figure class="hgt"><img src="@/assets/images/poster8.jpg" alt="" /></figure>
                                        <p>The Courier</p>
                                    </a>
                                    <a href="#" class="image-innr">
                                        <figure class="hgt"><img src="@/assets/images/poster9.jpg" alt="" /></figure>
                                        <p>The Mauritanian</p>
                                    </a>
                                    <a href="#" class="image-innr">
                                        <figure class="hgt"><img src="@/assets/images/poster10.jpg" alt="" /></figure>
                                        <p>The Electrical Life o...</p>
                                    </a>
                                    <a href="#" class="image-innr">
                                        <figure class="hgt"><img src="@/assets/images/poster11.jpg" alt="" /></figure>
                                        <p>The Power of the Dog</p>
                                    </a>
                                    <a href="#" class="image-innr">
                                        <figure class="hgt"><img src="@/assets/images/poster12.jpg" alt="" /></figure>
                                        <p>Spider-Man: No...</p>
                                    </a> -->
              </div>
            </Tabs>
          </TabWrapper>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TabWrapper from "@/components/TabWrapper.vue";
import Tabs from "@/components/Tabs.vue";
import BannerCardTwo from "@/components/BannerCardTwo.vue";
import CastCrewCard from "@/components/CastCrewCard.vue";
import VideoCard from "@/components/MyPage/VideoCard.vue";
import ImageCard from "@/components/MyPage/ImageCard.vue";
import PosterCard from "@/components/MyPage/PosterCard.vue";
import MoviesDetailsService from "@/services/MoviesDetailsService.js";
import { onBeforeMount, onMounted, ref } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";

export default {
  name: "MoviesMedia",
  components: {
    Tabs,
    TabWrapper,
    BannerCardTwo,
    CastCrewCard,
    VideoCard,
    ImageCard,
    PosterCard,
  },

  setup() {
    const route = useRoute();
    const router = useRouter();
    const posterImage = ref("");
    const title = ref("");
    const videos = ref([]);
    const videoCount = ref(0);
    const images = ref([]);
    const imageCount = ref(0);
    const posters = ref([]);
    const posterCount = ref(0);
    const movieId = route.params.id;

    // Function for video details
    const mediaVideoDetails = async (_id, _page) => {
      let data = { id: _id, type: "video", page: _page, limit: 10 };
      try {
        let response = await MoviesDetailsService.getMediaDetails(data);

        videos.value = response.data.results;
        videoCount.value =
          response.data.results.length > 0 ? response.data.results.length : 0;

        posterImage.value = response.data.poster_image;
        title.value = response.data.title;

        console.log("VIDEO", response.data);
      } catch (error) {
        console.warn(error);
      }
    };


    // Function for image details
    const mediaImageDetails = async (_id, _page) => {
      let data = { id: _id, type: "image", page: _page, limit: 10 };
      try {
        let response = await MoviesDetailsService.getMediaDetails(data);

        images.value = response.data.results;
        imageCount.value =
          response.data.results.length > 0 ? response.data.results.length : 0;

        // posterImage.value = response.data.poster_image;
        // title.value = response.data.title;

        console.log("IMAGES", response.data);
      } catch (error) {
        console.warn(error);
      }
    };
  

  // Function for poster details
    const mediaPosterDetails = async (_id, _page) => {
      let data = { id: _id, type: "poster", page: _page, limit: 10 };
      try {
        let response = await MoviesDetailsService.getMediaDetails(data);
        posters.value = response.data.results;
        videoCount.value =
          response.data.results.length > 0 ? response.data.results.length : 0;

        // posterImage.value = response.data.poster_image;
        // title.value = response.data.title;

        console.log("POSTER", response.data);
      } catch (error) {
        console.warn(error);
      }
    };



    // To add media video page
    const toAddMediaVideo = () => {
      router.push({ name: "AddNewMovieForm", params: { id: movieId } });
    };

    // Lifecycle hooks
    onBeforeMount(() => {
      mediaVideoDetails(movieId, 1);
      mediaImageDetails(movieId, 1);
      mediaPosterDetails(movieId, 1);
    });

    return {
      videos,
      images,
      posters,
      videoCount,
      imageCount,
      posterCount,
      posterImage,
      title,
      toAddMediaVideo,
    };
  },
};
</script>
