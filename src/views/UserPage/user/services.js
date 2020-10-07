import axios from 'axios';
import config from '../../../config';

async function fetchApplications() {
    const reqUrl = config.getBaseUrl() + '/user/applications';
    const token = localStorage.getItem('token');
    return await axios.get(reqUrl, {
        headers: {
            Authorizatin: 'Bearer ' + token
        }
    });
}

async function fetchInfo() {
    const reqUrl = `${config.getBaseUrl()}/user/`;
    return await axios.get(reqUrl, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
}

async function authenticate(creds) {
    const reqUrl = `${config.getBaseUrl()}/user/authenticate`;
    return await axios.post(reqUrl, creds);
}

export { fetchApplications, authenticate, fetchInfo };
