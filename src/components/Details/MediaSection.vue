<template>
    <div class="tab-outr small">
        <TabWrapper>
            <Tabs title="Video">
                <div class="lists tab-scroll moble">
                    <div class="media-otr md-3">
                        <VideoCard />
                        <VideoCard />
                        <VideoCard />
                    </div>
                    <router-link to @click="$emit('navigation')" class="more-content">
                        <img src="@/assets/icons/right-arrow-solid.svg" alt="more" class="white-image">
                        <img src="@/assets/icons/solid-right-arrow.svg" alt="more" class="red-image">
                    </router-link>
                </div>
            </Tabs>
            <Tabs title="Images">
                <p>abc</p>
            </Tabs>
        </TabWrapper>
    </div>
</template>

<script>
    import TabWrapper from "@/components/TabWrapper.vue";
    import Tabs from "@/components/Tabs.vue";
    import VideoCard from "@/components/MyPage/VideoCard.vue";
    export default {
        name: 'MediaSection',
        components: {
            Tabs,
            TabWrapper,
            VideoCard
        },
       
    }
</script>