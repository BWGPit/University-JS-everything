class NumeroSbagliato extends Error {};


function somma (x,y) {
    if (typeof x != "number") {
        throw new NumeroSbagliato("sei una banana, " + x + " non è un numero...");
    } else if (typeof y != "number") {
        throw new NumeroSbagliato("sei una banana doppiamente perché " + y + " NON è UNO STRAMALEDETTO NUMERO rm -rf system32");
    }
    else return x+y;
}

function test() {
    let x = 4;
    let y = undefined;

    try{
      somma(x,y) ;
    } 
    catch (e) {
        if (e instanceof NumeroSbagliato)
            console.log(e.message)
    }

}

function main() {
    test();
}

main();