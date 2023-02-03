<template>
  <div
    class="people-details-sec movies-details-sec"
    style="background-image: url(../../../src/assets/images/details-banner.jpg)"
  >
    <div class="container">
      <div class="people-dtl-otr">
        <div class="people-dtl-left">
          <figure><img src="@/assets/images/theday.png" alt="theday" /></figure>
        </div>
        <div class="people-dtl-right">
          <div class="edit-otr">
            <h2 class="big-hdr">The Day I Died: Unclosed Case</h2>
            <div class="edit-innr">
              <a href="#" class="btn solid">Edit</a>
              <a href="#" class="sc-icon">
                <img src="@/assets/icons/wishlist.svg" alt="" class="dark-th" />
                <img
                  src="@/assets/icons/blk-icon1.svg"
                  alt=""
                  class="light-th"
                />
              </a>
              <a href="#" class="sc-icon">
                <img src="@/assets/icons/settings.svg" alt="" class="dark-th" />
                <img
                  src="@/assets/icons/blk-icon3.svg"
                  alt=""
                  class="light-th"
                />
              </a>
            </div>
          </div>
          <ul class="people-date-list">
            <li class="gray-bg">15</li>
            <li>Movie</li>
            <li>Drama</li>
            <li>2020</li>
            <li>116m</li>
            <li>Footfalls : 612,013,153</li>
            <li>Likes : 13,153</li>
          </ul>
          <div class="startxt">
            <div class="md-star">
              <img src="../../assets/icons/star.svg" alt="star" />
              <img src="../../assets/icons/star.svg" alt="star" />
              <img src="../../assets/icons/star.svg" alt="star" />
              <img src="../../assets/icons/star.svg" alt="star" />
              <img src="../../assets/icons/outline-star.svg" alt="star" />
            </div>
            <span>8.5</span>
          </div>
          <h5>Summary</h5>
          <p>
            No overview has been added yet.No overview has been added yet.No
            overview has been added yet.No overview has been added yet.No
            overview has been added yet.No overview has been added yet.No
            overview has been added yet.No overview has been added yet.No
            overview has been added yet.No overview has been added yet.No
            overview has been added yet.No overview has been added yet.No
            overview has been added yet.No overview has been added yet.No
            overview has been added yet. No overview has been added yet. No
            overview has been added yet. No overview has been added yet. No
            overview has been added yet. No ove
          </p>
          <ul class="movie-detail-list">
            <li>
              <span>Director</span>
              <p>Park Ji-wan</p>
            </li>
            <li>
              <span>Writers</span>
              <p>Park Ji-wan</p>
            </li>
            <li>
              <span>Cast</span>
              <p>Kim Hye-soo,Lee Jung-eun,Roh Jeong-eui</p>
            </li>
            <li>
              <span>Original by</span>
              <p>-</p>
            </li>
            <li>
              <span>Official Site</span>
              <p>-</p>
            </li>
            <li>
              <span>Country/Language</span>
              <p>South Korea/Ko</p>
            </li>
          </ul>

          <div class="awd-list-outr">
            <ul class="award-list">
              <li>
                <span><img src="@/assets/icons/award.svg" alt="" /></span>
                <em>AWARD</em>
              </li>
              <li>
                <ul>
                  <li>2 Wins</li>
                  <li>42 Nominations</li>
                </ul>
              </li>
            </ul>
            <a href="#">
              <img
                src="@/assets/icons/arrow-right-wh.svg"
                class="dark-th"
                alt=""
              />
              <img
                src="@/assets/icons/arrow-right-blk.svg"
                class="light-th"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="people-details-btm-sec movies-details-btm-sec">
    <div class="container">
      <div class="people-details-btm-otr">
        <div class="people-details-btm-left">
          <h2 class="mb-10 small-hdr">Details</h2>
          <ul class="detail-lst">
            <li>
              <span>Release Date</span>
              <p>Jun 03, 2022</p>
            </li>
            <li>
              <span>Plot</span>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </li>
            <li>
              <span>Also Known As </span>
              <p>내가 죽던 날 [Korean]</p>
            </li>
          </ul>
          <div class="work-otr mr-bb2">
            <h2 class="mb-10 small-hdr">Cast & Crew</h2>
            <CastCrewSection
              @navigation="navigate('MoviesDetailsCast&Crew')"
            />
            <h2 class="mb-10 small-hdr">Media</h2>
            <MediaSection
              @navigation="navigate('MoviesMedia')"
            />
            <h2 class="mb-10 small-hdr">Related Articles</h2>
            <RelatedSection />
            <CommunityCard />
          </div>
        </div>
        <div class="people-details-btm-right">
          <h2 class="mb-10 small-hdr">Watch</h2>
          <ul class="social-icon-list">
            <li>
              <span>Stream</span
              ><a href="#"
                ><img src="@/assets/images/watch-1.png" alt="watch"
              /></a>
            </li>
            <li>
              <span>Rent</span
              ><a href="#"
                ><img src="@/assets/images/watch-2.png" alt="watch"
              /></a>
            </li>
            <li>
              <span>Buy</span
              ><a href="#"
                ><img src="@/assets/images/watch-3.png" alt="watch"
              /></a>
            </li>
          </ul>
          <h2 class="mb-10 small-hdr">Connections</h2>
          <div class="slider-otr">
            <Slider />
          </div>
          <h2 class="mb-10 small-hdr">Series</h2>
          <div class="slider-otr">
            <slider />
          </div>

          <GoogleAdd />
          <TagCard />
          <h2 class="mb-10 small-hdr">Recommendations</h2>
          <div class="slider-otr">
            <slider />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TabWrapper from "@/components/TabWrapper.vue";
import Tabs from "@/components/Tabs.vue";
import Slider from "@/components/Slider.vue";
import GoogleAdd from "@/components/GoogleAdd.vue";
import TagCard from "@/components/TagCard.vue";
import CommunityCard from "@/components/CommunityCard.vue";
import ImageTextCard from "@/components/ImageTextCard.vue";
import MediaSection from "@/components/Details/MediaSection.vue";
import CastCrewSection from "@/components/Details/CastCrewSection.vue";
import RelatedSection from "@/components/Details/RelatedSection.vue";
import { useRoute, useRouter } from "vue-router";

export default {
  name: "MoviesDetails",
  components: {
    Tabs,
    TabWrapper,
    Slider,
    GoogleAdd,
    TagCard,
    CommunityCard,
    ImageTextCard,
    MediaSection,
    CastCrewSection,
    RelatedSection,
  },

  setup() {
    const router = useRouter();
    const route = useRoute();


    const navigate = (component_name) => {
      router.push({ name: component_name, params: { id: route.params.id } });
    };

    return { navigate };
  },
};
</script>