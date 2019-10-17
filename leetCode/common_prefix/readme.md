 - leetcode  是大厂算法题的来源
   去掉部分，str[0]  str[01] str[02] ...str[0minLen]
   for(let i = 0; i < strs[i].length; i++){
       strs[i].startsWith(str[02])
   }
   从后面开始  [0minLen]  [0minLen-1]
   和从前面查找概率一样，   从中间开始找  二分查找

- 二分查找 
  每次从中间查找， 符合概率  每次排除一半的元素
  low high middle 重复去做计算， 并相应的调整

  位移计算  >> 2 除2  取整
  算法 时间复杂度  O（n）  log2N
    