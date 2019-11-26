var list = [-1, -100, 3, 99], k = 2

// function RShift(list, k) {
//   const copy = [...list]
//   const n = list.length
//   for(let i = 0; i < n; i ++) {
//     list[i] = copy[(k + i) % n]
//   }
//   return list
// }
// console.log(RShift(list, k))



//空间复杂度换时间复杂度
function RShift(list, k) {
  const copy = [...list]
  const n = list.length
  if(k % n === 0) return list

  let cnt = Math.abs(k > 0 ? k % n : n + (k % n))
  let t = null
  while (cnt --) {
    t = list[n - 1]
    for (let i = n - 1; i > 0; i --) {
      list[i] = list[i - 1]
      console.log(list)
    }
    list[0] = t
  }
  return list
}
console.log(RShift(list, k))