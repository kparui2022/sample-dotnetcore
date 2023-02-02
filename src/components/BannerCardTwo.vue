<template>
    <section class="tvshow-episodes-banner" style="background-image:url('../../../src/assets/images/tvbg.png');">
        <div class="container">
            <div class="banner-content">
                <figure>
                    <!-- <img src="@/assets/images/yumi.png" alt="yumi"> -->
                    <img :src="bannerInfo.imgUrl" alt="...">
                </figure>
                <div class="left-content">
                    <!-- <h3>Yumi’s Cells<span>Season 1</span></h3> -->
                    <slot />
                    <router-link to @click="$router.push({ name: bannerInfo.link, params:{id: bannerInfo.id} })"><img src="@/assets/icons/left-arrow-gray.svg" alt="leftimg">Go to Main</router-link>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
    export default {
        name: 'BannerCardTwo',
        props: {
           bannerInfo: Object
        }
    }
</script>
