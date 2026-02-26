import * as fs from "fs"

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
            throw new InvalidCreditsError("Invalid credits for " + String(c))
        this.#credits = c
        this.#date = new Date(d)
        if (typeof g != "number" || g < 18 || g > 30)
            throw new InvalidValueError("Invalid grade")
        this.#grade = g
        if (g != 30 && h)
            throw new InvalidValueError("Honors must come with a 30")
        this.#honors = h
    }
    get grade() {return this.#grade}
    get credits() {return this.#credits}
    get name() {return this.#name}
    get date() {return this.#date}
    get honors() {return this.#honors}

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

    gradeObject() {
        return {
            "name": this.#name,
            "credits": this.#credits,
            "date": this.#date,
            "grade": this.#grade,
            "honors": this.#honors
        }
    }
    
    fromJSON() {}
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
            sum += gr.honors?gr.grade+2:gr.grade * gr.credits
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
    }

    toString() {
        let s = ""
        for (let g of this.#grades) {
            s += g.toString() + "\n"
        }
        return s
    }

    #JSONify() {
        let json_grades = []
        for (let g of this.#grades) {json_grades.push(g.gradeObject())}
        return JSON.stringify({
            "grades": json_grades,
            "totalCredits": this.#totalCredits,
            "credits": this.#credits,
            "missingCredits": this.#missingCredits
        })
    }

    exportJSON(f) {
        fs.writeFileSync(f, this.#JSONify())
    }

    fromJSON(f) {
        let file = JSON.parse(fs.readFileSync(f))
        let retrieved_grades = []
        for (let g of file["grades"]) {
            retrieved_grades.push(new Grade(...Object.values(g)))
        }
        this.#grades = retrieved_grades
        this.#totalCredits = file["totalCredits"]
        this.#credits = file["credits"]
        this.#missingCredits = file["missingCredits"]
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
    let testfile = "./Esercitazione5/gradebook.json"
    // let g = new BachelorGradeBook()
    // g.register(new Grade("Pippo", 12, "2026/01/10", 20, false))
    // g.exportJSON()
    let gb = new GradeBook()
    gb.fromJSON(testfile)
    console.log(gb.toString())
}

main()