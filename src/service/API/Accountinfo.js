import axios from 'axios';
export default class Accountinfo {

    async getAccountinfo(id) {

        return await axios.get(`admin/user/profile-details/${id}`)

    }
}