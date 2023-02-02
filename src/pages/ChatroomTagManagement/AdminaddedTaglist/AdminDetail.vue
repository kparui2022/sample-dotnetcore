<template>
    <div class="p-grid">
        <div class="p-col-12">
            <div class="card p-fluid">
                <h4>
                    <strong>태그 상세</strong>
                </h4>
                <div class="p-field p-grid">
                    <label for="category_name_ko" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">태그명:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ name }}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label for="material_name_ko" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">사용 된 채팅방:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ chatroomCount }}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label for="material_name_ko" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">노출 여부:</label>
                    <div class="p-col-12 p-md-10">
                        <span v-if="status == 'active'"> 예</span>
                        <span v-else> 아니 </span>
                        <!-- <p>{{status}}</p> -->
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label for="material_name_ko" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">생성일시:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ formatDate(create_date) }}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label for="material_name_ko" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">수정 내역</label>
                    <div class="p-col-12 p-md-10">
                        <Button label="수정 내역 보기" class="p-button p-button-sm p-mr-2 p-mb-2" @click="Edithistorylist"> </Button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="p-col-12">
        <div class="card">
            <div class="p-d-flex p-jc-between p-mb-2">
                <div>
                    <h5>사용중인 채팅방</h5>
                </div>

                <div v-if="totalrecords != 0">
                    <button target="_blank" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" style="background: blue; color: white" @click="usertagdetailDownloadExcel()">엑셀 다운로드</button>
                </div>
                <div v-else>
                    <button target="_blank" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" style="background: blue; color: white" disabled>엑셀 다운로드</button>
                </div>
            </div>

            <DataTable :value="customer2" :paginator="false" class="p-datatable-gridlines" :rows="10" dataKey="id" :rowHover="true" :loading="loading2" :filters="filters1" responsiveLayout="scroll">
                <!-- v-model:selection="selected" -->
                <ConfirmDialog group="dialog" />

                <template #empty> 데이터가 없습니다. </template>
                <template #loading> 데이터를 로드 중입니다. 기다리다. </template>

                <!-- <column selectionMode="multiple" style="width: 16px; text-align: center" /> -->
                <Column field="slNO" :header="$t('#')">
                    <template #body="{ index }">
                        <span class="p-column-title">slNo</span>

                        {{ pagination.current_page * pagination.pagination_limit - pagination.pagination_limit + (index + 1) }}
                    </template>
                </Column>
                <Column header="채팅방 이름" style="min-width: 12rem" field="group_name" :sortable="true">
                    <template #body="{ data }">
                        <span class="p-column-title">Chatroom Name</span>
                        <router-link :to="'/ChatroomManagement/ChatroomDetails/' + data.chatroom_id" class="highlight" style="color: #69707a">
                            {{ data.group_name }}
                        </router-link>
                    </template>
                </Column>

                <Column header="방장" style="min-width: 12rem" field="owner" :sortable="true">
                    <template #body="{ data }">
                        <span class="p-column-title">Owner</span>
                        <router-link :to="'/UserManagement/UserDetail/' + data.user_id" class="highlight" style="color: #69707a">
                            {{ data.owner }}
                        </router-link>
                            
                       
                    </template>
                </Column>

                <Column header="채팅방 유형" style="min-width: 12rem" field="group_type" :sortable="true">
                    <template #body="{ data }">
                        <span class="p-column-title">Chatroom Type</span>
                        {{ $t(data.group_type) }}
                    </template>
                </Column>

                <Column header="지역" style="min-width: 12rem" field="country" :sortable="true">
                    <template #body="{ data }">
                        <span class="p-column-title">Region</span>
                        {{ data.city }}
                    </template>
                </Column>

                <Column header="참여자수" style="min-width: 12rem" field="participantsCount" :sortable="true">
                    <template #body="{ data }">
                        <span class="p-column-title">Number of Participants</span>
                        {{ data.participantsCount }}
                    </template>
                </Column>

                <Column header="비밀방 여부" style="min-width: 12rem" field="passcode" :sortable="true">
                    <template #body="{ data }">
                        <span class="p-column-title">Secret Room</span>
                        <p v-if="data.passcode == null || data.passcode == ''" id="round">아니</p>
                        <p v-else id="round">예</p>
                    </template>
                </Column>

                <Column header="생성일시" style="min-width: 12rem" field="create_date" :sortable="true">
                    <template #body="{ data }">
                        <span class="p-column-title">Created Date & Time</span>
                        {{ formatDate(data.create_date) }}
                    </template>
                </Column>

                <Column header="마지막 활동 일시" style="min-width: 12rem" field="create_date" :sortable="true">
                    <template #body="{ data }">
                        <span class="p-column-title">Date & Time of Last Activity</span>
                        <p v-if="formatDate(data.update_date) == null || formatDate(data.update_date) == ''">-</p>
                        <p v-else>{{ formatDate(data.update_date) }}</p>
                    </template>
                </Column>

                <Column header="상태" style="min-width: 12rem" field="status" :sortable="true">
                    <template #body="{ data }">
                        <span class="p-column-title">Status</span>
                        {{ $t(data.status) }}
                    </template>
                </Column>

                <Column header="관리">
                    <template #body="{ data }">
                        <span class="p-column-title">Action</span>
                        <p style="display: none">{{ data.mobile }}</p>
                        <div style="display: flex">
                            <router-link :to="'/ChatroomManagement/ChatroomDetails/' + data.chatroom_id"
                                ><Button label="help" class="p-button2"><i class="pi pi-eye p-mr-2"></i> </Button
                            ></router-link>
                            <router-link :to="'/ChatroomManagement/ChatroomMessageLogs/' + data.chatroom_id"
                                ><Button label="help" class="p-button2"><i class="pi pi-comments p-mr-2"></i> </Button
                            ></router-link>
                            <!-- <Button icon="pi pi-trash" class="p-button2" @click="deleteNote(data.id)" /> -->
                        </div>
                    </template>
                </Column>
            </DataTable>

            <div class="p-paginator p-component p-paginator-bottom">
                <button @click="paginate(1)" :class="{ 'p-disabled': pagination.current_page === 1 }" class="p-paginator-first p-paginator-element p-link" type="button" :disabled="pagination.current_page === 1">
                    <span class="p-paginator-icon pi pi-angle-double-left"></span>
                    <span class="p-ink"></span>
                </button>
                <button @click="paginate(pagination.current_page - 1)" :class="{ 'p-disabled': pagination.current_page === 1 }" class="p-paginator-next p-paginator-element p-link" type="button" :disabled="pagination.current_page === 1">
                    <span class="p-paginator-icon pi pi-angle-left"></span>
                    <span class="p-ink"></span>
                </button>
                <span class="p-paginator-pages">
                    <button
                        v-for="(page, index) in get_paginator_page(pagination.total_pages, pagination.current_page)"
                        :key="index"
                        @click="paginate(page)"
                        class="p-paginator-page p-paginator-element p-link"
                        :class="{ 'p-highlight': page === pagination.current_page }"
                        type="button"
                    >
                        {{ page }}<span class="p-ink"></span>
                    </button>
                </span>
                <button
                    @click="paginate(pagination.current_page + 1)"
                    :class="{ 'p-disabled': pagination.current_page === pagination.total_pages }"
                    class="p-paginator-next p-paginator-element p-link"
                    type="button"
                    :disabled="pagination.current_page === pagination.total_pages"
                >
                    <span class="p-paginator-icon pi pi-angle-right"></span>
                    <span class="p-ink"></span>
                </button>
                <button
                    @click="paginate(pagination.total_pages)"
                    :class="{ 'p-disabled': pagination.current_page === pagination.total_pages }"
                    :disabled="pagination.current_page === pagination.total_pages"
                    class="p-paginator-last p-paginator-element p-link"
                    type="button"
                >
                    <span class="p-paginator-icon pi pi-angle-double-right"></span>
                    <span class="p-ink"></span>
                </button>
            </div>

            <div style="text-align: right; margin-top: -35px">
                <label for="order"> {{ pagination.total_records }}개 중  {{ pagination.current_page }} - {{ pagination.pagination_limit }} </label>
            </div>

            <br />
            <div class="p-d-flex p-jc-end p-ai-center" style="float: left">
                <router-link :to="'/ChatroomTagManagement/AdminaddedTaglist/EditAdmintag/' + $route.params.id"><Button label="info" class="p-button p-button-sm p-mr-2 p-mb-2"> 수정 </Button> </router-link>
            </div>

            <div class="p-d-flex p-jc-end p-ai-center">
                <div>
                    <Button label="뒤로가기" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="$router.go(-1)"></Button>
                </div>
            </div>

            <Dialog header="Tag 1 수정 내역" v-model:visible="EditlistsDisplay" :breakpoints="{ '960px': '75vw' }" :style="{ width: '80vw' }" :modal="true">
                <DataTable :value="customer3" :paginator="false" class="p-datatable-gridlines" :rows="10" dataKey="id" :rowHover="true" :loading="loading3" :filters="filters1" responsiveLayout="scroll">
                    <!-- v-model:selection="selected" -->
                    <ConfirmDialog group="dialog" />

                    <template #empty> 데이터가 없습니다. </template>
                    <template #loading> 데이터를 로드 중입니다. 기다리다. </template>

                    <!-- <column selectionMode="multiple" style="width: 16px; text-align: center" /> -->
                    <Column field="slNO" :header="$t('#')">
                        <template #body="{ index }">
                            <span class="p-column-title">slNo</span>
                            {{ index + 1 }}
                            <!-- {{ totalrecords - index - (pagination.current_page - 1) * pagination.pagination_limit }} -->
                        </template>
                    </Column>
                    <Column header="태그명" style="min-width: 12rem">
                        <template #body="{ data }">
                            <span class="p-column-title">Tag Name</span>
                            {{ data.name == '' ? '-' : data.name }}
                        </template>
                    </Column>

                    <Column header="수정자" style="min-width: 12rem">
                        <template #body="{ data }">
                            <span class="p-column-title">Modified by</span>
                            {{ $t(data.moderator) }}
                        </template>
                    </Column>

                    <Column header="계정 유형" style="min-width: 12rem">
                        <template #body="{}">
                            <span class="p-column-title">Account Type</span>
                            관리자
                        </template>
                    </Column>

                    <Column header="노출 여부" style="min-width: 12rem">
                        <template #body="{ data }">
                            <span class="p-column-title">Exposure</span>
                            <p v-if="data.status == null || data.status == '' || data.status == 'inactive'" >아니</p>
                            <p v-else>예</p>
                        </template>
                    </Column>

                    <Column header="날짜 & 시간" style="min-width: 12rem">
                        <template #body="{ data }">
                            <span class="p-column-title">Date & Time</span>

                            {{ formatDate(data.update_date) }}
                        </template>
                    </Column>
                </DataTable>
            </Dialog>
        </div>
    </div>
</template>

<script>
import ChatroomUserDetails from '../../../service/API/ChatroomUserDetails';
import ChatroomUserTag from '../../../service/API/ChatroomUserTag';
import utils from '@/service/utils';
import moment from 'moment';
import axios from 'axios';
import { baseURL } from '@/service/Base';

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
            EditlistsDisplay: false,
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
            customer2: [],
            loading2: true,
            customer3: [],
            loading3: true,
            idFrozen: false,
            products: null,
            expandedRows: [],
            group_name: '',
            create_date: '',
            chatroomCount: '',
            status: '',
            id: '',
            user_id: '',
            tag_id: '',
            group_type: '',
            city: '',
            country: '',
            baseURL: baseURL,
            passcode: '',
            moderator: '',
            update_date: '',
            participantsCount: '',
            owner: '',
            chatroom_id:'',
        };
    },
    customerService: null,
    productService: null,
    created() {
        this.chatroomUserDetails = new ChatroomUserDetails();
        this.chatroomUserTag = new ChatroomUserTag();
    },
    mounted() {
        localStorage.setItem('id', this.$route.params.id);

        this.usertagdetailparticipantlist({ record_count: this.pagination.pagination_limit, page: this.pagination.current_page });
        this.chatroomUserDetails.getChatroomUserDetails(this.$route.params.id).then((res) => {
            // console.log(res);
            this.name = res.data.tag_details.name;
            this.group_type = res.data.tag_details.group_type;
            this.city = res.data.tag_details.city;
            this.country = res.data.tag_details.country;
            this.create_date = res.data.tag_details.create_date;
            this.status = res.data.tag_details.status;
            this.chatroomCount = res.data.tag_details.chatroomCount;

            console.log(res);
        });
    },
    methods: {
        formatDate(value) {
            if (value) {
                return moment.utc(value).locale('ko').format('ll - LTS');
            }
        },

        Edithistorylist(data) {
            this.EditlistsDisplay = true;
            this.chatroomUserDetails
                .getedithistorylist(data)
                .then((r) => {
                    this.loading3 = false;
                    this.customer3 = r.data.tag_details;
                    console.log(r);

                    // this.pagination_limit_options[this.pagination_limit_options.length-1].value = r.data.total_records
                })
                .catch((err) => {
                    this.loading1 = false;
                    console.log(err);
                });
        },
        close() {
            this.EditlistsDisplay = false;
        },

        // usertagdetailDownloadExcel() {
        //     console.log(this.baseURL);
        //     window.location.href = this.baseURL + 'admin/tag/download-tag-chatroom-list/' + this.$route.params.id;
        // },

        usertagdetailDownloadExcel(id) {
            this.chatroomUserTag
                .getExceladmindetailFinal(id)
                .then((response) => {
                    const url = window.URL.createObjectURL(new Blob([response.data]));
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', 'admintagdetail.xlsx'); //or any other extension
                    document.body.appendChild(link);
                    link.click();
                })
                .catch((err) => console.log(err));
        },

        usertagdetailparticipantlist(data) {
            this.loading2 = true;
            this.chatroomUserDetails
                .getusertagdetailparticipant(data)
                .then((r) => {
                    this.loading2 = false;
                    this.customer2 = r.data.tagList;
                    this.totalrecords = r.data.total_records;
                    console.log(r.data.total_records);
                    console.log(r);
                    console.log(r.error_message);
                    // this.pagination_limit_options[this.pagination_limit_options.length-1].value = r.data.total_records
                    this.setPagination(r.data.current_page, r.data.total_pages === 0 ? 1 : r.data.total_pages, r.data.total_records);
                })
                .catch((err) => {
                    this.loading1 = false;
                    console.log(err);
                });
        },

        setPagination(current_page, total_pages, total_records) {
            this.pagination.current_page = current_page;
            this.pagination.total_pages = total_pages;
            this.pagination.total_records = total_records;
        },

        get_paginator_page(total, active) {
            return utils.paginate(total, active);
        },

        paginate(page) {
            this.loading2 = true;
            // var start_date = this.formatRangeDate(this.date_range.at(0));
            // var end_date = this.formatRangeDate(this.date_range.at(1));
            this.chatroomUserDetails
                .getusertagdetailparticipant({ page: page, record_count: this.pagination.pagination_limit })
                .then((res) => {
                    this.customer2 = res.data.tagList;
                    this.totalrecords = res.data.total_records;
                    console.log('paginate', this.customer2);
                    console.log('paginatetotal', this.totalrecords);
                    this.pagination.current_page = page;
                    this.loading2 = false;
                    // console.log(res.data);
                })
                .catch((err) => console.log(err));
        },

        edithistorylist(data) {
            this.loading3 = true;
            this.chatroomUserDetails
                .getedithistorylist(data)
                .then((r) => {
                    this.loading3 = false;
                    this.customer3 = r.data.tagList;

                    console.log(r);
                    // this.pagination_limit_options[this.pagination_limit_options.length-1].value = r.data.total_records
                })
                .catch((err) => {
                    this.loading3 = false;
                    console.log(err);
                });
        },

        deleteNote: function (id) {
            console.log(id);
            var self = this;
            this.$confirm.require({
                group: 'dialog',
                header: '확인',
                message: '삭제하시겠습니까?',
                icon: 'pi pi-trash',
                acceptLabel: '확인',
                rejectLabel: ' 취소',
                accept: () => {
                    axios({ method: 'delete', url: `admin/tag/tags/${this.$route.params.id}` }).then(function () {});
                    self.usertaglist({ record_count: this.pagination.pagination_limit, page: this.pagination.current_page });

                    self.$router.push({ name: 'AdmintagList' });
                    setTimeout(() => {
                        self.$toast.add({ severity: 'info', summary: '삭제', detail: '성공적으로 삭제되었습니다.', life: 1000 });
                    }, 1000);
                },
                reject: () => {
                    this.$toast.add({ severity: 'error', summary: '오류가 발생했습니다', detail: '취소되었습니다', life: 1000 });
                },
            });
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

p#round {
    border-radius: 12px;
    border: 1px solid black;
}

.highlight:hover {
    border-bottom: 3px solid Blue;
}
</style>