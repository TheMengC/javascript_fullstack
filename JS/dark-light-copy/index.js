// let a = 'wn'
// let b = a
// a = '蜗牛'
// console.log(b)

// let a = {
//   name: 'wn',
//   book: {
//     title: 'You do not know js',
//     price: '45'
//   }
// }

// let b = a

// a.name = '蜗牛'
// a.price = '55'

// console.log(b)

// let a = {
//   name: 'wn',
//   book: {
//     title: 'You do not know js',
//     price: '45'
//   }
// }

// 对象的拼接既不是深拷贝  也不是浅拷贝  如果是对象中的基本数据类型那就是浅拷贝  如果是复杂数据类型(引用类型)就是深拷贝

// let b = Object.assign({}, a)
// a.name = '蜗牛'
// a.book.price = '55'
// console.log(b)

// let a = [0, '1', [2, 3]]
// let b = a.slice(1)
// a[1] = '22'
// a[2][0] = 4
// console.log(b)

let a = {
  name: 'wn',
  book: {
    title: 'You do not know js',
    price: '45'
  }
}
//将一个对象转换成字符串，在转换回对象  是深拷贝
let b = JSON.stringify(a)
let b = JSON.parse(JSON.stringify(a))
console.log(b)

a.name = '蜗牛'
a.book.price = '55'

console.log(b)
