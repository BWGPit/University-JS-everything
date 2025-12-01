/*
LeetCode #654. Maximum Binary Tree
https://leetcode.com/problems/maximum-binary-tree?envType=problem-list-v2&envId=monotonic-stack
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    if (nums.length == 0) return null
    let max = Math.max(...nums)
    let maxIndex = nums.indexOf(max)
    return new TreeNode(
        val=max,
        left=constructMaximumBinaryTree(nums.slice(0, maxIndex)),
        right=constructMaximumBinaryTree(nums.slice(maxIndex+1))
    )
};

// Alternativa più veloce (di 3 ms) ma più costosa in spazio: calcolare "manualmente" il max
// let max = nums[0]
// let maxIndex = 0
// for (let i = 1; i < nums.length; i++) {
//     if (nums[i] > max) {
//         max = nums[i]
//         maxIndex = i
//     }
// }