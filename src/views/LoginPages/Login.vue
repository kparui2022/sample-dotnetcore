<template>
  <div class="login-wrap">
    <div class="small-container">
      <div class="box">
        <h2>{{ $t("button.Login") }}</h2>
        <form>
          <div class="form-group" :class="error.email ? 'error' : ''">
            <input
              type="email"
              v-model="email"
              :placeholder="$t('placeholder.EnterEmail')"
              class="form-control"
            />
            <span class="error-txt" v-if="error.email">{{ error.email }}</span>
          </div>
          <div class="form-group" :class="error.password ? 'error' : ''">
            <input
              type="password"
              :placeholder="$t('placeholder.Enterpassword')"
              class="form-control"
              v-model="password"
            />
            <span class="error-txt" v-if="error.password">{{
              error.password
            }}</span>
          </div>
          <div class="btn-innr">
            <input class="btn" :value="$t('button.Login')" @click="login" />
          </div>
          <div class="divider"></div>
          <div class="btn-innr mb-15">
            <a class="btn outline" @click="$router.replace('/register')">{{
              $t("button.Register")
            }}</a>
          </div>
          <a class="frgt-txt" @click="$router.replace('/forgot-password')">{{
            $t("login.forgotPassword")
          }}</a>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
import CommonService from "@/services/CommonService";
import LoginValidation from "@/Validation/LoginValidation";
import themes from "@/mixins/themes";
export default {
  name: "Login",
  inject: ["common"],
  mixins: [themes],
  data() {
    return {
      email: "",
      password: "",
      error: {},
      validateOnce: false,
    };
  },
  created() {
    this.CommonService = new CommonService();
  },
  watch: {
    "common.state.SelectedLang": function (newVal, oldVal) {
      if (
        (newVal == "KO" && oldVal == "EN" && this.validateOnce == true) ||
        (newVal == "EN" && oldVal == "KO" && this.validateOnce == true)
      ) {
        this.login();
      }
    },
  },
  methods: {
    checkError() {
      let credential = {
        email: this.email,
        password: this.password,
      };
      const { isInvalid, error } = LoginValidation(credential);
      this.validateOnce = true;
      if (isInvalid) {
        this.error = error;
        return false;
      } else {
        this.error = {};
        return true;
      }
    },

    login() {
      if (!this.checkError()) {
        return;
      } else {
        this.CommonService.getLogin(this.email, this.password).then((res) => {
          if (res.response) {
            if (res.response.status == 400) {
              if (res.response.data.error.password) {
                this.error.password = res.response.data.error.password;
              }
              if (res.response.data.error.email) {
                this.error.email = res.response.data.error.email;
              }
            }
          } else {
            if (res.status == 200) {
              //   console.log("login res", res.data);
              this.common.state.userId = res.data.user_id;
              this.common.state.name = res.data.username;
              localStorage.setItem("token", res.data.token);
              localStorage.setItem("uid", res.data.user_id);
              localStorage.setItem("uname", res.data.username);
              localStorage.setItem("tokenexpiresAt", res.data.token_expiry);
              localStorage.setItem("userType", res.data.user_type);
              localStorage.setItem("profileImage", res.data.profile_image);
              // const storedTheme = res.data.theme;
              // if (storedTheme == "light") {
              //   localStorage.setItem("theme-colour", "theme-light");
              //   this.$emit('on-current-theme-change', "theme-light")
              // } else {
              //   localStorage.setItem("theme-colour", "theme-dark");
              //   this.$emit('on-current-theme-change', "theme-dark")
              // }
              this.$router.push("/");
            }
          }
        });
      }
    },
  },
};
</script>