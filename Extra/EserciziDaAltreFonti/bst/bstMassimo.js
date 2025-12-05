function bstMassimo(t) {
    if (!t) return null;
    if (!t.dx) return t.val;;
    return bstMassimo(t.dx);
}