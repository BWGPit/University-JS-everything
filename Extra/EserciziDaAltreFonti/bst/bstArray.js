function bstArray(t) {
    if (!t) return [];
    let sx = bstArray(t.sx);
    sx.push(t.val);
    let dx = bstArray(t.dx);
    return sx.concat(dx);
}

