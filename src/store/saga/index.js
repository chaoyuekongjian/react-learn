import { call, delay, select } from "../../redux-saga/effects";


function test(arg) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(arg)
        }, 1000);
    })
}

export default function* (a, b, c) {
    // const result = yield call(test, 'abc')
    // console.log(result)
    // console.log(delay(1000))
    // const state = yield select(state => state.users)
    // console.log('123: ', state)
    // // yield delay(2000)
    // console.log('等待结束了')
}