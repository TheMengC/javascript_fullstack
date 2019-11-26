var arr = [-2,1,-3,4,-1,2,1,-5,4];
function maxSunArray(nums) {
  let i,k,thisSum;
  let maxSum = -Number.MAX_VALUE;
  for(i = 0; i < nums.length; i ++) {
    thisSum = 0;
    for(k = i; k < nums.length; k ++) {
      // end: k start: i
      thisSum += nums[k]
      // console.log(thisSum)
      if(thisSum > maxSum) {
        maxSum = thisSum
      }
    }
  }
  return maxSum
}
console.log(maxSunArray(arr))
