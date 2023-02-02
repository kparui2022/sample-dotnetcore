<template>
    <div class="p-grid">
        <div class="p-col-12">
            <div class="card p-fluid">
                <h4>
                    <strong>사용자 상세 정보</strong>
                </h4>
                <div class="p-field p-grid">
                    <label for="category_name_ko" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">닉네임:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ name }}</p>
                    </div>
                </div>

                <div class="p-field p-grid">
                    <label for="material_name_ko" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">이메일 ID:</label>
                    <div class="p-col-12 p-md-10">
                        <p>{{ email }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="p-grid">
        <Toast />
        <div class="p-col-12">
            <div class="card p-fluid">
                <h4>
                    <strong>검색</strong>
                </h4>
                <div class="p-formgrid p-grid p-mb-3">
                    <div class="p-field p-col-12 p-md-3">
                        <label for="choosename">채팅방 이름</label>
                        <InputText id="choosename" type="text" placeholder="채팅방 이름으로 검색" v-model="search_name" />
                    </div>

                    <div class="p-field p-col-12 p-md-3">
                        <label for="MemberType">참여자 유형</label>

                        <Dropdown v-model="member_type" :options="dropdownmembertype" optionValue="code" optionLabel="name" placeholder="전체 " />
                    </div>

                    <div class="p-field p-col-12 p-md-3">
                        <label for="ChatroomType">채팅방 유형</label>
                        <Dropdown v-model="chatroom_type" :options="dropdownchatroomtype" optionValue="code" optionLabel="name" placeholder="전체 " />
                    </div>

                    <div class="p-field p-col-12 p-md-3">
                        <label for="PrivacyType">비밀방 여부</label>
                        <Dropdown v-model="privacy_type" :options="dropdownprivacytype" optionValue="code" optionLabel="name" placeholder="전체 " />
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
                        <Button label="검색" icon="pi pi-search" iconPos="left" class="p-button p-button-sm p-mr-2 p-mb-2" @click="searchuserdetail"></Button>
                        <Button label="초기화" icon="pi pi-replay" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="resetuserdetail"></Button>
                    </div>
                </div>
            </div>
        </div>
        <div class="p-col-12">
            <div class="card">
                <div class="p-d-flex p-jc-between p-mb-2">
                    <div>
                        <h5>참여중인 채팅방 목록</h5>
                    </div>
                    <div>
                        <!-- <Button label="Primary" class="p-mr-2 p-mb-2" @click="excelUpload"><i class="pi pi-download p-mr-2"></i>{{ $t('Upload Excel') }}</Button> -->
                        <!-- <a href="/" target="_blank" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" style="background: blue;color: white;">Download Excel</a> -->
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
                    <!-- <Column header="chatroom Image" style="min-width: 12rem" :sortable="true">
                        <template #body="{ data }">
                            <span class="p-column-title">chatroom Image</span>
                            {{ data.name }}
                        </template>
                    </Column> -->

                    <Column header="채팅방 이름" style="min-width: 12rem" field="group_name" :sortable="true">
                        <template #body="{ data }">
                            <span class="p-column-title">Chatroom Name</span>
                            <router-link :to="'/ChatroomManagement/ChatroomDetails/' + data.id" class="highlight" style="color: #69707a">
                                <!-- {{ data.group_name }} -->
                                <template class="p-column-title" v-if="data.group_name.length<8"> {{ data.group_name }}</template>
                            <template class="p-column-title" v-else> {{ data.group_name.substring(0,8)+".." }}</template>
                            </router-link>
                           
                        </template>
                    </Column>

                    <Column header="참여자 유형" style="min-width: 12rem" field="owner" :sortable="true">
                        <template #body="{ data }">
                            <span class="p-column-title">Member Type</span>
                            <span v-if="data.owner == '1'">
                                <p>방장</p>
                            </span>

                            <span v-else>
                                <p>참여자</p>
                            </span>
                        </template>
                    </Column>

                    <Column header="채팅방 유형" style="min-width: 12rem" field="group_type" :sortable="true">
                        <template #body="{ data }">
                            <span class="p-column-title">Chatroom Type</span>
                            {{ $t(data.group_type) }}
                        </template>
                    </Column>

                    <Column header="비밀방 여부" style="min-width: 4rem" field="passcode" :sortable="true">
                        <template #body="{ data }">
                            <span class="p-column-title">Secret Room</span>
                            <p v-if="data.passcode == null || data.passcode == ''" id="round">아니</p>
                            <p v-else id="round">예</p>
                            <!-- {{ data.passcode }} -->
                        </template>
                    </Column>

                    <Column header="참여자 수" style="min-width: 12rem" field="active_members" :sortable="true">
                        <template #body="{ data }">
                            <span class="p-column-title">Number of Participants</span>
                            {{ data.active_members }}
                        </template>
                    </Column>

                    <Column header="생성일시" style="min-width: 12rem"  field="create_date" :sortable="true">
                        <template #body="{ data }">
                            <span class="p-column-title">Date of creation</span>
                            {{ formatDate(data.create_date) == null ? '-': formatDate(data.create_date) }}
                           
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
                    <label for="order"> {{ pagination.total_records }}개 중  {{ pagination.current_page }} - {{ pagination.pagination_limit }} </label>                </div>
                <br />

                <!-- <div class="p-d-flex p-jc-end p-ai-center" style="float: left">
                    <Button label="Edit" iconPos="left" class="p-button p-button-sm p-mr-2 p-mb-2"></Button>
                </div> -->
                <div class="p-d-flex p-jc-end p-ai-center">
                    <div>
                        <Button label="뒤로가기" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="$router.go(-1)"></Button>
                        <!-- <Button :label="$t('Confirm')" icon="pi pi-check" iconPos="left" class="p-button p-button-sm p-mr-2 p-mb-2"></Button> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import UserDetails from '../../service/API/UserDetails';
import utils from '@/service/utils';
import moment from 'moment';

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

            dropdownmembertype: [
                { name: '모두', code: 'all' },
                { name: '방장', code: 'owner' },
                { name: '참여자', code: 'member' },
            ],
            dropdownchatroomtype: [
                { name: '모두', code: 'all' },
                { name: '일반 채팅방', code: 'general' },
                { name: '위치기반 채팅방', code: 'location' },
            ],
            dropdownprivacytype: [
                { name: '모두', code: 'all' },
                { name: '모든 사람', code: 'everyone' },
                { name: '비밀', code: 'secret' },
            ],
            passcode: '',

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
            group_name: '',
            group_type: '',
            active_members: '',
            latest_message_time: '',
            member_type: '',
            chatroom_type: '',
            privacy_type: '',
            search_name: '',
            date_range: [],
            startDate: '',
            searchdate: '',
            endDate: '',
            searchenddate: '',
            create_date:'',
        };
    },
    customerService: null,
    productService: null,
    created() {
        this.userDetails = new UserDetails();
    },
    mounted() {
        localStorage.setItem('id', this.$route.params.id);
        this.userdetaillist({ record_count: this.pagination.pagination_limit, page: this.pagination.current_page });
        this.userDetails.getUserDetails(this.$route.params.id).then((res) => {
            // console.log(res);
            this.name = res.data.name;
            this.email = res.data.email;

            console.log(res);
        });
    },
    methods: {
        formatDate(value) {
            if (value) {
                return moment.utc(value).locale('ko').format('ll - LTS');
            }
        },
        userdetaillist(data) {
            this.loading1 = true;
            this.userDetails
                .getuserdetailList(data)
                .then((r) => {
                    this.loading1 = false;
                    this.customer1 = r.data.room_details;
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
            this.userDetails
                .getuserdetailList({ page: page, record_count: this.pagination.pagination_limit, search_name: this.search_name, member_type: this.member_type, chatroom_type: this.chatroom_type, privacy_type: this.privacy_type, startDate: this.searchdate, endDate: this.searchenddate })
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
        resetuserdetail() {
            (this.search_name = ''), (this.member_type = ''), (this.chatroom_type = ''), (this.privacy_type = ''),(this.date_range = ''), this.userdetaillist({ record_count: this.pagination.pagination_limit, page: this.pagination.current_page });
            window.location.reload();
        },

        formatRangeDate(date) {
            if (date === undefined || date === '') {
                return '';
            }
            return moment(new Date(date)).format('YYYY-MM-DD');
        },

        searchuserdetail() {
            if (this.search_name == '' && this.member_type == '' && this.chatroom_type == '' && this.privacy_type == '' && this.date_range === '') {
                this.$toast.add({ severity: 'error', summary: this.$t('에러 메시지'), detail: this.$t('하나 이상의 검색 값을 입력하십시오.'), life: 3000 });
            } else if (this.search_name !== '' || this.member_type !== '' || this.chatroom_type !== '' || this.privacy_type !== '' || this.date_range !== '') {
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
                    search_name: this.search_name,
                    member_type: this.member_type,
                    chatroom_type: this.chatroom_type,
                    privacy_type: this.privacy_type,
                    startDate: this.searchdate,
                    endDate: this.searchenddate,

                    // startDate: start_date,
                    // endDate: end_date,
                };
                console.log('searchParams', searchParams);
                this.customer1 = true;
                this.userDetails
                    .getuserdetailList(searchParams)
                    .then((res) => {
                        console.log('res', res);
                        this.customer1 = res.data.room_details;
                        console.log('searchPost', this.customer1);
                        this.setPagination(res.data.current_page, res.data.total_pages === 0 ? 1 : res.data.total_pages, res.data.total_records);
                        this.loading1 = false;
                    })
                    .catch(() => {
                        this.customer1 = [];
                        this.loading1 = false;
                    });
            }  else {
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
            this.searchuserdetail();
        },
        lastweek() {
            let today = new Date();
            let firstDate = new Date();
            firstDate.setDate(today.getDate() - 7);
            this.date_range = [firstDate, today];
            this.searchuserdetail();
        },
        lastmonth() {
            let today = new Date();
            let firstDate = new Date();
            firstDate.setDate(today.getDate() - 31);
            this.date_range = [firstDate, today];
            this.searchuserdetail();
        },
        lastsixmonth() {
            let today = new Date();
            let firstDate = new Date();
            firstDate.setDate(today.getDate() - 182);
            this.date_range = [firstDate, today];
            this.searchuserdetail();
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