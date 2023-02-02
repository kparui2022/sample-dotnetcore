import axios from 'axios';
export default class UserService {



    async getuserList(obj) {
        var params = new URLSearchParams(obj).toString();
        return await axios.get(`admin/user/users?${params}`)
            .then((res) => res)
            .catch((err) => err)

    }

    async getExceluserFinal(obj) {
        var params = new URLSearchParams(obj).toString();
        return await axios.get(`admin/user/download-users-excel?${params}`,{responseType:"arraybuffer"})
            .then((res) => res)
            .catch((err) => err)


    }



    async getuserdetails(id) {

        return await axios.get(`admin/user/profile-details/${id}`)

    }

}