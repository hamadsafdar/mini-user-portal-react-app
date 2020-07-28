import axios from 'axios';
import config from '../config';

async function fetchInfo() {
	const reqUrl = `${config.getBaseUrl()}/fetch-info`;
	return await axios.get(reqUrl);
}

async function register(creds) {
	const reqUrl = `${config.getBaseUrl()}/register`;
	return await axios.post(reqUrl, creds);
}

async function authenticate(creds) {
	const reqUrl = `${config.getBaseUrl()}/authenticate`;
	return await axios.post(reqUrl, creds);
}

export { fetchInfo, register, authenticate };
