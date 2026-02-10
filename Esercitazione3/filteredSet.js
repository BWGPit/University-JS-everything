function filteredSet(S, p) {
    const result = new S();
    for (let key of S) {
        if (p(key)) {
            result.add(key);
        }
    }
    return result;
}