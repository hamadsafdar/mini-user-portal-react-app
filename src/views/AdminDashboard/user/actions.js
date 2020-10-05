import constants from './constants';
import services from './services';
import { miscActions } from '../../../common';

const { failure, request, success } = miscActions;

const fetchAll = () => {
    const fetchAllSuccess = (users) => ({
        type: constants.FETCH_ALL,
        payload: users
    });

    return async (dispatch) => {
        dispatch(request());
        try {
            const users = await (await services.fetchAll()).data.users;
            dispatch(success());
            dispatch(fetchAllSuccess(users));
        } catch (error) {
            dispatch(failure(error));
        }
    };
};

const fetch = () => {
    const fetchSuccess = (user) => ({
        type: constants.FETCH_ALL,
        payload: user
    });

    return async (dispatch) => {
        dispatch(request());
        try {
            const user = await (await services.fetchAll()).data.users;
            dispatch(success());
            dispatch(fetchAllSuccess(users));
        } catch (error) {
            dispatch(failure(error));
        }
    };
};

const create = (user) => {
    const createSuccess = () => ({
        type: constants.CREATE
    });

    return async (dispatch) => {
        dispatch(request());
        try {
            await services.create(user);
            dispatch(success());
            dispatch(createSuccess());
        } catch (error) {
            dispatch(failure(error));
        }
    };
};

export default { fetchAll, create };
