import axios from 'axios';
export default class ChatroomService {



    async getpopularchatroomList(obj) {
        var params = new URLSearchParams(obj).toString();
        return await axios.get(`admin/chat/popular-chatrooms?${params}`)
            .then((res) => res)
            .catch((err) => err)

    }

    async getchartroomregiondropdown(obj) {
        var params = new URLSearchParams(obj).toString();
        return await axios.get(`admin/region/region-list?${params}`)
            .then((res) => res.data.data)
            .catch((err) => err)

    }

    async getExcelParticipantlistFinal(obj) {
        var params = new URLSearchParams(obj).toString();
        console.log(params)
        var id = localStorage.getItem('id')
        console.log(id)
        return await axios.get(`admin/chat/download-chatroom-participant/${id}?${params}`,{responseType:"arraybuffer"})
            .then((res) => res)
            .catch((err) => err)


    }

    async getExcelpopularlistFinal(obj) {
        var params = new URLSearchParams(obj).toString();
        console.log(params)
       
        return await axios.get(`admin/chat/download-popular-chatrooms-excel?${params}`,{responseType:"arraybuffer"})
            .then((res) => res)
            .catch((err) => err)


    }

    // async getExcelpopularlistFinal() {
    //     return await axios({
    //         url: `admin/chat/download-all-chatrooms-excel`,
    //         method: 'GET',
    //         responseType: 'blob', // important
            
    //     }).then((res) => res)  
    // }



    async viewpopularchatroomdetail(id) {

        return await axios.get(`admin/chat/chatroom-details/${id}`)

    }

    async participantlist(obj) {
        var params = new URLSearchParams(obj).toString();
        console.log(params)
        var id = localStorage.getItem('id')
        console.log(id)
        return await axios.get(`admin/chat/chatroom-participant-list/${id}?${params}`)
            .then((res) => res)
            .catch((err) => err)


    }


    async getchatroommessagelog(obj) {
        var params = new URLSearchParams(obj).toString();
        return await axios.get(`admin/chat/chat-history/?${params}`)
            .then((res) => res)
            .catch((err) => err)

    }

    

   

}