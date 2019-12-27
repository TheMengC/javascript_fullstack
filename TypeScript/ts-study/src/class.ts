// 抽象类

// abstract class Animal {
//   abstract makeSound(): void
//   move(): void {
//     console.log('reaming this earch')
//   }
// }

// class Cat extends Animal {
//   makeSound() {
//     console.log('miao miao')
//   }
// }
// const cat = new Cat()
// cat.makeSound()

//访问限定符

class Cat {
  public run() {
    console.log('跑起来···')
  }
  // 只能在类中访问
  private eat() {
    console.log('吃起来···')
  }
  // 只能被类及其子类中访问
  protected sleep() {
    console.log('睡起来···')
  }
}
class GTR extends Cat {
  init () {
    this.run()
  }
}
// const cat = new Cat()
// cat.run()
// cat.eat()

// const car = new Cat()
// car.run()
const gtr = new GTR()
// gtr.sleep()



// class 可以作为接口

// export default class Carousel extends React.Components<Props, >
// export default class Props {
//   public children: Array<React.ReactElement<any>>
// }