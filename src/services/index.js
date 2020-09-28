import axios from 'axios';
import config from '../config';

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

export { fetchInfo, authenticate };
