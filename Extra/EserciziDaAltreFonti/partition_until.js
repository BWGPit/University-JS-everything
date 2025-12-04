/**
 * Recursively partitions an array using a divide-and-conquer approach up to a specified depth.
 * 
 * The function divides the input array into smaller subarrays by recursively splitting it at the 
 * midpoint until the specified depth is reached or the array contains only one element.
 */

function partition_until(arr, depth) {
    if (depth === 0 || arr.length === 1) {
        return [arr];
    }
    const mid = Math.ceil(arr.length / 2);
    
    const leftHalf = arr.slice(0, mid);
    const rightHalf = arr.slice(mid);
    
    const leftPartitions = partition_until(leftHalf, depth - 1);
    const rightPartitions = partition_until(rightHalf, depth - 1);
    
    return leftPartitions.concat(rightPartitions);
}