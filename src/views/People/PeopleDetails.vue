<template>
    <div class="people-details-sec" style="background-image:url(../../../src/assets/images/details-banner.jpg);">
        <div class="container">
            <div class="people-dtl-otr">
                <div class="people-dtl-left">
                    <figure><img src="@/assets/images/benedict.jpg" alt="" /></figure>
                </div>
                <div class="people-dtl-right flex-dr">
                    <div class="edit-otr">
                        <h2 class="big-hdr">Benedict Cumberbatch</h2>
                        <div class="edit-innr">
                            <a href="#" class="btn">Edit</a>
                            <a href="#" class="sc-icon">
                                <img src="@/assets/icons/wishlist.svg"  class="dark-th" alt="" />
                                <img src="@/assets/icons/blk-icon1.svg" class="light-th" alt="" />
                            </a>
                            <a href="#" class="sc-icon">
                                <img src="@/assets/icons/settings.svg"  class="dark-th" alt="" />
                                <img src="@/assets/icons/blk-icon3.svg" class="light-th" alt="" />
                            </a>
                        </div>
                    </div>
                    <ul class="people-date-list">
                        <li>Jun 04.1976</li>
                        <li>
                            <ul>
                                <li>Actor</li>
                                <li>Director</li>
                            </ul>
                        </li>
                        <li>Male</li>
                        <li>London, England, UK</li>
                        <li>Likes : 13,153</li>
                    </ul>
                    <div class="detl-bt-content">
                        <h5>Biography</h5>
                        <p>No overview has been added yet.No overview has been added yet.No overview has been added yet.No overview has been added yet.No overview has been added yet.No overview has been added yet.No overview has been added yet.No overview has been added yet.No overview has been added yet.No overview has been added yet.No overview has been added yet.No overview has been added yet.No overview has been added yet.No overview has been added yet.No overview has been added yet. No overview has been added yet. No overview has been added yet. No overview has been added yet. No overview has been added yet. No ove</p>
                        <h5>A.K.A</h5>
                        <p>Benedict Timothy Carlton Cumberbatch Бенедикт Камбербетч ベネディクト・カンバーバッチ เบเนดิกต์ คัมเบอร์แบตช์ بيندكت كامبرباتش 베네딕트 컴버배치 Μπένεντικτ Κάμπερμπατς 本尼迪克特·康伯巴奇 班奈狄克·康柏拜區</p>
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
                            <a href="/people/detail-award">
                                <img src="@/assets/icons/arrow-right-wh.svg"  class="dark-th" alt="" />
                                <img src="@/assets/icons/arrow-right-blk.svg" class="light-th" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="people-details-btm-sec">
        <div class="container">
            <div class="people-details-btm-otr">
                <div class="people-details-btm-left">
                    <h2 class="mb-10 small-hdr">Media</h2>
                    <MediaSection />
                    <div class="work-otr mr-bb2">
                         <h2 class="mb-10 small-hdr">Works</h2>
                         <div class="tab-outr small">
                            <TabWrapper>
                                <Tabs title="Movie">
                                    <select class="form-control select-style">
                                        <option>Crew (9 Credits)</option>
                                        <option>Cast (9 Credits)</option>
                                    </select>
                                    <div class="divider"></div>
                                    <div class="works-list-sec">
                                        <div class="works-list-sec-innr">
                                            <h5>2022</h5>
                                            <div class="image-otr">
                                                <CastCrewCard />
                                                <CastCrewCard />
                                                <CastCrewCard />
                                            </div>
                                        </div>
                                        <div class="works-list-sec-innr">
                                            <div class="divider"></div>
                                            <h5>2021</h5>
                                            <div class="image-otr">
                                                <CastCrewCard />
                                                <CastCrewCard />
                                                <CastCrewCard />
                                                <CastCrewCard />
                                                <CastCrewCard />
                                                <CastCrewCard />
                                                <!-- <a href="#" class="image-innr">
                                                    <figure class="hgt"><img src="@/assets/images/poster2.jpg" alt="" /></figure>
                                                    <p>The Courier</p>
                                                    <p class="sub-para">Greville Wynne</p>
                                                </a>
                                                <a href="#" class="image-innr">
                                                    <figure class="hgt"><img src="@/assets/images/poster3.jpg" alt="" /></figure>
                                                    <p>The Mauritanian</p>
                                                    <p class="sub-para">Lt. Stuart Couch</p>
                                                </a>
                                                <a href="#" class="image-innr">
                                                    <figure class="hgt"><img src="@/assets/images/poster4.jpg" alt="" /></figure>
                                                    <p>The Electrical Life o...</p>
                                                    <p class="sub-para">Louis Wain</p>
                                                </a>
                                                <a href="#" class="image-innr">
                                                    <figure class="hgt"><img src="@/assets/images/poster5.jpg" alt="" /></figure>
                                                    <p>The Power of the Dog</p>
                                                    <p class="sub-para">Phil Burbank</p>
                                                </a>
                                                <a href="#" class="image-innr">
                                                    <figure class="hgt"><img src="@/assets/images/poster6.jpg" alt="" /></figure>
                                                    <p>Spider-Man: No...</p>
                                                    <p class="sub-para">Stephen Strange / Doctor...</p>
                                                </a> -->
                                            </div>
                                        </div>
                                        <div class="works-list-sec-innr">
                                            <div class="divider"></div>
                                            <h5>2019</h5>
                                            <div class="image-otr">
                                            <CastCrewCard />
                                            <CastCrewCard />
                                            <CastCrewCard />
                                            <CastCrewCard />
                                            <CastCrewCard />
                                            <CastCrewCard />
                                            <!-- <a href="#" class="image-innr">
                                                <figure class="hgt"><img src="@/assets/images/movie-pic4.jpg" alt="" /></figure>
                                                <p>Brexit: The Uncivil...</p>
                                                <p class="sub-para">Dominic Cummings</p>
                                            </a>
                                            <a href="#" class="image-innr">
                                                <figure class="hgt"><img src="@/assets/images/movie-pic5.jpg" alt="" /></figure>
                                                <p>Avengers: Endgame</p>
                                                <p class="sub-para">Stephen Strange / Doctor...</p>
                                            </a>
                                            <a href="#" class="image-innr">
                                                <figure class="hgt"><img src="@/assets/images/movie-pic6.jpg" alt="" /></figure>
                                                <p>The Tiger Who Ca...</p>
                                                <p class="sub-para">Daddy (voice)</p>
                                            </a>
                                            <a href="#" class="image-innr">
                                                <figure class="hgt"><img src="@/assets/images/movie-pic7.jpg" alt="" /></figure>
                                                <p>Good Omens</p>
                                                <p class="sub-para">Satan (voice)</p>
                                            </a>
                                            <a href="#" class="image-innr">
                                                <figure class="hgt"><img src="@/assets/images/movie-pic8.jpg" alt="" /></figure>
                                                <p>Between Two Ferns:...</p>
                                                <p class="sub-para">Benedict Cumberbatch</p>
                                            </a>
                                            <a href="#" class="image-innr">
                                                <figure class="hgt"><img src="@/assets/images/movie-pic9.jpg" alt="" /></figure>
                                                <p>1917</p>
                                                <p class="sub-para">Colonel MacKenzie</p>
                                            </a> -->
                                            </div>
                                        </div>
                                    </div>
                                </Tabs>
                                <Tabs title="TV">
                                    <p>abc</p>
                                </Tabs>
                            </TabWrapper>
                        </div>
                        <h2 class="mb-10 small-hdr">Community</h2>
                         <CommunityCard />
                    </div>    
                </div>
                <div class="people-details-btm-right">
                    <h2 class="mb-10 small-hdr">Social Media</h2>
                    <SocialIconCard />
                    <h2 class="mb-10 small-hdr">Known For</h2>
                    <div class="slider-otr">
                        <slider />
                    </div>
                    
                    <GoogleAdd />
                    <h2 class="mb-10 small-hdr">Related Articles</h2>
                    <RelatedArticle />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TabWrapper from "@/components/TabWrapper.vue";
import Tabs from "@/components/Tabs.vue";
import Slider from "@/components/Slider.vue";
import CommunityCard from "@/components/CommunityCard.vue";
import SocialIconCard from "@/components/SocialIconCard.vue";
import GoogleAdd from "@/components/GoogleAdd.vue";
import RelatedArticle from "@/components/RelatedArticle.vue";
import MediaSection from "@/components/Details/MediaSection.vue";
import CastCrewCard from "@/components/CastCrewCard.vue";

export default {
  name: 'PeopleDetails',
  components: {
    Tabs,
    TabWrapper,
    Slider,
    CommunityCard,
    SocialIconCard,
    GoogleAdd,
    RelatedArticle,
    MediaSection,
    CastCrewCard
},
};
</script>