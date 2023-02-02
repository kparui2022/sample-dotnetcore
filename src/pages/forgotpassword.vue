<template>
    <Toast />
    <ConfirmDialog></ConfirmDialog>
    <div class="login-body">
        <div class="login-wrapper">
            <div class="login-panel">
                <a @click="goDashboard" class="logo">
                    <h3 style="color: #002; line-height: 0.5em">비밀번호 재설정</h3>
                    <p>가입된 이메일로 비밀번호 재설정이 가능합니다.</p>
                </a>
                <InputText class="p-invalid" id="email" placeholder="이메일 입력" v-model="email" />
                <div class="text-redx">{{ error.email }}</div>
                <!-- <div class="text-redx">{{ email_err }}</div> -->

                <Button label="확인" type="button" @click="Login" class="colorchange"></Button>
                <!-- <a href="#" @click="open">{{ $t('Forget Password') }}</a> -->
                <!-- <a href="#">forget dfc password?</a> -->
                <!-- <p>Don’t you have an account, <a href="#">sign up</a></p> -->
            </div>
        </div>
    </div>
</template>

<script>
// import validateLogin from '../validations/validateLogin';
import validateForget from '../validations/validateForget';
// import validateReset from '../validations/validateReset';
import axios from 'axios';
export default {
    data() {
        return {
            errmsg: '',
            helptxt: true,
            resetemail: '',
            display: false,
            email_err: '',
            pass_err: '',
            // email: '',
            displayBasic: false,

            error: {},
            errors: {},
            remember: true,
            email: '',
        };
    },
    mounted() {},
    methods: {
        // confirm1() {
        //     this.$confirm.require({
        //         message: 'Are you sure you want to proceed?',
        //         header: 'Confirmation',
        //         icon: 'pi pi-exclamation-triangle',
        //         accept: () => {
        //             this.$toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
        //         },
        //         reject: () => {
        //             this.$toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        //         },
        //     });
        // },
        rememberMe() {
            localStorage.setItem('save', this.remember);
            if (this.remember == true) {
                localStorage.setItem('email', this.email);
                localStorage.setItem('Upass', this.password);
            } else {
                localStorage.removeItem('Uid');
                localStorage.removeItem('Upass');
            }
        },

        open() {
            this.display = true;
        },
        close() {
            this.display = false;
        },
        async Login() {
            localStorage.setItem('email', this.email);

            let credentials = {
                email: this.email,
            };

            const { isInvalid, error } = validateForget(credentials);
            if (isInvalid) {
                this.error = error;
                console.log(error);
            } else {
                var self = this;
                this.error = {};
                // console.log('pass');
                await axios({
                    method: 'post',
                    url: 'admin/user/forgot-password',
                    data: credentials,
                })
                    .then(function (response) {
                        if (response.data.success === true) {
                            localStorage.setItem('otp', response.data.otp);

                            self.$confirm.require({
                                message: '입력한 이메일로 비밀번호 재설정을 위한 이메일이 발송되었습니다.',
                                // icon: 'pi pi-exclamation-triangle',
                                header: '발송 완료',
                                acceptLabel: '확인',
                                rejectLabel: '취소',
                                accept: () => {
                                    self.$toast.add({ severity: 'info', summary: '확인', detail: '성공적으로 OTP 일치', life: 3000 });
                                    setTimeout(() => {
                                        self.$router.push({ name: 'OtpEnter' });
                                    }, 1000);
                                },
                                reject: () => {
                                    self.$toast.add({ severity: 'error', summary: '거부됨', detail: 'You have rejected', life: 3000 });
                                },
                            });
                        }
                    })
                    .catch(function (err) {
                        console.log(err.response.data);

                        self.$confirm.require({
                            message: '가입되지 않은 이메일입니다. 다시 한번 확인해주세요.',
                            // icon: 'pi pi-exclamation-triangle',
                            header: '발송 실패',
                            acceptLabel: '확인',
                            rejectLabel: '취소',
                            accept: () => {
                                self.$toast.add({ severity: 'info', summary: '확인', detail: '이메일을 다시 입력하십시오', life: 3000 });
                                self.$router.push({ name: 'forgotpassword' });
                            },
                            reject: () => {
                                // this.sessionService.email = null;
                                self.$toast.add({ severity: 'error', summary: '거부됨', detail: 'You have rejected', life: 3000 });
                            },
                        });
                    });
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