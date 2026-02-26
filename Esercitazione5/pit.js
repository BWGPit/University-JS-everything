class GenericGradeError extends Error {
    constructor(m) {super(m)}
}
class InvalidCreditsError extends GenericGradeError {}
class InvalidValueError extends GenericGradeError {}
class InvalidGradeError extends GenericGradeError {}
class DuplicatedGradeError extends GenericGradeError {}
class MissingCreditsError extends GenericGradeError {}


class Grade {
    #name
    #credits
    #date
    #grade
    #honors
    constructor(n, c, d, g, h) {
        this.#name = n
        if (typeof c != "number" || c < 0)
            throw new InvalidCreditsError("Invalid credits")
        this.#credits = c
        this.#date = new Date(d)
        if (typeof g != "number" || g < 18 || g > 30)
            throw new InvalidValueError("Invalid grade")
        this.#grade = g
        if (g != 30 && h)
            throw new InvalidValueError("Honors must come with a 30")
        this.#honors = h
    }

    equals(g) {
        if (!(g instanceof Grade)) {
            throw new InvalidGradeError("g is not an instance of Grade")
        }
        return (
            g.#name === this.name &&
            g.#credits === this.credits &&
            g.#date - this.date == 0 &&
            g.#grade === this.grade &&
            g.#honors === this.honors
        )
    }
    toString() {
        return `${this.#name}\n${this.#credits} credits\nDate: ${this.#date.toString()}\nGrade: ${this.#grade}` + (this.#honors?" cum laude":"")
    }
    get grade() {return this.#grade}
    get credits() {return this.#credits}
    get name() {return this.#name}
    get date() {return this.#date}
    get honors() {return this.#honors}
}

class GradeBook {
    #grades
    #totalCredits
    #credits
    #missingCredits
    constructor(totalCredits) {
        this.#grades = []
        this.#totalCredits = totalCredits
        this.#credits = 0
        this.#missingCredits = totalCredits
    }
    get totalCredits() {return this.#totalCredits}
    get credits() {return this.#credits}
    get missingCredits() {return this.#missingCredits}
    get average() {
        let sum = 0
        let count = 0
        for (let gr of this.#grades) {
            sum += (gr.honors?gr.grade+2:gr.honors) * gr.credits
            count += gr.credits
        }
        return sum / count
    }
    get startingGrade() {
        if (this.missingCredits != 0) throw new MissingCreditsError("Missing credits")
        return Math.round(this.#grades.average*11/3)
    }
    
    #search(grade) {
        for (let g of this.#grades) {
            if (g.equals(grade)) return true
        }
        return false
    }

    register(grade) {
        if (!(grade instanceof Grade)) throw new TypeError("Grade must be instance of Grade()")
        if (this.#search(grade)) throw new DuplicatedGradeError("Duplicated grade")
        this.#grades.push(grade)
        this.#missingCredits -= grade.credits
        if (this.#missingCredits < 0) this.#missingCredits = 0
        console.log(this.#grades)
    }
    toString() {
        let s = ""
        for (let g of this.#grades) {
            s += g.toString() + "\n"
        }
        return s
    }
}

class BachelorGradeBook extends GradeBook {
    constructor() {
        super(180)
    }
}

class MasterGradeBook extends GradeBook {
    constructor() {
        super(120)
    }
}

function main() {
    let g = new GradeBook(120)
    g.register(new Grade("Pippo", 12, "2026/01/10", 20, false))
    console.log(g.toString())
}

if (require.main === module) main()