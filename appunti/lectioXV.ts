/**
 * LEZIONE XV - ESEMPIO COMPLESSO COMPLETO
 * Argomenti: Classi, Ereditarietà, Polimorfismo, Incapsulamento (#private), Static, Instanceof
 * 
 * Scenario:
 * Creiamo un sistema per gestire gruppi musicali K-Pop/Band.
 * Abbiamo una classe base `Idol` che gestisce le proprietà comuni.
 * Abbiamo due specializzazioni:
 * 1. `BandMember` (es. QWER) -> Si focalizza sugli strumenti musicali.
 * 2. `StagePerformer` (es. Stray Kids) -> Si focalizza su ballo e rap.
 */

// 1. CLASSE ASTRATTA (Simulata) / BASE
class Artist {
    name: string;
    role: string;

    constructor(name: string, role: string) {
        this.name = name;
        this.role = role;
    }

    // Metodo base che verrà sovrascritto (Polimorfismo)
    perform(): string {
        return `${this.name} sale sul palco.`;
    }
}

// 2. EREDITARIETÀ E INCAPSULAMENTO
class Idol extends Artist {
    // CAMPO PRIVATO ES2022 (visibile solo dentro questa classe)
    #stamina: number; 
    
    // CAMPO STATICO (appartenente alla classe, non all'istanza)
    static totalIdolsRegistry: number = 0;

    constructor(name: string, role: string) {
        super(name, role); // Chiama il costruttore di Artist
        this.#stamina = 100; // Stamina iniziale
        Idol.totalIdolsRegistry++; // Incrementa contatore globale
    }

    // GETTER: Accesso controllato alla proprietà privata
    get staminaLevel(): number {
        return this.#stamina;
    }

    // SETTER: Modifica controllata
    set staminaLevel(value: number) {
        if (value < 0) {
            console.warn(`⚠️ ATTENZIONE: ${this.name} è esausto!`);
            this.#stamina = 0;
        } else if (value > 100) {
            this.#stamina = 100; // Cap massimo
        } else {
            this.#stamina = value;
        }
    }

    // OVERRIDE: Estende il metodo base
    perform(): string {
        this.staminaLevel -= 10; // Usa il setter per ridurre energia
        return `${super.perform()} Saluta i fan con un sorriso!`;
    }

    // METODO STATICO: Utility globale
    static getSystemStatus(): string {
        return `📊 STATO SISTEMA: ${Idol.totalIdolsRegistry} idol registrati nel database.`;
    }
}

// 3. SOTTOCLASSE SPECIFICA 1: BAND (QWER)
class BandMember extends Idol {
    instrument: string;

    constructor(name: string, role: string, instrument: string) {
        super(name, role);
        this.instrument = instrument;
    }

    // POLIMORFISMO: Comportamento specifico per chi suona
    perform(): string {
        // super.perform() chiama Idol.perform() che chiama Artist.perform()
        const baseAction = super.perform(); 
        return `${baseAction} -> Si siede e inizia a suonare il/la ${this.instrument} con passione! 🎸🥁`;
    }
}

// 4. SOTTOCLASSE SPECIFICA 2: PERFORMANCE GROUP (Stray Kids)
// Tipo unione per limitare i valori possibili
type SkillType = 'Rap' | 'Dance' | 'Vocals';

class StagePerformer extends Idol {
    specialSkill: SkillType;

    constructor(name: string, role: string, skill: SkillType) {
        super(name, role);
        this.specialSkill = skill;
    }

    // POLIMORFISMO: Comportamento specifico per chi balla/canta
    perform(): string {
        const baseAction = super.perform();
        let specialAction = "";

        // Logica specifica (Simulazione overload basata sul tipo)
        if (this.specialSkill === 'Rap') {
            specialAction = "sputa barre di fuoco 🔥";
        } else if (this.specialSkill === 'Dance') {
            specialAction = "esegue una coreografia acrobatica 🕺";
        } else {
            specialAction = "colpisce una nota altissima 🎤";
        }

        return `${baseAction} -> Poi ${specialAction}!`;
    }
}

// 5. CLASSE GESTORE (Aggregazione)
class MusicGroup {
    groupName: string;
    members: Idol[] = []; // Array polimorfico (contiene sia BandMember che StagePerformer)

    constructor(name: string) {
        this.groupName = name;
    }

    addMember(member: Idol) {
        // CONTROLLO DEI TIPI Runtime con instanceof
        if (member instanceof Idol) {
            this.members.push(member);
            console.log(`✅ ${member.name} aggiunto a ${this.groupName}`);
        } else {
            console.error("Errore: Puoi aggiungere solo Idol!");
        }
    }

    doConcert() {
        console.log(`\n🎙️  INIZIO CONCERTO: ${this.groupName.toUpperCase()} 🎙️`);
        console.log("------------------------------------------------");
        
        this.members.forEach(member => {
            // Qui avviene la magia del POLIMORFISMO:
            // JS chiama il metodo perform() corretto in base al tipo reale dell'oggetto
            console.log(member.perform());
        });
        
        console.log("------------------------------------------------\n");
    }
}

// --- ESECUZIONE CODICE ---

console.log(Idol.getSystemStatus()); // 0 idol

// 1. Creazione QWER (Band Concept)
const qwer = new MusicGroup("QWER");

// Creo i membri
const chodan = new BandMember("Chodan", "Leader", "Batteria");
const magenta = new BandMember("Magenta", "Bass", "Basso");
const hina = new BandMember("Hina", "Guitar", "Chitarra Elettrica");
const siyeon = new BandMember("Siyeon", "Vocal", "Chitarra Ritmica");

// Aggiungo membri
qwer.addMember(chodan);
qwer.addMember(magenta);
qwer.addMember(hina);
qwer.addMember(siyeon);


// 2. Creazione Stray Kids (Performance Concept)
const skz = new MusicGroup("Stray Kids");

// Creo membri con diverse special skills
const bangChan = new StagePerformer("Bang Chan", "Leader", "Rap"); // 3RACHA
const felix = new StagePerformer("Felix", "Dancer", "Dance"); // Deep voice
const seungmin = new StagePerformer("Seungmin", "Main Vocal", "Vocals"); 

skz.addMember(bangChan);
skz.addMember(felix);
// skz.addMember(skz); // ERRORE voluto: skz non è un Idol (ma TS qui darebbe errore statico, in JS runtime)
skz.addMember(seungmin);

// 3. Verifica Stato Globale (Static)
console.log(Idol.getSystemStatus()); // 7 idol totali ora

// 4. I Concerti
qwer.doConcert();
skz.doConcert();

// 5. Test Incapsulamento
console.log(`Energia residua di Chodan: ${chodan.staminaLevel}%`);
// chodan.#stamina = 500; // Errore: Property '#stamina' is not accessible outside class 'Idol'.
chodan.staminaLevel = -50; // Test Setter validation -> stampa warning e setta a 0
console.log(`Energia dopo il crash: ${chodan.staminaLevel}% un ringraziamento speciale a PIt, fan numero uno`);
