import {
    REQUEST_ISSUE_CREATION,
    REQUEST_ISSUE_UPDATE,
    REQUEST_DATA,
    CREATE_ISSUE,
    UPDATE_ISSUE,
    SET_STATE,
} from "./consts";

export const requestIssueCreation = ({ name, group, desc }) => ({
    type: REQUEST_ISSUE_CREATION,
    name,
    group,
    desc,
});

export const requestIssueUpdate = ({ id, name, group, desc }) => ({
    type: REQUEST_ISSUE_UPDATE,
    id,
    name,
    group,
    desc,
});

export const createIssue = (id, group, name, desc) => ({
    type: CREATE_ISSUE,
    id,
    name,
    group,
    desc,
});

export const updateIssue = ({ id, name, group, desc }) => ({
    type: UPDATE_ISSUE,
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
