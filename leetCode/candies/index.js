// es6新特性
const distributeCandies = function (candies) {
  let obj = {}
  var count = 0; //糖果种类数
  candies.forEach(function (item) {
    //如果出现过
    if (!obj[item]) {
      obj[item] = 1; //出现过了
      count ++;
    }
  });

  return count >= ( candies.length >> 1) ? (candies.length >> 1) : count
}
console.log(distributeCandies([1, 1, 2, 2, 3, 3]))