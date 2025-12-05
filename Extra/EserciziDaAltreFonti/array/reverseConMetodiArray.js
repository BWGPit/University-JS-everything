function reverse(a) {
    return a.map((_, i) => a[a.length - 1 - i]);
}

let a = [1, 2, 3, 4, 5];
console.log(reverse(a));
