/**
 * Rappresenta uno studente con un nome e un metodo per congratularsi per la laurea.
 */
class Studente {
    /** Nome dello studente. */
    nome: string;
    /**
     * Crea un nuovo Studente.
     * @param n Il nome dello studente.
     */
    constructor(n: string) {
        this.nome = n;
    }
    /**
     * Restituisce una stringa di congratulazioni per la laurea.
     * @returns "grande fra! complimenti"
     */
    laurea(): string {
        return "grande fra! complimenti";
    }
}

let p = new Studente("andrea");
p.laurea();

/**
 * Estende Studente aggiungendo la matricola e ridefinendo il metodo laurea.
 */
class StudenteMagistrale extends Studente {
    /** Matricola dello studente magistrale. */
    matricola: string;
    /**
     * Crea un nuovo StudenteMagistrale.
     * @param n Il nome dello studente.
     * @param m La matricola dello studente.
     */
    constructor(n: string, m: string) {
        super(n);
        this.matricola = m;
    }
    /**
     * Restituisce una stringa che indica che lo studente è ancora fermo alla triennale.
     * @returns Il messaggio di laurea esteso.
     */
    laurea(): string {
        return super.laurea() + " io sono ancora fermo alla triennale";
    }
}

let pippo = new StudenteMagistrale("paolino", "123456");
pippo.laurea();