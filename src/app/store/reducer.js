import { combineReducers } from "redux";
import { SET_STATE, CREATE_TASK } from "./consts";

let defaultState = {
    groups: [],
    issues: [],
};

export const reducer = combineReducers({
    groups: (groups = defaultState.groups, action) => {
        switch (action.type) {
            case SET_STATE:
                return action.state.groups;
        }
        return groups;
    },
    issues: (issues = defaultState.issues, action) => {
        switch (action.type) {
            case SET_STATE:
                return action.state.issues;
            case CREATE_TASK:
                return [
                    ...issues,
                    {
                        id: action.id,
                        name: action.name,
                        group: action.group,
                        desc: action.desc,
                    },
                ];
        }
        return issues;
    },
});
