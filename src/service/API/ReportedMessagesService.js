import axios from 'axios';
export default class ReportedMessagesService {



    async getreportedmessagesList(obj) {
        var params = new URLSearchParams(obj).toString();
        return await axios.get(`admin/report/report-message-list?${params}`)
            .then((res) => res)
            .catch((err) => err)

    }

    // async viewreportedmessagesdetailchatroommessage(obj) {
    //     var params = new URLSearchParams(obj).toString();
    //     return await axios.get(`admin/report/report-message-details/?${params}`)
    //         .then((res) => res)
    //         .catch((err) => err)

    // }

    async viewreportedmessagesdetail(id) {

        return await axios.get(`admin/report/report-message-details/${id}`)

    }

}