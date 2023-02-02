<template>
  <section class="banner">
    <div class="container">
      <div class="banner-content">
        <!-- <select v-model="$i18n.locale">
          <option value="en">EN</option>
          <option value="kr">KR</option>
        </select>
        <h2>{{$t('message')}}</h2> -->
        <h2>Top News</h2>
        <div class="news-content">
          <div class="news-left">
            <img src="../assets/images/news-image.png" alt="image" />
          </div>
          <div class="news-right">
            <span>NEWS</span>
            <a href="#">
              K-Drama Review: 3 Reasons ‘Yumi’s Cells’ Just Might Be the Best
              Webtoon-Adapted Drama
            </a>
            <p class="p-txt">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit. Exercitation veniam
              consequat sunt nostrud amet.
            </p>
            <div class="news-date">
              <p>Jun 10, 2022</p>
            </div>
          </div>
        </div>
        <div class="banner-tabs">
          <div class="tab-outr">
            <TabWrapper>
              <Tabs title="Movies">
                <div class="lists tab-scroll">
                  <div class="outerside">
                    <CardOne />
                    <CardOne />
                    <CardOne />
                    <CardOne />
                  </div>
                  <a href="#" class="more-content">
                    <img
                      src="../assets/icons/right-arrow-solid.svg"
                      alt="more"
                      class="white-image"
                    />
                    <img
                      src="../assets/icons/solid-right-arrow.svg"
                      alt="more"
                      class="red-image"
                    />
                  </a>
                </div>
              </Tabs>
              <Tabs title="TV Shows">
                <div class="lists tab-scroll">
                  <div class="outerside">
                    <CardOne />
                    <CardOne />
                    <CardOne />
                    <CardOne />
                  </div>
                  <a href="#" class="more-content">
                    <img
                      src="../assets/icons/right-arrow-solid.svg"
                      alt="more"
                      class="white-image"
                    />
                    <img
                      src="../assets/icons/solid-right-arrow.svg"
                      alt="more"
                      class="red-image"
                    />
                  </a>
                </div>
              </Tabs>
            </TabWrapper>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="common-section trending">
    <div class="container">
      <div class="trending-content">
        <h2>Trending</h2>
        <div class="trending-tabs">
          <div class="tab-outr">
            <TabWrapper>
              <Tabs title="Movies">
                <div class="lists tab-scroll">
                  <div class="outerside">
                    <CardTwo />
                    <CardTwo />
                    <CardTwo />
                    <CardTwo />
                    <CardTwo />
                  </div>
                  <a href="#" class="more-content">
                    <img
                      src="../assets/icons/right-arrow-solid.svg"
                      alt="more"
                      class="white-image"
                    />
                    <img
                      src="../assets/icons/solid-right-arrow.svg"
                      alt="more"
                      class="red-image"
                    />
                  </a>
                </div>
              </Tabs>
              <Tabs title="TV Shows"> TV Shows </Tabs>
              <Tabs title="Webtoons"> Webtoons </Tabs>
            </TabWrapper>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="hot-videos">
    <div class="container">
      <div class="hot-lists">
        <h2>Hot Videos</h2>
        <div class="hot-content">
          <VideoSlider />
        </div>
      </div>
    </div>
  </section>
  <section class="google-adds">
    <div class="container">
      <div class="adds-image">
        <img src="../assets/images/google-add.png" alt="adds-image" />
      </div>
    </div>
  </section>
  <section class="common-section coming-soon">
    <div class="container">
      <div class="trending-content">
        <h2>Coming Soon</h2>
        <div class="trending-tabs">
          <div class="tab-outr">
            <TabWrapper>
              <Tabs title="Movies">
                <div class="lists tab-scroll">
                  <div class="outerside">
                    <CardTwo />
                    <CardTwo />
                    <CardTwo />
                    <CardTwo />
                    <CardTwo />
                  </div>
                  <a href="#" class="more-content">
                    <img
                      src="../assets/icons/right-arrow-solid.svg"
                      alt="more"
                      class="white-image"
                    />
                    <img
                      src="../assets/icons/solid-right-arrow.svg"
                      alt="more"
                      class="red-image"
                    />
                  </a>
                </div>
              </Tabs>
              <Tabs title="TV Shows"> TV Shows </Tabs>
              <Tabs title="Webtoons"> Webtoons </Tabs>
            </TabWrapper>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="hot-videos lastest-trailer">
    <div class="container">
      <div class="hot-lists">
        <h2>Lastest Trailers</h2>
        <div class="hot-content">
          <VideoSlider />
        </div>
      </div>
    </div>
  </section>
  <section class="real-time">
    <div class="container">
      <div class="real-time-content">
        <h2>Real-Time Feeds</h2>
        <ul>
          <li>
            <Comments />
          </li>
          <li>
            <Comments />
          </li>
          <li>
            <Comments />
          </li>
          <li>
            <Comments />
          </li>
          <li>
            <Comments />
          </li>
        </ul>
      </div>
    </div>
  </section>
  <section class="common-shows most-popular">
    <div class="container">
      <div class="common-content">
        <h2>Most Popular Shows</h2>
        <div class="common-tabs">
          <div class="tab-outr">
            <TabWrapper>
              <Tabs title="Movies">
                <div class="lists tab-scroll">
                  <div class="outerside">
                    <CardFour />
                    <CardFour />
                    <CardFour />
                    <CardFour />
                    <CardFour />
                  </div>
                  <a href="#" class="more-content">
                    <img
                      src="../assets/icons/right-arrow-solid.svg"
                      alt="more"
                      class="white-image"
                    />
                    <img
                      src="../assets/icons/solid-right-arrow.svg"
                      alt="more"
                      class="red-image"
                    />
                  </a>
                </div>
              </Tabs>
              <Tabs title="TV Shows"> </Tabs>
              <Tabs title="Webtoons"> </Tabs>
            </TabWrapper>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="common-shows new-release">
    <div class="container">
      <div class="common-content">
        <h2>New Release</h2>
        <div class="common-tabs">
          <div class="tab-outr">
            <TabWrapper>
              <Tabs title="Movies">
                <div class="lists tab-scroll">
                  <div class="outerside">
                    <CardFour />
                    <CardFour />
                    <CardFour />
                    <CardFour />
                    <CardFour />
                  </div>
                  <a href="#" class="more-content">
                    <img
                      src="../assets/icons/right-arrow-solid.svg"
                      alt="more"
                      class="white-image"
                    />
                    <img
                      src="../assets/icons/solid-right-arrow.svg"
                      alt="more"
                      class="red-image"
                    />
                  </a>
                </div>
              </Tabs>
              <Tabs title="TV Shows"> </Tabs>
              <Tabs title="Webtoons">
                <div class="lists tab-scroll">
                  <div class="outerside">
                    <a href="#" class="list-content">
                      <div class="list-img">
                        <img src="../assets/images/w1.png" alt="image" />
                      </div>
                      <div class="pop-count">
                        <span>
                          <h3>Secretly, Greatly</h3>
                          <p><span>Lee Dong Gun</span></p>
                          <div class="startxt">
                            <div class="md-star">
                              <img src="../assets/icons/star.svg" alt="star" />
                              <img src="../assets/icons/star.svg" alt="star" />
                              <img src="../assets/icons/star.svg" alt="star" />
                              <img src="../assets/icons/star.svg" alt="star" />
                              <img
                                src="../assets/icons/outline-star.svg"
                                alt="star"
                              />
                            </div>
                            <span>8.5</span>
                          </div>
                        </span>
                      </div>

                      <div class="news-date">
                        <p class="newstatus">Completed</p>
                        <p>Jun 20, 2022 <span>10144 episodes</span></p>
                      </div>
                    </a>
                    <a href="#" class="list-content">
                      <div class="list-img">
                        <img src="../assets/images/w2.png" alt="image" />
                      </div>
                      <div class="pop-count">
                        <span>
                          <h3>Hell is Other People</h3>
                          <p><span>Lee Dong Gun</span></p>
                          <div class="startxt">
                            <div class="md-star">
                              <img src="../assets/icons/star.svg" alt="star" />
                              <img src="../assets/icons/star.svg" alt="star" />
                              <img src="../assets/icons/star.svg" alt="star" />
                              <img src="../assets/icons/star.svg" alt="star" />
                              <img
                                src="../assets/icons/outline-star.svg"
                                alt="star"
                              />
                            </div>
                            <span>8.5</span>
                          </div>
                        </span>
                      </div>

                      <div class="news-date">
                        <p class="newstatus">On going</p>
                        <p>Mon,Tue <span>984 episodes</span></p>
                      </div>
                    </a>
                    <a href="#" class="list-content">
                      <div class="list-img">
                        <img src="../assets/images/w3.png" alt="image" />
                      </div>
                      <div class="pop-count">
                        <span>
                          <h3>Yumi's Cells</h3>
                          <p><span>Lee Dong Gun</span></p>
                          <div class="startxt">
                            <div class="md-star">
                              <img src="../assets/icons/star.svg" alt="star" />
                              <img src="../assets/icons/star.svg" alt="star" />
                              <img src="../assets/icons/star.svg" alt="star" />
                              <img src="../assets/icons/star.svg" alt="star" />
                              <img
                                src="../assets/icons/outline-star.svg"
                                alt="star"
                              />
                            </div>
                            <span>8.5</span>
                          </div>
                        </span>
                      </div>

                      <div class="news-date">
                        <p class="newstatus">On going</p>
                        <p>Mon,Tue <span>984 episodes</span></p>
                      </div>
                    </a>
                    <a href="#" class="list-content">
                      <div class="list-img">
                        <img src="../assets/images/w4.png" alt="image" />
                      </div>
                      <div class="pop-count">
                        <span>
                          <h3>Sweet Home</h3>
                          <p>
                            <span>Kim Kan Bee</span
                            ><span>Hwang Young Chan</span>
                          </p>
                          <div class="startxt">
                            <div class="md-star">
                              <img src="../assets/icons/star.svg" alt="star" />
                              <img src="../assets/icons/star.svg" alt="star" />
                              <img src="../assets/icons/star.svg" alt="star" />
                              <img src="../assets/icons/star.svg" alt="star" />
                              <img
                                src="../assets/icons/outline-star.svg"
                                alt="star"
                              />
                            </div>
                            <span>8.5</span>
                          </div>
                        </span>
                      </div>

                      <div class="news-date">
                        <p class="newstatus">On going</p>
                        <p>Mon,Tue <span>123 episodes</span></p>
                      </div>
                    </a>
                    <a href="#" class="list-content">
                      <div class="list-img">
                        <img src="../assets/images/w5.png" alt="image" />
                      </div>
                      <div class="pop-count">
                        <span>
                          <h3>Along with the Gods</h3>
                          <p><span>Joo Homin</span></p>
                          <div class="startxt">
                            <div class="md-star">
                              <img src="../assets/icons/star.svg" alt="star" />
                              <img src="../assets/icons/star.svg" alt="star" />
                              <img src="../assets/icons/star.svg" alt="star" />
                              <img src="../assets/icons/star.svg" alt="star" />
                              <img
                                src="../assets/icons/outline-star.svg"
                                alt="star"
                              />
                            </div>
                            <span>8.5</span>
                          </div>
                        </span>
                      </div>

                      <div class="news-date">
                        <p class="newstatus">Completed</p>
                        <p>Jun 20, 2022 <span>190 episodes</span></p>
                      </div>
                    </a>
                  </div>
                  <a href="#" class="more-content">
                    <img
                      src="../assets/icons/right-arrow-solid.svg"
                      alt="more"
                      class="white-image"
                    />
                    <img
                      src="../assets/icons/solid-right-arrow.svg"
                      alt="more"
                      class="red-image"
                    />
                  </a>
                </div>
              </Tabs>
            </TabWrapper>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="google-adds">
    <div class="container">
      <div class="adds-image">
        <img src="../assets/images/google-add.png" alt="adds-image" />
      </div>
    </div>
  </section>
  <section class="born-today">
    <div class="container">
      <div class="born">
        <h2>Born Today<span>Jun 05.2022</span></h2>
      </div>
      <ul>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
        <li>
          <Card />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import TabWrapper from "@/components/TabWrapper.vue";
import Tabs from "@/components/Tabs.vue";
import CardOne from "@/components/CardOne.vue";
import CardTwo from "@/components/CardTwo.vue";
import CardFour from "@/components/CardFour.vue";
import VideoSlider from "@/components/VideoSlider.vue";
import Comments from "@/components/Comments.vue";
import Card from "@/components/Card.vue";

export default {
  name: "Home",
  components: {
    Tabs,
    TabWrapper,
    CardOne,
    CardTwo,
    CardFour,
    VideoSlider,
    Comments,
    Card,
  },
  inject: ["common"],
  updated() {
    console.log("hello");
    console.log(this.$i18n.locale);
    if (this.$i18n.locale == "kr") {
      this.common.state.SelectedLang = "KO";
      localStorage.setItem("selectedLang", this.common.state.SelectedLang);
    }
    if (this.$i18n.locale == "en") {
      this.common.state.SelectedLang = "EN";
      localStorage.setItem("selectedLang", this.common.state.SelectedLang);
    }
    console.log(this.common.state.SelectedLang);
  },
};
</script>
