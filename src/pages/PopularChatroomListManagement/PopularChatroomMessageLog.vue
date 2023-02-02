<template>
    <div class="p-grid">
        <div class="p-col-12">
            <div class="card p-fluid">
                <h4>
                    <strong>채팅방 이름 - 메세지 기록</strong>
                </h4>
                <div v-for="(item, index) in chatroommessage" :key="index" class="p-field p-grid text">
                    <label for="category_name_ko" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0" style="font-weight: bold;">{{ item.user_name }}</label>
                    <div class="p-col-12 p-md-8 chatbox">
                        <span v-if="item.message == ''">
                            <Textarea id="choosename" type="text"  :placeholder="$t(item.content_type)" style="color: black; " disabled>
                            </Textarea>
                        </span>
                        <span v-else>
                            <Textarea id="choosename" type="text" v-model="item.message" placeholder="채팅방 이름으로 검색" style="color: black" disabled>
                        </Textarea>
                        </span>
                    </div>
                    <div class="p-col-12 p-md-10">
                        <p class="date">{{ formatDate(item.timestamp) }}</p>
                    </div>
                </div>
                <template>
                    <pagination v-model="page" :records="chatroommessage.length" :options="chunkPage" :per-page="perPage" @paginate="myCallback" />
                </template>

                <div class="p-d-flex p-jc-end p-ai-center">
                    <div>
                        <Button label="뒤로가기" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="$router.go(-1)"></Button>
                    </div>
                </div>
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
            first: 0,
            totalrecords: '',
            pagination: {
                  current_page: 1,
                  pagination_limit: 10,
                  total_pages: 2,
                  total_records: '',
              },
            // complexvalue: [],
            statusTrue: true,
            statusFalse: false,
            chatroommessage: [],
            updatedchatroommessage: [],
            loading1: true,
            idFrozen: false,
            products: null,
            expandedRows: [],
            user_name: '',
            message: '',
            id: '',
            timestamp: '',
            search_key: '',
            content_type:'',
        };
    },
    customerService: null,
    productService: null,
    created() {
        this.popularchtroomService = new PopularchtroomService();
    },
    mounted() {
        // this.chatroomService.getchatroommessagelog({ room_id: this.$route.params.id, record_count: this.pagination.pagination_limit, page: this.pagination.current_page }).then((res) => {
        //     // console.log(res);
        //     this.user_name = res.data.message_list[0].user_name;
        //     this.message = res.data.message_list[0].message;
        //     this.timestamp = res.data.message_list[0].timestamp;
        //     // this.totalrecords = res.data.total_records;
        //     console.log(res);
        //     // console.log(this.totalrecords);
        // });
        this.chatroomMessageLog({ room_id: this.$route.params.id, record_count: this.pagination.pagination_limit, page: this.pagination.current_page });
    },
    watch: {},
    methods: {
        getStatus(values) {
            return values === 'active' ? true : false;
        },
        myCallback(ClickPage) {
            const startIndex = (ClickPage - 1) * this.perPage;
            const endIndex = startIndex + this.perPage;
            this.updatedchatroommessage = this.chatroommessage.slice(startIndex, endIndex);
            console.log(this.updatedchatroommessage);
        },

        chatroomMessageLog(data) {
            this.loading1 = true;
            this.popularchtroomService
                .getchatroommessagelog(data)
                .then((r) => {
                    this.loading1 = false;
                    this.chatroommessage = r.data.message_list;

                    this.totalrecords = r.data.total_records;
                    this.myCallback(1);
                    console.log(r);
                    console.log(this.totalrecords);
                    console.log('details', this.chatroommessage);
                    // this.pagination_limit_options[this.pagination_limit_options.length-1].value = r.data.total_records
                    this.setPagination(r.data.current_page, r.data.total_pages === 0 ? 1 : r.data.total_pages, r.data.total_records);
                })
                .catch((err) => {
                    this.loading1 = false;
                    console.log(err);
                });
        },
        apartmentdelete() {
            this.$toast.add({ severity: 'info', detail: '이 아파트는 이미 사용 중이므로 삭제할 수 없습니다.', life: 3000 });
        },

        setPagination(current_page, total_pages, total_records) {
            this.pagination.current_page = current_page;
            this.pagination.total_pages = total_pages;
            this.pagination.total_records = total_records;
        },

        get_paginator_page(total, active) {
            return utils.paginate(total, active);
        },

        // paginate(page) {
        //     this.loading1 = true;
        //     // var start_date = this.formatRangeDate(this.date_range.at(0));
        //     // var end_date = this.formatRangeDate(this.date_range.at(1));
        //     this.popularchtroomService
        //         .getchatroommessagelog({ page: page, limit: this.pagination.pagination_limit })
        //         .then((res) => {
        //             // this.customer1 = res.data.message_list;
        //             this.chatroommessage = res.data.message_list;

        //             this.totalrecords = res.data.total_records;
        //             this.myCallback(1);
        //             console.log('paginate', this.customer1);
        //             console.log('paginatetotal', this.totalrecords);
        //             this.pagination.current_page = page;
        //             this.loading1 = false;
        //             // console.log(res.data);
        //         })
        //         .catch((err) => console.log(err));
        // },
        paginate(current_page) {
              this.loading1 = true;
              // var start_date = this.formatRangeDate(this.date_range.at(0));
              // var end_date = this.formatRangeDate(this.date_range.at(1));
              this.popularchtroomService
                  .getchatroommessagelog({ page: current_page, record_count: this.pagination.pagination_limit, room_id: this.$route.params.id })
                  .then((res) => {
                      // this.customer1 = res.data.message_list;
                      this.chatroommessage = res.data.message_list;
                      this.totalrecords = res.data.total_records;
                      this.myCallback(1);
                      console.log('paginate', this.customer1);
                      console.log('paginatetotal', this.totalrecords);
                      this.pagination.current_page = current_page;
                      this.loading1 = false;
                      // console.log(res.data);
                  })
                  .catch((err) => console.log(err));
          },
        formatDate(value) {
            if (value) {
                return moment.utc(value).locale('ko').format('ll - LT');
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

.text {
    display: inherit;
}

.chatbox {
    margin-top: 1%;
}

textarea#choosename {
    background: #e0e0e0;
}

::placeholder{
    color: black;
  }

.date {
    color: #a4a4a4;
}
</style>