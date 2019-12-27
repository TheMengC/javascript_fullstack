// const add = (a: number, b?: number): number => a + (b ? b : 0)



//函数的重载

interface Directions {
  top: number,
  right: number,
  buttom: number,
  left: number
}
function assigned(all: number): Directions 
function assigned(topAndBottom: number,leftAndRight: number): Directions 
function assigned(top: number,right: number,buttom:number,left: number): Directions 

function assigned(a: number, b?: number, c?: number, d?: any) {
  if(b === undefined && c === undefined && d === undefined) {
    b = c = d = a
  } else if (c === undefined && d === undefined) {
    c = a
    d = b
  }
  return {
    top: a,
    right: b,
    buttom: c,
    left: d
  }
}
assigned(1)
assigned(1, 2)
// assigned(1, 2, 3)
assigned(1, 2, 3, 4)