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
                        <label for="ChatroomName">채팅방 이름</label>
                        <InputText id="ChatroomName" type="text" placeholder="채팅방 이름으로 검색" v-model="search_key" />
                    </div>

                    <div class="p-field p-col-12 p-md-3">
                        <label for="ChatroomType">채팅방 유형</label>
                        <Dropdown v-model="group_type" :options="dropdownchatroomtype" optionValue="code" optionLabel="name" placeholder="전체 " />
                    </div>

                    <div class="p-field p-col-12 p-md-3">
                        <label for="Region">지역</label>
                        <AutoComplete placeholder="선택 " :dropdown="true" :multiple="false" v-model="selectedAutoValue" :suggestions="autoFilteredValue" @complete="searchCountry($event)" field="name" />
                        <!-- <InputText id="Region" type="text" placeholder="지역을 입력하세요." v-model="cities" /> -->
                    </div>

                    <div class="p-field p-col-12 p-md-3" style="display: grid">
                        <label for="SecretRoom">비밀방 여부</label>
                        <InputSwitch trueValue="yes" v-model="is_secret" />
                    </div>

                    <div class="p-field p-col-12 p-md-3">
                        <label for="Owner">방장</label>
                        <InputText id="Owner" type="text" placeholder="방장을 입력하세요." v-model="user" />
                    </div>

                    <div class="p-field p-col-12 p-md-3">
                        <label for="pass">생성일</label>
                        <Calendar inputId="range" v-model="date_range" selectionMode="range" :manualInput="false" placeholder="YYYY/MM/DD - YYYY/MM/DD" />
                    </div>

                    <div class="p-field p-col-12 p-md-3">
                        <label for="pass">마지막 활동일</label>
                        <Calendar inputId="range" v-model="lastdate_range" selectionMode="range" :manualInput="false" placeholder="YYYY/MM/DD - YYYY/MM/DD" />
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
                        <Button label="검색" icon="pi pi-search" iconPos="left" class="p-button p-button-sm p-mr-2 p-mb-2" @click="searchpopularchatroom"></Button>
                        <Button label="초기화" icon="pi pi-replay" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="resetpopularchatroom"></Button>
                    </div>
                </div>
            </div>
        </div>
        <div class="p-col-12">
            <div class="card">
                <div class="p-d-flex p-jc-between p-mb-2">
                    <div>
                        <h5>Top 10 인기 채팅방 목록</h5>
                    </div>
                    <div>
                        <!-- <Button label="Primary" class="p-mr-2 p-mb-2" @click="excelUpload"><i class="pi pi-download p-mr-2"></i>{{ $t('Upload Excel') }}</Button> -->
                        <Button target="_blank" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="popularlistDownloadExcel" style="background: blue; color: white">엑셀 다운로드</Button>
                    </div>
                </div>

                <DataTable :value="customer1" :paginator="false" class="p-datatable-gridlines" :rows="10" dataKey="id" :rowHover="true" :loading="loading1" :filters="filters1" responsiveLayout="scroll">
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
                            <router-link :to="'/PopularChatroomListManagement/PopularChatroomDetails/' + data.id" class="highlight" style="color: #69707a">
                                {{ data.room_name }}
                            </router-link>
                        </template>
                    </Column>

                    <Column header="방장" style="min-width: 12rem" field="owner" :sortable="true">
                        <template #body="{ data }">
                            <span class="p-column-title">Owner</span>
                            <router-link :to="'/UserManagement/UserDetail/' + data.user_profile_image[0].user_id" class="highlight" style="color: #69707a">
                                {{ data.owner }}
                            </router-link>
                        </template>
                    </Column>

                    <Column header="채팅방 유형" style="min-width: 12rem" field="room_type" :sortable="true">
                        <template #body="{ data }">
                            <span class="p-column-title">Chatroom Type</span>
                            {{ $t(data.room_type) }}
                        </template>
                    </Column>

                    <Column header="지역" style="min-width: 12rem" field="country" :sortable="true">
                        <template #body="{ data }">
                            <span class="p-column-title">Region</span>
                            {{ data.city }}
                        </template>
                    </Column>

                    <Column header="참여자수" style="min-width: 12rem" field="room_users_count" :sortable="true">
                        <template #body="{ data }">
                            <span class="p-column-title">Number of Participants</span>
                            {{ data.room_users_count }}
                        </template>
                    </Column>

                    <Column header="비밀방 여부" style="min-width: 12rem" field="room_passcode" :sortable="true">
                        <template #body="{ data }">
                            <span class="p-column-title">Secret Room</span>
                            <p v-if="data.room_passcode == null || data.room_passcode == ''" id="round">아니</p>
                            <p v-else id="round">예</p>
                        </template>
                    </Column>

                    <Column header="생성일시" style="min-width: 12rem" field="created_date" :sortable="true">
                        <template #body="{ data }">
                            <span class="p-column-title">Created Date</span>
                            {{ formatDate(data.created_date) }}
                        </template>
                    </Column>

                    <Column header="마지막 활동 일시" style="min-width: 12rem" field="last_activity_date" :sortable="true">
                        <template #body="{ data }">
                            <span class="p-column-title">Last Activity</span>
                            {{ formatDate(data.last_activity_date) == null ? '-' : formatDate(data.last_activity_date) }}
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
                                <router-link :to="'/PopularChatroomListManagement/PopularChatroomDetails/' + data.id"
                                    ><Button label="help" class="p-button2"><i class="pi pi-eye p-mr-2"></i> </Button
                                ></router-link>

                                <router-link :to="'/PopularChatroomListManagement/PopularChatroomMessageLog/' + data.id"
                                    ><Button label="help" class="p-button2"><i class="pi pi-comments p-mr-2"></i> </Button
                                ></router-link>
                                <!-- <Button icon="pi pi-trash" class="p-button2" @click="deleteNote(data.id)" /> -->
                            </div>
                        </template>
                    </Column>
                </DataTable>

                <!-- <div class="p-paginator p-component p-paginator-bottom">
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
                </div> -->

                <!-- <div style="text-align: right; margin-top: -35px">
                    <label for="order"> Showing: {{ pagination.current_page }} to {{ pagination.pagination_limit }} of {{ pagination.total_records }} Entries </label>
                </div> -->
            </div>
        </div>
    </div>
</template>


<script>
// import { useRoute } from 'vue-router';
// import validateUsersearch from '../../validations/user/validateUserSearch';
// import { FilterMatchMode, FilterOperator } from 'primevue/api';
import PopularchtroomService from '../../service/API/PopularchtroomService';
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
            value: '',
            selectedAutoValue: null,
            autoFilteredValue: [],
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
            owner_user_id: '',
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
            user_id: '',
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
            user_profile_image: [],
            lastdate_range: '',
            create_start_date: '',
            create_end_date: '',
            last_start_date: '',
            last_end_date: '',
            is_secret: '',
            searchdate: '',
            searchenddate: '',
            searclasthdate: '',
            searchlastenddate: '',
            cities: '',
        };
    },
    customerService: null,
    productService: null,
    created() {
        this.popularchtroomService = new PopularchtroomService();
    },
    mounted() {
        this.popularchatroomlist();

        this.popularchtroomService
            .getchartroomregiondropdown()
            .then((data) => {
                this.dropdownValues = data;
                this.autoValue = data;
                // this.products = data;
                this.loading1 = false;
                // this.products.forEach((customer) => (customer.createdDate = new Date(customer.createdDate)));
                console.log(this.autoValue);
                console.log(this.dropdownValues);
            })
            .catch((err) => console.log(err));
    },
    watch: {},
    methods: {
        getStatus(values) {
            return values === 'active' ? true : false;
        },

        searchCountry(event) {
            setTimeout(() => {
                if (!event.query.trim().length) {
                    this.autoFilteredValue = [...this.autoValue];
                } else {
                    this.autoFilteredValue = this.autoValue.filter((country) => {
                        return country.name.toLowerCase().startsWith(event.query.toLowerCase());
                    });
                }
            }, 250);
        },

        popularlistDownloadExcel() {
            const postdownloadlistParams = {
                search_type: 'noisy',
                search_key: this.search_key,
                group_type: this.group_type,
                user: this.user,
                status: this.status,
                create_start_date: this.searchdate,
                create_end_date: this.searchenddate,
                last_start_date: this.searclasthdate,
                last_end_date: this.searchlastenddate,
                is_secret: this.is_secret,
                cities: this.selectedAutoValue?.id == undefined ? '' : this.selectedAutoValue?.id,
            };
            this.popularchtroomService
                .getExcelpopularlistFinal(postdownloadlistParams)
                .then((response) => {
                    const url = window.URL.createObjectURL(new Blob([response.data]));
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', 'popularlist.xlsx'); //or any other extension
                    document.body.appendChild(link);
                    link.click();
                })
                .catch((err) => console.log(err));
        },

        Changestatus(index, id) {
            console.log('eeee', id);
            console.log('index', this.statustext);
            var statustext = this.customer1[index].status;
            this.customer1[index].status = statustext === 'active' ? 'inactive' : 'active';
            var complexstatus = { ...{ id: id, status: this.customer1[index].status } };
            // console.log('companystatus', companystatus);
            this.apartmentService.complexchange_status(complexstatus).then((res) => {
                // console.log(res);
                if (res.status === 200) {
                    this.$toast.add({ severity: 'info', summary: '확인됨', detail: '아파트 현황 수정 완료.', life: 3000 });
                    this.apartmentlist();
                }
            });
        },

        popularchatroomlist() {
            const postlistParams = {
                search_type: 'noisy',
            };
            this.loading1 = true;
            this.popularchtroomService
                .getpopularchatroomList(postlistParams)
                .then((res) => {
                    this.customer1 = res.data.group_list;
                    this.totalrecords = res.data.total_records;
                    // this.user_profile_image = res.data.group_list[0].user_profile_image[0].user_id;
                    //                 this.company_id= this.company.id;
                    //  console.log(res.data.group_list[0].user_profile_image[0].user_id);
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
            this.popularchtroomService
                .getpopularchatroomList({
                    record_count: this.pagination.pagination_limit,
                    page: page,
                    search_type: 'noisy',
                    search_key: this.search_key,
                    group_type: this.group_type,
                    user: this.user,
                    status: this.status,
                    create_start_date: this.searchdate,
                    create_end_date: this.searchenddate,
                    last_start_date: this.searclasthdate,
                    last_end_date: this.searchlastenddate,
                    is_secret: this.is_secret,
                    cities: this.selectedAutoValue?.id == undefined ? '' : this.selectedAutoValue?.id,
                })
                .then((res) => {
                    this.customer1 = res.data.group_list;
                    this.totalrecords = res.data.total_records;
                    console.log('paginate', this.customer1);
                    console.log('paginatetotal', this.totalrecords);
                    this.pagination.current_page = page;
                    this.loading1 = false;
                    // console.log(res.data);
                })
                .catch((err) => console.log(err));
        },

        resetpopularchatroom() {
            (this.search_key = ''), (this.group_type = ''), (this.user = ''), (this.status = ''), (this.date_range = ''), (this.lastdate_range = ''), (this.is_secret = ''), (this.selectedAutoValue = ''), this.popularchatroomlist();
            window.location.reload();
        },
        formatRangeDate(date) {
            if (date === undefined || date === '') {
                return '';
            }
            return moment(new Date(date)).format('YYYY-MM-DD');
        },
        searchpopularchatroom() {
            if (this.search_key !== '' || this.group_type !== '' || this.user !== '' || this.status !== '' || this.date_range !== '' || this.lastdate_range !== '' || this.is_secret !== '' || this.selectedAutoValue !== '') {
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

                if (this.lastdate_range.at(0) != '') {
                    this.searclasthdate = this.formatRangeDate(this.lastdate_range.at(0));
                } else {
                    this.searclasthdate = '';
                }

                if (this.lastdate_range.at(1) != '') {
                    this.searchlastenddate = this.formatRangeDate(this.lastdate_range.at(1));
                } else {
                    this.searchlastenddate = '';
                }

                let searchParams = {
                    record_count: this.pagination.pagination_limit,
                    page: 1,
                    search_type: 'noisy',
                    search_key: this.search_key,
                    group_type: this.group_type,
                    user: this.user,
                    status: this.status,
                    create_start_date: this.searchdate,
                    create_end_date: this.searchenddate,
                    last_start_date: this.searclasthdate,
                    last_end_date: this.searchlastenddate,
                    is_secret: this.is_secret === 'yes' ? true : '',
                    cities: this.selectedAutoValue?.id == undefined ? '' : this.selectedAutoValue?.id,

                    // startDate: start_date,
                    // endDate: end_date,
                };
                console.log('searchParams', searchParams);
                this.customer1 = true;
                this.popularchtroomService
                    .getpopularchatroomList(searchParams)
                    .then((res) => {
                        console.log('res', res);
                        this.customer1 = res.data.group_list;
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
            this.lastdate_range = [firstDate, today];
            this.searchpopularchatroom();
        },
        lastweek() {
            let today = new Date();
            let firstDate = new Date();
            firstDate.setDate(today.getDate() - 7);
            this.lastdate_range = [firstDate, today];
            this.searchpopularchatroom();
        },
        lastmonth() {
            let today = new Date();
            let firstDate = new Date();
            firstDate.setDate(today.getDate() - 31);
            this.lastdate_range = [firstDate, today];
            this.searchpopularchatroom();
        },
        lastsixmonth() {
            let today = new Date();
            let firstDate = new Date();
            firstDate.setDate(today.getDate() - 182);
            this.lastdate_range = [firstDate, today];
            this.searchpopularchatroom();
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
                return moment.utc(value).format('ll - LTS');
            }
        },

        // converter() {
        //     let korean_str = new Date().toLocaleString('ko', { timeZone: 'South Korea' });

        //     let korean = new Date(korean_str);

        //     // year as (YYYY) format
        //     let year = korean.getFullYear();

        //     // month as (MM) format
        //     let month = ('0' + (korean.getMonth() + 1)).slice(-2);

        //     // date as (DD) format
        //     let date = ('0' + korean.getDate()).slice(-2);

        //     // date time in YYYY-MM-DD format
        //     let date_time = year + '-' + month + '-' + date;

        //     console.log(date_time);
        // },

        // format(date, formateTimZone = null) {
        //     // console.log(formateTimZone)
        //     // console.log(Intl.DateTimeFormat().resolvedOptions().timeZone);
        //     if (formateTimZone == 'UTC') {
        //         // var getUTCDate = new Date(date).toUTCString();
        //         // var utcDateString = new Date(getUTCDate).toISOString();
        //         var dutc = new Date(date),
        //             monthutc = '' + (dutc.getUTCMonth() + 1),
        //             datesutc = '' + dutc.getUTCDate(),
        //             yearutc = dutc.getUTCFullYear(),
        //             hoursutc = '' + dutc.getUTCHours(),
        //             minutesutc = '' + dutc.getUTCMinutes();

        //         if (monthutc.length < 2) monthutc = '0' + monthutc;
        //         if (datesutc.length < 2) datesutc = '0' + datesutc;
        //         if (yearutc.length < 2) yearutc = '0' + yearutc;
        //         if (minutesutc.length < 2) minutesutc = '0' + minutesutc;
        //         var UTCfullTime = `${yearutc}-${monthutc}-${datesutc} ${hoursutc}:${minutesutc}`;
        //         console.log(UTCfullTime, 'fullTime');

        //         return UTCfullTime;
        //     } else if (formateTimZone == 'Local') {
        //         var d = new Date(date),
        //             month = '' + (d.getMonth() + 1),
        //             dates = '' + d.getDate(),
        //             year = d.getFullYear(),
        //             hours = '' + d.getHours(),
        //             minutes = '' + d.getMinutes();

        //         if (month.length < 2) month = '0' + month;
        //         if (dates.length < 2) dates = '0' + dates;
        //         if (hours.length < 2) hours = '0' + hours;
        //         if (minutes.length < 2) minutes = '0' + minutes;
        //         var fullTime = `${year}-${month}-${dates} ${hours}:${minutes}`;
        //         console.log(fullTime, 'fullTime');
        //         return fullTime;
        //     } else {
        //         return date;
        //     }
        // },
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
</style>