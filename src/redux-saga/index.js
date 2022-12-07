
import runSaga from './run-saga'
import Channel from './channel'

/**
 * 创建saga中间件的函数
 * 
 */
export default function createSagaMiddleware() {
    function sagaMiddleware(store) {
        // 全局环境变量
        const env = {
            store,
            channel: new Channel() // 全局唯一的订阅频道
        }
        sagaMiddleware.run = runSaga.bind(null, env)

        return function (next) {
            return function (action) {
                const result = next(action)
                // 发布订阅
                env.channel.put(action.type, action)
                return result // 直接交给下一个中间件处理
            }
        }
    }
    return sagaMiddleware
}
