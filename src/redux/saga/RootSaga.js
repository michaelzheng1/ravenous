
import { fork, all } from "redux-saga/effects";
//import listenForLoginRequest from "./authSaga";

function* rootSaga() {
    yield all([
        //fork(listenForLoginRequest)
    ]);
}

export default rootSaga;