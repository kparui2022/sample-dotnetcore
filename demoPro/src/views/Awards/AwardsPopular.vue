<template>
    <section class="award-popular">
        <div class="container">
            <h2>All Events</h2>
            <div class="awards-list">
                <AwardsCard v-for="i in 16" :key="i" RedirectLink="/awards/detail" />
                <!-- <AwardsCard />
                <AwardsCard />
                <AwardsCard />
                <AwardsCard />
                <AwardsCard />
                <AwardsCard />
                <AwardsCard />
                <AwardsCard />
                <AwardsCard />
                <AwardsCard />
                <AwardsCard />
                <AwardsCard />
                <AwardsCard />
                <AwardsCard />
                <AwardsCard /> -->
                <!-- <a href="#">
                    <figure><img src="../../assets/images/award1.png" alt="award"></figure>
                    <div class="award-right-content">
                        <h3>Busan International Film Festival Busan International Film Festival</h3>
                        <div class="award-detail">
                            <div class="inner">
                                <span>Founded</span>
                                <p>Jun 20, 2022 </p>
                            </div>
                            <div class="inner">
                                <span>Location</span>
                                <p>Korea, Busan</p>
                            </div>
                            <div class="inner">
                                <span>Website</span>
                                <p>https://www.docville.be/en</p>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <figure><img src="../../assets/images/award2.png" alt="award"></figure>
                    <div class="award-right-content">
                        <h3>Busan International Film Festival</h3>
                        <div class="award-detail">
                            <div class="inner">
                                <span>Founded</span>
                                <p>Jun 20, 2022 </p>
                            </div>
                            <div class="inner">
                                <span>Location</span>
                                <p>Korea, Busan</p>
                            </div>
                            <div class="inner">
                                <span>Website</span>
                                <p>https://www.piecsmakow.pl/index.do</p>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <figure><img src="../../assets/images/award3.png" alt="award"></figure>
                    <div class="award-right-content">
                        <h3>Busan International Film Festival</h3>
                        <div class="award-detail">
                            <div class="inner">
                                <span>Founded</span>
                                <p>Jun 20, 2022 </p>
                            </div>
                            <div class="inner">
                                <span>Location</span>
                                <p>Korea, Busan</p>
                            </div>
                            <div class="inner">
                                <span>Website</span>
                                <p>-_</p>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <figure><img src="../../assets/images/award4.png" alt="award"></figure>
                    <div class="award-right-content">
                        <h3>Busan International Film Festival</h3>
                        <div class="award-detail">
                            <div class="inner">
                                <span>Founded</span>
                                <p>Jun 20, 2022 </p>
                            </div>
                            <div class="inner">
                                <span>Location</span>
                                <p>Korea, Busan</p>
                            </div>
                            <div class="inner">
                                <span>Website</span>
                                <p>-_</p>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <figure><img src="../../assets/images/award5.png" alt="award"></figure>
                    <div class="award-right-content">
                        <h3>Busan International Film Festival</h3>
                        <div class="award-detail">
                            <div class="inner">
                                <span>Founded</span>
                                <p>Jun 20, 2022 </p>
                            </div>
                            <div class="inner">
                                <span>Location</span>
                                <p>Korea, Busan</p>
                            </div>
                            <div class="inner">
                                <span>Website</span>
                                <p>www.biff.kr</p>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <figure><img src="../../assets/images/award6.png" alt="award"></figure>
                    <div class="award-right-content">
                        <h3>Busan International
                            Film Festival Busan International
                            Film Festival</h3>
                        <div class="award-detail">
                            <div class="inner">
                                <span>Founded</span>
                                <p>Jun 20, 2022 </p>
                            </div>
                            <div class="inner">
                                <span>Location</span>
                                <p>Korea, Busan</p>
                            </div>
                            <div class="inner">
                                <span>Website</span>
                                <p>www.biff.kr</p>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <figure><img src="../../assets/images/award7.png" alt="award"></figure>
                    <div class="award-right-content">
                        <h3>Busan International
                            Film Festival </h3>
                        <div class="award-detail">
                            <div class="inner">
                                <span>Founded</span>
                                <p>Jun 20, 2022 </p>
                            </div>
                            <div class="inner">
                                <span>Location</span>
                                <p>Korea, Busan</p>
                            </div>
                            <div class="inner">
                                <span>Website</span>
                                <p>http://www.gimpoyff.com/</p>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <figure><img src="../../assets/images/award8.png" alt="award"></figure>
                    <div class="award-right-content">
                        <h3>Busan International
                            Film Festival </h3>
                        <div class="award-detail">
                            <div class="inner">
                                <span>Founded</span>
                                <p>Jun 20, 2022 </p>
                            </div>
                            <div class="inner">
                                <span>Location</span>
                                <p>Korea, Busan</p>
                            </div>
                            <div class="inner">
                                <span>Website</span>
                                <p>www.biff.kr</p>
                            </div>
                        </div>
                    </div>
                </a>
                 <a href="#">
                    <figure><img src="../../assets/images/award9.png" alt="award"></figure>
                    <div class="award-right-content">
                        <h3>Busan International
                            Film Festival </h3>
                        <div class="award-detail">
                            <div class="inner">
                                <span>Founded</span>
                                <p>Jun 20, 2022 </p>
                            </div>
                            <div class="inner">
                                <span>Location</span>
                                <p>Korea, Busan</p>
                            </div>
                            <div class="inner">
                                <span>Website</span>
                                <p>www.biff.kr</p>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <figure><img src="../../assets/images/award10.png" alt="award"></figure>
                    <div class="award-right-content">
                        <h3>Busan International
                            Film Festival </h3>
                        <div class="award-detail">
                            <div class="inner">
                                <span>Founded</span>
                                <p>Jun 20, 2022 </p>
                            </div>
                            <div class="inner">
                                <span>Location</span>
                                <p>Korea, Busan</p>
                            </div>
                            <div class="inner">
                                <span>Website</span>
                                <p>www.biff.kr</p>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <figure><img src="../../assets/images/award11.png" alt="award"></figure>
                    <div class="award-right-content">
                        <h3>Busan International
                            Film Festival </h3>
                        <div class="award-detail">
                            <div class="inner">
                                <span>Founded</span>
                                <p>Jun 20, 2022 </p>
                            </div>
                            <div class="inner">
                                <span>Location</span>
                                <p>Korea, Busan</p>
                            </div>
                            <div class="inner">
                                <span>Website</span>
                                <p>www.biff.kr</p>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <figure><img src="../../assets/images/award12.png" alt="award"></figure>
                    <div class="award-right-content">
                        <h3>Busan International
                            Film Festival </h3>
                        <div class="award-detail">
                            <div class="inner">
                                <span>Founded</span>
                                <p>Jun 20, 2022 </p>
                            </div>
                            <div class="inner">
                                <span>Location</span>
                                <p>Korea, Busan</p>
                            </div>
                            <div class="inner">
                                <span>Website</span>
                                <p>www.biff.kr</p>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <figure><img src="../../assets/images/award13.png" alt="award"></figure>
                    <div class="award-right-content">
                        <h3>Busan International
                            Film Festival </h3>
                        <div class="award-detail">
                            <div class="inner">
                                <span>Founded</span>
                                <p>Jun 20, 2022 </p>
                            </div>
                            <div class="inner">
                                <span>Location</span>
                                <p>Korea, Busan</p>
                            </div>
                            <div class="inner">
                                <span>Website</span>
                                <p>www.biff.kr</p>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <figure><img src="../../assets/images/award2.png" alt="award"></figure>
                    <div class="award-right-content">
                        <h3>Busan International
                            Film Festival </h3>
                        <div class="award-detail">
                            <div class="inner">
                                <span>Founded</span>
                                <p>Jun 20, 2022 </p>
                            </div>
                            <div class="inner">
                                <span>Location</span>
                                <p>Korea, Busan</p>
                            </div>
                            <div class="inner">
                                <span>Website</span>
                                <p>www.biff.kr</p>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <figure><img src="../../assets/images/award14.png" alt="award"></figure>
                    <div class="award-right-content">
                        <h3>Busan International
                            Film Festival </h3>
                        <div class="award-detail">
                            <div class="inner">
                                <span>Founded</span>
                                <p>Jun 20, 2022 </p>
                            </div>
                            <div class="inner">
                                <span>Location</span>
                                <p>Korea, Busan</p>
                            </div>
                            <div class="inner">
                                <span>Website</span>
                                <p>www.biff.kr</p>
                            </div>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <figure><img src="../../assets/images/award15.png" alt="award"></figure>
                    <div class="award-right-content">
                        <h3>Busan International
                            Film Festival </h3>
                        <div class="award-detail">
                            <div class="inner">
                                <span>Founded</span>
                                <p>Jun 20, 2022 </p>
                            </div>
                            <div class="inner">
                                <span>Location</span>
                                <p>Korea, Busan</p>
                            </div>
                            <div class="inner">
                                <span>Website</span>
                                <p>www.biff.kr</p>
                            </div>
                        </div>
                    </div>
                </a> -->
             
            </div>
        </div>
    </section>
</template>


<script>
import AwardsCard from '@/components/AwardsCard.vue';
    export default {
    name: "AwardsPopular",
    components: { AwardsCard }
}
</script>