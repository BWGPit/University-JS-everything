class PrioritaNonValida extends Error {}

class ModificaTicketChiuso extends Error {
  constructor(codice) {
    super("Ticket chiuso");
    this.codice = codice;
  }
}

class SLASuperato extends Error {
  constructor(codice) {
    super("SLA superato");
    this.codice = codice;
  }
}

class Ticket {
  #codice;
  #priorita;
  #chiuso;
  #log;

  constructor(codice, priorita) {
    if (typeof codice !== "string" || codice.length === 0) {
      throw new TypeError("codice non valido");
    }
    if (!Number.isInteger(priorita) || priorita < 1 || priorita > 5) {
      throw new TypeError("priorita non valida");
    }
    this.#codice = codice;
    this.#priorita = priorita;
    this.#chiuso = false;
    this.#log = [];
  }

  get codice() {
    return this.#codice;
  }

  get priorita() {
    return this.#priorita;
  }

  get chiuso() {
    return this.#chiuso;
  }

  get log() {
    return [...this.#log];
  }

  set priorita(p) {
    if (this.#chiuso) {
      throw new ModificaTicketChiuso(this.#codice);
    }
    if (!Number.isInteger(p) || p < 1 || p > 5) {
      throw new PrioritaNonValida();
    }
    this.#priorita = p;
    this.#log.push("Cambiata priorità a valore " + p);
  }

  aggiungiNota(testo) {
    if (this.#chiuso) {
      throw new ModificaTicketChiuso(this.#codice);
    }
    this.#log.push(testo);
  }

  chiudi() {
    if (!this.#chiuso) {
      this.#chiuso = true;
      this.#log.push("CHIUSURA");
    }
  }
}

class TicketConSLA extends Ticket {
  #tempoMassimo;
  #tempoTrascorso;

  constructor(codice, priorita, tempoMassimo) {
    super(codice, priorita);
    if (typeof tempoMassimo !== "number" || tempoMassimo <= 0) {
      throw new TypeError("tempoMassimo non valido");
    }
    this.#tempoMassimo = tempoMassimo;
    this.#tempoTrascorso = 0;
  }

  get tempoMassimo() {
    return this.#tempoMassimo;
  }

  get tempoTrascorso() {
    return this.#tempoTrascorso;
  }

  set tempoTrascorso(t) {
    if (typeof t !== "number" || t < 0) {
      throw new TypeError("tempoTrascorso non valido");
    }
    this.#tempoTrascorso = t;
    if (this.#tempoTrascorso > this.#tempoMassimo) {
      super.chiudi();
      throw new SLASuperato(this.codice);
    }
  }
}

function incrementaTempo(tickets, delta) {
  let risultati = [];

  if (!Array.isArray(tickets)) return risultati;

  for (let t of tickets) {
    if (t instanceof TicketConSLA) {
      try {
        t.tempoTrascorso = t.tempoTrascorso + delta;
      } catch (e) {
        if (e instanceof SLASuperato) {
          risultati.push(t);
        }
        //else { 
        //  throw e; // errori diversi propagano 
        //} 
      }
    }
  }
  return risultati;
}
