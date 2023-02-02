<template>
    <section class="award-details-sec" style="background-image:url(../../../src/assets/images/bg.png);">
        <div class="container">
            <div class="award-dtl-otr">
                <div class="award-dtl-left">
                    <figure><img src="@/assets/images/detail-img.png" alt="image" /></figure>
                </div>
                <div class="award-dtl-right">
                    <div class="edit-otr">
                        <h2>Busan International Film Festival</h2>
                        <div class="edit-innr">
                            <a href="#" class="sc-icon">
                                <img src="@/assets/icons/wishlist.svg"  class="dark-th" alt="" />
                                <img src="@/assets/icons/blk-icon1.svg" class="light-th" alt="" />
                            </a>
                            <a href="#" class="sc-icon">
                                <img src="@/assets/icons/white-outline-star.svg"  class="dark-th" alt="star" />
                                <img src="@/assets/icons/blk-icon2.svg"  class="light-th" alt="star" />
                            </a>
                            <a href="#" class="sc-icon">
                                <img src="@/assets/icons/settings.svg"  class="dark-th" alt="" />
                                <img src="@/assets/icons/blk-icon3.svg" class="light-th" alt="" />
                            </a>
                        </div>
                    </div>
                    <ul class="award-date-list">
                        <li>Oct 5 ~ 14,2022</li>
                        <li>Busan,South Korea</li>
                    </ul>
                    <div class="startxt">
                        <div class="md-star"><img src="/src/assets/icons/star.svg" alt="star"><img
                                src="/src/assets/icons/star.svg" alt="star"><img src="/src/assets/icons/star.svg"
                                alt="star"><img src="/src/assets/icons/star.svg" alt="star"><img
                                src="/src/assets/icons/outline-star.svg" alt="star"></div><span>8.5</span>
                    </div>
                    <div class="award-list-outr">
                        <ul class="award-list">

                            <li>
                                The 27th(2022)
                            </li>
                        </ul>
                        <a href="#">
                            <img src="@/assets/icons/arrow-right-wh.svg"  class="dark-th" alt="" />
                            <img src="@/assets/icons/arrow-right-blk.svg" class="light-th" alt="" />
                        </a>
                    </div>
                    <div class="summary-content">
                        <div class="summary-inner">
                            <h5>Summary</h5>
                            <span>
                                <p>No overview has been added yet.No overview has been added yet.No overview has been added yet.No overview has been added yet.No overview has been added yet.No overview has been added yet.No overview has been added yet.No overview has been added yet.No overview has been added yet.No overview has been added yet.No overview has been added yet.No overview has been added yet.No overview has been added yet.No overview has been added yet.No overview has been added yet.No overview has been added yet.No  </p>
                                <a href="#">more</a>
                                </span>
                        </div>
                        <div class="summary-inner">
                            <h5>Official Website</h5>
                            <a href="#" class="a-link" >Http://www.busaninrernationalfilmfastival.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="prize-main">
        <div class="container">
            <div class="prize-col">
                <div class="left-side">
                    <h2>Prize & Nominees</h2>
                    <ul class="prize-list-detail">
                        <li>
                            <div class="p-heading">
                                <h3>Best Film Award</h3>
                            </div>
                            <MovieDetailCard />
                            
                        </li>
                        <li>
                            <div class="p-heading">
                                <h3>Best Film Award</h3>
                            </div>
                            <MovieDetailCard />
                            
                        </li>
                          <li>
                            <div class="p-heading">
                                <h3>Best Actress in a Leading Role</h3>
                            </div>
                            <MovieDetailCardTwo />
                        </li>
                        <li>
                            <div class="p-heading">
                                <h3>Best Film Award</h3>
                            </div>
                            <MovieDetailCard />
                            
                        </li>
                    </ul>
                </div>
                <div class="right-side">
                   <h2 class="mb-10 small-hdr">Related Articles</h2>
                   <RelatedArticle />
                   <div class="mr-80">
                        <GoogleAdd />
                    </div>
                </div>
                
            </div>
        </div>
    </section>
</template>


<script>
import MovieDetailCard from '@/components/MovieDetailCard.vue';
import MovieDetailCardTwo from '@/components/MovieDetailCardTwo.vue';
import GoogleAdd from '@/components/GoogleAdd.vue';
import RelatedArticle from '@/components/RelatedArticle.vue';
    export default {
    name: "AwardsDetail",
    components: { MovieDetailCard, MovieDetailCardTwo, GoogleAdd, RelatedArticle }
}
</script>