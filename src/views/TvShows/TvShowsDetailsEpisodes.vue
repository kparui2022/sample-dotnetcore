<template>
    <BannerCardTwo />
    <section class="tvepisodes-btm">
        <div class="container">
            <div class="tvepisodes-content">
                <div class="top-head"><h2>Episodes</h2> <a href="#">Edit</a></div>
                <div class="tab-outr small">
                    <TabWrapper>
                        <Tabs title="Season 1">
                            <div class="tv-lists">
                                <EpisodeList />
                                <EpisodeList />
                                <EpisodeList />
                                <EpisodeList />
                                <EpisodeList />
                                <EpisodeList />
                                <EpisodeList />
                                <!-- <div class="tv-content">
                                    <figure>
                                        <img src="../../assets/images/tv-2.png" alt="yumi">
                                    </figure>
                                    <div class="left-content">
                                        <div class="tv-heading"><h3>Episode 2</h3><span>Jun 20, 2022 </span></div>
                                        <p>Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text </p>
                                        <a href="#" class="show-more">+ more</a>
                                        <a href="#" class="show-less">- less</a>
                                    </div>
                                </div>
                                <div class="tv-content">
                                    <figure>
                                        <img src="../../assets/images/tv-3.png" alt="yumi">
                                    </figure>
                                    <div class="left-content">
                                        <div class="tv-heading"><h3>Episode 3</h3><span>Jun 20, 2022 </span></div>
                                        <p>Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text </p>
                                        <a href="#" class="show-more">+ more</a>
                                        <a href="#" class="show-less">- less</a>
                                    </div>
                                </div>
                                <div class="tv-content">
                                    <figure>
                                        <img src="../../assets/images/tv-4.png" alt="yumi">
                                    </figure>
                                    <div class="left-content">
                                        <div class="tv-heading"><h3>Episode 4</h3><span>Jun 20, 2022 </span></div>
                                        <p>Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text </p>
                                        <a href="#" class="show-more">+ more</a>
                                        <a href="#" class="show-less">- less</a>
                                    </div>
                                </div>
                                <div class="tv-content">
                                    <figure>
                                        <img src="../../assets/images/tv-5.png" alt="yumi">
                                    </figure>
                                    <div class="left-content">
                                        <div class="tv-heading"><h3>Episode 5</h3><span>Jun 20, 2022 </span></div>
                                        <p>Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text </p>
                                        <a href="#" class="show-more">+ more</a>
                                        <a href="#" class="show-less">- less</a>
                                    </div>
                                </div>
                                <div class="tv-content">
                                    <figure>
                                        <img src="../../assets/images/tv-6.png" alt="yumi">
                                    </figure>
                                    <div class="left-content">
                                        <div class="tv-heading"><h3>Episode 6</h3><span>Jun 20, 2022 </span></div>
                                        <p>Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text A
                                            rticle text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text 
                                            Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article t
                                            ext Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text Article text  Article text Article text Article text Article text Article text Article text Article text Article text Article text </p>
                                        <a href="#" class="show-more">+ more</a>
                                        <a href="#" class="show-less">- less</a>
                                    </div>
                                </div> -->
                            </div>
                        </Tabs>
                        <Tabs title="Season 2">
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
import EpisodeList from "@/components/Details/EpisodeList.vue";
    
    export default {
      name:'TvShowsDetailsEpisodes',
      components: {
    Tabs,
    TabWrapper,
    BannerCardTwo,
    EpisodeList
},
     
    };

    </script>
