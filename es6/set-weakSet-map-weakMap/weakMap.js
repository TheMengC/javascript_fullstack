// const wm = new WeakMap()
// const key = {foo: 1}
// wm.set(key, 2)
// console.log(wm)

// const k1 = [1, 2, 3]
// const k2 = [4, 5, 6]
// const wm2 = new WeakMap([[k1, 'foo'],[k2, 'bar']])
// console.log(wm2.get(k2))

// const map = new WeakMap()
// map.set(1, 2)
// map.set(null, 2)
// console.log(map.get(1))  //报错  因为1  不是Object
// console.log(map.get(null))
// WeakMap 只接受对象作为键名  不接受其他类型的值作为键名(null除外)

// const el = document.getElementById('foo')
// const e2 = document.getElementById('bar')
// const arr = [
//   [e1, 'foo元素'],
//   [e2, 'bar元素']
// ]

// // 当不需要e1和e2的时候， 不需手动删除
// arr[0] = null
// arr[1] = null
// // ----------------------------------------------------
// const wm = new WeakMap()
// const element = document.getElementById('test')
// wm.set(element, 'some information')
// wm.get(element)



const wm = new WeakMap()
let key = {}
let obj = {foo: 1}

wm.set(key, obj)
console.log(wm.get(key))
obj = null
console.log(wm.get(key))
// WeakMap 弱引用的只是键名  不是键值

console.log(wm.size)
// WeakMap 没有size, forEach， clear方法

// let myElement = document.getElementById('logn')
// let myWeakMap = new WeakMap()

// myWeakMap.set(myElement, {timesClicked: 0})

// myElement.addEventListener('click', function() {
//   let logoData = myWeakMap.get(myElement)
//   logoData.timesClicked ++
// })