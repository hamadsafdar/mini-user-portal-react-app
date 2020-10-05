import constants from './constants';

const request = () => ({ type: constants.REQUEST });

const success = () => ({ type: constants.SUCCESS });

const failure = (error) => ({ type: constants.FAILURE, payload: error });

export default { request, success, failure };
