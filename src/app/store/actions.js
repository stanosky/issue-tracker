import {
    REQUEST_DATA,
    SET_STATE,
} from "./consts";

export const requestData = () => ({
    type: REQUEST_DATA,
});

export const setState = (state = {}) => ({
    type: SET_STATE,
    state,
});
