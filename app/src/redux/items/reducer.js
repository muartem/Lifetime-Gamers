import * as R from 'ramda';
import Constants from "./constants";

export const INITIAL_STATE = {
    data: null,
    isLoading: false,
    error: null,
};


const handlers = {
    [Constants.ITEMS_REQUEST]: R.assoc('isLoading', true),

    [Constants.ITEMS_FETCH_SUCCESS]: (_, { payload }) => ({
        data: payload,
        error: null,
        isLoading: false,
    }),

    [Constants.ITEMS_FAILURE]: (_, { payload }) => ({
        data: null,
        error: payload,
        isLoading: false,
    }),

    [Constants.ITEMS_CREATE_SUCCESS]: (state, { payload }) => ({
        ...state,
        data: [
            payload,
            ...state.data,
        ],
    }),

    [Constants.ITEMS_RENAME_SUCCESS]: (state, { payload }) => ({
        ...state,
        data: [
            ...state.data.map((item) => (item.id === payload.id ? { ...item, title: payload.title } : item)),
        ],
    }),

    [Constants.ITEMS_COMPLETE_SUCCESS]: (state, { payload }) => ({
        ...state,
        data: [
            ...state.data.map((item) => (item.id === payload.id ? { ...item, completed: payload.completed } : item)),
        ],
    }),

    [Constants.ITEMS_DELETE_SUCCESS]:(state, { payload }) => ({
        ...state,
        data: [...state.data.filter((item) => item.id !== payload)],
    }),

    DEFAULT: (state) => state
};

export default(state = INITIAL_STATE, action) => {
    const handle = handlers[action?.type] || handlers.DEFAULT;
    return handle(state, action);
};
