import axios from 'axios';
import Toast from '../alert/alert.js';

window.axios = axios;
axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL; // live

axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    config.headers['x-api-key'] = 'b1d1I0p7A2Er2n0eD2b0As8c0kT8p2M9';
    config.headers['Access-Control-Allow-Origin'] = '*';
    if(localStorage.getItem('selectedLang')) {
        config.headers['Accept-Language'] = localStorage.getItem('selectedLang').toLowerCase();
    }
    if (token) {
        config.headers.token = `${token}`;
    }

    return config;
}, function (err) {
    return Promise.reject(err);
});

// Token expire redirection
axios.interceptors.response.use((response) => {
    return response
}, async function (error) {
    if (error.response.status === 403) {
        Toast.fire({ title: "Session Expired" });
        window.location.href = '/Login';
        localStorage.clear();
        return axios(originalRequest);

    }
    return Promise.reject(error);
});