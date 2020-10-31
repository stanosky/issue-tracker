import { take, put } from "redux-saga/effects";
import { v4 } from "uuid";
import axios from "axios";

import { history } from "./history";
import {
    REQUEST_DATA,
    REQUEST_ISSUE_CREATION,
    REQUEST_ISSUE_UPDATE,
} from "./consts";
import { setState, createIssue, updateIssue } from "./actions";
const url = "http://localhost:7777";

export function* issueCreationSaga() {
    while (true) {
        try {
            const { name, group, desc } = yield take(REQUEST_ISSUE_CREATION);
            const id = v4();
            yield axios.post(url + "/issue/new", {
                issue: {
                    id,
                    group,
                    name,
                    desc,
                },
            });
            yield put(createIssue(id, group, name, desc));
            history.push("/dashboard");
        } catch (e) {
            console.log(e);
        }
    }
}

export function* issueUpdateSaga() {
    while (true) {
        try {
            const issue = yield take(REQUEST_ISSUE_UPDATE);
            yield put(updateIssue(issue));
            history.push("/dashboard");
        } catch (e) {
            console.log(e);
        }
    }
}

export function* requestDataSaga() {
    while (true) {
        yield take(REQUEST_DATA);
        try {
            const { data } = yield axios.post(url + "/data");
            yield put(setState(data.state));
            history.push("/dashboard");
        } catch (e) {
            console.log(e);
        }
    }
}
