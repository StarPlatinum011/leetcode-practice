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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let counter = 0;
    let res  = null;
    let dfs = (node) => {

        if(!node || res !== null) return;
        

        dfs(node.left);
        counter++;
        if(counter === k) {
            res = node.val;
            return;
        }

        dfs(node.right);
    }
    dfs(root);
    return res; 
};