class Counter {
    public value: number
    static default_value: number = 0

    constructor(value?: number) {
        if (value === undefined) {
            this.value = Counter.default_value
        } else {
            this.value = value
        }
    }

    increment(x: number): void {
        if (x <= 0) {
            throw new RangeError("x must be positive")
        }
        this.value += x
    }
    decrement(x: number): void {
        if (x <= 0) {
            throw new RangeError("x must be positive")
        }
        this.value -= x
    }
}