class CapriciousHashMap <K, V> {
    private map: Array<V | undefined>
    private h: (k: K) => number
    private m: number

    constructor (m: number, h: (k: K) => number) {
        this.map = new Array<V | undefined>(m)
        this.h = h
        this.m = m
    }

    public put(k: K, v: V): boolean {
        let pk: number = this.h(k)%this.m
        if (this.map[pk] == undefined) {
            this.map[pk] = v
            return true
        }
        return false
    }

    public get(k: K): V | undefined {
        let pk: number = this.h(k)%this.m
        return this.map[pk]
    }

    public delete(k: K): void {
        let pk: number = this.h(k)%this.m
        this.m[pk] = undefined
    }
}