<template>
    <div class="people-sec">
        <div class="container">
            <h2>Popular People</h2>
            <div class="tab-outr tab-style">
                <TabWrapper>
                    <Tabs title="All">
                        <div class="image-otr people">
                            <PosterCard v-for="i in 32" :key="i" RedirectLink="/people/details" />
                            <!-- <PosterCard />
                            <PosterCard />
                            <PosterCard />
                            <PosterCard />
                            <PosterCard />
                            <PosterCard />
                            <PosterCard />
                            <PosterCard />
                            <PosterCard />
                            <PosterCard />
                            <PosterCard />
                            <PosterCard />
                            <PosterCard />
                            <PosterCard />
                            <PosterCard />
                            <PosterCard />
                            <PosterCard />
                            <PosterCard />
                            <PosterCard />
                            <PosterCard />
                            <PosterCard />
                            <PosterCard />
                            <PosterCard />
                            <PosterCard />
                            <PosterCard />
                            <PosterCard />
                            <PosterCard />
                            <PosterCard />
                            <PosterCard />
                            <PosterCard />
                            <PosterCard /> -->
                            <!-- <a href="#" class="image-innr">
                                <figure class="hgt"><img src="@/assets/images/people1.jpg" alt="" /></figure>
                                <p>Kim Hye-soo</p>
                            </a>
                            <a href="#" class="image-innr">
                                <figure class="hgt"><img src="@/assets/images/people2.jpg" alt="" /></figure>
                                <p>Lee Jung-eun</p>
                            </a>
                            <a href="#" class="image-innr">
                                <figure class="hgt"><img src="@/assets/images/people3.jpg" alt="" /></figure>
                                <p>Roh Jeong-eui</p>
                            </a>
                            <a href="#" class="image-innr">
                                <figure class="hgt"><img src="@/assets/images/people4.jpg" alt="" /></figure>
                                <p>Kim Sun-young</p>
                            </a>
                            <a href="#" class="image-innr">
                                <figure class="hgt"><img src="@/assets/images/people5.jpg" alt="" /></figure>
                                <p>Lee Sang-yeob</p>
                            </a>
                            <a href="#" class="image-innr">
                                <figure class="hgt"><img src="@/assets/images/people6.jpg" alt="" /></figure>
                                <p>Roh Jeong-eui</p>
                           </a>

                            <a href="#" class="image-innr">
                                <figure class="hgt"><img src="@/assets/images/people7.jpg" alt="" /></figure>
                                <p>Kim Sun-young</p>
                            </a>
                            <a href="#" class="image-innr">
                                <figure class="hgt"><img src="@/assets/images/people8.jpg" alt="" /></figure>
                                <p>Lee Sang-yeob</p>
                            </a>
                            <a href="#" class="image-innr">
                                <figure class="hgt"><img src="@/assets/images/people9.jpg" alt="" /></figure>
                                <p>Kim Hye-soo</p>
                            </a>
                            <a href="#" class="image-innr">
                                <figure class="hgt"><img src="@/assets/images/people10.jpg" alt="" /></figure>
                                <p>Lee Jung-eun</p>
                            </a>
                            <a href="#" class="image-innr">
                                <figure class="hgt"><img src="@/assets/images/people11.jpg" alt="" /></figure>
                                <p>Roh Jeong-eui</p>
                            </a>
                            <a href="#" class="image-innr">
                                <figure class="hgt"><img src="@/assets/images/people12.jpg" alt="" /></figure>
                                <p>Finn Wolfhard</p>
                            </a>
                            <a href="#" class="image-innr">
                                <figure class="hgt"><img src="@/assets/images/people13.jpg" alt="" /></figure>
                                <p>Lee Sang-yeob</p>
                            </a>
                            <a href="#" class="image-innr">
                                <figure class="hgt"><img src="@/assets/images/people14.jpg" alt="" /></figure>
                                <p>Roh Jeong-eui</p>
                           </a>

                            <a href="#" class="image-innr">
                                <figure class="hgt"><img src="@/assets/images/people15.jpg" alt="" /></figure>
                                <p>Kim Sun-young</p>
                            </a>
                            <a href="#" class="image-innr">
                                <figure class="hgt"><img src="@/assets/images/people16.jpg" alt="" /></figure>
                                <p>Lee Sang-yeob</p>
                            </a>
                            <a href="#" class="image-innr">
                                <figure class="hgt"><img src="@/assets/images/people17.jpg" alt="" /></figure>
                                <p>Kim Hye-soo</p>
                            </a>
                            <a href="#" class="image-innr">
                                <figure class="hgt"><img src="@/assets/images/people18.jpg" alt="" /></figure>
                                <p>Lee Jung-eun</p>
                            </a>
                            <a href="#" class="image-innr">
                                <figure class="hgt"><img src="@/assets/images/people19.jpg" alt="" /></figure>
                                <p>Roh Jeong-eui</p>
                            </a>
                            <a href="#" class="image-innr">
                                <figure class="hgt"><img src="@/assets/images/people20.jpg" alt="" /></figure>
                                <p>Kim Sun-young</p>
                            </a>
                            <a href="#" class="image-innr">
                                <figure class="hgt"><img src="@/assets/images/people21.jpg" alt="" /></figure>
                                <p>Lee Sang-yeob</p>
                            </a>
                            <a href="#" class="image-innr">
                                <figure class="hgt"><img src="@/assets/images/people22.jpg" alt="" /></figure>
                                <p>Roh Jeong-eui</p>
                           </a>

                            <a href="#" class="image-innr">
                                <figure class="hgt"><img src="@/assets/images/people23.jpg" alt="" /></figure>
                                <p>Kim Sun-young</p>
                            </a>
                            <a href="#" class="image-innr">
                                <figure class="hgt"><img src="@/assets/images/people24.jpg" alt="" /></figure>
                                <p>Lee Sang-yeob</p>
                            </a>
                            <a href="#" class="image-innr">
                                <figure class="hgt"><img src="@/assets/images/people25.jpg" alt="" /></figure>
                                <p>Kim Hye-soo</p>
                            </a>
                            <a href="#" class="image-innr">
                                <figure class="hgt"><img src="@/assets/images/people26.jpg" alt="" /></figure>
                                <p>Lee Jung-eun</p>
                            </a>
                            <a href="#" class="image-innr">
                                <figure class="hgt"><img src="@/assets/images/people27.jpg" alt="" /></figure>
                                <p>Roh Jeong-eui</p>
                            </a>
                            <a href="#" class="image-innr">
                                <figure class="hgt"><img src="@/assets/images/people28.jpg" alt="" /></figure>
                                <p>Kim Sun-young</p>
                            </a>
                            <a href="#" class="image-innr">
                                <figure class="hgt"><img src="@/assets/images/people29.jpg" alt="" /></figure>
                                <p>Lee Sang-yeob</p>
                            </a>
                            <a href="#" class="image-innr">
                                <figure class="hgt"><img src="@/assets/images/people30.jpg" alt="" /></figure>
                                <p>Roh Jeong-eui</p>
                           </a>

                            <a href="#" class="image-innr">
                                <figure class="hgt"><img src="@/assets/images/people31.jpg" alt="" /></figure>
                                <p>Kim Sun-young</p>
                            </a>
                            <a href="#" class="image-innr">
                                <figure class="hgt"><img src="@/assets/images/people32.jpg" alt="" /></figure>
                                <p>Lee Sang-yeob</p>
                            </a> -->
                        </div>
                    </Tabs>
                    <Tabs title="Actors">
                        Tab2
                    </Tabs>
                    <Tabs title="Directing">
                        Tab3
                    </Tabs>
                    <Tabs title="Writing">
                        Tab4
                    </Tabs>
                    <Tabs title="Production">
                        Tab5
                    </Tabs>
                    <Tabs title="Editing">
                        Tab6
                    </Tabs>
                    <Tabs title="Sound">
                        Tab7
                    </Tabs>
                    <Tabs title="Lighting">
                        Tab8
                    </Tabs>
                    <Tabs title="Camera">
                        Tab9
                    </Tabs>
                    <Tabs title="Visual Effects">
                        Tab10
                    </Tabs>
                    <Tabs title="Costume & Make-Up">
                        Tab11
                    </Tabs>
                    <Tabs title="Art">
                        Tab12
                    </Tabs>
                    <Tabs title="Crew">
                        Tab13
                    </Tabs>
                </TabWrapper>
            </div>
        </div>
    </div>
</template>


<script>
import TabWrapper from "@/components/TabWrapper.vue";
import Tabs from "@/components/Tabs.vue";
import PosterCard from "@/components/MyPage/PosterCard.vue";

export default {
  name:'PeoplePopular',  
  components: {
    Tabs,
    TabWrapper,
    PosterCard
},
  data() {
    return {
      active: false
    };
  }
};
</script>