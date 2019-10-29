/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  let map = new Map();
  let current = head;
  while(current) {
    // if(map.has(current)) {
    //   return true
    // } else {
    //   map.set(current, '123')
    // }
    if(current.__hasVisited) {
      return true;
    }else {
      current.__hasVisited = true
    }
    current = current.next;
  }
  return false;
};