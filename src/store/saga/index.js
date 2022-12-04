import { call } from "../../redux-saga/effects";


function test(arg) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(arg)
        }, 1000);
    })
}

export default function* (a, b, c) {
    const result = yield call(test, 'abc')
    console.log(result)
}