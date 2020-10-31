import { take, put } from "redux-saga/effects";
import axios from "axios";

import { history } from "./history";
import {
    REQUEST_DATA,
} from "./consts";
import { setState } from "./actions";
const url = "http://localhost:7777";

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
