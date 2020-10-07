import constants from './constants';
import services from './services';
import { miscActions } from '../../../common';

const { failure, request, success, init } = miscActions;

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

const remove = (userId) => {
    const removeSuccess = (userId) => ({
        type: constants.DELETE,
        payload: userId
    });

    return async (dispatch) => {
        dispatch(request());
        try {
            const user = await services.remove(userId);
            dispatch(success());
            dispatch(removeSuccess(userId));
            dispatch(fetchAll());
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
            dispatch(fetchAll());
        } catch (error) {
            dispatch(failure(error));
        }
    };
};

const edit = (newOptions) => {
    const editSuccess = () => ({
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

export default { fetchAll, create, remove };
