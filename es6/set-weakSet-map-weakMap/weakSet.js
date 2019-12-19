// const ws = new WeakSet()
// ws.add(1)
// ws.add({a: 1})
// console.log(ws)
// WeakSet是弱引用对象 用过一次会立刻被js自带的垃圾回收机制自动回收(提高效率) 只能存放对象



// const a = [[1, 2], [3, 4]]
// const ws = new WeakSet(a)

// console.log(ws)
// WeakSet可以接受一个数组或者类数组作为参数   该数组的所有成员   都会自动成为WeakSet 实例对象的成员
// 但是  传进来的数组的成员只能是对象  数组也是对象
// const b = [5, 6]
// const wn = new WeakSet(b)
// console.log(wn)


// const ws = new WeakSet()
// const obj = {}
// const foo = {}

// // ws.add(window)
// ws.add(obj)
// ws.add(foo)
// console.log(ws.has(obj))

// ws.delete(obj)
// console.log(ws.has(obj))

// console.log(ws)
// console.log(ws.size)

// ws.ForEach(item => {
//   console.log(item)
// })

// WeakSet没有size属性  所以它也不能遍历

const foos = new WeakSet()
// foos对实例的引用  不会被记录到内存回收机制中  所以删除实力的时候不用考虑foos 也不会出现内存泄漏
class Foo {
  constructor() {
    foos.add(this)
  }
  method() {
    if(!foos.has(this)) {
      throw new TypeError('error')
    }
  }
}
let faa = new Foo()
console.log(faa.method())
// 保证Foo的实例只能在Foo的实例上调用