export default function(...funcs) {
  if (funcs.length === 0) return args => args
  if (funcs.length === 1) return funcs[0]

  return funcs.reduce((a, b) => (...args) => a(b(...args)))
  // return function(...args) {
  //   let lastReturn = null
  //   const length = funcs.length
  //   for(let i = length - 1; i >= 0; i--) {
  //     const func = funcs[i]
  //     if (i === length) {
  //       lastReturn = func(...args)
  //       continue
  //     }
  //     lastReturn = func(lastReturn)
  //   }
  //   return lastReturn
  // }
}