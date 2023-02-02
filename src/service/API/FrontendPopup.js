import axios from 'axios';

export default class FrontendPopup {
    async frontendpopuplist() {
        return await axios.post(`/admin/frontPopupManagment/`).then((res) => res.data.data.frontPopupManagements);
    }

    async frontendpopupedit(ids) {
        return await axios.post(`/admin/frontPopupManagment/id`,{id:ids,}).then((res) => res.data.data[0]);
    }  

    async editpopup() {
        return await axios.post(`/admin/frontPopupManagment/edit`).then((res) => res);
    }  
}
