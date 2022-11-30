import { DECREASE, INCREASE } from "./action-type";

/**
 * 得到一个用于增加数据的action
 */
export function getIncreaseAction() {
  return {
    type: INCREASE
  }
}

/**
 * 得到一个用于减少数据的action
 */
 export function getDecreaseAction() {
  return {
    type: DECREASE
  }
}