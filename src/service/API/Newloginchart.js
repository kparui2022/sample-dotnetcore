import axios from 'axios';
export default class Newloginchart {


  


    async getnewloginchart(obj) {
        var params = new URLSearchParams(obj).toString();
        return await axios.get(`admin/statistics/new-logins?${params}`)
            .then((res) => res)
            .catch((err) => err)

    }


    async getchatroomchart(obj) {
        var params = new URLSearchParams(obj).toString();
        return await axios.get(`admin/statistics/new-chatrooms?${params}`)
            .then((res) => res)
            .catch((err) => err)

    }

    




}