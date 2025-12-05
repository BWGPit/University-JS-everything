function filterInPlace(a, p) {
    let j = 0;
    for (let i = 0; i < a.length; i++) {
        if (p(a[i])) {
            a[j] = a[i];
            j++;
        }
    }
    a.length = j;
}

// itera l'array una sola volta
// sposta gli elementi che soddisfano p all'inizio dell'array
// ridimensione l'array alla fine per distruggere gli elementi che non soddisfano il predicato