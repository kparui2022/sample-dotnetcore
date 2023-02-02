<template>
    <div class="p-grid">
        <div class="p-col-12">
            <div class="card p-fluid">
                <h4>
                    <strong>보고된 메시지 세부정보</strong>
                </h4>
                <div class="p-field p-grid">
                    <label for="category_name_ko" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">채팅방 이름:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ group_name }}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label for="material_name_ko" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">보고된 메시지:</label>
                    <div class="p-col-12 p-md-10">
                        <div v-for="(item, index) in reportedMessages" :key="index">
                            <div v-if="conversation_id === item.id">
                                <span v-if="item.content_type === 'text'"> {{ message }}</span>
                                <span v-else-if="item.content_type === 'image'">
                                    <span v-if="item.media[0].expired === 0">
                                        <Image :src="item.media[0].file_name" alt="Image Not Available" class="product-image" width="137" height="85" />
                                    </span>
                                    <span v-else-if="item.media[0].expired === 1">
                                        <Image :src="item.media[0].file_name_small" alt="Image Not Available" class="product-image" width="137" height="85" />
                                    </span>
                                </span>

                                <span v-else-if="item.content_type === 'video'">
                                    <span v-if="item.media[0].expired === 0">
                                        <a :href="item.media[0].file_name" target="_blank">
                                            <Image :src="item.media[0].file_name_medium" alt="Image Not Available" class="product-image icons" width="137" height="85" />
                                        </a>
                                    </span>
                                    <span v-else-if="item.media[0].expired === 1">
                                        <a :href="item.media[0].file_name_small" target="_blank">
                                            <Image :src="item.media[0].file_name_small" alt="Image Not Available" class="product-image" width="137" height="85" />
                                        </a>
                                    </span>
                                </span>

                                <span v-else-if="item.content_type === 'emoticon'"> 이모티콘 </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label for="material_name_ko" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">메시지 유형:</label>
                    <div class="p-col-12 p-md-10">
                        <span v-if="content_type === 'text'">텍스트</span>
                        <span v-else-if="content_type === 'video'">동영상</span>
                        <span v-else-if="content_type === 'image'">사진</span>
                        <span v-else-if="content_type === 'emoticon'"> 이모티콘 </span>
                        <!-- <p>{{ content_type }}</p> -->
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label for="material_name_ko" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">메시지 게시자:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ posted_by }}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label for="material_name_ko" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">보고된 메시지 이유:</label>
                    <div class="p-col-12 p-md-10">
                        <span v-if="type === 'scam'">스캠</span>
                        <span v-else-if="type === 'harmful'">해로운</span>
                        <span v-else-if="type === 'illegal'">불법적인</span>
                        <span v-else-if="type === 'other'">다른</span>
                        <!-- <p>{{ type }}</p> -->
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label for="material_name_ko" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">신고한 메시지:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ reported_by }}</p>
                        <!-- <span v-if="is_passcode_protected == '1'"> 예 </span>
                        <span v-else> 아니 </span> -->
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label for="material_name_ko" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">채팅방 유형:</label>
                    <div class="p-col-12 p-md-10">
                        <span v-if="group_type === 'general'">보통</span>
                        <span v-else-if="group_type === 'location'">위치 기반</span>
                        <!-- <p>{{ group_type }}</p> -->
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label for="material_name_ko" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">보고된 날짜 및 시간:</label>
                    <div class="p-col-12 p-md-10">
                        <!-- <p>{{ Dateformat(latest_message_time) == null ? '-' : Dateformat(latest_message_time) }}</p> -->
                        <p>{{ formatDate(create_date) }}</p>
                    </div>
                </div>
                <!-- <div class="p-d-flex p-jc-end p-ai-center">
                    <div>
                        <Button label="뒤로가기" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="$router.go(-1)"></Button>
                    </div>
                </div> -->
            </div>
        </div>

        <div class="p-col-12">
            <div class="card p-fluid">
                <h4>
                    <strong>보고된 메시지 로그(이전 및 다음 메시지 5개)</strong>
                </h4>
                <div v-for="(item, index) in reportedMessages" :key="index" class="p-field p-grid text">
                    <label for="category_name_ko" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0" style="font-weight: bold">{{ item.user_name }}</label>
                    <div class="p-col-12 p-md-8 chatbox">
                        <span v-if="item.content_type == 'text'">
                            <Textarea id="choosename" type="text" v-model="item.message" placeholder="대화방 메시지" style="color: black" disabled> </Textarea>
                        </span>
                        <span v-else-if="item.content_type == 'image'">
                            <span v-if="item.media[0].expired === 0">
                                <Image :src="item.media[0].file_name" alt="Image Not Available" class="product-image" width="137" height="85" />
                            </span>
                            <span v-else-if="item.media[0].expired === 1">
                                <Image :src="item.media[0].file_name_small" alt="Image Not Available" class="product-image" width="137" height="85" />
                            </span>
                        </span>

                        <span v-else-if="item.content_type == 'video'">
                            <span v-if="item.media[0].expired === 0">
                                <a :href="item.media[0].file_name" target="_blank"> <Image :src="item.media[0].file_name_medium" alt="Image Not Available" class="product-image icons" width="137" height="85" /></a>
                            </span>
                            <span v-else-if="item.media[0].expired === 1">
                                <a :href="item.media[0].file_name_small" target="_blank">
                                    <Image :src="item.media[0].file_name_small" alt="Image Not Available" class="product-image icons" target="_blank" width="137" height="85" />
                                </a>
                            </span>
                        </span>

                        <span v-else-if="item.content_type == 'info'">
                            <Textarea id="choosename" type="text" v-model="item.message" placeholder="대화방 메시지" style="color: black" disabled> </Textarea>
                        </span>

                        <span v-else>
                            <Textarea id="choosename" type="text" :placeholder="$t(item.content_type)" style="color: black" disabled> </Textarea>
                        </span>
                    </div>
                    <div class="p-col-12 p-md-10">
                        <p class="date">{{ formatDate(item.create_date) }}</p>
                    </div>
                </div>

                <!-- <div class="p-d-flex p-jc-end p-ai-center">
                    <div>
                        <Button label="뒤로가기" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="$router.go(-1)"></Button>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
// import { useRoute } from 'vue-router';
// import validateUsersearch from '../../validations/user/validateUserSearch';
// import { FilterMatchMode, FilterOperator } from 'primevue/api';
import ReportedMessagesService from '../../service/API/ReportedMessagesService';
// import axios from 'axios';
import moment from 'moment';
// import utils from '@/service/utils';

export default {
    data() {
        return {
            selected: [],
            render: true,
            display: false,
            position: 'center',
            visibleLeft: false,
            visibleRight: false,
            visibleTop: false,
            visibleBottom: false,
            visibleFull: false,
            totalrecords: '',
            pagination: {
                current_page: 1,
                pagination_limit: 10,
                total_pages: 0,
                total_records: 0,
            },
            // complexvalue: [],
            statusTrue: true,
            statusFalse: false,
            customer1: [],
            reportedMessages: [],
            updatedchatroommessage: 0,
            loading1: true,
            idFrozen: false,
            products: null,
            expandedRows: [],
            group_name: '',
            group_type: '',
            id: '',
            message: '',
            content_type: '',
            posted_by: '',
            type: '',
            reported_by: '',
            is_passcode_protected: '',
            create_date: '',
            latest_message_time: '',
            moderator: '',
            serialNo: '',
            conversations_message: '',
            file_name: '',
        };
    },
    customerService: null,
    productService: null,
    created() {
        this.reportedMessagesService = new ReportedMessagesService();
    },
    mounted() {
        this.reportedMessageLog(this.$route.params.id);
        this.reportedMessagesService.viewreportedmessagesdetail(this.$route.params.id).then((res) => {
            // console.log(res);
            this.conversation_id = res.data.message_details.conversation_id;
            this.group_name = res.data.message_details.group_name;
            this.message = res.data.message_details.message;
            this.content_type = res.data.message_details.content_type;
            this.posted_by = res.data.message_details.posted_by;
            this.type = res.data.message_details.type;
            this.reported_by = res.data.message_details.reported_by;
            this.group_type = res.data.message_details.group_type;
            this.create_date = res.data.message_details.create_date;
            this.conversations_message = res.data.message_details.conversations[0].message;
            console.log(this.conversations_message);
        });
    },
    watch: {},
    importantNoticeList() {
        return Array.from(this.updatedchatroommessage).filter((item) => {
            return item.top10 == 1;
        });
    },

    unimportantNoticeList() {
        return Array.from(this.updatedchatroommessage).filter((item) => {
            return item.top10 == 0;
        });
    },
    methods: {
        test() {
            console.log(this.reportedMessages);
        },
        myCallback(ClickPage) {
            const startIndex = (ClickPage - 1) * this.perPage;
            const endIndex = startIndex + this.perPage;
            this.updatedchatroommessage = this.reportedMessages.slice(startIndex, endIndex);
            console.log(this.updatedchatroommessage);
        },
        reportedMessageLog(data) {
            this.loading1 = true;
            this.reportedMessagesService
                .viewreportedmessagesdetail(data)
                .then((r) => {
                    this.loading1 = false;
                    this.reportedMessages = r.data.message_details.conversations;
                    this.myCallback(1);
                    console.log('details', this.reportedMessages);
                })
                .catch((err) => {
                    this.loading1 = false;
                    console.log(err);
                });
        },

        formatDate(value) {
            if (value) {
                return moment.utc(value).locale('ko').format('ll - LT');
            }
        },
    },
};
</script>


<style lang="scss" scoped>
.p-datatable-tbody {
    .p-button {
        white-space: nowrap;
    }
}
.p-fluid {
    .p-button {
        width: auto;
    }
}

.text {
    display: inherit;
}

.chatbox {
    margin-top: 1%;
}

textarea#choosename {
    background: #e0e0e0;
}

::placeholder {
    color: black;
}

.date {
    color: #a4a4a4;
}

.product-image {
    padding-top: 5px;
    // border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
    width: 150px;
    height: 100px;
    /* margin-left: 25%; */
}
</style>


