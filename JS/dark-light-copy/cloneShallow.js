function cloneShallow(source) {
  var target = {}
  for (var key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      // target.key || target[key]  一样
      target[key] = source[key]
    }
  }
  return target
}

let a = {
  name: 'wn',
  book: {
    title: 'You do not know js',
    price: '45'
  }
}

let b = cloneShallow(a)
a.name = '蜗牛'
a.book.price = '55'
console.log(b)