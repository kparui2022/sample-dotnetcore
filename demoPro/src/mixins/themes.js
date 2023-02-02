import CommonService from "@/services/CommonService";
import Toast from "@/alert/alert.js";
export default {
  data() {
    return {
      currentTheme: ""
    };
  },
  created() {
    this.CommonService = new CommonService();
  },
  mounted() {
    const storedTheme = localStorage.getItem("theme-colour");
    if (!storedTheme) {
      this.currentTheme = "theme-dark";
      localStorage.setItem("theme-colour", "theme-dark");
    } else {
      this.currentTheme = localStorage.getItem("theme-colour");
    }
  },
  methods: {
    toggleClass() {

      if (localStorage.getItem("token")) {
        const storedTheme = localStorage.getItem("theme-colour");
        if (!storedTheme) {
          localStorage.setItem("theme-colour", "theme-light");
          this.currentTheme = "theme-light";
        }
        if (storedTheme === "theme-dark") {
          localStorage.setItem("theme-colour", "theme-light");
          this.currentTheme = "theme-light";
        } else {
          localStorage.setItem("theme-colour", "theme-dark");
          this.currentTheme = "theme-dark";
        }

        let theme = '';

        if (this.currentTheme == 'theme-light') {
          theme = 'light';
        }
        else {
          theme = 'dark';
        }

        // this.CommonService.saveTheme(theme)
        //   .then((res) => {
        //     if (res.status == 200) {
        //       // Toast.fire({ title: res.data.message });
        //     }
        //   })
        //   .catch((err) => {
        //     return;
        //   });

      }
      else {
        const storedTheme = localStorage.getItem("theme-colour");
        if (!storedTheme) {
          localStorage.setItem("theme-colour", "theme-light");
          this.currentTheme = "theme-light";
        }
        if (storedTheme === "theme-dark") {
          localStorage.setItem("theme-colour", "theme-light");
          this.currentTheme = "theme-light";
        } else {
          localStorage.setItem("theme-colour", "theme-dark");
          this.currentTheme = "theme-dark";
        }
      }
    }
  }
};
