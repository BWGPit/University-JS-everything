/*
Si scriva una funzione ricorsiva check_array(arr) che dato un array 
di interi positivi restituisca true o false in base alla veridicità
della seguente proprietà...
*/

function check_array(arr) {
    if (arr.length < 4) return true
    let a0 = arr.shift()
    let an = arr.pop()
    let c0 = a0+an
    let c1 = arr[0] + arr[arr.length-1]
    if (c1 % c0 != 0) return false
    return check_array(arr)
}