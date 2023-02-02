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
                        <label for="nameuser">닉네임</label>
                        <InputText id="nameuser" type="text" placeholder="닉네임으로 검색" v-model="searchName" />
                    </div>

                    <div class="p-field p-col-12 p-md-3">
                        <label for="email">이메일 ID</label>
                        <InputText id="email" type="text" placeholder="이메일 ID로 검색" v-model="searchEmail" />
                    </div>
                </div>

                <div class="p-d-flex p-jc-between p-ai-lg-center p-ai-start p-mt-6 p-flex-column p-flex-lg-row">
                    <div class="p-mb-4 p-mb-lg-0">
                        <!-- <Button :label="$t('button.today')" icon="pi pi-calendar" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="today"></Button>
                        <Button :label="$t('button.lastWeek')" icon="pi pi-calendar" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="lastweek"></Button>
                        <Button :label="$t('button.lastMonth')" icon="pi pi-calendar" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="lastmonth"></Button>
                        <Button :label="$t('button.last6Months')" icon="pi pi-calendar" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="lastsixmonth"></Button> -->
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
                        <h5>사용자 목록</h5>
                    </div>
                    <div>
                        <!-- <Button label="Primary" class="p-mr-2 p-mb-2" @click="excelUpload"><i class="pi pi-download p-mr-2"></i>{{ $t('Upload Excel') }}</Button> -->
                        <Button target="_blank" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="userlistDownloadExcel" style="background: blue; color: white">엑셀 다운로드</Button>
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
                    <Column header="닉네임" style="min-width: 12rem" field="name" :sortable="true">
                        <template #body="{ data }">
                            <span class="p-column-title">Nickname</span>

                            <router-link :to="'/UserManagement/UserDetail/' + data.user_id" class="highlight" style="color: #69707a">
                                {{ data.name }}
                            </router-link>
                        </template>
                    </Column>

                    <Column header="이메일 ID" style="min-width: 12rem" field="email" :sortable="true">
                        <template #body="{ data }">
                            <span class="p-column-title">Email ID</span>
                            <!-- <router-link :to="'/UserManagement/UserDetail/' + data.user_id" class="highlight" style="color: #69707a"> -->
                                {{ data.email }}
                            <!-- </router-link> -->
                        </template>
                    </Column>

                    <Column header="생성한 채팅방 수" style="min-width: 12rem" field="no_of_chatroom" :sortable="true">
                        <template #body="{ data }">
                            <span class="p-column-title">Number of Chatrooms Created</span>
                            <!-- <router-link :to="'/UserManagement/UserDetail/' + data.user_id" class="highlight" style="color: #69707a"> -->
                                {{ data.no_of_chatroom }}
                            <!-- </router-link> -->
                        </template>
                    </Column>

                    <Column header="참여중인 채팅방 수" style="min-width: 12rem" field="no_of_participant" :sortable="true">
                        <template #body="{ data }">
                            <span class="p-column-title">Number of Participants</span>
                            <!-- <router-link :to="'/UserManagement/UserDetail/' + data.user_id" class="highlight" style="color: #69707a"> -->
                                {{ data.no_of_participant }}
                            <!-- </router-link> -->
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
import UserService from '../../service/API/UserService';
// import axios from 'axios';
import utils from '@/service/utils';
export default {
    data() {
        return {
            selected: [],
            render: true,
            selectedItemss: '',

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
            email: '',
            id: '',
            user_id: '',
            user_type: 'user',
            record_count: 10,
            searchName: '',
            searchEmail: '',
            no_of_chatroom: '',
            no_of_participant: '',
        };
    },
    customerService: null,
    productService: null,
    created() {
        this.userService = new UserService();
    },
    mounted() {
        // this.userlist();
        this.userlist({ user_type: this.user_type, record_count: this.pagination.pagination_limit, page: this.pagination.current_page });
    },
    watch: {},
    methods: {
        userlistDownloadExcel() {
            this.userService
                .getExceluserFinal({ user_type: this.user_type,searchName: this.searchName,searchEmail: this.searchEmail })
                .then((response) => {
                    const url = window.URL.createObjectURL(new Blob([response.data]));
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', 'userlist.xlsx'); //or any other extension
                    document.body.appendChild(link);
                    link.click();
                })
                .catch((err) => console.log(err));
        },
        userlist(data) {
            this.loading1 = true;
            this.userService
                .getuserList(data)
                .then((r) => {
                    this.loading1 = false;
                    this.customer1 = r.data.user_details;
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
            this.userService
                .getuserList({ page: page, record_count: this.pagination.pagination_limit, user_type: this.user_type , searchName: this.searchName,searchEmail: this.searchEmail})
                .then((res) => {
                    this.customer1 = res.data.user_details;
                    this.totalrecords = res.data.total_records;
                    console.log('paginate', this.customer1);
                    console.log('paginatetotal', this.totalrecords);
                    this.pagination.current_page = page;
                    this.loading1 = false;
                    // console.log(res.data);
                })
                .catch((err) => console.log(err));
        },

        resetUser() {
            (this.searchName = ''), (this.searchEmail = ''), this.userlist({ user_type: this.user_type, record_count: this.pagination.pagination_limit, page: this.pagination.current_page });
        },
        searchuser() {
            if (this.searchName !== '' || this.searchEmail !== '') {
                let searchParams = {
                    record_count: this.pagination.pagination_limit,
                    user_type: this.user_type,
                    page: 1,
                    searchName: this.searchName,
                    searchEmail: this.searchEmail,

                    // startDate: start_date,
                    // endDate: end_date,
                };
                console.log('searchParams', searchParams);
                this.customer1 = true;
                this.userService
                    .getuserList(searchParams)
                    .then((res) => {
                        console.log('res', res);
                        this.customer1 = res.data.user_details;
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
        // searchuser() {
        //      if (
        //         this.name == ''
        //     ) {
        //         this.$toast.add({ severity: 'error', summary: 'Error message', detail: 'Please enter one or more search values.', life: 3000 });
        //     } else {
        //         this.apartmentlist();
        //     }
        // },
        // exceldownload() {
        //     this.userService
        //         .getExcel(this.nickname, this.username, this.has_children, this.children_age, this.gender.code, this.age_group.code, this.marital_status.code, this.has_pet.code=='Yes'?1:0, this.min_point, this.max_point, this.start_date==""?"":this.formatDate(this.start_date), this.end_date==""?"":this.formatDate(this.end_date))
        //         .then((response) => {
        //             const url = window.URL.createObjectURL(new Blob([response.data]));
        //             const link = document.createElement('a');
        //             link.href = url;
        //             link.setAttribute('download', 'Userlist.xlsx'); //or any other extension
        //             document.body.appendChild(link);
        //             link.click();
        //         });
        // },

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
        // deleteNote: function (id) {
        //     // console.log(id);
        //     var self = this;
        //     this.$confirm.require({
        //         group: 'dialog',
        //         header: '확인',
        //         message: '삭제하시겠습니까?',
        //         icon: 'pi pi-trash',
        //         acceptLabel: '확인',
        //         rejectLabel: ' 취소',
        //         accept: () => {
        //             self.apartmentService
        //                 .delete({ id: id })
        //                 .then(function (response) {
        //                     console.log(response);
        //                     self.apartmentlist();
        //                     self.$toast.add({ severity: 'info', summary: '삭제', detail: '성공적으로 삭제되었습니다.', life: 3000 });

        //                 })
        //                 .catch(() => {
        //                     self.$toast.add({ severity: 'info', summary: '삭제', detail: '성공적으로 삭제되었습니다.', life: 3000 });
        //                 });
        //         },
        //         reject: () => {
        //             this.$toast.add({ severity: 'error', summary: '오류가 발생했습니다', detail: '취소되었습니다', life: 3000 });
        //         },
        //     });
        // },
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

.highlight:hover {
    border-bottom: 3px solid Blue;
}
</style>