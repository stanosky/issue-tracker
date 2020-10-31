import { combineReducers } from "redux";
import { SET_STATE, CREATE_ISSUE, UPDATE_ISSUE } from "./consts";

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
      case CREATE_ISSUE:
        return [
          ...issues,
          {
            id: action.id,
            name: action.name,
            group: action.group,
            desc: action.desc,
          },
        ];
      case UPDATE_ISSUE:
        return issues.map((issue) => {
          return issue.id === action.id
            ? {
                ...issue,
                name: action.name,
                group: action.group,
                desc: action.desc,
              }
            : issue;
        });
    }
    return issues;
  },
});
