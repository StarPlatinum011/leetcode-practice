/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    console.log(l1,'and', l2)
    let dummy = new ListNode();
    let curr = dummy; 

    let carry = 0; 
    
    while(l1 || l2 || carry) {
        let value1 = 0, value2 = 0; 
        l1?value1 = l1.val: value1 = 0;
        l2? value2 = l2.val: value2 = 0;

        let calc = value1 + value2 + carry; 
        carry = Math.floor(calc/10);
        calc = calc%10;

        curr.next = new ListNode(calc);
        curr = curr.next;

        if(l1) l1 = l1.next
        if(l2) l2 = l2.next
   

    }

    return dummy.next;
};