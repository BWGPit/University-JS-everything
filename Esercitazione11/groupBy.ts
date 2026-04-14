interface Keyed {key: string}
interface KeyName {key: string, name: string}
type Grouped<T extends Keyed> = {[key: string]: T[]}

function groupBy<T extends Keyed>(items: T[]): Grouped<T> {
    let kk: Grouped<T> = {}
    for (let item of items) {
        if (!kk[item.key]) {
            kk[item.key] = []
        }
        kk[item.key].push(item)
    }
    return kk
}

function groupUniqueByName<T extends KeyName>(items: T[]): Grouped<T> {
    let kk: Grouped<T> = {}
    for (let item of items) {
        if (!kk[item.key]) {
            kk[item.key] = []
        }
        if (!kk[item.key].find((x: T) => x.name == item.name)) {
            kk[item.key].push(item)
        }
    }
    return kk
}

function countGroups<T extends Keyed>(groups: Grouped<T>): number {
    return Object.keys(groups).length
}

let test: Grouped<KeyName> = groupUniqueByName([{key: "QWER", name: "QWER LIGHTSTICK"}, {key: "QWER", name: "CEREMONY", version: "Unbalance"}, {key: "QWER", name: "CEREMONY", version: "Graduation"}, {key: "tripleS", name: "ASSEMBLE25"}])
console.log(test, countGroups)