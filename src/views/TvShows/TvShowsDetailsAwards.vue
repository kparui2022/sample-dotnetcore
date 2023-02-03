<template>
    <BannerCardTwo />
    <section class="tvepisodes-btm">
        <div class="container">
            <div class="tvepisodes-content">
                <div class="top-head">
                    <h2>Awards</h2>
                </div>
                <div class="a-lists">
                    <AwardList />
                    <AwardList />
                    <AwardList />
                    <!-- <div class="awards-lists">
                        <div class="a-content">
                            <h2>BaekSang Arts Awards(2021)</h2>
                            <figure>
                                <img src="../../assets/images/l-award2.png" alt="award1">
                            </figure>
                            <ul>
                                <li>
                                    <span class="label-txt">Best Actor</span>
                                    <p>Kim Go-eun<span><img src="../../assets/icons/award.svg" alt="award">WINNER</span></p>
                                </li>
                                <li>
                                    <span class="label-txt">Best TV Drama</span>
                                    <p><span><img src="../../assets/icons/award.svg" alt="award">WINNER</span></p>
                                </li>
                              
                              
                            </ul>
                        </div>
                        
                    </div>
                    <div class="awards-lists">
                        <div class="a-content">
                            <h2>The Blue Dragon Award(2021)</h2>
                            <figure>
                                <img src="../../assets/images/l-award3.png" alt="award1">
                            </figure>
                            <ul>
                                <li>
                                    <span class="label-txt">Best Actor</span>
                                    <p>Kim Go-eun<span><img src="../../assets/icons/award.svg" alt="award">WINNER</span></p>
                                </li>
                                <li>
                                    <span class="label-txt">Best TV Drama</span>
                                    <p><span><img src="../../assets/icons/award.svg" alt="award">WINNER</span></p>
                                </li>
                                <li>
                                    <span class="label-txt">Best Actress</span>
                                    <p>Kim Go-eun</p>
                                </li>
                                <li>
                                    <span class="label-txt">Best Actress</span>
                                    <p>Kim Go-eun</p>
                                </li>
                               
                            </ul>
                        </div>
                        
                    </div> -->
                </div>
               
            </div>
        </div>
    </section>

</template>
<script>
import TabWrapper from "@/components/TabWrapper.vue";
import Tabs from "@/components/Tabs.vue";
import BannerCardTwo from "@/components/BannerCardTwo.vue";
import AwardList from "@/components/Details/AwardList.vue";

export default {
    name:'TvShowsDetailsAwards',
    components: {
    Tabs,
    TabWrapper,
    BannerCardTwo,
    AwardList
},

};

</script>
