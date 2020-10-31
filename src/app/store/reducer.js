import { combineReducers } from "redux";
import { SET_STATE } from "./consts";

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
        }
        return issues;
    },
});
