import { take, put } from "redux-saga/effects";
import { v4 } from "uuid";
import axios from "axios";

import { history } from "./history";
import {
    REQUEST_DATA,
    REQUEST_TASK_CREATION,
} from "./consts";
import { setState, createTask } from "./actions";
const url = "http://localhost:7777";

export function* issueCreationSaga() {
    while (true) {
        try {
            const { name, group, desc } = yield take(REQUEST_TASK_CREATION);
            const id = v4();
            yield put(createTask(id, group, name, desc));
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
