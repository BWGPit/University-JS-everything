function deframmenta(a) {
    return a.filter((val, i) => 
        (i > 0 && val === a[i - 1]) || (i < a.length - 1 && val === a[i + 1])
    );
}

console.log(deframmenta([1, 2, 2, 3, 4, 4, 4, 5])); // [2, 2, 4, 4, 4]
console.log(deframmenta([1, 1, 2, 3, 3])); // [1, 1, 3, 3]
console.log(deframmenta([1, 2, 3])); // []