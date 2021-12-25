import * as R from 'ramda';
import Constants from "./constants";

export const INITIAL_STATE = {
    data: null,
    isLoading: false,
    error: null,
};


const handlers = {
    [Constants.ITEMS_FETCH_REQUEST]: R.assoc('isLoading', true),

    [Constants.ITEMS_FETCH_SUCCESS]: (_, { payload }) => ({
        data: payload,
        error: null,
        isLoading: false,
    }),

    [Constants.ITEMS_FETCH_FAILURE]: (_, { payload }) => ({
        data: null,
        error: payload,
        isLoading: false,
    }),

    [Constants.ITEMS_RENAME_SUCCESS]: (state, { payload }) => R.assoc('data', payload, state),

    [Constants.ITEMS_COMPLETE_SUCCESS]: (state, { payload }) => R.assoc('data', payload, state),

    [Constants.ITEMS_DELETE_SUCCESS]: (state, { payload }) => R.assoc('data', payload, state),

    DEFAULT: (state) => state
};

export default(state = INITIAL_STATE, action) => {
    const handle = handlers[action?.type] || handlers.DEFAULT;
    return handle(state, action);
};
