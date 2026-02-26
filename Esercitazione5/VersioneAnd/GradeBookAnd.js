import { Grade, InvalidCreditsError } from './GradeErrorsAnd.js';
import { fileURLToPath } from 'url';

class TypeError extends Error {
    constructor(m) {
        super(m);
        this.name = "TypeError";
    }
}

class DuplicatedGradeError extends Error {
    constructor(m) {
        super(m);
        this.name = "DuplicatedGradeError";
    }
}

class MissingCreditsError extends Error {
    constructor(m) {
        super(m);
        this.name = "MissingCreditsError";
    }
}

class GradeBook {
    grades
    totalCredits
    credits
    missingCredits
    average
    startingGrade
    constructor() {
        this.grades = [];
        this.totalCredits = 0;
        this.credits = 0;
        this.missingCredits = 0;
        this.average = 0;
        this.startingGrade = 18;
    }
    register(grade) {
        if (grade instanceof Grade === false) {
            throw new TypeError("grade is not of type Grade");
        }
        if (this.grades.find(g => g.equals(grade))) {
            throw new DuplicatedGradeError("grade already registered");
        }
        this.grades.push(grade);
        this.credits += grade.crediti;
    }

    getStartingGrade() {
        if (this.credits < this.totalCredits) {
            throw new MissingCreditsError("Not enough credits to calculate starting grade");
        }
        return this.startingGrade;
    }

    toString() {
        let str = "gradebook: \n";
        for (let g of this.grades) {
            str += g.toString() + "\n";
        }
        return str;
    }
}

export { GradeBook };

if (process.argv[1] === fileURLToPath(import.meta.url)) {
    let gradeBook = new GradeBook();
    try {
        gradeBook.register(new Grade("l", -1, 1, 1, 1));
    } catch (e) {
        console.log(e.name + ": " + e.message);
    }
    gradeBook.register(new Grade("l", 1, 1, 1, 1));
    gradeBook.register(new Grade("l", 2, 2, 2, 2));
    console.log(gradeBook.toString());
}
