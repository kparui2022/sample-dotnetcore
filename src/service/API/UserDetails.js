import axios from 'axios';
export default class UserDetails {

    async getUserDetails(id) {

        return await axios.get(`admin/user/profile-details/${id}`)

    }

    async getuserdetailList(obj) {
        var params = new URLSearchParams(obj).toString();
        console.log(params)
        var id = localStorage.getItem('id')
        console.log(id)
        return await axios.get(`admin/user/user-created-chatrooms/${id}?${params}`)
            .then((res) => res)
            .catch((err) => err)


    }
    // async getuserdetailList(id) {

    //     return await axios.get(`admin/user/user-created-chatrooms/${id}`)

    // }
}