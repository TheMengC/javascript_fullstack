// 实例属性和操作方法

// const map = new Map()
// map.set('foo', true)
// map.set('bar', false)

// console.log(map.size)


// map.set('abc', 123).set(22, 'abc').set(undefined, NaN)

// console.log(map.get(22))
// console.log(map.has(undefined))
// console.log(map.has(123))
// map.delete(22)
// map.clear()

// console.log(map)



// 遍历
// Map数据结构的遍历顺序一定会按照数据本身的顺序进行

// const map = new Map([
//   ['foo', 'no'],
//   ['bar', 'yes']
// ])

// console.log(map)
// console.log(map.keys())
// console.log(Object.prototype.toString.call(map.keys()))
// for(let key of map.keys()) {
//   console.log(key)
// }
// for(let value of map.values()) {
//   console.log(value)
// }
// for(let item of map.entries()) {
//   console.log(item[0], item[1])
// }

// console.log(map.prototype[Symbol.interator] === map.prototype.entries)




// Map转换为数组结构
// const map = new Map([
//   [1, 'one'],
//   [2, 'two'],
//   [3, 'three']
// ])

// [..map.keys()]
// [..map.values()]
// [..map.entries()]
// [..map()]

// map.forEach((value, key, map) => {
//   console.log(key + ':' + value, map)
// })



// Array.from(map.keys()).map((value) => {
//   console.log(`${value}`)
// })



// map转换成对象
// function setMapToObj(strMap) {
//   let obj = Object.create(null)
//   for (let [k, v] of strMap) {
//     obj[k] = v
//   }
//   return obj
// }
// const myMap = new Map()
// myMap.set('yes', true).set('no', false)
// console.log(setMapToObj(myMap))



// 对象转map
let obj = {
  'yes': true,
  'no': false
}

function setObjToMap(obj) {
  let strMap = new Map()
  // for(let item in obj) {
  //   // console.log(obj.item)
  //   strMap.set(item, obj[item])
  // }
  for(let item of Object.keys(obj)) {
    // console.log(item)
    strMap.set(item, obj[item])
  }
  return strMap
}
console.log(setObjToMap(obj))