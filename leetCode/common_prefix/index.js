function isCommonPrefix(strs, middle) {
    const prefix = strs[0].substring(0, middle);
    for(let i= 1; i < strs.length; i++) {
        if(!strs[i].starsWith(prefix)) 
           return false;
    }
    return true;
}
// function longestCommonPrefix(){

// }   
// 两种写法  或写出下面的
/** 
 * @author  smc
 * @func  返回最长公共子串
 * @param  strs  字符串数组
 * @return  字符中
*/


const longestCommonPrefix = (strs) => {
    //找出最短的字符串
    if(strs.length === 0) return '';
    if(strs.length === 1) return strs[0];

    let minLen = Number.MAX_VALUE;
    for( let i = 0; i < strs.length; i++){
        // if(strs[i].length < minLen){
        //     minLen = strs[i].length;
        // }
        minLen = Math.min(minLen, strs[i].length);
       
    }
   // console.log(minLen);

    let low = 0, //动态的  左侧
     high = minLen;
     
     while(low <= high){
         const middle = (low +high) >> 1; //中间值
         //功能独立，公共子串 
         if(isCommonPrefix(strs. middle)){
             low = middle + 1;
         } else{
             high = middle - 1;
         }
     }

    //  low > high
    return strs[0].substring(0,(low+high) >> 1);
}
const strs = ['flower', 'flow', 'flight'];
console.log(longestCommonPrefix(strs));