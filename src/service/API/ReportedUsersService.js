import axios from 'axios';
export default class ReportedUsersService {



    async getreportedUsersList(obj) {
        var params = new URLSearchParams(obj).toString();
        return await axios.get(`admin/report/report-user-list?${params}`)
            .then((res) => res)
            .catch((err) => err)

    }

}