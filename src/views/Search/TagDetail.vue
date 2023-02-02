<!-- <template>
    <section class="tag-details">
        <div class="container">
            <h2>{{$route.params.tagname}}</h2>
            <div class="tagdetail-content">
                <div class="tab-outr">
                    <TabWrapper>
                        <Tabs title="All">
                            <ul class="tags-list">
                                <li>
                                    <TagCardOne />
                                </li>
                                <li>
                                    <TagCardTwo />
                                </li>
                                <li>
                                    <TagCardTwo />
                                </li>
                                <li>
                                    <TagCardOne />
                                </li>
                                <li>
                                    <TagCardTwo />
                                </li>
                                <li>
                                    <TagCardTwo />
                                </li>
                                <li>
                                    <TagCardTwo />
                                </li>
                                <li>
                                    <TagCardTwo />
                                </li>
                                <li>
                                    <TagCardTwo />
                                </li>
                            </ul>
                        </Tabs>
                        <Tabs title="Movie">
                            Movie
                        </Tabs>
                        <Tabs title="TV Show">
                            TV Show
                        </Tabs>
                        <Tabs title="Webtoon">
                            Webtoon
                        </Tabs>
                    </TabWrapper>
                </div>
            </div>
        </div>
    </section>
</template> -->
<template>
    <section class="tag-details">
        <div class="container">
            <h2>{{$route.params.tagname}}</h2>
            <div class="tagdetail-content">
                <div class="tab-outr">
                    <ul class="tabs-header">
                        <li v-for="(item, index) of tagList" :key="index" @click="filterTag(item.value, index)"
                            :class="index == activeItem ? 'active' : '' ">{{item.title}}
                        </li>
                    </ul>
                    <ul class="tags-list">
                        <li v-for="(item, index) of tagDetailResult" :key="index">
                            <a href="javaScript:void(0)">
                                <img src="@/assets/images/bad.png" alt="image">
                                <div class="main-dta">
                                    <span>
                                        <h4>{{item.title}}</h4>
                                        <p>{{dateformat(item.release_date)}}</p>
                                    </span>
                                    <div class="p-content">
                                        <p>{{item.overview}}</p>
                                    </div>
                                </div>

                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { onMounted, ref } from '@vue/runtime-core';
import SearchResultService from "@/services/SearchResultService";
import { useRoute } from 'vue-router';
import moment from 'moment';


export default {
    name: 'TagDetail',
    setup() {
        const activeItem = ref(0)
        const route = useRoute();
        const tag_id = ref(route.params.id)
        const type = ref('all')
        const page = ref(1)
        const limit = ref(10)
        const tagList = [{ title: 'All', value: 'all' }, { title: 'Movies', value: 'movie' }, { title: 'TV Show', value: 'tv' }, { title: 'Webtoon', value: 'webtoons' }]
        const tagDetailResult = ref([])
        const searchResultService = new SearchResultService();

        // get search data on load
        onMounted(() => {
            tagDetails(tag_id.value, type.value, page.value, limit.value);
        })

        // search result main api
        const tagDetails = (tag_id, type, page, limit) => {
            searchResultService.getTagDetails(tag_id, type, page, limit)
                .then((res) => {
                    if (res.status == 200) {
                        tagDetailResult.value = res.data.results
                    }
                })
                .catch((err) => {
                    return;
                });
        }
        const filterTag = (item, i) => {
            activeItem.value = i
            type.value = item
            tagDetails(tag_id.value, type.value, page.value, limit.value);
        }
        const dateformat = (value) => {
            if (value) {
                return moment.utc(value).format("ll");
            }
        }
        return {
            tagList,
            filterTag,
            tagDetailResult,
            dateformat,
            activeItem
        }
    }
};
</script>