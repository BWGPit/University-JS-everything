function deepWrapped(T, profondita) {  // Con T non nullo
    if (!T.sx && !T.dx) return [T.val, profondita]
    let [leftval, leftdepth] = T.sx?deepWrapped(T.sx, profondita+1):[null, null]
    let [rightval, rightdepth] = T.dx?deepWrapped(T.dx, profondita+1):[null, null]
    if (leftdepth >= rightdepth) return [leftval, leftdepth]
    else return [rightval, rightdepth]
}

function deep(T) {
    let [val, depth] = deepWrapped(T, 0)
    return val
}

function main() {
    const tree = {
        val: 10,
        sx: {
            val: 5,
            sx: { val: 50 },
            dx: { val: 7 }
        },
        dx: {
            val: 20,
            sx: { val: 15 },
            dx: { val: 25, dx: {val: 400} }
        }
    }
    console.log(deep(tree))
}

if (require.main === module) main()