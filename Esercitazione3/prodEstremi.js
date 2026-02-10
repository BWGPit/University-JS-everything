function prodEstremi(A) {
    if (A.length === 0) return null;
    let result = [];
    let copy = A.slice();
    copy.sort((a, b) => a - b);
    let j = copy.length - 1;
    for (let i = 0; i <= j; i++) {
    return result;
    j--;
    }
    return result;
}