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
                        <label for="name">태그명</label>
                        <InputText id="name" type="text" placeholder="태그명으로 검색" v-model="name" />
                    </div>

                    <div class="p-field p-col-12 p-md-3">
                        <label for="User">사용자</label>
                        <InputText id="User" type="text" placeholder="사용자 닉네임으로 검색"  v-model="user_name" />
                    </div>

                    <div class="p-field p-col-12 p-md-3">
                        <label for="pass">생성일</label>
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
                        <Button label="검색" icon="pi pi-search" iconPos="left" class="p-button p-button-sm p-mr-2 p-mb-2" @click="searchuser"></Button>
                        <Button label="초기화" icon="pi pi-replay" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="resetUser"></Button>
                    </div>
                </div>
            </div>
        </div>
        <div class="p-col-12">
            <div class="card">
                <div class="p-d-flex p-jc-between p-mb-2">
                    <div>
                        <h5>사용자 등록 태그</h5>
                    </div>
                    
                    <div>
                        <!-- <Button label="Primary" class="p-mr-2 p-mb-2" @click="excelUpload"><i class="pi pi-download p-mr-2"></i>{{ $t('Upload Excel') }}</Button> -->
                        <button target="_blank" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="usertaglistDownloadExcel()" style="background: blue; color: white">엑셀 다운로드</button>
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
                    <Column header="태그명" style="min-width: 12rem" field="name" :sortable="true">
                        <template #body="{ data }">
                            <span class="p-column-title">Tag Name</span>

                            {{ data.name }}
                        </template>
                    </Column>

                    <Column header="채팅방 수" style="min-width: 12rem" field="chatroomCount" :sortable="true">
                        <template #body="{ data }">
                            <span class="p-column-title">Number of Chatrooms</span>
                            {{ data.chatroomCount }}
                        </template>
                    </Column>

                    <Column header="생성일시" style="min-width: 12rem" field="userCount" :sortable="true">
                        <template #body="{ data }">
                            <span class="p-column-title">Number of user</span>
                            {{ data.userCount == null ? '-' : data.userCount }}
                        </template>
                    </Column>

                    <Column header="생성 날짜" style="min-width: 13rem" field="create_date" :sortable="true">
                        <template #body="{ data }">
                            <span class="p-column-title">Created Date & Time</span>
                            {{ formatDate(data.create_date) }}
                        </template>
                    </Column>

                    <Column header="최근 사용일시" style="min-width: 12rem" field="lastUseDate" :sortable="true">
                        <template #body="{ data }">
                            <span class="p-column-title">Recent Use Date & Time</span>
                            {{ formatDate(data.lastUseDate) == null ? '-' : formatDate(data.lastUseDate) }}
                        </template>
                    </Column>

                    <Column header="관리">
                        <template #body="{ data }">
                            <span class="p-column-title">Action</span>
                            <p style="display: none">{{ data.mobile }}</p>
                            <div style="display: flex">
                                <router-link :to="'/ChatroomTagManagement/UseraddedtagList/UserDetails/' + data.id"
                                    ><Button label="help" class="p-button2"><i class="pi pi-eye p-mr-2"></i> </Button
                                ></router-link>

                                <!-- <Button icon="pi pi-trash" class="p-button2"  /> -->
                                <Button icon="pi pi-trash" class="p-button2" @click="deleteNote(data.id)" />
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
import moment from 'moment';
import ChatroomUserTag from '../../../service/API/ChatroomUserTag';
import axios from 'axios';
import utils from '@/service/utils';
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
            name: '',
            chatroomCount: '',
            user_name: '',
            userCount: '',
            create_date: '',
            date_range: [],
            startDate: '',
            searchdate: '',
            endDate: '',
            searchenddate: '',
            lastUseDate: '',
            // status:'',
            id: '',
            to_be_deleted: '',
            deleted: '',
            baseURL: baseURL,
        };
    },
    customerService: null,
    productService: null,
    created() {
        this.chatroomUserTag = new ChatroomUserTag();
    },
    mounted() {
        this.usertaglist({ record_count: this.pagination.pagination_limit, page: this.pagination.current_page });
    },
    watch: {},
    methods: {
        addDay(val) {
            const date = new Date(val);
            var dd = date.getDate();
            var mm = date.getMonth() + 1;
            var yyyy = date.getFullYear();
            if (dd < 10) {
                dd = '0' + dd;
            }
            if (mm < 10) {
                mm = '0' + mm;
            }
            return (val = yyyy + '-' + mm + '-' + dd);
        },
        getStatus(values) {
            return values === 'active' ? true : false;
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

        usertaglist(data) {
            this.loading1 = true;
            this.chatroomUserTag
                .getusertagList(data)
                .then((r) => {
                    this.loading1 = false;
                    this.customer1 = r.data.tagList;
                    this.totalrecords = r.data.total_records;
                    console.log(r);
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
            this.loading1 = true;
            // var start_date = this.formatRangeDate(this.date_range.at(0));
            // var end_date = this.formatRangeDate(this.date_range.at(1));
            this.chatroomUserTag
                .getusertagList({ page: page, record_count: this.pagination.pagination_limit, name: this.name, user_name: this.user_name, startDate: this.searchdate, endDate: this.searchenddate })
                .then((res) => {
                    this.customer1 = res.data.tagList;
                    this.totalrecords = res.data.total_records;
                    console.log('paginate', this.customer1);
                    console.log('paginatetotal', this.totalrecords);
                    this.pagination.current_page = page;
                    this.loading1 = false;
                    // console.log(res.data);
                })
                .catch((err) => console.log(err));
        },

        usertaglistDownloadExcel() {
            let searchParams = {
                    name: this.name,
                    user_name: this.user_name,
                    startDate: this.searchdate,
                    endDate: this.searchenddate,
                    // children: this.children,
                    // startDate: start_date,
                    // endDate: end_date,
                };
            this.chatroomUserTag
                .getExcelUserFinal(searchParams)
                .then((response) => {
                    const url = window.URL.createObjectURL(new Blob([response.data]));
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', 'Usertaglist.xlsx'); //or any other extension
                    document.body.appendChild(link);
                    link.click();
                })
                .catch((err) => console.log(err));
        },
        resetUser() {
            (this.name = ''), (this.user_name = ''), (this.date_range = ''), this.usertaglist({ record_count: this.pagination.pagination_limit, page: this.pagination.current_page });
            window.location.reload();
        },
        formatRangeDate(date) {
            if (date === undefined || date === '') {
                return '';
            }
            return moment(new Date(date)).format('YYYY-MM-DD');
        },
        searchuser() {
            console.log(this.date_range);
            if (this.name !== '' || this.user_name !== '' || this.date_range !== '') {
              
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
                    name: this.name,
                    user_name: this.user_name,
                    startDate: this.searchdate,
                    endDate: this.searchenddate,
                    // children: this.children,
                    // startDate: start_date,
                    // endDate: end_date,
                };

                console.log('searchParams', searchParams);
                this.customer1 = true;
                this.chatroomUserTag
                    .getusertagList(searchParams)
                    .then((res) => {
                        this.customer1 = res.data.tagList;
                        console.log('searchuser', this.customer1);
                        this.setPagination(res.data.current_page, res.data.total_pages === 0 ? 1 : res.data.total_pages, res.data.total_records);
                        this.loading1 = false;
                    })
                    .catch(() => {
                        this.customer1 = [];
                        this.loading1 = false;
                    });
            } else {
                // var startDate = this.addDay(this.date_range.at(0));
                // var endDate = this.addDay(this.date_range.at(1));
                // console.log(startDate, endDate);
            }
        },

        

        today() {
            let today = new Date();
            let firstDate = new Date();
            firstDate.setDate(today.getDate());
            this.date_range = [firstDate, today];
            this.searchuser();
        },
        lastweek() {
            let today = new Date();
            let firstDate = new Date();
            firstDate.setDate(today.getDate() - 7);
            this.date_range = [firstDate, today];
            this.searchuser();
        },
        lastmonth() {
            let today = new Date();
            let firstDate = new Date();
            firstDate.setDate(today.getDate() - 31);
            this.date_range = [firstDate, today];
            this.searchuser();
        },
        lastsixmonth() {
            let today = new Date();
            let firstDate = new Date();
            firstDate.setDate(today.getDate() - 182);
            this.date_range = [firstDate, today];
            this.searchuser();
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
        formatDatesearch(value) {
            const date = new Date(value);
            var dd = date.getDate();
            var mm = date.getMonth() + 1;
            var yyyy = date.getFullYear();
            if (dd < 10) {
                dd = '0' + dd;
            }
            if (mm < 10) {
                mm = '0' + mm;
            }
            return (value = yyyy + '.' + mm + '.' + dd);
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
        deleteNote: function (id) {
            console.log(id);
            var self = this;
            this.$confirm.require({
                group: 'dialog',
                header: '삭제 확인!',
                message: '태그를 삭제하면 태그와 연결된 대화방의 이름이 일부 기본 태그로 바뀝니다. 태그를 삭제하시겠습니까?',
                acceptLabel: '확인',
                rejectLabel: ' 취소',
                accept: () => {
                    axios({ method: 'delete', url: `admin/tag/tags/${id}` }).then(function () {});
                    self.usertaglist({ record_count: this.pagination.pagination_limit, page: this.pagination.current_page });
                    self.$toast.add({ severity: 'info', summary: '삭제', detail: '성공적으로 삭제되었습니다.', life: 1000 });
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
</style>