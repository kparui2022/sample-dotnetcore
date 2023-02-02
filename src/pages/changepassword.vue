<template>
    <Toast />
    <div class="login-body">
        <div class="login-wrapper">
            <div class="login-panel">
                <a @click="goDashboard" class="logo">
                    <h3 style="color: #002; line-height: 0.5em">비밀번호 재설정</h3>
                </a>
                <InputText type="password" id="new_pass" :class="`${error.newp ? 'p-invalidusername' : ''}`" placeholder="새로운 비밀번호 입력" v-model="new_pass" />
                <div class="text-red">{{ error.newp }}</div>
                <!-- <div class="text-redx">{{ email_err }}</div> -->
                <br />
                <InputText type="password" @keyup="cnfpass" id="confirm_pass" :class="`${error.confi ? 'p-invalidusername' : ''}`" placeholder="새로운 비밀번호 확인" v-model="confirm_pass" />
                <div class="text-red">{{ error.confi }}</div>

                <div v-show="render" class="text-red">비밀번호가 일치하지 않음</div>
                <div v-show="render1" class="text-green">비밀번호 일치</div>
                <br />
                <p style="text-align: left; margin-top: 0px; width: 88%">영문/숫자/특수문자 포함 8자 이상 16자 미만</p>
                <br />
                <Button label="재설정" type="button" @click="Changepass" class="colorchange"></Button>
                <!-- <a href="#" @click="open">{{ $t('Forget Password') }}</a> -->
                <!-- <a href="#">forget dfc password?</a> -->
                <!-- <p>Don’t you have an account, <a href="#">sign up</a></p> -->
            </div>
        </div>
    </div>
</template>
<script>
import validpassword from '../validations/validpassword';

import PasswordService from '../service/API/PasswordService';
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
            code: localStorage.getItem('otp'),
            email: localStorage.getItem('email'),
            
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
                newp: this.new_pass,
                confi: this.confirm_pass,
                email: this.email,
                code: this.code,
            };
            const { isInvalid, error } = validpassword(vcheckData);
            if (isInvalid) {
                this.error = error;
                this.helptxt = false;
                console.log(error);
            } else {
                if (this.new_pass === this.confirm_pass) {
                    this.error = {};
                    this.passwordService
                        .resetPassword(this.new_pass, this.email, this.code)
                        .then(() => {
                            this.$toast.add({ severity: 'info', summary: '확인', detail: '비밀번호가 성공적으로 변경되었습니다.', life: 3000 });
                            setTimeout(() => {
                                localStorage.removeItem('UserName');
                                localStorage.removeItem('UserEmail');
                                localStorage.removeItem('token');
                                this.$router.push({ name: 'login' });
                            }, 3000);
                        })
                        .catch((err) => {
                            this.$toast.add({ severity: 'error', summary: '거부됨', detail: err.response.data.message, life: 3000 });
                            // console.log('error',err.response.data.message);
                        });
                } else {
                    this.$toast.add({ severity: 'error', summary: '비밀번호 오류', detail: '새 비밀번호 및 확인 비밀번호가 일치하지 않습니다.', life: 3000 });
                }
            }
        },
    },
};
</script>
    <style scoped>
.colorchange:focus {
    background-color: #fff;
    color: blue;
}
.login-body .login-wrapper .login-panel > div > input,
.login-body .login-wrapper .login-panel > input {
    max-width: 388px;
}

.login-body .login-wrapper .login-panel > button {
    max-width: 388px;
}

.p-invalidusername {
    border: 1px solid red !important;
}
</style>