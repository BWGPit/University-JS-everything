interface ItemWithPrice {
    price: number
}

enum Order {
    ASCENDING = 1,
    DESCENDING = -1
}

function sortByPrice<T extends ItemWithPrice>(a: T[], o: Order): T[] {
    return a.sort((e, r) => (e.price-r.price)*o)
}

interface Lightstick extends ItemWithPrice {
    group: string
}

let qwerLS: Lightstick = {group: "QWER", price: 33.27}
let nmixxLS: Lightstick = {group: "NMIXX", price: 80}
console.log(sortByPrice<Lightstick>([qwerLS, nmixxLS], Order.ASCENDING))
console.log(sortByPrice<Lightstick>([qwerLS, nmixxLS], Order.DESCENDING))