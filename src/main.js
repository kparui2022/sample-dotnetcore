import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import '@/assets/styles/style.scss';
import i18n from './config/i18n';
import './config/axios-interceptor';
import { vfmPlugin } from 'vue-final-modal'
import Pagination from 'v-pagination-3';


const app = createApp(App)

app.use(router)
app.use(i18n)
app.use(vfmPlugin)
app.mount('#app');
app.component('pagination', Pagination);
