import axios from 'axios';
export default class ChatroomUserTag {

    

    async getusertagList(obj) {
        var params = new URLSearchParams(obj).toString();
        return await axios .get(`admin/tag/users-tags/?${params}`)
        .then((res)=>res)
        .catch((err)=>err)
    
    }

    async getExcelUserFinal(obj) {
        var params = new URLSearchParams(obj).toString();
        console.log(params)
        return await axios.get(`/admin/tag/download-user-tags?${params}`,{responseType:"arraybuffer"})
            .then((res) => res)
            .catch((err) => err)


    }

    // async getExcelUserFinal() {
    //     return await axios({
    //         url: `admin/tag/download-user-tags/`,
    //         method: 'GET',
    //         responseType: 'blob', // important
            
    //     }).then((res) => res)  
    // }

    async getExcelUserdetailFinal(obj) {
        var params = new URLSearchParams(obj).toString();
        console.log(params)
        var id = localStorage.getItem('id')
        return await axios({
            url: `admin/tag/download-tag-chatroom-list/${id}`,
            method: 'GET',
            responseType: 'blob', // important
            
        }).then((res) => res)  
    }


    async getExceladmindetailFinal(obj) {
        var params = new URLSearchParams(obj).toString();
        console.log(params)
        var id = localStorage.getItem('id')
        return await axios({
            url: `admin/tag/download-tag-chatroom-list/${id}`,
            method: 'GET',
            responseType: 'blob', // important
            
        }).then((res) => res)  
    }


    async delete(data) {
       
        return await axios .delete('admin/tag/tags/', data);
    
        }
   
}