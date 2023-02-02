<template>
    <section class="mypage-sec">
        <div class="container">
            <div class="mypage-wrapper">
                <LeftSidePanel />
                <div class="mypage-rght">
                    <h2>Lists</h2>
                    <div class="tab-outr full-wd three">
                        <TabWrapper>
                            <Tabs title="Favorite (3)">
                                <ul class="comm-list  list2">
                                    <li>
                                        <FavoriteCard />
                                    </li>
                                    <li>
                                        <FavoriteListCard />
                                    </li>
                                    <li>
                                        <FavoriteCard />
                                    </li>
                                    <!-- <li>
                                        <div class="comm-pic">
                                            <figure><img src="@/assets/images/image19.jpg" alt="" /></figure>
                                        </div>
                                        <div class="comm-txt">
                                            <div class="comm-txt-top">
                                                <h4 class="c-hdr"><a href="#">Doctor Strange in the Multiverse of Madness</a></h4>
                                                <div class="right">
                                                    <div class="date no-mr">
                                                        <span>June 10. 2021  </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text  Article text </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="comm-pic">
                                            <figure><img src="@/assets/images/image16.jpg" alt="" /></figure>
                                        </div>
                                        <div class="comm-txt">
                                            <div class="comm-txt-top">
                                                <h4 class="c-hdr"><a href="#">Christian Bale</a></h4>
                                                <div class="right">
                                                    <div class="date no-mr">
                                                        <span>Jan 01. 1974 ~ </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul class="innr-list">
                                                <li>Batman Begins</li>
                                                <li>The Dark Knight</li>
                                                <li>The Dark Knight Rises</li>
                                                <li>TitThe Prestigele</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="comm-pic">
                                            <figure><img src="@/assets/images/image24.jpg" alt="" /></figure>
                                        </div>
                                        <div class="comm-txt">
                                            <div class="comm-txt-top">
                                                <h4 class="c-hdr"><a href="#">Busan International Film Festival</a></h4>
                                                <div class="right">
                                                    <div class="date no-mr">
                                                        <span>June 10. 2021 </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article  </p>
                                        </div>
                                    </li> -->
                                </ul>
                            </Tabs>
                            <Tabs title="Rating (3)">
                               <ul class="comm-list list2">
                                    <li>
                                        <FavoriteRatingCard />
                                    </li>
                                    <li>
                                        <FavoriteListRatingCard />
                                    </li>
                                    <li>
                                        <FavoriteListRatingCard />
                                    </li>
                                    <li>
                                        <FavoriteRatingCard />
                                    </li>
                                    <!-- <li>
                                        <div class="comm-pic">
                                            <figure><img src="@/assets/images/image19.jpg" alt="" /></figure>
                                        </div>
                                        <div class="comm-txt">
                                            <div class="comm-txt-top">
                                                <div class="rating">
                                                    <h4 class="c-hdr"><a href="#">Doctor Strange in the Multiverse of Madness</a></h4>
                                                    <ul>
                                                        <li><a href="#"><img src="@/assets/icons/star-solid.svg" alt="" /></a></li>
                                                        <li><a href="#"><img src="@/assets/icons/star-solid.svg" alt="" /></a></li>
                                                        <li><a href="#"><img src="@/assets/icons/star-solid.svg" alt="" /></a></li>
                                                        <li><a href="#"><img src="@/assets/icons/star-solid.svg" alt="" /></a></li>
                                                        <li><a href="#"><img src="@/assets/icons/star1.svg" alt="" /></a></li>
                                                        <li>8.5</li>
                                                    </ul>
                                                </div>
                                                <div class="right">
                                                    <div class="date no-mr">
                                                        <span>June 10. 2021  </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text  Article text  </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="comm-pic">
                                            <figure><img src="@/assets/images/image16.jpg" alt="" /></figure>
                                        </div>
                                        <div class="comm-txt">
                                            <div class="comm-txt-top">
                                                <div class="rating">
                                                    <h4 class="c-hdr"><a href="#">Christian Bale</a></h4>
                                                    <ul>
                                                        <li><a href="#"><img src="@/assets/icons/star-solid.svg" alt="" /></a></li>
                                                        <li><a href="#"><img src="@/assets/icons/star-solid.svg" alt="" /></a></li>
                                                        <li><a href="#"><img src="@/assets/icons/star-solid.svg" alt="" /></a></li>
                                                        <li><a href="#"><img src="@/assets/icons/star-solid.svg" alt="" /></a></li>
                                                        <li><a href="#"><img src="@/assets/icons/star1.svg" alt="" /></a></li>
                                                        <li>8.5</li>
                                                    </ul>
                                                </div>
                                                <div class="right">
                                                    <div class="date no-mr">
                                                        <span>Jan 01. 1974 ~ </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul class="innr-list">
                                                <li>Batman Begins</li>
                                                <li>The Dark Knight</li>
                                                <li>The Dark Knight Rises</li>
                                                <li>TitThe Prestigele</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="comm-pic">
                                            <figure><img src="@/assets/images/image25.jpg" alt="" /></figure>
                                        </div>
                                        <div class="comm-txt">
                                            <div class="comm-txt-top">
                                                <div class="rating">
                                                    <h4 class="c-hdr"><a href="#">Heath Ledger</a></h4>
                                                    <ul>
                                                        <li><a href="#"><img src="@/assets/icons/star-solid.svg" alt="" /></a></li>
                                                        <li><a href="#"><img src="@/assets/icons/star-solid.svg" alt="" /></a></li>
                                                        <li><a href="#"><img src="@/assets/icons/star-solid.svg" alt="" /></a></li>
                                                        <li><a href="#"><img src="@/assets/icons/star-solid.svg" alt="" /></a></li>
                                                        <li><a href="#"><img src="@/assets/icons/star1.svg" alt="" /></a></li>
                                                        <li>8.5</li>
                                                    </ul>
                                                </div>
                                                <div class="right">
                                                    <div class="date no-mr">
                                                        <span>Jan 01. 1974 ~ Jan 22. 2008 </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul class="innr-list">
                                                <li>The Dark Knight</li>
                                                <li>10 Things I Hate About You</li>
                                                <li>Brokeback Mountain</li>
                                                <li>The Patriot</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="comm-pic">
                                            <figure><img src="@/assets/images/image24.jpg" alt="" /></figure>
                                        </div>
                                        <div class="comm-txt">
                                            <div class="comm-txt-top">
                                                <div class="rating">
                                                    <h4 class="c-hdr"><a href="#">Busan International Film Festival</a></h4>
                                                    <ul>
                                                        <li><a href="#"><img src="@/assets/icons/star-solid.svg" alt="" /></a></li>
                                                        <li><a href="#"><img src="@/assets/icons/star-solid.svg" alt="" /></a></li>
                                                        <li><a href="#"><img src="@/assets/icons/star-solid.svg" alt="" /></a></li>
                                                        <li><a href="#"><img src="@/assets/icons/star-solid.svg" alt="" /></a></li>
                                                        <li><a href="#"><img src="@/assets/icons/star1.svg" alt="" /></a></li>
                                                        <li>8.5</li>
                                                    </ul>
                                                </div>
                                                <div class="right">
                                                    <div class="date no-mr">
                                                        <span>June 10. 2021 </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article  </p>
                                        </div>
                                    </li> -->
                                </ul>
                            </Tabs>
                            <Tabs title="Shared (3)">
                                <ul class="comm-list  list2">
                                    <li>
                                        <FavoriteCard />
                                    </li>
                                    <li>
                                        <FavoriteListCard />
                                    </li>
                                    <li>
                                        <FavoriteCard />
                                    </li>
                                    <!-- <li>
                                        <div class="comm-pic">
                                            <figure><img src="@/assets/images/image19.jpg" alt="" /></figure>
                                        </div>
                                        <div class="comm-txt">
                                            <div class="comm-txt-top">
                                                <h4 class="c-hdr"><a href="#">Doctor Strange in the Multiverse of Madness</a></h4>
                                                <div class="right">
                                                    <div class="date no-mr">
                                                        <span>June 10. 2021  </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text  Article text </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="comm-pic">
                                            <figure><img src="@/assets/images/image16.jpg" alt="" /></figure>
                                        </div>
                                        <div class="comm-txt">
                                            <div class="comm-txt-top">
                                                <h4 class="c-hdr"><a href="#">Christian Bale</a></h4>
                                                <div class="right">
                                                    <div class="date no-mr">
                                                        <span>Jan 01. 1974 ~ </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul class="innr-list">
                                                <li>Batman Begins</li>
                                                <li>The Dark Knight</li>
                                                <li>The Dark Knight Rises</li>
                                                <li>TitThe Prestigele</li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="comm-pic">
                                            <figure><img src="@/assets/images/image24.jpg" alt="" /></figure>
                                        </div>
                                        <div class="comm-txt">
                                            <div class="comm-txt-top">
                                                <h4 class="c-hdr"><a href="#">Busan International Film Festival</a></h4>
                                                <div class="right">
                                                    <div class="date no-mr">
                                                        <span>June 10. 2021 </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article  </p>
                                        </div>
                                    </li> -->
                                </ul>
                            </Tabs>
                        </TabWrapper>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import TabWrapper from "@/components/TabWrapper.vue";
import Tabs from "@/components/Tabs.vue";
import LeftSidePanel from "@/components/MyPage/LeftSidePanel.vue";
import FavoriteCard from "@/components/MyPage/FavoriteCard.vue";
import FavoriteListCard from "@/components/MyPage/FavoriteListCard.vue";
import FavoriteRatingCard from "@/components/MyPage/FavoriteRatingCard.vue";
import FavoriteListRatingCard from "@/components/MyPage/FavoriteListRatingCard.vue";

export default {
  name: 'MyPageLists',
  components: {
    Tabs,
    TabWrapper,
    LeftSidePanel,
    FavoriteCard,
    FavoriteListCard,
    FavoriteRatingCard,
    FavoriteListRatingCard
}
};
</script>