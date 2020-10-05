import { stripTrailingSlash } from 'history/PathUtils';
import constants from './constants';

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case constants.REQUEST:
            return { ...state, isLoading: true };
        case constants.SUCCESS:
            return { ...state, isLoading: false };
        case constants.FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                error: action.payload
            };
        default:
            return state;
    }
};
