/*
Tavola pitagorica
Si scriva un programma che, letto un intero n da tastiera, stampi la tavola pitagorica n x n, allineando correttamente i valori in colonne usando spazi
*/

n = 10  // Number(prompt())

let tavola = ""
for (let i = 1; i <= n; i++) {
    let riga = ""
    for (let j = 1; j <= n; j++) {
        riga = riga==""?String(i*j):`${riga}\t${i*j}`
    }
    tavola += riga + "\n"
}
console.log(tavola)