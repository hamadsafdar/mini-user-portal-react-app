import axios from 'axios';
import config from '../../../config';

async function fetchAll() {
    const reqUrl = `${config.getBaseUrl()}/admin/group`;
    return await axios.get(reqUrl);
}

async function fetch(groupId) {
    const reqUrl = `${config.getBaseUrl()}/admin/group/${groupId}`;
    return await axios.get(reqUrl);
}

async function remove(groupId) {
    const reqUrl = `${config.getBaseUrl()}/admin/group/${groupId}`;
    return await axios.delete(reqUrl);
}

async function create(group) {
    const reqUrl = `${config.getBaseUrl()}/admin/group`;
    return await axios.post(reqUrl, group);
}

async function modify() {}

export default { fetchAll, fetch, remove, create, modify };
