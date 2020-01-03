arr = [13, 1, 2, 5, 3, 8, 11]
sum = 18

// function findSum(arr, sum) {
//   for(let i = 0; i < arr.length; i ++) {
//     for(let j = i + 1; j < arr.length; j ++) {
//       if(arr[i] + arr[j] === sum) {
//         console.log(i, j, arr[i], arr[j])
//       }
//     }
//   }
// }
// findSum(arr, sum)

function findSum(arr, sum) {
  let obj = {}
  arr.forEach((v, i) => {
    if(String(v) in obj) {
      console.log('找到了' + obj[v],v)
    }
    obj[sum - v] = i
  })
}
findSum(arr, sum)