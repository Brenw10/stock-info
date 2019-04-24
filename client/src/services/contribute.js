import axios from 'axios';
import { endpoint } from '../core/parameters';

function setContribute(userId, data) {
  return axios.post(endpoint.concat(`/contribute/${userId}`), data)
    .then(response => response.data);
}

export default { setContribute };