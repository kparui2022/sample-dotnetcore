<template>
    <BannerCardTwo />
    <section class="tvepisodes-btm">
        <div class="container">
            <div class="tvepisodes-content">
                <div class="top-head">
                    <h2>Cast & Crew</h2> <a href="#">Edit</a>
                </div>
                <div class="tab-outr small">
                    <TabWrapper>
                        <Tabs title="Cast">
                            <div class="tvimage-otr">
                                <CastCrewCard />
                                <CastCrewCard />
                                <CastCrewCard />
                                <CastCrewCard />
                                <CastCrewCard />
                                <CastCrewCard />
                                <CastCrewCard />
                                <CastCrewCard />
                                <CastCrewCard />
                                <CastCrewCard />
                                <CastCrewCard />
                                <CastCrewCard />
                                <CastCrewCard />
                                <CastCrewCard />
                                <CastCrewCard />
                                <CastCrewCard />
                            </div>
                        </Tabs>
                        <Tabs title="Crew">
                            Crew
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

export default {
    name:'TvShowsDetailsCast&Crew',
    components: {
    Tabs,
    TabWrapper,
    BannerCardTwo,
    CastCrewCard
},

};

</script>
