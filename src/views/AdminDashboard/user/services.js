import axios from 'axios';
import config from '../config';

async function fetchAll() {
    const reqUrl = `${config.getBaseUrl()}/admin/user`;
    return await axios.get(reqUrl);
}

async function fetch(userId) {
    const reqUrl = `${config.getBaseUrl()}/admin/user${userId}`;
    return await axios.get(reqUrl);
}

async function remove(userId) {
    const reqUrl = `${config.getBaseUrl()}/admin/user${userId}`;
    return await axios.delete(reqUrl);
}

async function create(user) {
    const reqUrl = `${config.getBaseUrl()}/admin/user`;
    return await axios.post(reqUrl, user);
}

async function modify() {}

export default { fetchAll, fetch, remove, create, modify };
