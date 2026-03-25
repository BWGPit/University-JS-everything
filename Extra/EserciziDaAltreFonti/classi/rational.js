Math.rational = function(x) {
    let div = 1
    let originalX = x
    while(x % 1 != 0) {
        switch (String(x)[String(x).length-1]) {
            case "5":
                div = div * 2
                break
            case "2":
                div = div * 5
                break
            default:
                div = div * 10
        }
        x = Number((originalX * div).toFixed(10))
    }
    return [x, div]
}

console.log(Math.rational(4.5))
console.log(Math.rational(-3))
console.log(Math.rational(3.1415))