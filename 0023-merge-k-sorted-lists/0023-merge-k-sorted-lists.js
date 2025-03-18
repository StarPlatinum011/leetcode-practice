/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(lists.length === 0 || !lists) return null;
    
    while(lists.length > 1) {
        let container = [];

        for(let i = 0; i< lists.length; i += 2) {
            let list1 = lists[i];
            let list2 = i+1 < lists.length? lists[i+1]: null;
            container.push(mergeLists(list1, list2));
        }
        lists = container;

    }
    return lists[0];
};

function mergeLists(l1, l2) {
    console.log(l1 , ' and ', l2)
    let head = new ListNode(0);
    let dummy = head; 

    while(l1 && l2) {
        if(l1.val < l2.val) {
            dummy.next = l1;
            l1  = l1.next;
        } else {
            dummy.next = l2;
            l2 = l2.next;
        }

        dummy = dummy.next; 
    }

    if(l1) dummy.next = l1;
    if(l2) dummy.next = l2;

    return head.next;
}