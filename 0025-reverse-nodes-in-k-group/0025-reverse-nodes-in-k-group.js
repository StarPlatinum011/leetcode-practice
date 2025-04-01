/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    let dummy = new ListNode(0);
    dummy.next = head;
    //storing the previous group's last value
    let prevGrpEnd = dummy;

    while(true) {
        let kthNode = prevGrpEnd;

        for(let i = 0; i<k; i++) {
            kthNode = kthNode.next;
            //if the next value is past linkedlist, return
            if(!kthNode) return dummy.next; 
        }

        let groupStart = prevGrpEnd.next;
        let nextGroupStart = kthNode.next;

        //make the pointers for the variables to reverse
        let prev = nextGroupStart;
        let curr = groupStart;

        while(curr !== nextGroupStart) {
            let temp = curr.next; 
            curr.next = prev;
            prev = curr; 
            curr = temp;
        }

        //after reversing the values, the last value from previous group needs to be updated
        // 2 -> 1 -> 3 -> 4 needs to be changed into 2 -> 1 -> 4 -> 3
        //where next pointer of 1 which is the last value from a previous group has to be updated from 3 to 4
        prevGrpEnd.next = kthNode;
        //assign previous group end value with the group start value because the is the last value in the group always. 
        //because we are reversing the list and the first value is always going to be at last in the end
        prevGrpEnd = groupStart; 
    }
};