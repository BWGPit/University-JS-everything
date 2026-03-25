enum Dir {Nord, Sud, Est, Ovest}
interface Step {d: Dir, l: number}
type Point = [number, number]
type Trasformatore = (p: Point) => Point | string | number
const basePos: Point[] = [[0, 1], [0, -1], [1, 0], [-1, 0]]

function walk(o: Point, p: Step[]): Point {
    let pos: Point = [...o]
    for (let i of p) {
        pos = [pos[0]+(basePos[i.d][0]*i.l), pos[1]+(basePos[i.d][1]*i.l)]
    }
    return pos
}

function applica(o: Point, p: Step[], f?: Trasformatore): Point | string | number {
    let posizioneFinale: Point = walk(o, p)
    if (f) {return f(posizioneFinale)}
    else {return posizioneFinale}
}
// Debug
function testFn(): void {
    let stampaTest: Trasformatore = function(p) {
        return "Posizione finale: (" + String(p[0]) + ", " + String(p[1]) + ")"
    }
    console.log(applica([0, 0], [{d: Dir.Nord, l: 2}, {d: Dir.Est, l: 1}], stampaTest))
}

testFn()