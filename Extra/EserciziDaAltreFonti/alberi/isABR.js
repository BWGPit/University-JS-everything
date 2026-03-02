function isABR (T, min = -Infinity, max = Infinity) {
    if (!T) return true;
    if (T.val <= min || T.val >= max) return false;
    return isABR(T.sx, min, T.val) && isABR(T.dx, T.val, max);
}

function main() {
    const validABR = {
        val: 10,
        sx: { val: 5, sx: { val: 2 }, dx: { val: 7 } },
        dx: { val: 20, sx: { val: 15 }, dx: { val: 25 } }
    };

    const invalidABR = {
        val: 10,
        sx: { val: 5, sx: { val: 2 }, dx: { val: 12 } }, // 12 is > 10, invalid for left subtree
        dx: { val: 20 }
    };

    console.log("Is valid ABR:", isABR(validABR));
    console.log("Is invalid ABR:", isABR(invalidABR));
}

if (typeof require !== 'undefined' && require.main === module) {
    main();
}

