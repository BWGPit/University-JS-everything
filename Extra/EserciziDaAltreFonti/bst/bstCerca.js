function bstCerca(t, v) {
    if (!t) return null;
    if (t.val === v) return t;
    if (v < t.val) return bstCerca((bstCerca(t.sx, v)));
    if (v > t.val) return bstCerca(bstCerca((t.dx, v)));
}