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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return [];
    
    let q = [root];
    let res = [];

    while(q.length > 0) {
        let size = q.length;
        let values = [];

        for(let i = 0; i<size; i++) {
            let node = q.shift();
            values.push(node.val);

            if(node.left) q.push(node.left);
            if(node.right) q.push(node.right);
        }

        res.push(values);
    }

    return res;
};