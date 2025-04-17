/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {

    if (!root) return []

    let q = [root];
    let res = [];

    while(q.length > 0) {
        let size = q.length; 
        let val = null; 
        
        for (let i = 0; i< size; i++) {
            let node = q.shift();
            val = node;

            if(node.left) q.push(node.left);
            if(node.right) q.push(node.right);
        }

        res.push(val.val);
    }

    return res;
    
};