// function Person(name) {
//   this.name = name
// }

// let p = new Person('wn')
// // p.__proto__ = Person.prototype
// // console.log(p.__proto__)
// // console.log(Person.__proto__)
// // console.log(Function.__proto__)

// var foo = {}
// var foo = new Object()
// var F = function() {}
// Object.prototype.a = 'valA'
// Function.prototype.b = 'valB'
// console.log(foo.a)
// console.log(foo.b)


// function Person(name) {
//   this.name = name
//   return 1
// }

// let p = new Person('wn')
// console.log(p)

// 构造函数遇上return  其他值都无关紧要 只有返回值为对象时  才会返回

Array.prototype.method = function () {}
var myArray = [1, 2, 3, 4, 5, 6, 7]
myArray.name = '蜗牛'
// console.log(myArray.method)
for (let index in myArray) {
  console.log(index)
}

// for in
// 1. index是索引，不能直接进行集合运算
// 2. 遍历的顺序可能不是按照实际数据的内部顺序进行的
// 3. 使用for in 会遍历数组的所有可枚举属性，包括原型

// for of
// 1. 遍历的是数组的元素
// 2. 遍历的不包括数组的原型和索引