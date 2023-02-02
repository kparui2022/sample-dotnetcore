<template>
  <BannerCardTwo
    :bannerInfo="{
      imgUrl: posterImage,
      link: 'MoviesDetails',
      id: $route.params.id,
    }"
  >
    <h3>{{ title }}</h3>
  </BannerCardTwo>
  <section class="tvepisodes-btm">
    <div class="container">
      <div class="tvepisodes-content">
        <div class="top-head">
          <h2>Cast & Crew</h2>
          <!-- <a href="javascript">Edit</a> -->
          <router-link to @click="toEditMovieCredit">Edit</router-link>
        </div>
        <div class="tab-outr small">
          <TabWrapper @selectedTab="selectedTab">
            <Tabs title="Cast">
              <div class="tvimage-otr">
                <template v-for="(castList, i) in castDetails" :key="i">
                  <CastCrewCard :castList="castList" />
                </template>
              </div>
            </Tabs>
            <Tabs title="Crew">
              <div class="tvimage-otr">
                <template v-for="(castList, i) in castDetails" :key="i">
                  <CastCrewCard :castList="castList" />
                </template>
              </div>
            </Tabs>
          </TabWrapper>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import TabWrapper from "@/components/TabWrapper.vue";
import Tabs from "@/components/Tabs.vue";
import BannerCardTwo from "@/components/BannerCardTwo.vue";
import CastCrewCard from "@/components/CastCrewCard.vue";
import MoviesCastCrewService from "@/services/MoviesCastCrewService.js";
import { onMounted, ref } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";

export default {
  name: "MoviesDetailsCast&Crew",
  components: {
    Tabs,
    TabWrapper,
    BannerCardTwo,
    CastCrewCard,
  },

  setup() {
    const route = useRoute();
    const router = useRouter();
    const castDetails = ref([]);
    const posterImage = ref("");
    const title = ref("");
    const movieId = route.params.id;

    // API for cast and crew details
    const getCastCrewDetails = async (_id, _type, _page) => {
      let data = { id: _id, type: _type, page: _page, limit: 10 };
      try {
        let response = await MoviesCastCrewService.getCastDetails(data);
        castDetails.value = response.data.results;
        posterImage.value = response.data.poster_image;
        title.value = response.data.title;

        console.log("CAST", response.data);
      } catch (error) {
        console.warn(error);
      }
    };

    // When clicked on tab then...
    const selectedTab = (tab) => {
      if (tab == "Crew") getCastCrewDetails(movieId, "crew", 1);
      else getCastCrewDetails(movieId, "cast", 1);
    };

    // To movies_credit page
    const toEditMovieCredit = () => {
      router.push({ name: "AddNewMovieForm", params: { id: movieId } });
    };

    // Lifecycle hooks
    onMounted(() => {
      getCastCrewDetails(movieId, "cast", 1);
    });

    return {
      castDetails,
      posterImage,
      title,
      selectedTab,
      toEditMovieCredit,
    };
  },
};
</script>
