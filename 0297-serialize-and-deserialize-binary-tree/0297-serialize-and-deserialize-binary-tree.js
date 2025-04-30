/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    let res = [];

    function dfs (node)  {
        if(!node) {
            res.push('null');
            return
        }
        res.push(String(node.val));
        dfs(node.left);
        dfs(node.right)
    }
    dfs(root);
    return res.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let values = data.split(',');
    let index = 0;

    function dfs() {
        if(values[index] === "null") {
            index++;
            return null;
        }
        let nodeVal = new TreeNode(Number(values[index]));
        index++;

        nodeVal.left = dfs();
        nodeVal.right = dfs();

        return nodeVal; 
    }

    return dfs();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */