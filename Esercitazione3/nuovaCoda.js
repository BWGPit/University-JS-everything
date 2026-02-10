function nuovaCoda() {
    let Q = [];
    return {
        enqueue: (x) => Q.push(x),
        dequeue: () => Q.shift()
    }
}