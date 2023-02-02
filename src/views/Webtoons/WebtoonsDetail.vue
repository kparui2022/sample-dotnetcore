<template>
    <div class="people-details-sec tvshows-details-sec"
        style="background-image:url(../../../src/assets/images/webtoon-back.jpg);">
        <div class="container">
            <div class="people-dtl-otr">
                <div class="people-dtl-left">
                    <figure><img src="@/assets/images/webtoons-pic.jpg" alt="yumi" /></figure>
                </div>
                <div class="people-dtl-right">
                    <div class="edit-otr">
                        <h2 class="big-hdr">Yumi’s Cells</h2>
                        <div class="edit-innr">
                            <a href="#" class="btn solid">Edit</a>
                            <a href="#" class="sc-icon"><img src="@/assets/icons/wishlist.svg" alt="" /></a>
                            <a href="#" class="sc-icon"><img src="@/assets/icons/star-outline.svg" alt="" /></a>
                            <a href="#" class="sc-icon"><img src="@/assets/icons/settings.svg" alt="" /></a>
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
                            <img src="../../assets/icons/star.svg" alt="star">
                            <img src="../../assets/icons/star.svg" alt="star">
                            <img src="../../assets/icons/star.svg" alt="star">
                            <img src="../../assets/icons/star.svg" alt="star">
                            <img src="../../assets/icons/outline-star.svg" alt="star">
                        </div>
                        <span>8.5</span>
                    </div>
               
                    <ul class="movie-detail-list webtoons-detail-list">
                        <li>
                            <span>Summary</span>
                            <p>No overview has been added yet.</p>
                        </li>
                        <li>
                            <span>Epicodes</span>
                            <p>115</p>
                        </li>
                        <li>
                            <ul>
                                <li> 
                                    <span>Artist</span>
                                    <p>Lee Dong geon</p>
                                </li>
                                <li>
                            <span>Writers</span>
                            <p>Lee Dong geon</p>
                        </li>
                            </ul>

                           
                        </li>
                       
                        <!-- <li>
                            <span>Official Site</span>
                            <p>www.yumiscells.co.kr</p>
                        </li>
                        <li>
                            <span>Country/Language</span>
                            <p>South Korea/Ko</p>
                        </li> -->
                        <li>
                            <span>Channel</span>
                            <a href="#"><img src="@/assets/images/webtoon-icon.png" alt="watch"></a>
                        </li>
                      
                    </ul>


                </div>
            </div>
        </div>
    </div>
    <div class="people-details-btm-sec tvshows-details-btm-sec movies-details-btm-sec">
        <div class="container">
            <div class="tab-outr small">
                <TabWrapper>
                    <Tabs title="Season 1">
                        <div class="people-details-btm-otr">
                            <div class="people-details-btm-left">
                                <h2 class="mb-10 small-hdr">Details</h2>
                                <figure class="detailfigure">
                                    <img src="@/assets/images/webtoons-pic.jpg" alt="yumi-cell">
                                </figure>
                                <ul class="detail-lst">
                                    <li>
                                        <h5>Official Sites</h5>
                                        <p>www.naver.com</p>
                                    </li>
                                    <li>
                                        <h5>Release Date</h5>
                                        <p>Jun 03, 2022</p>
                                    </li>
                                    <li>
                                        <h5>Episodes</h5>
                                        <p>16</p>
                                    </li>
                                    <li>
                                        <h5>Plot</h5>
                                        <p>Yumi is a 30-year old, ordinary woman who struggles with expressing her feelings. Told from the perspective of the many brain cells in her head, she experiences growth in both her love life, her career, and finds happiness in the small joys of everyday life.</p>
                                    </li>
                                    <li>
                                        <h5>Also Known As</h5>
                                        <p>유미의 세포들 [Korean]</p>
                                    </li>
                                </ul>
                                <h2 class="mb-10 small-hdr episode-heading">Episodes</h2>
                                <EpisodeSection />
                                <div class="work-otr mr-bb2">
                                    <h2 class="mb-10 small-hdr">Cast & Crew</h2>
                                    <CastCrewSection />
                                    <h2 class="mb-10 small-hdr">Media</h2>
                                    <MediaSection />
                                    <h2 class="mb-10 small-hdr">Community</h2>
                                    <CommunityCard />
                                </div>
                            </div>
                            <div class="people-details-btm-right">
                                <h2 class="mb-10 small-hdr">Watch</h2>
                                <ul class="social-icon-list">
                                    <li><span>Stream</span><a href="#">
                                        <img src="@/assets/icons/tving_entertainment-media-icon.svg"
                                                alt="watch" />
                                            </a>
                                        </li>
                                  
                                </ul>
                                <h2 class="mb-10 small-hdr">Connections</h2>
                                <div class="slider-otr">
                                    <slider />
                                </div>

                                <GoogleAdd />

                                <TagCard />
                            </div>
                        </div>
                    </Tabs>
                    <Tabs title="Season 2">
                        Season 2
                    </Tabs>
                    <Tabs title="Special">
                        Special
                    </Tabs>
                </TabWrapper>
            </div>

        </div>
    </div>
</template>

<script>
import TabWrapper from "@/components/TabWrapper.vue";
import Tabs from "@/components/Tabs.vue";
import Slider from "@/components/Slider.vue";
import TagCard from "@/components/TagCard.vue";
import GoogleAdd from "@/components/GoogleAdd.vue";
import CommunityCard from "@/components/CommunityCard.vue";
import CastCrewSection from "@/components/Details/CastCrewSection.vue";
import MediaSection from "@/components/Details/MediaSection.vue";
import EpisodeSection from "@/components/Details/EpisodeSection.vue";

export default {
    name:'WebtoonsDetail',
    components: {
    Tabs,
    TabWrapper,
    Slider,
    TagCard,
    GoogleAdd,
    CommunityCard,
    CastCrewSection,
    MediaSection,
    EpisodeSection
},

};
</script>