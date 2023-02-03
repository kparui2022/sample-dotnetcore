<template>
      <section class="movies-sec">
        <div class="container">
            <h2>Popular Movies</h2>
            <div class="movies-main">
                <FilterCard />
                <div class="moives-list">
                    <div class="outerside">
                        <PopularCard v-for="i in 18" :key="i" RedirectLink="/movies/details" />
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
                            <img src="../../assets/images/mo-1.png" alt="image">
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
                            <img src="../../assets/images/mo-2.png" alt="image">
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
                            <img src="../../assets/images/mo-3.png" alt="image">
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
                            <img src="../../assets/images/mo-4.png" alt="image">
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
                            <img src="../../assets/images/mo-5.png" alt="image">
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
                            <img src="../../assets/images/mo-6.png" alt="image">
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
                            <img src="../../assets/images/mo-7.png" alt="image">
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
                            <img src="../../assets/images/mo-8.png" alt="image">
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
                            <img src="../../assets/images/mo-9.png" alt="image">
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
                            <img src="../../assets/images/mo-10.png" alt="image">
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
                            <img src="../../assets/images/mo-11.png" alt="image">
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
                            <img src="../../assets/images/mo-12.png" alt="image">
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
                            <img src="../../assets/images/mo-13.png" alt="image">
                        </div>
                        <div class="pop-count">
                            <span>
                            <h3>Fantastic Beasts: The Secrets of Dumbledore</h3>
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
                            <img src="../../assets/images/mo-14.png" alt="image">
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
                            <img src="../../assets/images/mo-15.png" alt="image">
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
                            <img src="../../assets/images/mo-16.png" alt="image">
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
                            <img src="../../assets/images/mo-17.png" alt="image">
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
                            <img src="../../assets/images/mo-18.png" alt="image">
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
    name: "MoviesPopular",
    components: { FilterCard, PopularCard }
};
</script>
