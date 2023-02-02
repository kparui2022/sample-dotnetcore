import axios from 'axios';

export default {
   getCastDetails(data){
      return axios.post(`title/cast-crew-details`, {...data});
   }
}