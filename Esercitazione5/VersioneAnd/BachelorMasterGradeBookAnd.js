import { GradeBook } from './GradeBookAnd.js';

class BachelorGradeBook extends GradeBook {
    constructor() {
        super();
        this.totalCredits = 180;
    }
}

class MasterGradeBook extends GradeBook {
    constructor() {
        super();
        this.totalCredits = 120;
    }
}

export { BachelorGradeBook, MasterGradeBook };