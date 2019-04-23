import axios from 'axios';
import { endpoint } from '../core/parameters';

function setRedeem(userId, data) {
  return axios.post(endpoint.concat(`/redeem/${userId}`), data)
    .then(response => response.data);
}

export default { setRedeem };