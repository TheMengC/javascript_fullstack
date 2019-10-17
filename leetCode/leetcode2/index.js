/**
 * 
 * @param {array} piles
 * @param {int} H
 * @return {int} lo
 * @func 求最慢的吃法
*/
const canEatAllBananas = (piles, H, mid) =>{
    //能吃完
    let h =0;
    for(let pile of piles){  //遍历数组
        h += Math.ceil(pile / mid);
    }
    return h <= H;  //返回true or flase
}
const minEatingSpeed = (piles, H) =>{
    let lo = 1;
    let mid = 0;
    let hi = Math.max(...piles);     //...piles  将数组展开成一堆数字
    while(lo <=hi){
        // Math.ceil()    向上取证
        // Math.floor()  向下取整
        // 用右移比较好  >> 1
        // let mid = Math.floor((lo + hi) / 2);
        mid = lo + ((hi-lo) >> 1)
        if(canEatAllBananas (piles, H, mid)){
            hi = mid - 1;  //取左边
        }else{
            lo = mid + 1;  //取右边
        }
    }
    //console.log(lo, mid, hi,  '------')
    return lo;
}
console.log( minEatingSpeed([3,6,7,11],8));