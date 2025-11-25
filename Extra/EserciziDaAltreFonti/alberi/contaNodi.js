function contaNodi(T) {
    if (!T) return 0;
    return 1 + contaNodi(T.dx) + contaNodi(T.sx);
}