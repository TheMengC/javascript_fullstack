var arr = [-2,1,-3,4,-1,2,1,-5,4]
function maxSunArray(nums) {
  let thisSum;
  let maxSum = -Number.MAX_VALUE;
  for(let i = 0; i < nums.length; i ++) {
    for(let k = i; k < nums.length; k ++) {
      // end: k start: i
      thisSum = 0;
      for (let j = i; j <= k; j++) {
        thisSum += nums[j]
      }
      if (thisSum > maxSum) {
        maxSum = thisSum
      }
    }
  }
  return maxSum
}
console.log(maxSunArray(arr))