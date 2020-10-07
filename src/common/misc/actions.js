import constants from './constants';
import services from './services';

const request = () => ({ type: constants.REQUEST });

const success = () => ({ type: constants.SUCCESS });

const failure = (error) => ({ type: constants.FAILURE, payload: error });

const init = () => {
    const initSuccess = (data) => ({
        type: constants.INIT,
        payload: data
    });

    return async (dispatch) => {
        dispatch(request());
        try {
            const appData = await (await services.initDashboard()).data;
            dispatch(success());
            dispatch(initSuccess(appData));
        } catch (error) {
            dispatch(failure(error));
        }
    };
};

export default { request, success, failure, init };
