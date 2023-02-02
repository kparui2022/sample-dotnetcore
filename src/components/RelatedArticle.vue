<template>
     <div class="article-otr">
        <NewsCard />
        <NewsCard />
        <NewsCard />
    </div>
    <a href="#" class="more-article-btn">More +</a>
</template>



<script>
    import NewsCard from '@/components/NewsCard.vue';
    export default {
        name: 'RelatedArticle',
        components: { NewsCard }
    }
</script>