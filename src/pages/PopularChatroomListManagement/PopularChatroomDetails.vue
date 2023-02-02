<template>
    <div class="p-grid">
        <div class="p-col-12">
            <div class="card p-fluid">
                <h4>
                    <strong>채팅방 상세</strong>
                </h4>
                <div class="p-field p-grid">
                    <label for="category_name_ko" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">채팅방 이름:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{group_name}}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label for="material_name_ko" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">방장:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ moderator}}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label for="material_name_ko" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">채팅방 유형:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{$t(group_type)}}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label for="material_name_ko" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">지역:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{city}}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label for="material_name_ko" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">참여자 수:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{active_members}}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label for="material_name_ko" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">비밀방 여부:</label>
                    <div class="p-col-12 p-md-10">
                        <span v-if="is_passcode_protected == '1'"> 예 </span>
                        <span v-else> 아니 </span>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label for="material_name_ko" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">생성일시:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{Dateformat(create_date)}}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label for="material_name_ko" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">마지막 활동 일시:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ Dateformat(latest_message_time) == null ? '-': Dateformat(latest_message_time) }}
                            </p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label for="material_name_ko" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">상태:</label>
                    <div class="p-col-12 p-md-10">
                        <span v-if="status == 'active' ">
                                <p>활동적인</p>
                            </span>
                            <span v-else>
                                <p>비활성</p>
                            </span>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="p-col-12">
        <div class="card">
            <div class="p-d-flex p-jc-between p-mb-2">
                <div>
                    <h5>참여자 목록</h5>
                </div>
                <div>
                    <!-- <Button label="Primary" class="p-mr-2 p-mb-2" @click="excelUpload"><i class="pi pi-download p-mr-2"></i>{{ $t('Upload Excel') }}</Button> -->
                    <button  target="_blank" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" style="background: blue; color: white " @click="ParticipantlistDownloadExcel()">엑셀 다운로드</button>
                </div>
            </div>

            <DataTable :value="customer1" :paginator="true" class="p-datatable-gridlines" :rows="10" dataKey="id" :rowHover="true" :loading="loading1" :filters="filters1" responsiveLayout="scroll">
                <!-- v-model:selection="selected" -->
                <ConfirmDialog group="dialog" />

                <template #empty> 데이터가 없습니다. </template>
                <template #loading> 데이터를 로드 중입니다. 기다리다. </template>

                <!-- <column selectionMode="multiple" style="width: 16px; text-align: center" /> -->
                <Column field="serialNo" :header="$t('#')">
                    <template #body="{ data }">
                        <span class="p-column-title">slNo</span>
                       
                        {{ data.serialNo}}                    </template>
                </Column>
                <Column header="참여중인 사용자" style="min-width: 12rem" field="name" :sortable="true">
                    <template #body="{ data }">
                        <span class="p-column-title">Participants</span>
                        {{ data.name }}
                    </template>
                </Column>

                <Column header="이메일" style="min-width: 12rem" field="email" :sortable="true">
                    <template #body="{ data }">
                        <span class="p-column-title">Email</span>
                        {{ data.email }}
                    </template>
                </Column>
            </DataTable>
            <br>
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

                <div style="text-align: right; margin-top: -35px">
                    <label for="order"> Showing: {{ pagination.current_page }} to {{ pagination.pagination_limit }} of {{ pagination.total_records }} Entries </label>
                </div>
            <br>

            <div class="p-d-flex p-jc-end p-ai-center">
                <div>
                    <Button label="뒤로가기" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="$router.go(-1)"></Button>
                </div>
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
            group_name:'',
            group_type:'',
            id:'',
            country:'',
            city:'',
            address:'',
            active_members:'',
            name:'',
            email:'',
            search_key:'',
            is_passcode_protected:'',
            create_date:'',
            latest_message_time:'',
            moderator:'',
            serialNo:'',
            
           
        };
    },
    customerService: null,
    productService: null,
    created() {
        this.popularchtroomService = new PopularchtroomService();
    },
    mounted() {
        localStorage.setItem('id', this.$route.params.id);
        this.Participantlist();
        this.popularchtroomService.viewpopularchatroomdetail(this.$route.params.id).then((res) => {
            
            // console.log(res);
            this.group_name = res.data.room_details.group_name;
            this.group_type = res.data.room_details.group_type;
            this.country = res.data.room_details.country;
            this.city = res.data.room_details.city;
            this.address = res.data.room_details.address;
            this.active_members = res.data.room_details.active_members;
            this.create_date = res.data.room_details.create_date;
            this.latest_message_time = res.data.room_details.latest_message_time;
            this.status = res.data.room_details.status;
            this.is_passcode_protected = res.data.room_details.is_passcode_protected;
            this.moderator = res.data.room_details.moderator;
            console.log(res);


        });
    },
    watch: {},
    methods: {
        
        Participantlist(data) {
            this.loading1 = true;
            this.popularchtroomService
                .participantlist(data)
                .then((r) => {
                    this.loading1 = false;
                    this.customer1 = r.data.room_details;
                    // this.totalrecords = r.data.total_records;
                    console.log(r);
                    // this.pagination_limit_options[this.pagination_limit_options.length-1].value = r.data.total_records
                    // this.setPagination(r.data.current_page, r.data.total_pages === 0 ? 1 : r.data.total_pages, r.data.total_records);
                })
                .catch((err) => {
                    this.loading1 = false;
                    console.log(err);
                });
        },

        ParticipantlistDownloadExcel() {
            this.popularchtroomService
                .getExcelParticipantlistFinal()
                .then((response) => {
                    const url = window.URL.createObjectURL(new Blob([response.data]));
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', 'participantlist.xlsx'); //or any other extension
                    document.body.appendChild(link);
                    link.click();
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
            this.chatroomService
                .participantlist({ page: page, limit: this.pagination.pagination_limit})
                .then((res) => {
                     this.customer1 = res.data.room_details;
                     this.totalrecords = res.data.total_records;
                    console.log('paginate', this.customer1);
                    console.log('paginatetotal', this.totalrecords);
                    this.pagination.current_page = page;
                    this.loading1 = false;
                    // console.log(res.data);
                })
                .catch((err) => console.log(err));
        },

        

      
        formatDate(value) {
            if (value) {
                return moment.utc(value).locale('ko').format('ll - LTS');
            }
        },

        Dateformat(value) {
            if (value) {
                return moment.utc(value).locale('ko').format('ll - LTS');
            }
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
        // formatDate(value) {
        //     const date = new Date(value);
        //     var dd = date.getDate();
        //     var mm = date.getMonth() + 1;
        //     var yyyy = date.getFullYear();
        //     if (dd < 10) {
        //         dd = '0' + dd;
        //     }
        //     if (mm < 10) {
        //         mm = '0' + mm;
        //     }
        //     return (value = yyyy + '.' + mm + '.' + dd);
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
</style>


