<template>
    <Toast />
    <div class="login-body">
        <div class="login-wrapper">
            <div class="login-panel">

                
                <a @click="goDashboard" class="logo">
                    <img src="/assets/layout/images/Logohanatour.png" alt="samsung" style="margin-bottom: 20px; height: 40px" />
                    <h3 style="color: #002; line-height: 0.5em">관리자 로그인</h3>
                    <p style="font-size: 14px; color:rgba(0, 0, 0, 0.6);">계정에 로그인해주세요.</p>
                </a>

                   
                    <InputText @keyup.enter="Login" type="text"  placeholder="이메일을 입력하세요." v-model="login_user" id="email" :class="`${error.login_user ? 'p-invalidusername' : ''}`" />
                    <!-- <InputText @keyup.enter="Login" id="email" placeholder="Email" v-model="login_user" :class="`${error.login_user ? 'p-invalid' : ''}`" /> -->
                    <div class="text-redx">{{ error.login_user }}</div>
                    <div class="text-redx">{{ email_err }}</div>
                    
                    
                

                <Password @keyup.enter="Login" id="password" placeholder="비밀번호를 입력하세요." :feedback="newLocal" v-model="login_password" :class="`${error.login_password ? 'p-invalid' : ''}`"  toggle-mask />
                <div class="text-redx">{{ error.login_password }}</div>
                <div class="text-redx">{{ pass_err }}</div>
                <div class="field-checkbox" style="text-align: left; display: flex; max-width: 250px; font-size: 10px; padding-bottom: 10px">
                    <Checkbox id="rem" :binary="true" v-model="remember" @change="rememberMe()"></Checkbox>
                    <label for="rem" style="padding-left: 5px;font-size: 14px; color:#181818;">아이디 저장</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                   
                </div>
                <Button label="로그안" type="button" @click="Login" class="colorchange"></Button>
                <!-- <a href="#" @click="open">{{ $t('Forget Password') }}</a> -->
                <!-- <a href="#">forget dfc password?</a> -->
                <!-- <p>Don’t you have an account, <a href="#">sign up</a></p> -->
            </div>
        </div>
        <Dialog :header="$t('password.recovery_DFC')" v-model:visible="display" :breakpoints="{ '960px': '75vw' }" :style="{ width: '30vw' }" :modal="true">
            <div class="p-field p-fluid">
                <label for="username">{{ $t('password.p_email') }}:</label>
                <InputText :class="`${error.resetemail ? 'p-invalid' : ''}`" id="username" type="email" v-model="resetemail" />
                <small v-show="helptxt">{{ $t('password.help') }}</small>
                <div class="text-redx">{{ error.resetemail }}{{ errmsg }}</div>
            </div>
            <template #footer>
                <Button :label="$t('password.send_mail')" @click="resetpass" icon="pi pi-check" class="p-button-primary" />
                <!-- <Button label="Dismiss" @click="close" icon="pi pi-pi-times" class="p-button-danger" /> -->
            </template>
        </Dialog>
    </div>

</template>

<script>
import validateLogin from '../validations/validateLogin';
import validateReset from '../validations/validateReset';
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
            login_user: '',
            login_password: '',
            error: {},
            errors: {},
            remember: true,
        };
    },
    mounted() {
        this.remember = localStorage.getItem('save') == 'true' ? true : false;
        if (localStorage.getItem('save') == 'true') {
            this.login_user = localStorage.getItem('Uid');
            this.login_password = localStorage.getItem('Upass');
        }
    },
    methods: {
        rememberMe() {
            localStorage.setItem('save', this.remember);
            if (this.remember == true) {
                localStorage.setItem('Uid', this.login_user);
                localStorage.setItem('Upass', this.login_password);
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
            let credentials = {
                login_user: this.login_user,
                login_password: this.login_password,
            };
            const { isInvalid, error } = validateLogin(credentials);
            if (isInvalid) {
                this.error = error;
                console.log(error);
            } else {
                var self = this;
                this.error = {};
                // console.log('pass');
                await axios({
                    method: 'post',
                    url: 'admin/user/login',
                    data: credentials,
                })
                .then(function (response) {
                        console.log(response.data);
                            localStorage.setItem('token', response.data.access_token);
                            localStorage.setItem('Userid', response.data.user_id);
                            localStorage.setItem('Username', response.data.name);
                            
                            
                            window.location = '/';
                    })
                    // .then(function (response) {
                    //     console.log(response);
                    //     if (response.data.status === 200) {
                    //         console.log(response.data.status);
                    //         // localStorage.removeItem("expirytoken");
                    //         // this.$router.push({ name: 'dashboard' });
                    //         localStorage.setItem('token', response.data.data.token);
                    //         localStorage.setItem('userType', response.data.data.userType);
                    //         localStorage.setItem('UserName', response.data.data.name);
                    //         localStorage.setItem('UserEmail', response.data.data.email);
                    //         console.log(response.data.data.userType)
                            
                    //         if (response.data.data.userType === 'super_admin') {
                    //             window.location = '/';
                    //         } else {
                    //             localStorage.setItem('refcode', response.data.data.referralCode);
                    //             localStorage.setItem('dfc_Id', response.data.data.userId);
                    //             window.location = '/client-lookup';
                    //         }
                    //     }
                    // })
                    .catch(function (err) {
                        console.log(err);
                        self.$toast.add({ severity: '오류', summary: '이메일 또는 비밀번호가 잘못되었습니다.', life: 3000 });
                    });
                    // .catch(function (err) {
                    //     let text = err.response.data.message;
                    //     let result = text.match('Password');
                    //     let result1 = text.match('Email Does Not Exists');
                    //     console.log(text);
                    //     if (result == 'Password') {
                    //         self.pass_err = 'invalid password.';
                    //         self.email_err = '';
                    //     } else if (result1 == 'Email Does Not Exists') {
                    //         self.pass_err = '';
                    //         self.email_err = 'invalid email.';
                    //     } else {
                    //         // alert('Email or, password is incorrect');
                    //         self.$toast.add({ severity: '오류', summary: '이메일 또는 비밀번호가 잘못되었습니다.', life: 3000 });
                    //     }
                    // });
            }
        },
        resetpass() {
            let vcheckData = {
                resetemail: this.resetemail,
            };
            const { isInvalid, error } = validateReset(vcheckData);
            if (isInvalid) {
                this.error = error;
                this.helptxt = false;
                // console.log(error);
            } else {
                this.errmsg = '';
                var self = this;
                this.helptxt = true;
                this.error = {};
                axios({
                    method: 'post',
                    url: '/admin/dfc/resetPassword',
                    data: { email: this.resetemail },
                })
                    .then(function () {
                        self.close();
                        self.$toast.add({ severity: 'success', summary: '비밀번호가 성공적으로 변경되었습니다', detail: ` 새로운 비밀번호가 ${self.resetemail}로 발송되었습니다  `, life: 5000 });
                    })
                    .catch((err) => {
                        this.helptxt = false;
                        this.errmsg = err.response.data.message;
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

.p-password .pi-eye {
    top: 42%;
}

.p-invalidusername{
    border: 1px solid red !important;
}


</style>
