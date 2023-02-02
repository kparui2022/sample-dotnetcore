import axios from 'axios';
export default class ChatroomUserDetails {



    async getChatroomUserDetails(id) {

        return await axios.get(`/admin/tag/tag-details/${id}`)

    }


    async getedithistorylist(obj) {
        var params = new URLSearchParams(obj).toString();
        console.log(params)
        var id = localStorage.getItem('id')
        console.log(id)
        return await axios.get(`admin/tag/tags-history/${id}`)
            .then((res) => res)
            .catch((err) => err)


    }

    async getusertagdetailparticipant(obj) {
        var params = new URLSearchParams(obj).toString();
        console.log(params)
        var id = localStorage.getItem('id')
        console.log(id)
        return await axios.get(`/admin/tag/tag-chatroom-list/${id}?${params}`)
            .then((res) => res)
            .catch((err) => err)


    }


    async getusertagdetailDownloadExcel(obj) {
        var params = new URLSearchParams(obj).toString();
        console.log(params)
        var id = localStorage.getItem('id')
        console.log(id)
        return await axios.get(`/admin/tag/download-tag-chatroom-list/${id}?${params}`)
            .then((res) => res)
            .catch((err) => err)


    }

    // async getusertagdetailparticipant(id) {

    //     return await axios.get(`/admin/tag/tag-chatroom-list/${id}`)

    // }

}