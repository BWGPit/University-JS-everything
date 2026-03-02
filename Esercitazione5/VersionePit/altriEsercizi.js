import * as gb from "./gradebook.js"

function testGB() {
    let n = new gb.GradeBook()
    n.fromJSON("./gradebook.json")
    console.log(n.toString())
}

function matricolaValida(m) {
    return new RegExp("[0-9]{6}").test(m)
}

function emailStudenteUnipiValida(e) {  // Un nome più lungo no?
    return new RegExp("[a-z]{1}[.]{1}[a-z]+[1-9]*@studenti[.]{1}unipi[.]{1}it").test(e)
}

function main() {
    // console.log(matricolaValida("01234"), false)
    // console.log(matricolaValida("A01234"), false)
    // console.log(matricolaValida("012345"), true)
    console.log(emailStudenteUnipiValida("g.rossi@studenti.unipi.it"), true)
    console.log(emailStudenteUnipiValida("b.bianchi1@studenti.unipi.it"), true)
    console.log(emailStudenteUnipiValida("j.marino13@studenti.unipi.it"), true)
    console.log(emailStudenteUnipiValida("test"), false)
    console.log(emailStudenteUnipiValida("k.costa@unipi.it"), false)
    console.log(emailStudenteUnipiValida("c.ferrari0@studenti.unipi.it"), false)
    console.log(emailStudenteUnipiValida("d.esposito@studenti.unifi.it"), false)
}

main()