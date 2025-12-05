function bstArraySpread(t) {
    if (!t) return [];
    return [...bstArraySpread(t.sx), t.val, ...bstArraySpread((t.dx))];
}