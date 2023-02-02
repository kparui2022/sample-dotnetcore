//import 
import axios from 'axios';

export default class AddNewMovieService {

    // title search list
    async getTitleSearchList() {
        return await axios.get(`/title/title-search-by-list`).then((res) => res).catch((err) => err);
    }

    // search movie title
    async searchMovieTitle(title_type, search_type, search_text, sort_by, page, limit) {
        return await axios.post(`/search/search-title-to-add`,
            {
                title_type: title_type,
                search_type: search_type,
                search_text: search_text,
                sort_by: sort_by,
                page: page,
                limit: limit
            }).then((res) => res).catch((err) => err);
    }

    // status list
    async getStatusList(type) {
        return await axios.get(`/title/title-status-list`, { params: { type: type } })
            .then((res) => res)
            .catch((err) => err)
    }

    // certification list
    async getCertificationList(type) {
        return await axios.get(`/title/certification-list`, { params: { type: type } })
            .then((res) => res)
            .catch((err) => err)
    }

    // title search connection list
    async getConnectionList(search_text, type) {
        return await axios.get(`/title/title-search-for-connections`, { params: { search_text: search_text, search_type: type } })
            .then((res) => res)
            .catch((err) => err)
    }

    // ott service provider list
    async getServiceProviderList(site_language) {
        return await axios.get(`/title/ott-service-provider-list`, { params: { site_language: site_language } })
            .then((res) => res)
            .catch((err) => err)
    }

    // original work list
    async getOriginalWorkList() {
        return await axios.get(`/title/original-work-type-list`).then((res) => res).catch((err) => err);
    }

    // country list
    async getCountryList() {
        return await axios.get(`/country/list`).then((res) => res).catch((err) => err);
    }

    // add primary details
    async addPrimaryDetails(data) {
        return await axios.post(`/title/add-movie-primary-details`, { ...data }).then((res) => res).catch((err) => err);
    }

    // credit search lict
    async creditPeopleSearchList(site_language, search_text) {
        return await axios.post(`/title/credit-people-search-list`, { site_language: site_language, search_text: search_text }).then((res) => res).catch((err) => err);
    }

    // credit job title list
    async creditJobTitleList(site_language) {
        return await axios.get(`/title/job-title-list`, { params: { site_language: site_language } }).then((res) => res).catch((err) => err);
    }

    // add credit details
    async addCreditDetails(data) {
        return await axios.post(`/title/add-credit-details`, { ...data }).then((res) => res).catch((err) => err);
    }

    //  credit request list
    async creditRequestList(draft_request_id, site_language, title_type, credit_type, season_id) {
        return await axios.post(`/title/cast-crew-request-list`,
            {
                draft_request_id: draft_request_id,
                site_language: site_language,
                title_type: title_type,
                credit_type: credit_type,
                season_id: season_id
            }).then((res) => res).catch((err) => err);
    }

    // add media details
    async addMediaDetails(data) {
        return await axios.post(`/title/add-media-details`, { ...data }).then((res) => res).catch((err) => err);
    }
}