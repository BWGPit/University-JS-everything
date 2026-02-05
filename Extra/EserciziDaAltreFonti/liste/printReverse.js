function printReverse(head) {
    if (!head) {return}
    printReverse(head.next)
    console.log(head.val)
}

function main() {
    let h = {val: "Q", next: {val: "W", next: {val: "E", next: {val: "R", next: null}}}}
    printReverse(h)
}

main()