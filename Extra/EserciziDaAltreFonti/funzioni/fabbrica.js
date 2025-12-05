function fabbrica(k) {
    return () => {
        return k;
    };
}

let f = fabbrica(5);
console.log(f()); // 5

let g = fabbrica("ciao");
console.log(g()); // "ciao"