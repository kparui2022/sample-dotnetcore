import axios from 'axios';

export default {
   getMediaDetails(data){
      return axios.post(`media/details`, {...data});
   }
}