<template>
    <div class="card">
        <Toast />
        <form>
            <div class="p-grid p-fluid">
                <div class="p-col-12">
                    <h5>태그 수정</h5>
                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-5 p-mb-lg-0 p-field">
                            <label for="title2">태그 수정</label>
                            <InputText type="text" placeholder="태그 이름 입력" v-model="name" id="title2"></InputText>
                            <!-- <div class="text-red">{{ error.name }}</div> -->
                        </div>
                    </div>

                    <div class="p-grid p-formgrid p-mb-3">
                        <div class="p-col-12 p-mb-2 p-lg-5 p-mb-lg-0 p-field">
                            <label for="title2">채팅방 수</label>
                            <InputText type="text" placeholder="채팅방 번호 입력m" v-model="chatroomCount" id="title2" disabled></InputText>
                            <!-- <div class="text-red">{{ error.name }}</div> -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-d-flex p-jc-end p-ai-center" style="float: left">
                <Button label="구하다" iconPos="left" class="p-button p-button-sm p-mr-2 p-mb-2" @click="editAdmintag"></Button>
                <!-- <Button label="삭제" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2"> </Button> -->
                <!-- <Button icon="pi pi-trash" class="p-button2" @click="deleteNote(data.id)"  /> -->
                <!-- <Button label="저장" iconPos="left" class="p-button p-button-sm p-mr-2 p-mb-2" @click="addComplexmanagement"></Button> -->
            </div>
            <div class="p-d-flex p-jc-end p-ai-center">
                <div>
                    <Button label="뒤로가기" iconPos="left" class="p-button p-button-outlined p-button-sm p-mr-2 p-mb-2" @click="$router.go(-1)"></Button>
                    <!-- <Button :label="$t('Confirm')" icon="pi pi-check" iconPos="left" class="p-button p-button-sm p-mr-2 p-mb-2"></Button> -->
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import ChatroomUserDetails from '../../../service/API/ChatroomUserDetails';
import validateCreateAdmintag from '../../../validations/chatroomtag/validateCreateAdmintag';
export default {
    name: 'EditAdmintag',
    data() {
        return {
            render: true,
            display: false,
            position: 'center',
            visibleLeft: false,
            visibleRight: false,
            visibleTop: false,
            visibleBottom: false,
            visibleFull: false,
            name: '',
            customer1: null,
            loading1: true,
            idFrozen: false,
            products: null,
            expandedRows: [],
            error: {},
            formData: new FormData(),
            tagId: '',
            chatroomCount:'',
            id: '',
        };
    },
    customerService: null,
    productService: null,
    created() {
        this.chatroomUserDetails = new ChatroomUserDetails();
    },
    mounted() {

        this.chatroomUserDetails.getChatroomUserDetails(this.$route.params.id).then((res) => {
            // console.log(res);
            this.name = res.data.tag_details.name;
            this.chatroomCount = res.data.tag_details.chatroomCount;
            this.group_type = res.data.tag_details.group_type;
            this.city = res.data.tag_details.city;
            this.country = res.data.tag_details.country;
            this.create_date = res.data.tag_details.create_date;
            this.status = res.data.tag_details.status;

            console.log(res);
        });
    },
    methods: {
        formatDate(value) {
            const date = new Date(value);
            var dd = date.getDate();
            var mm = date.getMonth() + 1;
            var yyyy = date.getFullYear();
            var hr = date.getHours();
            var min = date.getMinutes();
            var sec = date.getSeconds();
            if (dd < 10) {
                dd = '0' + dd;
            }
            if (mm < 10) {
                mm = '0' + mm;
            }
            return (value = `${yyyy}-${mm}-${dd} ${hr}:${min}:${sec}`);
        },
        addadminreset() {
            this.name = '';
        },
        editAdmintag() {
            var self = this;
            let vcheckData = {
                name: self.name,
            };
            //    this.formData.delete('notification_title');
            //     this.formData.delete('description');
            //     this.formData.delete('notification_type');
            //     this.formData.delete('user_ids_arr');
            const { isInvalid, error } = validateCreateAdmintag(vcheckData);
            if (isInvalid) {
                self.error = error;
                console.log(error);
            } else {
                self.formData.append('name', self.name);
                console.log(self.name);
                return axios
                    .patch(`admin/tag/tags/${this.$route.params.id}`, {  name: self.name })
                    .then(() => {
                        // alert('아파트가 성공적으로 추가되었습니다.');
                        self.$router.push({ name: 'AdmintagList' });
                        setTimeout(() => {
                            self.$toast.add({ severity: 'info', summary: '확인.', detail: '관리 태그가 성공적으로 업데이트되었습니다.', life: 3000 });
                        }, 1000);
                    })
                    .catch(function (err) {
                        // console.log(err.response.data.message);

                        // alert('이메일이 이미 존재합니다');
                        self.$toast.add({ severity: 'error', summary: '거부됨.', detail: err.response.data.message, life: 3000 });
                    });
            }
        },
    },
};
</script>

<style scoped>
.img-info {
    font-size: 11px;
    font-weight: 400;
    color: rgb(48, 48, 48);
}
.custom-select {
    position: relative;
    border: 1px solid #cecece;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 15px;
}
.custom-select-invalid {
    position: relative;
    border: 1px solid red;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 15px;
}
.select-file {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0%;
    z-index: 5;
    opacity: 0;
}
.SelectBtn {
    max-width: 100px;
}
.custom-select span {
    max-width: 140px;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>