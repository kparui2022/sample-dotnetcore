<template>
    <div class="p-grid">
        <Toast />
        <div class="p-col-12">
            <div class="card p-fluid">
                <h4>
                    <strong>검색</strong>
                </h4>
                <div class="p-formgrid p-grid p-mb-3">
                    <div class="p-field p-col-12 p-md-3">
                        <label for="Reported">신고 사유</label>
                        <Dropdown v-model="reason_type" :options="dropdownreportedreason" optionValue="code" optionLabel="name" placeholder="전체 " />
                    </div>

                    <div class="p-field p-col-12 p-md-3">
                        <label for="Chatroomname">채팅방 이름</label>
                        <InputText id="Chatroomname" v-model="chatroom_name" type="text" placeholder="채팅방 이름으로 검색" />
                    </div>

                    <div class="p-field p-col-12 p-md-3">
                        <label for="Region">채팅방 유형</label>
                        <Dropdown v-model="group_type" :options="dropdownchatroomtype" optionValue="code" optionLabel="name" placeholder="전체 " />
                    </div>

                    <div class="p-field p-col-12 p-md-3">
                        <label for="Reportedmessage">신고당한 메시지</label>
                        <InputText id="Reportedmessage" v-model="reported_message" type="text" placeholder="신고당한 메시지 내용으로 검색" />
                    </div>

                    <div class="p-field p-col-12 p-md-3">
                        <label for="Reportedby">신고자</label>
                        <InputText id="Reportedby" type="text" v-model="reported_by" placeholder="신고된 사용자 닉네임으로 검색  " />
                    </div>

                    <div class="p-field p-col-12 p-md-3">
                        <label for="MessagePostedBy">피신고자</label>
                        <InputText id="MessagePostedBy" v-model="message_posted_by" type="text" placeholder="신고당한 사용자 닉네임으로 검색" />
                    </div>

                    <div class="p-field p-col-12 p-md-3">
                        <label for="MessageType">메시지 유형</label>
                        <Dropdown v-model="message_type" :options="dropdownmessagetype" optionValue="code" optionLabel="name" placeholder="전체 " />
                    </div>

                    <div class="p-field p-col-12 p-md-3">
                        <label for="pass">신고일</label>
                        <Calendar inputId="range" v-model="date_range" selectionMode="range" :manualInput="false" placeholder="YYYY/MM/DD - YYYY/MM/DD" />
                    </div>
                </div>

                <div class="p-d-flex p-jc-between p-ai-lg-center p-ai-start p-mt-6 p-flex-column p-flex-lg-row">
                    <div class="p-mb-4 p-mb-lg-0">
                        <Button :label="$t('button.today')" icon="pi pi-calendar" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="today"></Button>
                        <Button :label="$t('button.lastWeek')" icon="pi pi-calendar" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="lastweek"></Button>
                        <Button :label="$t('button.lastMonth')" icon="pi pi-calendar" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="lastmonth"></Button>
                        <Button :label="$t('button.last6Months')" icon="pi pi-calendar" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="lastsixmonth"></Button>
                        <!-- <Button :label="$t('button.lastYear')" icon="pi pi-calendar" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="lastyear"></Button> -->
                    </div>
                    <div>
                        <Button label="검색" icon="pi pi-search" iconPos="left" class="p-button p-button-sm p-mr-2 p-mb-2" @click="searchreportedMessages"></Button>
                        <Button label="초기화" icon="pi pi-replay" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="resetreportedMessage"></Button>
                    </div>
                </div>
            </div>
        </div>
        <div class="p-col-12">
            <div class="card">
                <div class="p-d-flex p-jc-between p-mb-2">
                    <div>
                        <h5>신고된 메시지 목록</h5>
                    </div>
                    <div>
                        <!-- <Button label="Primary" class="p-mr-2 p-mb-2" @click="excelUpload"><i class="pi pi-download p-mr-2"></i>{{ $t('Upload Excel') }}</Button> -->
                        <!-- <Button target="_blank" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="popularlistDownloadExcel" style="background: blue; color: white">엑셀 다운로드</Button> -->
                    </div>
                </div>

                <DataTable :value="customer1" :paginator="false" class="p-datatable-gridlines" :rows="10" dataKey="id" :rowHover="true" :loading="loading" :filters="filters" responsiveLayout="scroll">
                    <!-- v-model:selection="selected" -->
                    <ConfirmDialog group="dialog" />

                    <template #empty> 데이터가 없습니다. </template>
                    <template #loading> 데이터를 로드 중입니다. 기다리다. </template>

                    <!-- <column selectionMode="multiple" style="width: 16px; text-align: center" /> -->
                    <Column field="slNO" :header="$t('#')" :sortable="true">
                        <template #body="{ index }">
                            <span class="p-column-title">slNo</span>

                            {{ pagination.current_page * pagination.pagination_limit - pagination.pagination_limit + (index + 1) }}
                        </template>
                    </Column>
                    <Column header="채팅방 이름" style="min-width: 12rem" field="room_name" :sortable="true">
                        <template #body="{ data }">
                            <span class="p-column-title">Chatroom Name</span>
                            <router-link :to="'/ChatroomManagement/ChatroomDetails/' + data.room_id" class="highlight" style="color: #69707a">
                                {{ data.room_name }}
                            </router-link>
                        </template>
                    </Column>

                    <Column header="신고당한 메시지" style="min-width: 13rem" field="reportedmessage">
                        <template #body="{ data }">
                            <span class="p-column-title">Reported Message</span>
                            <span v-if="data.messagetype === 'text'"> {{ data.reportedmessage }}</span>
                            <span v-else-if="data.messagetype === 'image'"> 
                                <Image :src="data.reportedmessage" alt="Image Not Available" class="product-image" width="137" height="85" />
                            </span>

                            <span v-else-if="data.messagetype === 'video'">
                                <Image :src="data.reportedmessage" alt="Image Not Available" class="product-image" width="137" height="85" />
                            </span>

                            <span v-else-if="data.messagetype === 'emoticon'">
                                이모티콘
                            </span>
                            <!-- {{ data.reportedmessage }} -->
                        </template>
                    </Column>

                    <Column header="메시지 유형" style="min-width: 12rem" field="messagetype" :sortable="true">
                        <template #body="{ data }">
                            <span class="p-column-title">Message Type</span>
                            <span v-if="data.messagetype === 'text'">텍스트</span>
                            <span v-else-if="data.messagetype === 'video'">동영상</span>
                            <span v-else-if="data.messagetype === 'image'">사진</span>
                            <span v-else-if="data.messagetype === 'emoticon'">이모티콘</span>

                            <!-- {{ data.messagetype }} -->
                        </template>
                    </Column>

                    <Column header="신고 사유" style="min-width: 16rem" field="report_reason">
                        <template #body="{ data }">
                            <span class="p-column-title">Reported Message Reason</span>
                            <span v-if="data.report_reason === 'scam'">스캠</span>
                            <span v-else-if="data.report_reason === 'harmful'">해로운</span>
                            <span v-else-if="data.report_reason === 'illegal'">불법적인</span>
                            <span v-else-if="data.report_reason === 'other'">다른</span>
                            <!-- {{ data.report_reason }} -->
                        </template>
                    </Column>

                    <Column header="피신고자" style="min-width: 15rem" field="posted_by" :sortable="true">
                        <template #body="{ data }">
                            <span class="p-column-title">Message Posted By</span>
                            <router-link :to="'/UserManagement/UserDetail/' + data.postedby_user_id" class="highlight" style="color: #69707a">
                                {{ data.posted_by }}
                            </router-link>
                            <br>
                            <router-link :to="'/UserManagement/UserDetail/' + data.postedby_user_id" class="highlight" style="color: #69707a">
                                ({{ data.postedby_emailId }})
                            </router-link>
                        </template>
                    </Column>

                    <Column header="신고자" style="min-width: 15rem" field="reported_by" :sortable="true">
                        <template #body="{ data }">
                            <span class="p-column-title">Message Reported By</span>
                            <router-link :to="'/UserManagement/UserDetail/' + data.reportby_user_id" class="highlight" style="color: #69707a">
                                {{ data.reported_by }}
                            </router-link>
                            <br>
                            <router-link :to="'/UserManagement/UserDetail/' + data.reportby_user_id" class="highlight" style="color: #69707a">
                                ({{ data.reportby_emailId }})
                            </router-link>
                        </template>
                    </Column>

                    <Column header="채팅방 유형" style="min-width: 12rem" field="room_type" :sortable="true">
                        <template #body="{ data }">
                            <span class="p-column-title">Chatroom Type</span>
                            <span v-if="data.room_type === 'general'">보통</span>
                            <span v-else-if="data.room_type === 'location'">위치 기반</span>
                            <!-- {{ data.room_type }} -->
                        </template>
                    </Column>

                    <Column header="신고일시" style="min-width: 16rem" field="reportDate" :sortable="true">
                        <template #body="{ data }">
                            <span class="p-column-title">Reported Date & Time</span>
                            {{ formatDate(data.reportDate) }}
                        </template>
                    </Column>

                    <Column header="관리" style="min-width: 6rem">
                        <template #body="{ data }">
                            <span class="p-column-title">Action</span>
                            <p style="display: none">{{ data.mobile }}</p>
                            <div style="display: flex">
                                <router-link :to="'/ReportedMessages/ReportedMessageDetails/' + data.conversation_id"
                                    ><Button label="help" class="p-button2"><i class="pi pi-eye p-mr-2"></i> </Button
                                ></router-link>
                                <router-link :to="'/ChatroomManagement/ChatroomMessageLogs/' + data.room_id"
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
import utils from '@/service/utils';
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
            loading1: true,
            idFrozen: false,
            products: null,
            expandedRows: [],
            room_name: '',
            owner: '',
            room_type: '',
            room_users_count: '',
            dropdownchatroomtype: [
                { name: '모두', code: 'all' },
                { name: '보통', code: 'general' },
                { name: '위치 기반', code: 'location' },
            ],
            dropdownchatroomtypes: null,

            dropdownreportedreason: [
                { name: '해로운', code: 'harmful' },
                { name: '불법적인', code: 'illegal' },
                { name: '스캠', code: 'scam' },
                { name: '다른', code: 'other' },
            ],

            dropdownreportedreasons: null,

            dropdownmessagetype: [
                { name: '모두', code: 'all' },
                { name: '텍스트', code: 'text' },
                { name: '아주 닮은 사람', code: 'image' },
                { name: '동영상', code: 'video' },
            ],
            dropdownmessagetypes: null,
            city: '',
            country: '',
            id: '',
            to_be_deleted: '',
            deleted: '',
            created_date: '',
            last_activity_date: '',
            status: '',
            room_passcode: '',
            search_key: '',
            group_type: '',
            user: '',
            date_range: [],
            lastdate_range: '',
            create_start_date: '',
            create_end_date: '',
            is_secret: '',
            searchdate: '',
            searchenddate: '',
            searclasthdate: '',
            searchlastenddate: '',
            cities: '',
            reportedmessage: '',
            messagetype: '',
            report_reason: '',
            posted_by: '',
            reported_by: '',
            reportDate: '',
            chatroom_name: '',
            reported_message: '',
            message_type: '',
            message_posted_by: '',
            reason_type: '',
            conversation_id: '',
            postedby_emailId:'',
            reportby_emailId:'',
        };
    },
    customerService: null,
    productService: null,
    created() {
        this.reportedMessagesService = new ReportedMessagesService();
    },
    mounted() {
        this.reportedMessageslist();
    },
    watch: {},
    methods: {
        getStatus(values) {
            return values === 'active' ? true : false;
        },

        reportedMessageslist() {
            const postlistParams = {
                page: 1,
                record_count: this.pagination.pagination_limit,
            };
            this.loading1 = true;
            this.reportedMessagesService
                .getreportedmessagesList(postlistParams)
                .then((res) => {
                    this.customer1 = res.data.report_details;
                    this.totalrecords = res.data.total_records;
                    //                 this.company_id= this.company.id;
                    // console.log("this.company_id",this.company_id);
                    console.log('res', this.customer1);
                    console.log('total', this.totalrecords);
                    console.log(res);
                    this.setPagination(res.data.current_page, res.data.total_pages === 0 ? 1 : res.data.total_pages, res.data.total_records);
                    this.loading1 = false;
                })
                .catch((err) => console.log(err));
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
            this.loading1 = true;
            // var start_date = this.formatRangeDate(this.date_range.at(0));
            // var end_date = this.formatRangeDate(this.date_range.at(1));
            this.reportedMessagesService
                .getreportedmessagesList({
                    record_count: this.pagination.pagination_limit,
                    page: page,
                    reason_type: this.reason_type,
                    group_type: this.group_type,
                    reported_message: this.reported_message,
                    reported_by: this.reported_by,
                    message_posted_by: this.message_posted_by,
                    message_type: this.message_type,
                    create_start_date: this.searchdate,
                    create_end_date: this.searchenddate,
                    chatroom_name: this.chatroom_name,
                })
                .then((res) => {
                    this.customer1 = res.data.report_details;
                    this.totalrecords = res.data.total_records;
                    console.log('paginate', this.customer1);
                    console.log('paginatetotal', this.totalrecords);
                    this.pagination.current_page = page;
                    this.loading1 = false;
                    console.log(res.data);
                })
                .catch((err) => console.log(err));
        },

        resetreportedMessage() {
            (this.reason_type = ''),
                (this.group_type = ''),
                (this.reported_message = ''),
                (this.reported_by = ''),
                (this.message_posted_by = ''),
                (this.message_type = ''),
                (this.date_range = ''),
                (this.chatroom_name = ''),
                this.reportedMessageslist();
            window.location.reload();
        },
        formatRangeDate(date) {
            if (date === undefined || date === '') {
                return '';
            }
            return moment(new Date(date)).format('YYYY-MM-DD');
        },
        searchreportedMessages() {
            if (this.reason_type !== '' || this.group_type !== '' || this.reported_message !== '' || this.reported_by !== '' || this.message_posted_by !== '' || this.message_type !== '' || this.date_range !== '' || this.chatroom_name !== '') {
                
                if (this.date_range.at(0) != '') {
                    this.searchdate = this.formatRangeDate(this.date_range.at(0));
                } else {
                    this.searchdate = '';
                }

                if (this.date_range.at(1) != '') {
                    this.searchenddate = this.formatRangeDate(this.date_range.at(1));
                } else {
                    this.searchenddate = '';
                }

                let searchParams = {
                    record_count: this.pagination.pagination_limit,
                    page: 1,
                    reason_type: this.reason_type,
                    group_type: this.group_type,
                    reported_message: this.reported_message,
                    reported_by: this.reported_by,
                    message_posted_by: this.message_posted_by,
                    message_type: this.message_type,
                    create_start_date: this.searchdate,
                    create_end_date: this.searchenddate,
                    chatroom_name: this.chatroom_name,
                };
                console.log('searchParams', searchParams);
                this.customer1 = true;
                this.reportedMessagesService
                    .getreportedmessagesList(searchParams)
                    .then((res) => {
                        console.log('res', res);
                        this.customer1 = res.data.report_details;
                        console.log('searchPost', this.customer1);
                        this.setPagination(res.data.current_page, res.data.total_pages === 0 ? 1 : res.data.total_pages, res.data.total_records);
                        this.loading1 = false;
                    })
                    .catch(() => {
                        this.customer1 = [];
                        this.loading1 = false;
                    });
            }
        },
        today() {
            let today = new Date();
            let firstDate = new Date();
            firstDate.setDate(today.getDate());
            this.date_range = [firstDate, today];
            this.searchreportedMessages();
        },
        lastweek() {
            let today = new Date();
            let firstDate = new Date();
            firstDate.setDate(today.getDate() - 7);
            this.date_range = [firstDate, today];
            this.searchreportedMessages();
        },
        lastmonth() {
            let today = new Date();
            let firstDate = new Date();
            firstDate.setDate(today.getDate() - 31);
            this.date_range = [firstDate, today];
            this.searchreportedMessages();
        },
        lastsixmonth() {
            let today = new Date();
            let firstDate = new Date();
            firstDate.setDate(today.getDate() - 182);
            this.date_range = [firstDate, today];
            this.searchreportedMessages();
        },

        open() {
            this.display = true;
        },
        close() {
            this.display = false;
        },
        toggle(event) {
            this.$refs.op.toggle(event);
        },

        onRowExpand(event) {
            this.$toast.add({ severity: 'info', summary: 'Product Expanded', detail: event.data.name, life: 3000 });
        },
        onRowCollapse(event) {
            this.$toast.add({ severity: 'success', summary: 'Product Collapsed', detail: event.data.name, life: 3000 });
        },
        expandAll() {
            this.expandedRows = this.products.filter((p) => p.id);
            this.$toast.add({ severity: 'success', summary: 'All Rows Expanded', life: 3000 });
        },
        collapseAll() {
            this.expandedRows = null;
            this.$toast.add({ severity: 'success', summary: 'All Rows Collapsed', life: 3000 });
        },
        formatCurrency(value) {
            return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        },
        formatDate(value) {
            if (value) {
                return moment.utc(value).locale('ko').format('ll - LTS');
            }
        },
        calculateCustomerTotal(name) {
            let total = 0;
            if (this.customer3) {
                for (let customer of this.customer3) {
                    if (customer.representative.name === name) {
                        total++;
                    }
                }
            }

            return total;
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