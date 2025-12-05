class NotEnoughNumbers extends Error {
    message
    constructor(message) {
        super()
        this.message = message
    }
}

function math(operator, ...numbers) {
    if (numbers.length < 2) throw new NotEnoughNumbers("non sono stati forniti abbastanza numeri");
    
    switch(operator) {
        case '+': {
            let somma = numbers[0];
            for (let i = 1; i < numbers.length; i++) {
                somma += numbers[i];
            }
            return somma;
        }
        case '-': {
            let sottrazione = numbers[0];
            for (let i = 1; i < numbers.length; i++) {
                sottrazione -= numbers[i];
            }
            return sottrazione;
        }
        case '*': {
            let moltiplicazione = numbers[0];
            for (let i = 1; i < numbers.length; i++) {
                moltiplicazione *= numbers[i];
            }
            return moltiplicazione;
        }
        case '/': {
            let divisione = numbers[0];
            for (let i = 1; i < numbers.length; i++) {
                divisione /= numbers[i];
            }
            return divisione;
        }
    }
}