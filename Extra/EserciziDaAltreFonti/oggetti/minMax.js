function minMax(a) {
    let result = {};
    for (let k of a) {
        let A = {min: Infinity, max: -Infinity};
        console.log(A);
        for (let i in k) {
            i = Number(i);
            if (i < A.min) A.min = i;
            if (i > A.max) A.max = i;
        }
        result[A.min] = 1;
        result[A.max] = 1;
        console.log(result);
    }
    return result
}

console.log(minMax([{5:1,12:1,10:1,7:1},{10:1,5:1,18:1},{1:1}]),{1:1,5:1,12:1,18:1})