global.gc()   //垃圾回收
console.log(process.memoryUsage())

// 引用计数
let array = new Array(4 * 1024)
let map = new Map()
// WeakMap 即便 key 引用这个 array  但是 垃圾回收不把它考虑在内 依然回收Array
// let map = new WeakMap()
map.set(array, 4)
array = null
global.gc();
console.log(process.memoryUsage())