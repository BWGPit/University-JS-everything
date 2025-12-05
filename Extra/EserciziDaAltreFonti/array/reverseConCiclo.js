function reverse(a) {
    let result = [];
    for (let i = a.length-1; i >= 0; i--) {
        result.push(a[i]);
    }
    return result;
}

let a = [1,2,3,4,5,6,7,8,9,0];
console.log(reverse(a));