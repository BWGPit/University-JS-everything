function robMatrix(nums: number[]): number {
    let m: Matrix = new Matrix(nums.length+1, nums.length+1)
    for (let i = 0; i < m.rows; i++) {m.setKey(0, i, 0)}
    for (let j = 0; j < m.columns; j++) {m.setKey(0, 0, j)}
    if (nums.length == 0) {return 0}
    for (let i = 1; i < m.rows; i++) {m.setKey(nums[0], i, 1)}
    
    for (let j = 2; j < m.columns; j++) {
        for (let i = 1; i < m.rows; i++) {
            m.setKey(Math.max(Number(m.getKey(i, j-1)), nums[j-1] + Number(m.getKey(i, j-2))), i, j)
        }
    }
    
    console.log(m.mat)

    let solution: matrixField = m.getKey(m.rows-1, m.columns-1)
    if (typeof solution == "number") return solution
    return Infinity
}


// Questa soluzione batte il 100% delle soluzioni in tempo su Leetcode:
// https://leetcode.com/problems/house-robber/solutions/7715409/beats-100-in-time-typescript-solution-by-jlqf
function rob(nums: number[]): number {
    if (nums.length == 0) {return 0}
    let p: number[] = []
    p[0] = 0
    p[1] = nums[0]
    for (let i = 2; i < nums.length+1; i++) {
        p[i] = Math.max(p[i-1], nums[i-1] + p[i-2])
    }
    return p[nums.length]
}

console.log(rob([1, 2, 3, 1]))
console.log(rob([2, 7, 9, 3, 1]))