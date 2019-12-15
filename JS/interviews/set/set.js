// set
// var a = new Set() //类是数组，成员的值是唯一的

// Array.from([2, 3, 4, 5, 6, 4, 2, 3]).forEach(x => a.add(x))

// for (let i of a) {
//   // console.log(i)
// }

// const items = new Set([1, 2, 3, 4, 5, 5, 5, 2])
// console.log(items.size)



// 数组去重 set用法  set也能拿来做字符串的去重
// [...new Set(array)]




// let set = new Set()
// let a = NaN
// let b = NaN
// set.add(a)
// set.add(b)

//js中 NaN 和 NaN 是不等的  set中则相等




// set.add({})
// console.log(set.size)
// set.add({})
// console.log(set.size)

// js中 {} 和 {} 是相等的  set中则不相等




// let s = new Set()
// s.add(1).add(2).add(2)
// console.log(s.size)
// console.log(s.has(1))

// set中 has() 判断set中是否存在某值
// set中 delete() 删除set中的某值

// s.delete(2)
// console.log(s.has(1))



// const item = new Set([1, 2, 3, 4, 5])
// const arr = [...item]
// const array = Array.from(item)
// console.log(array)
// console.log(arr)

// set能够转换成数组




// let set = new Set(['red', 'green', 'blue'])
// for (let item of set.keys()) {
//   // console.log(item)
// }

// for (let item of set.values()) {
//   // console.log(item)
// }

// for (let item of set) {
//   console.log(item)
// }

// for (let item of set.entries()) {
//   // console.log(item)
// }

// console.log(Set.prototype[Symbol.iterator] === Set.prototype[Symbol.iterator])

// set.forEach((value, key) => {
//   console.log(key + ':' + value)
// })




let oSet = new Set([1, 2, 3])
// oSet = [...oSet].map(item => item * 2)
// oSet = [...oSet].filter(x => (x % 2) == 0)
// console.log(oSet)

// set 可以间接使用map(),filter(), 不能直接使用




let b = new Set([4, 3, 2])
//并集
let union = new Set([...oSet, ...b])
console.log(union)

//交集
let interset = new Set([...oSet].filter(x => b.has(x)))
console.log(interset)

let difference = new Set([...oSet].filter(x => !b.has(x)))
console.log(difference)



