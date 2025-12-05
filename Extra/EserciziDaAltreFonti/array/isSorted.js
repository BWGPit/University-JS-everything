function isSorted(a) {
    return a.reduce((sorted, number, index, array) => sorted && (index === 0 || array[index-1] < number), true);
}