//时间复杂度为n 和空间复杂度都为1

//三次翻转
// [0, n-k-1]
// [n-k, n-1]
// [0, n-1]
var list  = [1, 2, 3, 4, 5, 6, 7], k = 2
function reverse(list, start, end){
  let t = null
  while (start < end) {
    t = list[start]
    list[start] = list[end]
    list[end] = t
    start ++
    end --
  }
}

function RShift(list, k) {
  const n = list.length
  if(k % n === 0) {return list}
  reverse(list, 0, n-k-1)
  reverse(list, n-k, n-1)
  reverse(list, 0, n-1)
  return list
}
console.log(RShift(list, 2))