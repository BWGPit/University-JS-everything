function nuovaPila() {
    let P = [];
    return {
        inpila: (x) => P.push(x),
        depila: () => P.pop()
    }
}