// const subPub = {
//   'price': [
//     () => {console.log(3)},
//     () => {console.log(4)}
//   ]
// }
// for(let i = 0; i < subPub.price.length; i ++) {
//   console.log('---', subPub.price[i])
//   subPub.price[i]()
// }

// function foo() {
//   console.log('foo')
// }
// //在 subPub  上面添加一个  value  为数组的key (foo)
// // 把foo放到数组去
// subPub.foo = [foo]
// console.log(subPub)




class Events {
  constructor() {
    this.listener = {};
  }
  on(key,fn) {
    if(!this.listener[key]){
      this.listener[key]= [fn];
    }
    this.listener[key].push(fn);
  }
  emit(key) {
    // console.log(this.listener)
    for(let i = 0; i < this.listener[key].length; i ++) {
      this.listener[key][i]();
    }
  }
}
const ev = new Events();
ev.on('price',() => {console.log(5)});
ev.on('price',() => {console.log(6)});
ev.on('paper',() => {console.log(7)});
ev.on('paper',() => {console.log(8)});
ev.emit('price'); //指行
ev.emit('paper');