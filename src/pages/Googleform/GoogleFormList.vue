<template>
    <div class="p-grid">
        <Toast />
        <!-- <div class="p-col-12 p-pb-0">
            <Button @click="$router.go(-1)" label="Go Back" icon="pi pi-angle-left" class="p-button-text p-mr-2 p-mb-2" />
        </div> -->
        <div class="p-col-12">
            <div class="card p-fluid">
                <h4>
                    <strong>{{ $t('googleform.s-header') }}</strong>
                </h4>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col p-md-4">
                        <label for="nameuser">{{$t('googleform.list.formurl')}}</label>
                        <InputText id="googlurl" type="text" :class="`${error.link ? 'p-invalid' : ''}`" placeholder="Enter Url" :modelValue="url" v-model="url" />
                        <div class="text-red">{{ error.link }}</div>
                    </div>
                </div>
                <div>
                    <ConfirmPopup group="popup"></ConfirmPopup>
                    <a :href="url" target="_blank"><Button icon="pi pi-eye" :label="$t('button.preview')" class="p-mr-2"></Button></a>
                    <Button ref="popup" @click="confirm($event)" icon="pi pi-check" :label="$t('button.publish')" class="p-mr-2"></Button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import GoogleformService from '../../service/API/GoogleForm';
import validateGoogleForm from '../../validations/googleform/googleform';
export default {
    data() {
        return {
            dropdownItems: [
                { name: 'male', code: 'm' },
                { name: 'female', code: 'f' },
            ],
            dropdownItem: null,
            display: false,
            position: 'center',
            visibleLeft: false,
            visibleRight: false,
            visibleTop: false,
            visibleBottom: false,
            visibleFull: false,
            products: null,
            selectedProduct: null,
            id: '',
            status: '',
            url: '',
            error: {},
        };
    },
    created() {
        this.googleformService = new GoogleformService();
    },
    methods: {
        open() {
            this.display = true;
        },
        close() {
            this.display = false;
        },
        cancel() {
            this.$toast.add({ severity: 'error', summary: '오류가 발생했습니다', detail: '취소되었습니다', life: 3000 });
            setTimeout(() => {
                this.$router.go(-1);
            }, 2000);
        },
        confirm(event) {
            this.$confirm.require({
                target: event.currentTarget,
                group: 'popup',
                message: '이대로 진행하시겠습니까?',
                icon: 'pi pi-exclamation-triangle',
                acceptLabel:"네",
                rejectLabel:"아니요",
                accept: () => {
                    let vcheckData = {
                        link: this.url,
                    };
                    const { isInvalid, error } = validateGoogleForm(vcheckData);
                    if (isInvalid) {
                        this.error = error;
                        console.log(error);
                    } else {
                        this.error = {};
                        this.googleformService.editGoogleForm(this.ids, this.url, this.status).then(() => {
                            this.$toast.add({ severity: 'info', summary: '확인', detail: '성공적으로 등록되었습니다.', life: 3000 });
                        });
                    }
                },
                reject: () => {
                    this.$toast.add({ severity: 'error', summary: '오류가 발생했습니다.', detail: '오류가 발생했습니다', life: 3000 });
                },
            });
        },
    },
    mounted() {
        this.googleformService.getGoogleFormList().then((res) => {
            console.log(res.id);
            this.ids = res.id;
            this.googleformService
                .viewGoogleForm(this.ids)
                .then((res) => {
                    this.url = res.googleFormUrl;
                    this.ids = res.id;
                    this.status = res.status;
                    console.log(res.googleFormUrl);
                })
                .catch(() => {});
        });
    },
};
</script>

<style scoped>
.p-fluid .p-button {
    width: auto;
}
</style>
