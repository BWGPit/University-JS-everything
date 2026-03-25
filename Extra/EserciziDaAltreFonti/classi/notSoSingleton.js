class ThreesomeError extends Error {}

class NotSoSingleton {
    #x; static #last; static #count
    constructor(x) {
        if (NotSoSingleton.#count && NotSoSingleton.#count >= 3) throw new ThreesomeError("Cannot create a fourth x")
        this.#x = x;
        NotSoSingleton.#last = this;
        if (!NotSoSingleton.#count) {
            NotSoSingleton.#count = 1
        } else NotSoSingleton.#count++
    }
    get value() {return this.#x}
    static get last() {return NotSoSingleton.#last}
}

var second=new NotSoSingleton(true)
console.log(second.value,true)
console.log(NotSoSingleton.last,second)