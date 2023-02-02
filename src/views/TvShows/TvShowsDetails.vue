<template>
    <div class="people-details-sec tvshows-details-sec"
        style="background-image:url(../../../src/assets/images/details-banner.jpg);">
        <div class="container">
            <div class="people-dtl-otr">
                <div class="people-dtl-left">
                    <figure><img src="@/assets/images/yumi.png" alt="yumi" /></figure>
                </div>
                <div class="people-dtl-right">
                    <div class="edit-otr">
                        <h2 class="big-hdr">Yumi’s Cells</h2>
                        <div class="edit-innr">
                            <a href="#" class="btn solid">Edit</a>
                            <a href="#" class="sc-icon">
                                <img src="@/assets/icons/wishlist.svg"  class="dark-th" alt="" />
                                <img src="@/assets/icons/blk-icon1.svg" class="light-th" alt="" />
                            </a>
                            <a href="#" class="sc-icon">
                                <img src="@/assets/icons/star-outline.svg"  class="dark-th" alt="" />
                                <img src="@/assets/icons/blk-icon2.svg" class="light-th" alt="" />
                            </a>
                            <a href="#" class="sc-icon">
                                <img src="@/assets/icons/settings.svg"  class="dark-th" alt="" />
                                <img src="@/assets/icons/blk-icon3.svg" class="light-th" alt="" />
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
                            <img src="../../assets/icons/star.svg" alt="star">
                            <img src="../../assets/icons/star.svg" alt="star">
                            <img src="../../assets/icons/star.svg" alt="star">
                            <img src="../../assets/icons/star.svg" alt="star">
                            <img src="../../assets/icons/outline-star.svg" alt="star">
                        </div>
                        <span>8.5</span>
                    </div>
                    <h5>Summary</h5>
                    <p>Yumi is a 30-year old, ordinary woman who struggles with expressing her feelings. Told from the
                        perspective of the many brain cells in her head, she experiences growth in both her love life,
                        her career, and finds happiness in the small joys of everyday life.</p>
                    <ul class="movie-detail-list">
                        <li>
                            <span>Director</span>
                            <p>Song Jae-jung</p>
                        </li>
                        <li>
                            <span>Writers</span>
                            <p>Kim Yoon-joo</p>
                        </li>
                        <li>
                            <span>Cast</span>
                            <p>Kim Go-eun,Ahn Bo-hyun,Lee Yu-bi</p>
                        </li>
                        <li>
                            <span>Original by</span>
                            <p>Yumi’s cells (Webtoon) - Lee Dong geon</p>
                        </li>
                        <li>
                            <span>Official Site</span>
                            <p>www.yumiscells.co.kr</p>
                        </li>
                        <li>
                            <span>Country/Language</span>
                            <p>South Korea/Ko</p>
                        </li>
                        <li>
                            <span>Channel</span>
                            <a href="#"><img src="../../assets/images/watch-1.png" alt="watch"></a>
                        </li>
                        <li>
                            <div class="awd-list-outr">
                                <ul class="award-list">
                                    <li><span><img src="@/assets/icons/award.svg" alt="" /></span> <em>AWARD</em></li>
                                    <li>
                                        <ul>
                                            <li>2 Wins </li>
                                            <li>42 Nominations</li>
                                        </ul>
                                    </li>
                                </ul>
                                <a href="/tvshows/awards">
                                    <img src="@/assets/icons/arrow-right-wh.svg"  class="dark-th" alt="" />
                                    <img src="@/assets/icons/arrow-right-blk.svg" class="light-th" alt="" />
                                </a>
                            </div>
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
                                    <img src="@/assets/images/yumi-cell.png" alt="yumi-cell">
                                </figure>
                                <ul class="detail-lst">
                                    <li><span>Season Name</span>
                                        <p>Yumi’s Cells 2</p>
                                    </li>
                                    <li><span>Release Date</span>
                                        <p>Jun 03, 2022</p>
                                    </li>
                                    <li><span>Episodes</span>
                                        <p>16</p>
                                    </li>
                                    <li><span>Plot</span>
                                        <p>Yumi is a 30-year old, ordinary woman who struggles with expressing her
                                            feelings. Told from the perspective of the many brain cells in her head, she
                                            experiences growth in both her love life, her career, and finds happiness in
                                            the small joys of everyday life.</p>
                                    </li>
                                    <li><span>Also Known As</span>
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
                                    <h2 class="mb-10 small-hdr">Related Articles</h2>
                                    <RelatedSection />
                                    <h2 class="mb-10 small-hdr">Community</h2>
                                    <CommunityCard />
                                </div>
                            </div>
                            <div class="people-details-btm-right">
                                <h2 class="mb-10 small-hdr">Watch</h2>
                                <ul class="social-icon-list">
                                    <li><span>Stream</span><a href="#"><img src="@/assets/images/watch-1.png"
                                                alt="watch" /></a></li>
                                    <li><span>Rent</span><a href="#"><img src="@/assets/images/watch-2.png"
                                                alt="watch" /></a></li>
                                    <li><span>Buy</span><a href="#"><img src="@/assets/images/watch-3.png"
                                                alt="watch" /></a></li>
                                </ul>
                                <h2 class="mb-10 small-hdr">Connections</h2>
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
import CastCrewSection from "@/components/Details/CastCrewSection.vue";
import MediaSection from "@/components/Details/MediaSection.vue";
import RelatedSection from "@/components/Details/RelatedSection.vue";
import CommunityCard from "@/components/CommunityCard.vue";
import GoogleAdd from "@/components/GoogleAdd.vue";
import TagCard from "@/components/TagCard.vue";
import EpisodeSection from "@/components/Details/EpisodeSection.vue";

export default {
    name: 'TvShowsDetails',
    components: {
    Tabs,
    TabWrapper,
    Slider,
    CastCrewSection,
    MediaSection,
    RelatedSection,
    CommunityCard,
    GoogleAdd,
    TagCard,
    EpisodeSection
},
};
</script>