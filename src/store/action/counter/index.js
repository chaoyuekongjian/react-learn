
export const INCREASE = Symbol('increase')
export const DECREASE = Symbol('decrease')


export function increase() {
  return { type: INCREASE }
}

export function decrease() {
  return { type: DECREASE }
}