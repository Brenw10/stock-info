import axios from 'axios';
import { endpoint } from '../core/parameters';

function getUsers() {
  return axios.get(endpoint.concat('/users'))
    .then(response => response.data);
}

export default { getUsers };