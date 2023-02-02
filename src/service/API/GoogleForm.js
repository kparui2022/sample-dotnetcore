import axios from 'axios';
export default class GoogleformService {
    async getGoogleFormList() {
        return await axios
            .post(`/admin/googleForm`, {
            })
            .then((res) => res.data.data.googleForms[0]);
    }
    
    async viewGoogleForm(ids) {
        return await axios
            .post(`/admin/googleForm/id`, {
                id: ids,
            })
            .then((res) => res.data.data[0]);
    }
    async editGoogleForm(ids,url,stat) {
        return await axios
            .put(`/admin/googleForm/edit`, {
                id:ids,
                googleFormUrl:url,
                status:stat
            })
            .then((res) => res);
    }
}
