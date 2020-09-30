import axios from 'axios';
import config from '../config';

async function fetchAll() {
    const reqUrl = `${config.getBaseUrl()}/admin/application`;
    return await axios.get(reqUrl);
}

async function create(application) {
    const reqUrl = `${config.getBaseUrl()}/admin/application`;
    return await axios.get(reqUrl, application);
}

async function remove(appId) {
    const reqUrl = `${config.getBaseUrl()}/admin/application/${appId}`;
    return await axios.delete(reqUrl);
}

async function fetch(appId) {
    const reqUrl = `${config.getBaseUrl()}/admin/application/${appId}`;
    return await axios.get(reqUrl);
}

async function modify() {}

export default { fetchAll, fetch, create, remove, modify };
