// enum Direction {
//   Up = 'Up',
//   Down = 'Down',
//   Left = 'Left',
//   Right = 'Right'
// }
// console.log(Direction['Left'])

//异构枚举
// enum yg {
//   No = 0,
//   Yes = 'Yes'
// }

// 反向映射  key <=> value
// enum Direction {
//   Up,
//   Down,
//   Left,
//   Right
// }

// // var obj = {
// //   name : 'wn'
// // }
// // obj['name']
// console.log(Direction[Direction['Up']])


// 联合枚举
// enum Direction {
//   Up = 'Up',
//   Down = 'Down',
//   Left = 'Left',
//   Right = 'Right'
// }
// enum Direction {
//   Up,
//   Down,
//   Left,
//   Right
// }
// const aaa: number = 0
// console.log(aaa === Direction['Up'])

// type c = 0
// declare let bbb:c
// // bbb = 1
// bbb = Direction['Up']
// console.log(bbb)

// enum Direction {
//   Up,
//   Down,
//   Left,
//   Right
// }
// declare let aaa:Direction

// enum Animal {
//   Dog,
//   Cat
// }
// aaa = Direction.Up
// aaa = Animal.Dog



enum Direction {
  Up,
  Down,
  Left,
  Right
}

enum Direction {
  Center = 1
}