class EmptyHistoryError extends Error {}

interface Operation<T> {
    apply: (x: T) => T
    undo: (x: T) => T
    description?: string
}

class UndoableHistory<T> {
    private val: T
    private history: Operation<T>[]
    constructor(val: T) {
        this.val = val
        this.history = []
    }

    public add(apply_fn: (x: T) => T, undo_fn: (x: T) => T, desc?: string) {
        let op: Operation<T> = {apply: apply_fn, undo: undo_fn, description: desc}
        this.history.push(op)
    }

    get current_value(): T {
        let x: T = this.val
        for (let o of this.history) {
            x = o.apply(x)
        }
        return x
    }

    public undoLast(): void {
        if (this.history.length == 0) {throw new EmptyHistoryError("Empty history")}
        this.history.pop()
    }
}

function replay<T>(initial_value: T, operations: Operation<T>[]) {
    let history: UndoableHistory<T> = new UndoableHistory(initial_value)
    operations.forEach((op: Operation<T>): void => history.add(op.apply, op.undo, op.description))
    return history.current_value
}

let h = new UndoableHistory(10)
h.add((x) => x+5, (x) => x-5)
h.add((x) => x*2, (x) => x/2)
console.log(h.current_value)
h.undoLast()
console.log(h.current_value)

console.log(replay(10, [{apply: (x) => x+5, undo: (x) => x-5}, {apply: (x) => x*2, undo: (x) => x/2}, {apply: (x) => x*3, undo: (x) => x/3}]))