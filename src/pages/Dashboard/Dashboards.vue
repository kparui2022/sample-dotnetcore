<template>
    <div class="layout-dashboard">
        <div class="p-grid">
            <div class="p-col-12 p-pb-0">
                <div class="p-grid">
                    <div class="p-col">
                        <div class="card overview-box white" style="display: block">
                            <div class="overview-info">
                                <h6>사용중인 지역</h6>
                                <h1 style="text-align: center">{{ regionCount }}</h1>
                                <p>지난 30일간</p>
                            </div>
                            <!-- <i class="pi pi-briefcase"></i> -->
                        </div>
                    </div>
                    <div class="p-col">
                        <div class="card overview-box white" style="display: block">
                            <div class="overview-info">
                                <h6>신규 채팅방</h6>
                                <h1 style="text-align: center">{{ newChatRoomCount }}</h1>
                                <p>지난 30일간</p>
                            </div>
                            <!-- <i class="pi pi-users"></i> -->
                        </div>
                    </div>
                    <!-- <div class="p-col">
                        <div class="card overview-box white" style="display:block;">
                            <div class="overview-info">
                                <h6>새로운 회원</h6>
                                <h1 style="text-align: center; ">{{ 501 }}</h1>
                                <p>최근 30일 기준</p>
                            </div>
                            <i class="pi pi-globe"></i>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
    <div class="p-col-12">
        <div class="card">
            <div class="p-d-flex p-jc-between p-mb-2">
                <div>
                    <h5>인기 Top 5 지역</h5>
                </div>
            </div>

            <DataTable :value="customer1" :paginator="false" class="p-datatable-gridlines" :rows="10" dataKey="id" :rowHover="true" :loading="loading1" :filters="filters1" responsiveLayout="scroll">
                <!-- v-model:selection="selected" -->
                <ConfirmDialog group="dialog" />

                <template #empty> No data. </template>
                <template #loading> Loading data. wait. </template>

                <!-- <column selectionMode="multiple" style="width: 16px; text-align: center" /> -->
                <Column field="slNO" :header="$t('#')">
                    <template #body="{ index }">
                        <span class="p-column-title">slNo</span>
                        {{ index + 1 }}
                    </template>
                </Column>
                <Column header="지역" style="min-width: 12rem">
                    <template #body="{ data }">
                        <span class="p-column-title">Region</span>
                        {{ data.city_name }},{{data.country_name}}
                    </template>
                </Column>

                <Column header="채팅방 수" style="min-width: 12rem">
                    <template #body="{ data }">
                        <span class="p-column-title">Number of Chatrooms</span>
                        {{ data.chatroomCount }}
                    </template>
                </Column>

                <Column header="총 참여자 수" style="min-width: 12rem">
                    <template #body="{ data }">
                        <span class="p-column-title">Total Number of Participants</span>
                        {{ data.chatroomParticipantCount }}
                    </template>
                </Column>
            </DataTable>
        </div>
    </div>

    <div class="p-col-12">
        <div class="card">
            <div class="p-d-flex p-jc-between p-mb-2">
                <div>
                    <h5>인기 Top 5 채팅방</h5>
                </div>
            </div>

            <DataTable :value="customer2" :paginator="false" class="p-datatable-gridlines" :rows="10" dataKey="id" :rowHover="true" :loading="loading2" :filters="filters2" responsiveLayout="scroll">
                <!-- v-model:selection="selected" -->
                <ConfirmDialog group="dialog" />

                <template #empty> No data. </template>
                <template #loading> Loading data. wait. </template>

                <!-- <column selectionMode="multiple" style="width: 16px; text-align: center" /> -->
                <Column field="slNO" :header="$t('#')">
                    <template #body="{ index }">
                        <span class="p-column-title">slNo</span>
                        {{ index + 1 }}
                    </template>
                </Column>
                <Column header="채팅방 이름" style="min-width: 12rem">
                    <template #body="{ data }">
                        <span class="p-column-title">Chatroom Name</span>
                        {{ data.room_name }}
                    </template>
                </Column>

                <Column header="지역" style="min-width: 12rem">
                    <template #body="{ data }">
                        <span class="p-column-title">Region</span>
                        {{ data.city }}, {{ data.country }}
                    </template>
                </Column>

                <Column header="방장" style="min-width: 12rem">
                    <template #body="{ data }">
                        <span class="p-column-title">Owner</span>
                        {{ data.owner }}
                    </template>
                </Column>

                <Column header="채팅방 유형" style="min-width: 12rem">
                    <template #body="{ data }">
                        <span class="p-column-title">Chatroom Type</span>
                        {{ $t(data.room_type) }}
                    </template>
                </Column>

                <Column header="참여자 수" style="min-width: 13rem">
                    <template #body="{ data }">
                        <span class="p-column-title">Number of Participants</span>
                        {{ data.room_users_count }}
                    </template>
                </Column>

                <Column header="최근 7일간 메시지 수" style="min-width: 12rem">
                    <template #body="{data}">
                        <span class="p-column-title">Last 7 days messages</span>
                        {{ data.day7convertations }}
                    </template>
                </Column>

                <Column header="비밀방 여부" style="min-width: 12rem">
                    <template #body="{ data }">
                        <span class="p-column-title">Secret Room</span>
                        <p v-if="data.room_passcode == null || data.room_passcode == ''" id="round">아니</p>
                        <p v-else id="round">예</p>
                    </template>
                </Column>

                <Column header="생성일시" style="min-width: 12rem">
                    <template #body="{ data }">
                        <span class="p-column-title">Created Date</span>
                        {{ formatDate(data.created_date) }}
                    </template>
                </Column>

                <Column header="마지막 활동 일시" style="min-width: 12rem">
                    <template #body="{ data }">
                        <span class="p-column-title">Last Activity</span>

                        {{ formatDate(data.last_activity_date) == null ? '-': formatDate(data.last_activity_date) }}
                    </template>
                </Column>
            </DataTable>
        </div>
    </div>

    <div class="p-col-12">
            <div class="card">
                <div class="p-d-flex p-jc-between p-mb-2">
                    <div>
                        <h5>신규 채팅방 수</h5>
                    </div>

                    <div class="p-grid p-fluid">
                        <div class="p-formgrid p-grid">
                            <div class="p-field p-col-12 p-md-12" style="display: flex;margin-left: -5%;">
                                <label for="pass" style="width:50%; margin-top: 8px">채팅방 유형</label> &nbsp;&nbsp;

                                <Dropdown v-model="chatroom_type" :options="dropdownchatroomtype" optionValue="code" optionLabel="name" placeholder="전체" @change="iniTiallyGraph(chatroom_type)"  />

                            </div>
                        </div>
                    </div>
                </div>
                <br>
                <!-- <div class="p-grid p-formgrid p-mb-3"> -->
                    <div class="p-field p-col-12 p-md-12">
                        <div class="cardgraph">
                            <Statisticchartroommultibar v-if="forAll" :dates="filterDate" :generalData="dataForGeneral" :regionData="dataForRegion"></Statisticchartroommultibar>
                            <Statisticchartroommultibar  v-if="forGeneral" :dates="filterDate" :generalData="dataForGeneral"></Statisticchartroommultibar>
                            <Statisticchartroommultibar v-if="forRegion" :dates="filterDate" :regionData="dataForRegion"></Statisticchartroommultibar>
                            <!-- <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart> -->
                            <!-- <Chart type="line" :width="1080" :height="720" :data="basicData" :options="basicOptions" /> -->
                        </div>
                    </div>
                <!-- </div> -->
            </div>
        </div>
</template>

<script>
// import { useRoute } from 'vue-router';
// import validateUsersearch from '../../validations/user/validateUserSearch';
// import { FilterMatchMode, FilterOperator } from 'primevue/api';
import Statisticchartroommultibar from '../../components/Statisticchartroommultibar.vue';
import DashboardService from '../../service/API/DashboardService';
import Newloginchart from '../../service/API/Newloginchart';
import moment from 'moment';

import utils from '@/service/utils';
// import axios from 'axios';
// import utils from '@/service/utils';
export default {
    components: {
        Statisticchartroommultibar
    },
    data() {
        return {
            forAll: false,
            forGeneral: false,
            forRegion:false,
            filterDate:[],
            dataForGeneral : [],
            dataForRegion : [],
            dropdownchatroomtype: [
                { name: '전체', code: 'all' },
                { name: '새로운 일반 대화방', code: 'general' },
                { name: '새로운 지역 기반 채팅방', code: 'region' },
            ],
            chatroom_type:'all',
            // selected: [],
            // render: true,
            display: false,
            position: 'center',
            visibleLeft: false,
            visibleRight: false,
            visibleTop: false,
            visibleBottom: false,
            visibleFull: false,
            // totalrecords: '',
            pagination: {
                current_page: 1,
                pagination_limit: 5,
                total_pages: 0,
                total_records: 0,
            },
            // complexvalue: [],

            customer1: [],
            customer2: [],
            loading1: false,
            loading2: false,
            idFrozen: false,
            products: null,
            expandedRows: [],
            room_name: '',
            name:'',
            city_name:'',
            country_name:'',
            room_type: '',
            room_users_count: '',
            regionCount: '',
            newChatRoomCount: '',
            owner: '',
            created_date: '',
            last_activity_date: '',
            room_passcode: '',
            chatroomCount:'',
            chatroomParticipantCount:'',
            day7convertations:'',
            // id:'',
            // to_be_deleted:'',
            // deleted:'',
        };
    },
    customerService: null,
    productService: null,
    created() {
        this.dashboardService = new DashboardService();
        this.newloginchart = new Newloginchart();
        this.iniTiallyGraph()
    },
    mounted() {
        this.popularchatroomlist();
        this.regionchatroomlist();

        this.dashboardService.getdashboarddata().then((res) => {
            // console.log(res);
            this.newChatRoomCount = res.data.newChatRoomCount.newChatRoomCount;
            this.regionCount = res.data.regionCount.regionCount;
        });
    },
    methods: {
        iniTiallyGraph(){
            this.newloginchart
               .getchatroomchart({ chatroom_type : this.chatroom_type  })
               .then((res) => {
                const response = res.data.newLoginCounts
                console.log(response);
                if(res){
                    this.filterDate = response.map((item)=>{
                        return moment(item.date).locale('ko').format('Do MMM')
                    })
                    if(this.chatroom_type === 'all'){
                        this.forAll = true
                        this.forGeneral = false
                        this.forRegion = false
                        this.dataForGeneral = response.map((item)=>{
                        return item.general_count
                    })
                    this.dataForRegion = response.map((item)=>{
                        return item.region_count
                    })
                    }else if(this.chatroom_type === 'general'){
                        this.forAll = false
                        this.forRegion = false
                        this.forGeneral = true
                        this.dataForGeneral = response.map((item)=>{
                        return item.general_count
                    })
                    }else if(this.chatroom_type === 'region'){
                        this.forAll = false
                        this.forRegion = true
                        this.forGeneral = false
                        this.dataForRegion = response.map((item)=>{
                        return item.region_count
                    })
                }
                }
               })
        },

        regionchatroomlist() {
            const postlistParams = {
                page: 1,
                record_count: this.pagination.pagination_limit,
            };
            this.loading1 = true;
            this.dashboardService
                .getregionchatroomList(postlistParams)
                .then((res) => {
                    this.customer1 = res.data.data;
                    this.totalrecords = res.data.total_records;
                    //                 this.company_id= this.company.id;
                    // console.log("this.company_id",this.company_id);
                    // console.log('res', this.customer1);
                    // console.log('total', this.totalrecords);
                    // console.log(res);
                    this.setPagination(res.data.current_page, res.data.total_pages === 0 ? 1 : res.data.total_pages, res.data.total_records);
                    this.loading1 = false;
                })
                .catch((err) => console.log(err));
        },

        popularchatroomlist() {
            const postlistParams = {
                page: 1,
                record_count: this.pagination.pagination_limit,
                search_type: 'noisy',
            };
            this.loading2 = true;
            this.dashboardService
                .getpopularchatroomList(postlistParams)
                .then((res) => {
                    this.customer2 = res.data.group_list;
                    this.totalrecords = res.data.total_records;
                    //                 this.company_id= this.company.id;
                    // console.log("this.company_id",this.company_id);
                    // console.log('res', this.customer1);
                    // console.log('total', this.totalrecords);
                    // console.log(res);
                    this.setPagination(res.data.current_page, res.data.total_pages === 0 ? 1 : res.data.total_pages, res.data.total_records);
                    this.loading2 = false;
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
            this.loading2 = true;
            // var start_date = this.formatRangeDate(this.date_range.at(0));
            // var end_date = this.formatRangeDate(this.date_range.at(1));
            this.dashboardService
                .getpopularchatroomList({ page: page, limit: this.pagination.pagination_limit, search_type: 'noisy' })
                .then((res) => {
                    this.customer2 = res.data.group_list;
                    this.totalrecords = res.data.total_records;
                    // console.log('paginate', this.customer1);
                    // console.log('paginatetotal', this.totalrecords);
                    this.pagination.current_page = page;
                    this.loading2 = false;
                    // console.log(res.data);
                })
                .catch((err) => console.log(err));
        },

        formatDate(value) {
            if (value) {
                return moment.utc(value).locale('ko').format('ll - LTS');
            }
        },
    },
};
</script>

        <style lang="scss" scoped>
.layout-dashboard {
    .orders {
        h4 {
            margin-bottom: 20px;
        }
        .p-button {
            margin-top: -20px;
        }
        .order-tabs {
            margin-bottom: 1rem;
            .order-tab {
                padding: 1rem 2rem 2rem 1rem;
                position: relative;
                transition: box-shadow 0.2s;
                &:hover {
                    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.15);
                    cursor: pointer;
                }
                i {
                    font-size: 1rem;
                    vertical-align: middle;
                }
                .order-label {
                    margin-left: 0.25rem;
                    vertical-align: middle;
                }
                .stat-detail-icon {
                    position: absolute;
                    right: 1rem;
                    top: 2.25rem;
                    height: 1rem;
                    width: 1rem;
                }
                img {
                    position: absolute;
                    bottom: 0;
                    left: 5%;
                    width: 90%;
                }
            }
        }
    }
    .overview-chart {
        overflow: auto;
    }
    .dashbard-demo-dropdown {
        min-width: 8rem;
        margin-left: auto;
    }
    .product-badge {
        border-radius: 2px;
        padding: 0.25em 0.5rem;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 12px;
        letter-spacing: 0.3px;
        &.status-instock {
            background: #c8e6c9;
            color: #256029;
        }
        &.status-outofstock {
            background: #ffcdd2;
            color: #c63737;
        }
        &.status-lowstock {
            background: #feedaf;
            color: #8a5340;
        }
    }
}
.breadcrump {
    margin-bottom: 18px;
    margin-top: -27px;
}
.apexcharts-menu-icon {
    display: none;
}

p#round {
    border-radius: 12px;
    border: 1px solid black;
}
</style>