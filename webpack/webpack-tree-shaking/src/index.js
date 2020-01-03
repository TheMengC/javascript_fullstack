import { add, reduce } from './math.js'
// reduce 有必要 存在 最终的 dist 文件里面吗？
// 
import {includes} from 'lodash'
// babel-plugin-import
// import includes from 'lodash/includes'
console.log(add(1, 2))
console.log(reduce(3, 2))
console.log(includes([1, 2], 1))