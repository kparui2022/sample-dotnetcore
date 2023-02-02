import axios from 'axios';
export default class ChatroomService {



    async getpopularchatroomList(obj) {
        var params = new URLSearchParams(obj).toString();
        return await axios.get(`admin/chat/all-chatrooms?${params}`)
            .then((res) => res)
            .catch((err) => err)

    }

    async getregionchatroomList(obj) {
        var params = new URLSearchParams(obj).toString();
        return await axios.get(`admin/region/regions?${params}`)
            .then((res) => res)
            .catch((err) => err)

    }

    async getdashboarddata() {
       
        return await axios.get(`/admin/dashboard/`)
            .then((res) => res)
            .catch((err) => err)

    }

}