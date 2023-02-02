<template>
    <Toast />
    <div class="login-body">
        <div class="login-wrapper">
            <div class="login-panel">
                <a @click="goDashboard" class="logo">
                    <h3 style="color: #002; line-height: 0.5em">인증번호 입력</h3>
                    <p>입력된 이메일로 받은 인증번호를 입력해주세요</p>
                </a>
                <InputText class="p-invalid" id="email" placeholder="인증번호 입력" v-model="otp" />
                <div class="text-redx">{{ error.otp }}</div>
                <!-- <div class="text-redx">{{ email_err }}</div> -->

                <Button label="재설정" type="button" @click="Login" class="colorchange"></Button>
                <!-- <a href="#" @click="open">{{ $t('Forget Password') }}</a> -->
                <!-- <a href="#">forget dfc password?</a> -->
                <!-- <p>Don’t you have an account, <a href="#">sign up</a></p> -->
            </div>
        </div>
    </div>
</template>

<script>
// import validateLogin from '../validations/validateLogin';
import validateOTP from '../validations/validateOTP';
// import validateReset from '../validations/validateReset';
// import axios from 'axios';
export default {
    data() {
        return {
            errmsg: '',
            helptxt: true,
            resetemail: '',
            display: false,
            email_err: '',
            pass_err: '',
            code: '',
            otp: '',
            otpmatch: localStorage.getItem('otp'),

            error: {},
            errors: {},
            remember: true,
            email: localStorage.getItem('email'),
        };
    },
    mounted() {
        this.remember = localStorage.getItem('save') == 'true' ? true : false;
    },
    methods: {
        open() {
            this.display = true;
        },
        close() {
            this.display = false;
        },
        async Login() {
            if (this.otpmatch == this.otp) {
                let credentials = {
                    otp: this.otp,
                    email: this.email,
                };
                const { isInvalid, error } = validateOTP(credentials);
                if (isInvalid) {
                    this.error = error;
                    console.log(error);
                } else {
                    var self = this;
                    this.error = {};
                    // console.log('pass');
                    self.$toast.add({ severity: 'info', summary: '확인', detail: 'OTP 성공적으로 일치', life: 3000 });
                    setTimeout(() => {
                        self.$router.push({ name: 'changepassword' });
                    }, 1000);
                }
            }
        },

        goDashboard() {
            window.location = '/';
        },
    },
};
</script>
    <style scoped>
.colorchange:focus {
    background-color: #fff;
    color: blue;
}
</style>