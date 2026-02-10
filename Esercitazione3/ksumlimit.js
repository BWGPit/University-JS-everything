function ksumlimit(p, k, ...numbers) {
    let sum = 0;
    let result = [];
    for (let num  of numbers) {
        if (sum + num <= k && p(num)) {
            sum += num;
            result.push(num);
        }
    }
    return result;
}