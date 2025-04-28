/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(!preorder.length || !inorder.length) return null;

    let rootVal = preorder[0];
    let root = new TreeNode(rootVal);

    let midIndex = inorder.indexOf(rootVal);

    root.left = buildTree(preorder.slice(1, midIndex + 1), inorder.slice(0, midIndex));
    root.right = buildTree(preorder.slice(midIndex + 1), inorder.slice(midIndex + 1));

    return root;
};