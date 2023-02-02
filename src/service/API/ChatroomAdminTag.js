import axios from 'axios';
export default class ChatroomAdminTag {



    async getadmintagList(obj) {
        var params = new URLSearchParams(obj).toString();
        return await axios.get(`admin/tag/all-tags?${params}`)
            .then((res) => res)
            .catch((err) => err)

    }



    // async admintagchange_status(obj) {
    //     var params = new URLSearchParams(obj).toString();
    //     console.log(params)
    //     var id = localStorage.getItem('id')
    //     console.log(id)
    //     return await axios.post(`admin/tag/change-status/${id}`)
    //         .then((res) => res)
    //         .catch((err) => err)


    // }

    async admintagchange_status(data) {

        return await axios.post('admin/tag/change-status', data);

    }

    // async getExcelAdminFinal() {
    //     return await axios({
    //         url: `admin/tag/download-admin-tags/`,
    //         method: 'GET',
    //         responseType: 'blob', // important

    //     }).then((res) => res)
    // }


    async getExcelAdminFinal(obj) {
        var params = new URLSearchParams(obj).toString();
        console.log(params)
        return await axios.get(`/admin/tag/download-admin-tags?${params}`,{responseType:"arraybuffer"})
            .then((res) => res)
            .catch((err) => err)


    }



    async delete(data) {

        return await axios.delete('admin/tag/tags/', data);

    }

}