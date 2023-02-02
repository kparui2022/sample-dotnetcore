<template>
    <div class="p-grid">
        <Toast />
        <!-- <div class="p-col-12 p-pb-0">
            <Button @click="$router.go(-1)" :label="$t('button.back')" icon="pi pi-angle-left" class="p-button-text p-mr-2 p-mb-2" />
        </div> -->
        <div class="p-col-12">
            <div class="card p-fluid">
                <h4>
                    <strong>Change Password</strong>
                </h4>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-5">
                        <label for="current_pass">Current Password</label>
                        <InputText type="password" @keyup="currentpass" id="current_pass" :class="`${error.current ? 'p-invalid' : ''}`" placeholder="Current Password" v-model="Current_pass" />
                        <div class="text-red">{{ error.current }}</div>
                        
                    </div>
                </div>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-5">
                        <label for="new_pass">New Password</label>
                        <InputText type="password" id="new_pass" :class="`${error.newp ? 'p-invalid' : ''}`" placeholder="New Password" v-model="new_pass" />
                        <div class="text-red">{{ error.newp }}</div>
                        <small v-show="helptxt" style="color: #17a2b8">{{ $t('validation.pass') }}</small>
                    </div>
                </div>
                <div class="p-formgrid p-grid">
                    <div class="p-field p-col-12 p-md-5">
                        <label for="confirm_pass">Confirm Password</label>
                        <InputText type="password" @keyup="cnfpass" id="confirm_pass" :class="`${error.confi ? 'p-invalid' : ''}`" placeholder="Confirm Password" v-model="confirm_pass" @keypress="Changepass" />
                        <div class="text-red">{{ error.confi }}</div>
                        <div v-show="render" class="text-red">New password and confirmed password need to be same</div>
                        <div v-show="render1" class="text-green">password matching</div>
                    </div>
                </div>

                <div class="p-d-flex p-jc-between">
                    <Button label="Primary" class="p-mr-2 p-mb-2" @click="Changepass">Update</Button>
                    <Button label="Primary" class="p-mr-2 p-mb-2" @click="$router.go(-1)">Back</Button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import validatePass from '../../validations/password/validatePassword';
import PasswordService from '../../service/API/PasswordService';
export default {
    data() {
        return {
            helptxt: true,
            render: false,
            render1: false,
            Current_pass: '',
            new_pass: '',
            confirm_pass: '',
            error: {},
            errpassconfi: null,
        };
    },
    created() {
        this.passwordService = new PasswordService();
    },
    methods: {
        
        cnfpass() {
            if (this.new_pass != this.confirm_pass) {
                this.render = true;
                this.render1 = false;
            } else {
                this.render1 = true;
                this.render = false;
            }
        },
        Changepass() {
            let vcheckData = {
                current: this.Current_pass,
                newp: this.new_pass,
                confi: this.confirm_pass,
            };
            const { isInvalid, error } = validatePass(vcheckData);
            if (isInvalid) {
                this.error = error;
                this.helptxt = false;
                console.log(error);
            } else {
                if (this.new_pass === this.confirm_pass) {
                    this.error = {};
                    this.passwordService
                        .changePassword( this.new_pass,this.Current_pass)
                        .then(() => {
                            this.$toast.add({ severity: 'info', summary: '확인됨', detail: '비밀번호가 성공적으로 변경되었습니다.', life: 3000 });
                            setTimeout(() => {
                                localStorage.removeItem('AdminName');
                                localStorage.removeItem('UserEmail');
                                localStorage.removeItem('token');
                                this.$router.push({ name: 'login' });
                            }, 3000);
                        })
                        .catch(() => {
                            this.$toast.add({ severity: 'error', summary: 'rejected', detail: "Password entered did not match with your current password", life: 3000 });
                            // console.log('error',err.response.data.message);
                        });
                }else{
                    this.$toast.add({ severity: 'error', summary: '비밀번호 오류', detail: '새 비밀번호 및 확인 비밀번호가 일치하지 않습니다.', life: 3000 });
                }
            }
        },
    },
};
</script>

<style scoped>
.p-fluid .p-button {
    width: auto;
}
</style>
