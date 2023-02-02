import axios from 'axios';
//samsung
export default class PasswordService {
    async changePassword(newp, current) {
        return await axios.post(`/admin/user/change-password`, {

            password: newp,
            current_password: current,
        }).then((res) => res)
    }

    async editInfos(id, name) {

        return await axios.patch(`/admin/user/users/${id, name}`)

    }


    async resetPassword(newp, email, code) {
        return await axios.post(`/admin/user/reset-password`, {

            password: newp,
            email: email,
            code: code,
        }).then((res) => res)
    }

}
