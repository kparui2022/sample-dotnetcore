<template>
  <div class="my-accout-otr">
    <div class="large-container">
      <div class="my-accout-box">
        <h2>{{ $t("contactUs.title") }}</h2>
        <p class="sm mrb">
          {{ $t("contactUs.info") }}
        </p>
        <div class="login-wrap p-o">
          <div class="form-box box">
            <form>
              <div class="form-group" :class="error.name ? 'error' : ''">
                <label>{{ $t("input_label.name") }}</label>
                <input
                  v-model="name"
                  type="text"
                  :placeholder="$t('placeholder.enter')"
                  class="form-control"
                />
                <span class="error-txt" v-if="error.name">{{
                  error.name
                }}</span>
              </div>
              <div class="form-group" :class="error.email ? 'error' : ''">
                <label>{{ $t("input_label.email") }}</label>
                <input
                  v-model="email"
                  type="email"
                  :placeholder="$t('placeholder.enter')"
                  class="form-control"
                />
                <span class="error-txt" v-if="error.email">{{
                  error.email
                }}</span>
              </div>
              <div class="form-group" :class="error.type ? 'error' : ''">
                <label>{{ $t("input_label.type") }}</label>
                <select class="form-control" v-model="type">
                  <option value="" disabled>
                    {{ $t("placeholder.select") }}
                  </option>
                  <option
                    v-for="(type, index) in Object.entries(type_list)"
                    :key="index"
                    :value="type[0]"
                  >
                    {{ type[1] }}
                  </option>
                </select>
                <span class="error-txt" v-if="error.type">{{
                  error.type
                }}</span>
              </div>
              <div class="form-group mb-24" :class="error.message ? 'error' : ''">
                <label>{{ $t("input_label.message") }}</label>
                <textarea
                  v-model="message"
                  :placeholder="$t('placeholder.EnterMessage')"
                  class="form-control hh"
                ></textarea>
                <span class="error-txt" v-if="error.message">{{ error.message }}</span>
              </div>
              <div class="btn-innr">
                <input
                  @click="submitContact"
                  class="btn"
                  :value="$t('button.send')"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommonService from "@/services/CommonService";
import ContactUsValidation from "@/Validation/ContactUsValidation";
import Toast from "@/alert/alert.js";
export default {
  name: "Contact",
  inject: ["common"],
  data() {
    return {
      type_list: [],
      name: "",
      email: "",
      type: "",
      message: "",
      validateOnce: false,
      error: {},
    };
  },
  created() {
    this.CommonService = new CommonService();
  },
  mounted() {
    this.typeList();
  },

  watch: {
    "common.state.SelectedLang": function (newVal, oldVal) {
      if (
        (newVal == "KO" && oldVal == "EN" && this.validateOnce == true) ||
        (newVal == "EN" && oldVal == "KO" && this.validateOnce == true)
      ) {
        this.submitContact();
      }
    },
  },

  methods: {
    typeList() {
      this.CommonService.contactTypeList()
        .then((res) => {
          if (res.status == 200) {
            this.type_list = res.data.type_list;
          }
        })
        .catch((err) => {
          return;
        });
    },

    checkError() {
      let credential = {
        email: this.email,
        name: this.name,
        type: this.type,
        message: this.message,
      };
      const { isInvalid, error } = ContactUsValidation(credential);
      this.validateOnce = true;
      if (isInvalid) {
        this.error = error;
        return false;
      } else {
        this.error = {};
        return true;
      }
    },

    submitContact() {
      if (!this.checkError()) {
        return;
      } else {
        this.CommonService.contactUs(
          this.name,
          this.email,
          this.type,
          this.message
        )
          .then((res) => {
            if (res.status == 200) {
              this.name = "";
              this.email = "";
              this.type = "";
              this.message = "";
              Toast.fire({ title: res.data.message });
            }
          })
          .catch((err) => {
            return;
          });
      }
    },
  },
};
</script>