function moveToFront(k, head) {
    if (!head) return -1
    if (head.val === k) {
        return 0
    }
    let n = moveToFront(k, head.next)
    if (n === -1) return n
    return 1 + n
}

function main() {
    let h = {val: "Q", next: {val: "W", next: {val: "E", next: {val: "R", next: null}}}}
    console.log(moveToFront("E", h))
}

main()