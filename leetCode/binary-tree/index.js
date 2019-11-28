var tree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4
    }
  },
  right: {
    value: 3,
    left: {
      value: 5,
      left: {
        value: 7
      },
      right: {
        value: 8
      }
    },
    right: {
      value: 6
    }
  }
}

// 前序遍历 + 递归
// var preOrder = function (node) {
//   if (node) {
//     console.log(node.value)
//     preOrder(node.left)
//     preOrder(node.right)
//   }
// }
// console.log(preOrder(tree))

// 中序遍历 + 递归
// var preOrder1 = function (node) {
//   if (node) {
//     preOrder(node.left)
//     console.log(node.value)
//     preOrder(node.right)
//   }
// }
// console.log(preOrder1(tree))

// 深度优先 + 非递归  栈(深度优先)
// var preOrderUnRecur = function (node) {
//   if(!node) {
//     throw new Error('Empty Tree')
//   }
//   var stack = []
//   stack.push(node)
//   while(stack.length !== 0) {
//     node = stack.pop()
//     console.log(node.value)
//     if(node.right) stack.push (node.right)
//     if(node.left) stack.push (node.left)
//   }
// }
// preOrderUnRecur(tree)

// 广度优先 + 非递归
function BreadthFirstUnRecur(biTree) {
  var queue = []
  queue.push(biTree)
  while(queue.length !== 0) {
    biTree = queue.shift()
    console.log(biTree.value)
    if(biTree.left) queue.push(biTree.left)
    if(biTree.right) queue.push(biTree.right)
  }
}
BreadthFirstUnRecur(tree)