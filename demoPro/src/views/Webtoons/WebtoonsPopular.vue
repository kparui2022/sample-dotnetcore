
<template>
    <section class="movies-sec">
      <div class="container">
          <h2>Popular Webtoons</h2>
          <div class="movies-main">
              <FilterCard />
              <div class="moives-list">
                  <div class="outerside">
                    <PopularCard v-for="i in 18" :key="i" RedirectLink="/webtoons/detail" />
                        <!-- <PopularCard />
                        <PopularCard />
                        <PopularCard />
                        <PopularCard />
                        <PopularCard />
                        <PopularCard />
                        <PopularCard />
                        <PopularCard />
                        <PopularCard />
                        <PopularCard />
                        <PopularCard />
                        <PopularCard />
                        <PopularCard />
                        <PopularCard />
                        <PopularCard />
                        <PopularCard />
                        <PopularCard /> -->
                      <!-- <a href="#" class="list-content">
                      <div class="list-img">
                          <img src="../../assets/images/aw-1.png" alt="image">
                      </div>
                      <div class="pop-count">
                          <span>
                          <h3>Jurassic World Dominion</h3>
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
                          </span>
                      </div>

                      <div class="news-date">
                          <p>Jun 20, 2022 <span>67 episodes</span></p>
                      </div>
                      </a>  
                      <a href="#" class="list-content">
                      <div class="list-img">
                          <img src="../../assets/images/aw-2.png" alt="image">
                      </div>
                      <div class="pop-count">
                          <span>
                          <h3>Minions: The Rise of Gru</h3>
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
                          </span>
                      </div>

                      <div class="news-date">
                          <p>Jun 20, 2022 <span>67 episodes</span></p>
                      </div>
                      </a>    
                      <a href="#" class="list-content">
                      <div class="list-img">
                          <img src="../../assets/images/aw-3.png" alt="image">
                      </div>
                      <div class="pop-count">
                          <span>
                          <h3>Top Gun: Maverick</h3>
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
                          </span>
                      </div>

                      <div class="news-date">
                          <p>Jun 20, 2022 <span>67 episodes</span></p>
                      </div>
                      </a>    
                      <a href="#" class="list-content">
                      <div class="list-img">
                          <img src="../../assets/images/aw-4.png" alt="image">
                      </div>
                      <div class="pop-count">
                          <span>
                          <h3>Thor: Love and Thunder</h3>
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
                          </span>
                      </div>

                      <div class="news-date">
                          <p>Jun 20, 2022 <span>67 episodes</span></p>
                      </div>
                      </a>    
                      <a href="#" class="list-content">
                      <div class="list-img">
                          <img src="../../assets/images/aw-5.png" alt="image">
                      </div>
                      <div class="pop-count">
                          <span>
                          <h3>Lightyear</h3>
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
                          </span>
                      </div>

                      <div class="news-date">
                          <p>Jun 20, 2022 <span>67 episodes</span></p>
                      </div>
                      </a>    
                      <a href="#" class="list-content">
                      <div class="list-img">
                          <img src="../../assets/images/aw-6.png" alt="image">
                      </div>
                      <div class="pop-count">
                          <span>
                          <h3>The Black Phone</h3>
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
                          </span>
                      </div>

                      <div class="news-date">
                          <p>Jun 20, 2022 <span>67 episodes</span></p>
                      </div>
                      </a>      
                      <a href="#" class="list-content">
                      <div class="list-img">
                          <img src="../../assets/images/aw-7.png" alt="image">
                      </div>
                      <div class="pop-count">
                          <span>
                          <h3>The Princess</h3>
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
                          </span>
                      </div>

                      <div class="news-date">
                          <p>Jun 20, 2022 <span>67 episodes</span></p>
                      </div>
                      </a>  
                      <a href="#" class="list-content">
                      <div class="list-img">
                          <img src="../../assets/images/aw-8.png" alt="image">
                      </div>
                      <div class="pop-count">
                          <span>
                          <h3>Incantation</h3>
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
                          </span>
                      </div>

                      <div class="news-date">
                          <p>Jun 20, 2022 <span>67 episodes</span></p>
                      </div>
                      </a>    
                      <a href="#" class="list-content">
                      <div class="list-img">
                          <img src="../../assets/images/aw-9.png" alt="image">
                      </div>
                      <div class="pop-count">
                          <span>
                          <h3>Last Seen Alive</h3>
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
                          </span>
                      </div>

                      <div class="news-date">
                          <p>Jun 20, 2022 <span>67 episodes</span></p>
                      </div>
                      </a>    
                      <a href="#" class="list-content">
                      <div class="list-img">
                          <img src="../../assets/images/aw-10.png" alt="image">
                      </div>
                      <div class="pop-count">
                          <span>
                          <h3>The Ledge</h3>
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
                          </span>
                      </div>

                      <div class="news-date">
                          <p>Jun 20, 2022 <span>67 episodes</span></p>
                      </div>
                      </a>    
                      <a href="#" class="list-content">
                      <div class="list-img">
                          <img src="../../assets/images/aw-11.png" alt="image">
                      </div>
                      <div class="pop-count">
                          <span>
                          <h3>Valley of the Dead</h3>
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
                          </span>
                      </div>

                      <div class="news-date">
                          <p>Jun 20, 2022 <span>67 episodes</span></p>
                      </div>
                      </a>    
                      <a href="#" class="list-content">
                      <div class="list-img">
                          <img src="../../assets/images/aw-12.png" alt="image">
                      </div>
                      <div class="pop-count">
                          <span>
                          <h3>Sonic the Hedgehog 2</h3>
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
                          </span>
                      </div>

                      <div class="news-date">
                          <p>Jun 20, 2022 <span>67 episodes</span></p>
                      </div>
                      </a>    
                      <a href="#" class="list-content">
                      <div class="list-img">
                          <img src="../../assets/images/aw-1.png" alt="image">
                      </div>
                      <div class="pop-count">
                          <span>
                          <h3>Jurassic World Dominion</h3>
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
                          </span>
                      </div>

                      <div class="news-date">
                          <p>Jun 20, 2022 <span>67 episodes</span></p>
                      </div>
                      </a>  
                      <a href="#" class="list-content">
                      <div class="list-img">
                          <img src="../../assets/images/aw-2.png" alt="image">
                      </div>
                      <div class="pop-count">
                          <span>
                          <h3>Minions: The Rise of Gru</h3>
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
                          </span>
                      </div>

                      <div class="news-date">
                          <p>Jun 20, 2022 <span>67 episodes</span></p>
                      </div>
                      </a>    
                      <a href="#" class="list-content">
                      <div class="list-img">
                          <img src="../../assets/images/aw-3.png" alt="image">
                      </div>
                      <div class="pop-count">
                          <span>
                          <h3>Top Gun: Maverick</h3>
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
                          </span>
                      </div>

                      <div class="news-date">
                          <p>Jun 20, 2022 <span>67 episodes</span></p>
                      </div>
                      </a>    
                      <a href="#" class="list-content">
                      <div class="list-img">
                          <img src="../../assets/images/aw-4.png" alt="image">
                      </div>
                      <div class="pop-count">
                          <span>
                          <h3>Thor: Love and Thunder</h3>
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
                          </span>
                      </div>

                      <div class="news-date">
                          <p>Jun 20, 2022 <span>67 episodes</span></p>
                      </div>
                      </a>    
                      <a href="#" class="list-content">
                      <div class="list-img">
                          <img src="../../assets/images/aw-5.png" alt="image">
                      </div>
                      <div class="pop-count">

                          <span>
                          <h3>Lightyear</h3>
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
                          </span>
                      </div>

                      <div class="news-date">
                          <p>Jun 20, 2022 <span>67 episodes</span></p>
                      </div>
                      </a>    
                      <a href="#" class="list-content">
                      <div class="list-img">
                          <img src="../../assets/images/aw-6.png" alt="image">
                      </div>
                      <div class="pop-count">
                          <span>
                          <h3>The Black Phone</h3>
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
                          </span>
                      </div>

                      <div class="news-date">
                          <p>Jun 20, 2022 <span>67 episodes</span></p>
                      </div>
                      </a>     -->
                </div>
              </div>
          </div>
      </div>
  </section>
</template>
<script>
import FilterCard from '@/components/FilterCard.vue';
import PopularCard from '@/components/PopularCard.vue';
  export default {
    name: "WebtoonsPopular",
    components: { FilterCard, PopularCard }
};
</script>
