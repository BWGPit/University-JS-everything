function somma(...numbers) {
    if (numbers.length === 0) return 0;
    let n = numbers.shift();
    return n + somma(numbers);
}