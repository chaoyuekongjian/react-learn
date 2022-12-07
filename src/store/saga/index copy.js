import { call, delay, select, fork } from "../../redux-saga/effects";


function* test(arg) {

}

export default function* (a, b, c) {
    const task = yield fork(test, 123, 234)
}