interface LinkedList<T> {
    val: T
    next?: LinkedList<T>
}

interface FnReturnValue {
    lista?: LinkedList<number>
    rimossi: number
}

function visitList<T>(head?: LinkedList<T>) {
    if (!head) return
    console.log(head.val)
    visitList<T>(head.next)
}

function filtraLista(head?: LinkedList<number>): FnReturnValue {
    if (head) {
        if (head.val % 2 != 0) {
            head = head.next
            let {lista, rimossi} = filtraLista(head)
            return {lista: lista, rimossi: rimossi+1}
        }
        else {
            let {lista, rimossi} = filtraLista(head.next)
            return {lista: {val: head.val, next: lista}, rimossi: rimossi}
        }
    }
    else {
        return {rimossi: 0}
    }
}

let testHead: LinkedList<number> = {
    val: 10,
    next: {
        val: 20,
        next: {
            val: 30
        }
    }
}
let res: FnReturnValue = filtraLista(testHead)
visitList(res.lista)
console.log("Rimossi: " + String(res.rimossi))