import axios from 'axios';
import config from '../../config';

const initDashboard = async () => {
    const reqUrl = config.getBaseUrl() + '/admin/init';
    return await axios.get(reqUrl);
};

export default { initDashboard };
