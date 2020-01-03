let arr = [1, 2, 3, 4, 7, 10, 11, 13, 15, 18, 20, 23]

function search(arr, item) {
  let low = 0
  let high = arr.length - 1
  let mid
  let element
  while (low <= high) {
    mid = Math.floor((low + high) / 2)
    element = arr[mid]
    if(element < item) {
      low = mid + 1
    } else if(element > item) {
      high = mid - 1
    } else {
      return mid
    }
  }
  return -1
}
console.log(search(arr, 20))