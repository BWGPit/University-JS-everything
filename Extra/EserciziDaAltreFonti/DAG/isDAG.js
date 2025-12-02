function hasDuplicates(a) {
    let copy = []
    for (let i = 0; i < a.length; i++) {
        if (!(copy.includes(a[i]))) copy.push(a[i])
        else return true
    }
    return false
}

function visitDepth(gl, n) {
    let visited = []

    function explore(node) {
        if (visited.includes(node)) return
        visited.push(node)
        for (let neighbor of gl[node]) explore(neighbor)
    }

    explore(n)
    return visited
}

function isDag(gl) {
    let dag = true
    let i = 0
    while (dag && gl[i]) {
        if (hasDuplicates(visitDepth(gl, i))) dag = false
        i++
    }
    return dag
}

function main() {
    let g = {
        0: [],
        1: [2],
        2: [3],
        3: [4],
        4: [],
        5: []
    }
    console.log(isDag(g))
}

main()