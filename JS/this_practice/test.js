var arrayObject = {
  0: 'name',
  1: 'age',
  2: 'id',
  length: 3
}
let arr = []
for(let item of arrayObject) {
  arr.push(item)
}
console.log(arr)