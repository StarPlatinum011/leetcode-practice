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
 * @return {number}
 */
var goodNodes = function(root) {
    
    function dfs(node, currMax) {
        if(!node) return 0;
        let count = 0;
        if(currMax <= node.val) count = 1;

        currMax = Math.max(currMax, node.val);

        count += dfs(node.left, currMax);
        count += dfs(node.right, currMax);

        return count;

    }

    return dfs(root, root.val)
};