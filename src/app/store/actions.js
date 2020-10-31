import {
    REQUEST_TASK_CREATION,
    REQUEST_DATA,
    CREATE_TASK,
    SET_STATE,
} from "./consts";

export const requestTaskCreation = ({ name, group, desc }) => ({
    type: REQUEST_TASK_CREATION,
    name,
    group,
    desc,
});

export const createTask = (id, group, name, desc) => ({
    type: CREATE_TASK,
    id,
    name,
    group,
    desc,
});

export const requestData = () => ({
    type: REQUEST_DATA,
});

export const setState = (state = {}) => ({
    type: SET_STATE,
    state,
});
