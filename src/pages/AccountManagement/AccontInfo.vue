<template>
    <div class="card p-fluid">
        <Toast />
        <h5><b>계정 정보</b></h5>
        <div class="p-field p-grid">
            <label for="name3" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">이름:</label>
            <div class="p-col-12 p-md-10">{{ name }}</div>
        </div>
        <div class="p-field p-grid">
            <label for="email3" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">이메일 ID:</label>
            <div class="p-col-12 p-md-10">{{ email }}</div>
        </div>
        <!-- <div class="p-field p-grid">
            <label for="name3" class="p-col-12 p-mb-2 p-md-2 p-mb-md-0">비밀번호:</label>
            <div class="p-col-12 p-md-10"><Button label="비밀번호 재설정" iconPos="left" class="p-button-outlined p-mr-2 p-mb-2" @click="changepass"></Button></div>
        </div> -->
        <div class="p-d-flex p-jc-between">
            <router-link :to="'/modify-info/' + $route.params.id"> <Button label="Primary" class="p-button-outlined p-mr-2 p-mb-2">수정</Button> </router-link>

            <!-- <Button label="Primary" class="p-button-outlined p-mr-2 p-mb-2" @click="$router.go(-1)">뒤로가기</Button> -->
        </div>
    </div>
</template>


<script>
import Accountinfo from '../../service/API/Accountinfo';

export default {
    data() {
        return {
            user_id: localStorage.getItem('Userid'),
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
            email: '',
            id: '',
        };
    },
    customerService: null,
    productService: null,
    created() {
        this.accountinfo = new Accountinfo();
    },
    mounted() {
        this.accountinfo.getAccountinfo(this.$route.params.id).then((res) => {
            // console.log(res);
            this.name = res.data.name;
            this.email = res.data.email;

            console.log(res);

            localStorage.setItem('Username', res.data.name);
            if (localStorage.getItem('reloaded')) {
                // The page was just reloaded. Clear the value from local storage
                // so that it will reload the next time this page is visited.
                localStorage.removeItem('reloaded');
            } else {
                // Set a flag so that we know not to reload the page twice.
                localStorage.setItem('reloaded', '1');
                location.reload();
            }
        });
    },
    methods: {
        changepass() {
            this.$router.push({ name: 'ChangePass' });
        },
        editinfo() {
            this.$router.push({ name: 'EditInfo' });
        },
    },
};
</script>



<style scoped>
.p-fluid .p-button {
    width: auto;
}
</style>
