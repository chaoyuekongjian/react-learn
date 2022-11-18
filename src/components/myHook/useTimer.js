import React, { useEffect, useState } from 'react'

/**
 * 
 * @param { Function } callback 回调函数
 * @param { number } duration 定时时间
 */
export default function useTimer(callback, duration = 1000) {
  useEffect(() => {
    const timer = setInterval(() => {
      callback();
    }, duration);
    return () => { // 返回一个函数  在组件销毁的时候会被调用
      clearInterval(timer)
      timer = null
    }
  }, []) // 使用hook的时候，如果没有严格按照hook的规则进行，eslint会给出一个警告 此处是依赖项不满足条件
}
