function partapply(bop,a) {
    return (b) => { 
        return bop(a,b);
    };
}

// Esempi di test
let r1 = partapply((x, y) => x + y, 1);
console.log(r1(5)); // 6

let r2 = partapply((x, y) => x + y, "d");
console.log(r2("esisto")); // "desisto"